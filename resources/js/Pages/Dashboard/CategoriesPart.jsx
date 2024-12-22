import PrimaryButton from "@/Components/PrimaryButton";
import { useState } from "react";
import {
    PieChart,
    Pie,
    Cell,
    ResponsiveContainer,
    Tooltip,
    Legend,
    BarChart,
    XAxis,
    YAxis,
    Bar,
} from "recharts";

export default function CategoriesPart({ categories_spent }) {
    let [currentMonth, setCurrentMonth] = useState(new Date().getMonth() + 1);
    let [currentYear, setCurrentYear] = useState(new Date().getFullYear());

    const goInPast = () => {
        if (currentMonth > 1) {
            currentMonth -= 1;
            setCurrentMonth(currentMonth);
        } else {
            currentMonth = 12;
            setCurrentMonth(currentMonth);
            currentYear -= 1;
            setCurrentYear(currentYear);
        }
    };

    const goInFuture = () => {
        if (currentMonth < 12) {
            currentMonth += 1;
            setCurrentMonth(currentMonth);
        } else {
            currentMonth = 1;
            setCurrentMonth(currentMonth);
            currentYear += 1;
            setCurrentYear(currentYear);
        }
    };

    let filteredCategories = categories_spent.filter(
        (c) =>
            c.date ===
            `${currentYear}-${String(currentMonth).padStart(2, "0")}`,
    );

    filteredCategories = filteredCategories.map((c) => {
        c.percentage =
        (c.amount /
            filteredCategories.reduce(
                (total, obj) => total + obj.amount,
                0,
            )) *
        100;

        c.percentage = parseFloat(c.percentage.toFixed(2));
        return c;
    }).sort((c1, c2) => c2.percentage - c1.percentage);

    console.log(filteredCategories);

    const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

    return (
        <div className="py-12">
            <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                    <div className="flex flex-col gap-10 items-center">
                        <div>Categories</div>
                        <div className="flex items-center gap-4">
                            <PrimaryButton onClick={goInPast}>
                                Past
                            </PrimaryButton>
                            <div>{`${currentYear}-${String(currentMonth).padStart(2, "0")}`}</div>
                            <PrimaryButton onClick={goInFuture}>
                                Future
                            </PrimaryButton>
                        </div>
                        <div className="flex justify-center w-full min-h-[400px]">
                            {filteredCategories.length === 0 ? (
                                "No Categories."
                            ) : (
                                <ResponsiveContainer width="100%" height={400}>
                                    <BarChart
                                        data={filteredCategories}
                                        margin={{
                                            right: 10,
                                            top: 10,
                                            left: 0,
                                        }}
                                    >
                                        {/* <CartesianGrid strokeDasharray="3 3" /> */}
                                        <XAxis
                                            dataKey="name"
                                            interval={0}
                                            className="text-xs md:text-base"
                                            label={{
                                                angle: -90
                                            }}
                                        />
                                        <YAxis
                                            dataKey="percentage"
                                            domain={[0, 100]}
                                            label={{
                                                value: "Percentage",
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
                                            dataKey="percentage"
                                            fill="#1f2937"
                                            label={{ 
                                                position: "top"
                                            }}
                                            className="text-xs md:text-base"
                                        />
                                    </BarChart>
                                    {/* <PieChart>
                                        <Pie
                                            data={filteredCategories}
                                            dataKey="percentage"
                                            nameKey="name"
                                            cx="50%"
                                            cy="50%"
                                            outerRadius="70%"
                                            fill="#8884d8"
                                            label
                                        >
                                            {filteredCategories.map((entry, index) => (
                                                <Cell
                                                    key={`cell-${index}`}
                                                    fill={
                                                        COLORS[
                                                            index %
                                                                COLORS.length
                                                        ]
                                                    }
                                                />
                                            ))}
                                        </Pie>
                                        <Tooltip />
                                        <Legend
                                            verticalAlign="bottom"
                                            height={36}
                                        />
                                    </PieChart> */}
                                </ResponsiveContainer>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
