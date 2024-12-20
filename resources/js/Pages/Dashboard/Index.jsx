import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import TransactionsPart from "./Partials/TransactionsPart";
import BudgetsPart from "./Partials/BudgetsPart";
import CategoriesPart from "./CategoriesPart";

export default function Dashboard({ saldo, transactions_made, budget_spent, budget_defined, all_transactions, categories_spent }) { 

    let transformedTransactions = transactions_made.map((item) => ({
        date: item.date,
        amount: parseFloat(item.amount),
    }));

    // console.log(all_transactions);

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

            <CategoriesPart categories_spent={categories_spent} />

            <TransactionsPart transformedTransactions={transformedTransactions} />

            <BudgetsPart budget_defined={budget_defined} budget_spent={budget_spent} transactions={all_transactions} />

        </AuthenticatedLayout>
    );
}
