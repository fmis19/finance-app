import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import TransactionsPart from "./Partials/TransactionsPart";
import BudgetsPart from "./Partials/BudgetsPart";

export default function Dashboard({ saldo, budget_spent, transactions_made }) { 

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
                            {`Saldo: ${saldo}€`}
                        </div>
                    </div>
                </div>
            </div>

            <TransactionsPart transactions_made={transactions_made} />
            

            <BudgetsPart budget_spent={budget_spent} />

        </AuthenticatedLayout>
    );
}
