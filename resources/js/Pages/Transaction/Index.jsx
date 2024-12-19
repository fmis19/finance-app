import PrimaryButton from "@/Components/PrimaryButton";
import TableView from "@/Components/TableView";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";

export default function Transactions({ transactions, success }) {
    // console.log(transactions);

    let columnNames = null;
    if (transactions.length !== 0) {
        columnNames = Object.keys(transactions[0]);
    }
    return (
        <AuthenticatedLayout
            header={
                <div className="flex justify-between items-center">
                    <h2 className="text-xl font-semibold leading-tight text-gray-800">
                        Transactions
                    </h2>
                    <Link href={route("transaction.create")}>
                        <PrimaryButton className="ms-4">
                            Add Transaction
                        </PrimaryButton>
                    </Link>
                </div>
            }
        >
            <Head title="Transactions" />

            {success && (
                <div className="py-12">
                    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                        <div className="bg-emerald-500 py-2 px-4 text-white rounded mb-4">
                            {success}
                        </div>
                    </div>
                </div>
            )}

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    {columnNames ? (
                        <TableView
                            tableType={"transaction"}
                            columnNames={columnNames}
                            rows={transactions}
                        />
                    ) : (
                        "No Transactions"
                    )}
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
