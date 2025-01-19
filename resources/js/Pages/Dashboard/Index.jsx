import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import TransactionsPart from "./Partials/TransactionsPart";
import BudgetsPart from "./Partials/BudgetsPart";
import CategoriesPart from "./Partials/CategoriesPart";

export default function Dashboard({ saldo, expenses_made, incomes_made, budget_spent, budget_defined, all_transactions, categories_spent }) { 

    let transformedExpenses = expenses_made.map((item) => ({
        date: item.date,
        amount: parseFloat(item.amount),
    }));

    let transformedIncomes = incomes_made.map((item) => ({
        date: item.date,
        amount: parseFloat(item.amount),
    }));

    budget_spent.map((b) => {
        b.amount = parseFloat(b.amount);
    })

    all_transactions.map((t) => {
        t.amount = parseFloat(t.amount);
    })

    budget_defined.map((b) => {
        b.amount = parseFloat(b.amount);
        b.spent = parseFloat(b.spent);
    })

    categories_spent.map((c) => {
        c.amount = parseFloat(c.amount);
    })

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="grid md:grid-cols-2">
                <TransactionsPart transformedExpenses={transformedExpenses} transformedIncomes={transformedIncomes} />

                <CategoriesPart categories_spent={categories_spent} />

                <BudgetsPart budget_defined={budget_defined} budget_spent={budget_spent} transactions={all_transactions} />
            </div>



        </AuthenticatedLayout>
    );
}
