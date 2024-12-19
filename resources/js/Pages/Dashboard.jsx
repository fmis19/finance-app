import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { Gauge, gaugeClasses } from "@mui/x-charts";

export default function Dashboard({ saldo, budget_spent, transactions_made }) {
    const currentMonth = new Date().getMonth() + 1;
    const currentYear = new Date().getFullYear();

    console.log(transactions_made);

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            {/* {`Saldo: ${saldo}€`} */}
                        </div>
                    </div>
                </div>
            </div>

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            {/* {budget_spent.map((item, index) => (
                                <div key={index}>
                                    <div>
                                        {item.name}
                                    </div>
                                    <Gauge
                                        width={100}
                                        height={100}
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
                                            `${value}€ / ${valueMax == Infinity ? `∞` : valueMax+`€`}`
                                        }
                                    />
                                </div>
                            ))} */}
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
