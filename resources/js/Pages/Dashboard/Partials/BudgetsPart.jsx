import PrimaryButton from "@/Components/PrimaryButton";
import { Link, router } from "@inertiajs/react";
import { Gauge, gaugeClasses } from "@mui/x-charts";
import PaginateMonthYear from "./PaginateMonthYear";

export default function BudgetsPart({ budget_spent }) {

    const handleChildData = (data) => {
        const month = data.currentMonth;
        const year = data.currentYear;
        console.log(data);

        // router.get('/get-budgets', {month, year}, {
        //     preserveState: true,
        //     replace: true,
        //     onSuccess: (response) => {
        //         budget_spent = response.props.budget_spent; // Ažuriraj stanje budžeta
        //     }
        // });

        console.log(budget_spent);
    }

    return (
        <div className="py-12">
            <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                    <div className="p-6 text-gray-900">
                        <div className="flex flex-col gap-10 items-center">
                            <PaginateMonthYear sendDataToParent={handleChildData} />
                            <div className="grid grid-cols-1 gap-4">
                                {budget_spent.map((item, index) => (
                                    <div
                                        key={index}
                                        className="flex flex-col items-center"
                                    >
                                        <div>
                                            <Link>
                                                <PrimaryButton>
                                                    {item.name}
                                                </PrimaryButton>
                                            </Link>
                                        </div>
                                        <Gauge
                                            width={150}
                                            height={150}
                                            value={parseFloat(item.spent)}
                                            valueMin={0}
                                            valueMax={
                                                item.amount == 0
                                                    ? Infinity
                                                    : parseFloat(item.amount)
                                            }
                                            sx={{
                                                [`& .${gaugeClasses.valueArc}`]: {
                                                    fill: "#1f2937",
                                                },
                                            }}
                                            text={({ value, valueMax }) =>
                                                `${value}€ / ${valueMax == Infinity ? `∞` : valueMax + `€`}`
                                            }
                                        />
                                    </div>
                                ))}

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
