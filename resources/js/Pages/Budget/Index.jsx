import PrimaryButton from "@/Components/PrimaryButton";
import TableView from "@/Components/TableView";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";

export default function Budgets({budgets, success}){

    let columnNames = null;
    if(budgets.length !== 0){
        columnNames = Object.keys(budgets[0]);
    }

    console.log(budgets);

    return (
        <AuthenticatedLayout
            header={
                <div className="flex justify-between items-center">
                    <h2 className="text-xl font-semibold leading-tight text-gray-800">
                        Budgets
                    </h2>
                    <Link href={route("budget.create")}>
                        <PrimaryButton className="ms-4">
                            Set Budget
                        </PrimaryButton>
                    </Link>
                </div>
            }
        >
            <Head title="Budgets" />

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
                    {columnNames ? 
                        <TableView tableType={"budget"} columnNames={columnNames} rows={budgets}/>
                        :
                        "No Budgets defined"
                    }
                </div>
            </div>

        </AuthenticatedLayout>
    );
}