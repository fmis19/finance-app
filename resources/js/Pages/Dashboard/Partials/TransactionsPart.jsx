import PrimaryButton from "@/Components/PrimaryButton";
import { useEffect, useState } from "react";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from "recharts";
import { Paper } from "@mui/material";

export default function TransactionsPart({ transformedTransactions }) {
    let [weekOffset, setWeekOffset] = useState(0);

    const generateWeek = (offset = 0) => {
        const today = new Date();

        const day = today.getDay();
        const difference = today.getDate() - day + (day === 0 ? -6 : 1);
        const monday = new Date(today);
        monday.setDate(difference + offset * 7);

        const sunday = new Date(monday);
        sunday.setDate(monday.getDate() + 6);

        return {
            monday,
            sunday,
        };
    };

    let [currentWeek, setCurrentWeek] = useState(generateWeek());

    let filteredTransactions = currentWeek
        ? transformedTransactions.filter(
              (transaction) =>
                  transaction.date.slice(0, 10) >=
                      currentWeek.monday
                          .toLocaleString("sv-SE", { timeZoneName: "short" })
                          .slice(0, 10) &&
                  transaction.date.slice(0, 10) <=
                      currentWeek.sunday
                          .toLocaleString("sv-SE", { timeZoneName: "short" })
                          .slice(0, 10),
          )
        : [];

    const getFormattedTransactions = (transactions, week) => {
        const start = week.monday
            .toLocaleString("sv-SE", { timeZoneName: "short" })
            .slice(0, 10);
        const end = week.sunday
            .toLocaleString("sv-SE", { timeZoneName: "short" })
            .slice(0, 10);

        const dates = [];
        let currentDate = new Date(start);

        while (currentDate <= new Date(end)) {
            dates.push(
                new Date(currentDate)
                    .toLocaleString("sv-SE", { timeZoneName: "short" })
                    .slice(0, 10),
            );
            currentDate.setDate(currentDate.getDate() + 1);
        }

        const formattedTransactions = dates.map((date) => {
            const existing = transactions.find((t) => t.date === date);
            return existing || { date, amount: 0 };
        });

        return formattedTransactions;
    };

    let formattedTransactions = getFormattedTransactions(
        filteredTransactions,
        currentWeek,
    );

    const goInPast = () => {
        setWeekOffset((prev) => prev - 1);
        setCurrentWeek(generateWeek(weekOffset - 1));
    };

    const goInFuture = () => {
        setWeekOffset((prev) => prev + 1);
        setCurrentWeek(generateWeek(weekOffset + 1));
    };

    return (
        <div className="py-12">
            <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                    <div className="flex flex-col gap-10 items-center">
                        <div>Transactions</div>
                        <div className="flex items-center gap-4">
                            <PrimaryButton onClick={goInPast}>
                                Past
                            </PrimaryButton>
                            <div>{`${currentWeek.monday.toDateString()} - ${currentWeek.sunday.toDateString()}`}</div>
                            <PrimaryButton onClick={goInFuture}>
                                Future
                            </PrimaryButton>
                        </div>
                        <div className="flex justify-center w-full">
                            <ResponsiveContainer width="100%" height={400}>
                                <BarChart
                                    data={formattedTransactions}
                                    margin={{
                                        right: 10,
                                        top: 10,
                                        left: 0,
                                    }}
                                >
                                    {/* <CartesianGrid strokeDasharray="3 3" /> */}
                                    <XAxis
                                        dataKey="date"
                                        tickFormatter={(date) =>
                                            `${String(new Date(date).getDate()).padStart(2, "0")}.${String(new Date(date).getMonth() + 1).padStart(2, "0")}.`
                                        }
                                        // margin={{ top: 20, right: 0, bottom: 40, left: 0 }}
                                        interval={0}
                                        className="text-xs md:text-base"
                                    />
                                    <YAxis
                                        dataKey="amount"
                                        label={{
                                            value: "Amount spent (€)",
                                            angle: -90,
                                            offset: 15,
                                            position: "insideLeft",
                                            style: {
                                                textAnchor: "middle",
                                                fill: "#666",
                                            },
                                        }}
                                        className="text-xs md:text-base"
                                    />
                                    {/* <Tooltip /> */}
                                    {/* <Legend label={{position: 'top'}} /> */}
                                    <Bar
                                        dataKey="amount"
                                        fill="#1f2937"
                                        label={{ position: "top" }}
                                        className="text-xs md:text-base"
                                    />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
