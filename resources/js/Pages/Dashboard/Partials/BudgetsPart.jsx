import PrimaryButton from "@/Components/PrimaryButton";
import { Link, router } from "@inertiajs/react";
import { Gauge, gaugeClasses } from "@mui/x-charts";
import { useState } from "react";

export default function BudgetsPart({ budget_defined, budget_spent, transactions }) {
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

    // console.log(budget_defined, budget_spent);

    let combinedBudgets = budget_defined.map((item) => {
        const tempBudgetSpent = budget_spent.find(
            (b) => b.period === item.period && b.name === item.name,
        );
        item["spent"] = tempBudgetSpent ? tempBudgetSpent["amount"] : 0;
        return item;
    });

    let filteredBudgets = combinedBudgets.filter(
        (b) =>
            b.period ===
            `${currentYear}-${String(currentMonth).padStart(2, "0")}`,
    );

    // console.log(transactions);

    const showTransactionsByCategory = (category) => {
        // console.log(category);
        const filteredTransactions = transactions.filter(t => t.name === category && t.date.slice(0, 7) === `${currentYear}-${String(currentMonth).padStart(2, "0")}`);
        return filteredTransactions;
    }

    return (
        <div className="py-12">
            <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                    <div className="flex flex-col gap-10 items-center min-h-[80vh]">
                        <div>Budgets</div>
                        <div className="flex items-center gap-4">
                            <PrimaryButton onClick={goInPast}>
                                Past
                            </PrimaryButton>
                            <div>{`${currentYear}-${String(currentMonth).padStart(2, "0")}`}</div>
                            <PrimaryButton onClick={goInFuture}>
                                Future
                            </PrimaryButton>
                        </div>
                        {filteredBudgets.length == 0 ? (
                            "No Budgets defined."
                        ) : (
                            <div
                                className={`grid md:gap-20 gap-4 ${filteredBudgets.length == 1 ? "md:grid-cols-1" : "md:grid-cols-2"}`}
                            >
                                {filteredBudgets.map((item, index) => (
                                    <div
                                        key={index}
                                        className="flex flex-col items-center"
                                    >
                                        <div>
                                            <PrimaryButton onClick={() => showTransactionsByCategory(item.name)}>
                                                {item.name}
                                            </PrimaryButton>
                                        </div>
                                        <Gauge
                                            width={150}
                                            height={150}
                                            value={item.spent}
                                            valueMin={0}
                                            valueMax={item.amount}
                                            sx={{
                                                [`& .${gaugeClasses.valueArc}`]:
                                                    {
                                                        fill: "#1f2937",
                                                        opacity: item.spent / item.amount
                                                    },
                                            }}
                                            text={({ value, valueMax }) =>
                                                `${value}€ / ${valueMax + `€`}`
                                            }
                                        />
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
