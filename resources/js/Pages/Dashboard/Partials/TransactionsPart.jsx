import PrimaryButton from "@/Components/PrimaryButton";
import { Link } from "@inertiajs/react";
import { useState } from "react";
import {
    XAxis,
    YAxis,
    ResponsiveContainer,
    LineChart,
    CartesianGrid,
    Line,
    Tooltip,
    Legend,
} from "recharts";

export default function TransactionsPart({ transformedExpenses, transformedIncomes }) {
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

    let filteredExpenses = currentWeek
        ? transformedExpenses.filter(
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

    let filteredIncomes = currentWeek
        ? transformedIncomes.filter(
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

    const getFormattedTransactions = (expenses, incomes, week) => {
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
            const existingExpense = expenses.find((t) => t.date === date);
            const existingIncome = incomes.find((t) => t.date === date);

            if(existingExpense){
                existingExpense["expense"] = existingExpense["amount"];
            }
            if(existingIncome){
                existingIncome["income"] = existingIncome["amount"];
            }

            var object = {
                date,
                "expense": existingExpense ? existingExpense["expense"] : 0,
                "income": existingIncome ? existingIncome["income"] : 0
            };

            return object;
        });

        return formattedTransactions;
    };

    let formattedTransactions = getFormattedTransactions(
        filteredExpenses,
        filteredIncomes,
        currentWeek,
    );

    console.log(filteredExpenses);

    const goInPast = () => {
        setWeekOffset((prev) => prev - 1);
        setCurrentWeek(generateWeek(weekOffset - 1));
    };

    const goInFuture = () => {
        setWeekOffset((prev) => prev + 1);
        setCurrentWeek(generateWeek(weekOffset + 1));
    };

    return (
        <div className="pt-12">
            <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                    <div className="flex flex-col gap-10 items-center">
                        <div>Transactions made (weekly)</div>
                        <div className="flex flex-col items-center">
                            <div className="flex items-center gap-4">
                                <PrimaryButton onClick={goInPast} className="w-[90px] flex justify-center">
                                    Past
                                </PrimaryButton>
                                <PrimaryButton onClick={goInFuture} className="w-[90px] flex justify-center">
                                    Future
                                </PrimaryButton>
                            </div>
                            <div>{`${currentWeek.monday.toDateString()} - ${currentWeek.sunday.toDateString()}`}</div>
                            <Link href={route("transaction.create")}>
                                <PrimaryButton>
                                    Add Transaction
                                </PrimaryButton>
                            </Link>
                        </div>
                        <div className="flex justify-center w-full">
                            <ResponsiveContainer width="100%" height={400}>
                                {/* <BarChart
                                    data={formattedTransactions}
                                    margin={{
                                        right: 10,
                                        top: 10,
                                        left: 0,
                                    }}
                                >
                                    <XAxis
                                        dataKey="date"
                                        tickFormatter={(date) =>
                                            `${String(new Date(date).getDate()).padStart(2, "0")}.${String(new Date(date).getMonth() + 1).padStart(2, "0")}.`
                                        }
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
                                    <Bar
                                        dataKey="amount"
                                        fill="#1f2937"
                                        label={{ position: "top" }}
                                        className="text-xs md:text-base"
                                    />
                                </BarChart> */}
                                <LineChart
                                    data={formattedTransactions}
                                    margin={{
                                        right: 30,
                                        top: 10,
                                        left: 0,
                                        bottom: 10
                                    }}
                                >
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis
                                        dataKey="date"
                                        tickFormatter={(date) =>
                                            `${String(new Date(date).getDate()).padStart(2, "0")}.${String(new Date(date).getMonth() + 1).padStart(2, "0")}.`
                                        }
                                        interval={0}
                                        className="text-xs md:text-base"
                                    />
                                    <YAxis
                                        // dataKey="expense"
                                        // label={{
                                        //     value: "Expenses/Incomes (€)",
                                        //     angle: -90,
                                        //     offset: 15,
                                        //     position: "insideLeft",
                                        //     style: {
                                        //         textAnchor: "middle",
                                        //         fill: "#666",
                                        //     },
                                        // }}
                                        className="text-xs md:text-base"
                                    />
                                    <Line 
                                        dataKey="expense"
                                        stroke="#dc2626"
                                        // label={{ position: "top" }}
                                        className="text-xs md:text-base"
                                    />
                                    <Line 
                                        dataKey="income"
                                        stroke="#22c55e"
                                        // label={{ position: "top" }}
                                        className="text-xs md:text-base"
                                    />
                                    <Tooltip />
                                    <Legend />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
