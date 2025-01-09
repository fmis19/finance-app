import PrimaryButton from "@/Components/PrimaryButton";
import { Link } from "@inertiajs/react";
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

    // console.log(filteredCategories);

    const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

    return (
        <div className="pt-12">
            <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                    <div className="flex flex-col gap-10 items-center">
                        <div>Expenses made (in categories)</div>
                        <div className="flex flex-col items-center">
                            <div className="flex items-center gap-4">
                                <PrimaryButton onClick={goInPast} className="w-[90px] flex justify-center">
                                    Past
                                </PrimaryButton>
                                <PrimaryButton onClick={goInFuture} className="w-[90px] flex justify-center">
                                    Future
                                </PrimaryButton>
                            </div>
                            <div className="flex items-center">{`${String(currentMonth).padStart(2, "0")}-${currentYear}`}</div>
                            <Link href={route("transaction.create")}>
                                <PrimaryButton>
                                    Add Expense
                                </PrimaryButton>
                            </Link>
                        </div>
                        <div className="flex justify-center w-full min-h-[400px]">
                            {filteredCategories.length === 0 ? (
                                "No expenses defined."
                            ) : (
                                <ResponsiveContainer width="100%" minHeight={400}>
                                    <PieChart width="100%" height="100%">
                                        <Pie
                                            data={filteredCategories}
                                            dataKey="percentage"
                                            nameKey="name"
                                            cx="50%"
                                            cy="50%"
                                            outerRadius="70%"
                                            fill="#8884d8"
                                            // label
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
                                            layout="vertical"
                                            verticalAlign="top"
                                            formatter={(value) => {
                                                const category = filteredCategories.find(cat => cat.name === value);
                                                return `${value} (${category?.percentage}%)`;
                                            }}
                                        />
                                    </PieChart>
                                </ResponsiveContainer>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
