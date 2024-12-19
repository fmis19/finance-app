import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextArea from "@/Components/TextArea";
import TextInput from "@/Components/TextInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from "@inertiajs/react";
import { useState } from "react";
import CreateExpenseForm from "./Partials/CreateExpenseForm";
import CreateIncomeForm from "./Partials/CreateIncomeForm";

export default function Create({ incomes, expenses }) {
    

    return (
        <AuthenticatedLayout
            header={
                <div className="flex justify-between items-center">
                    <h2 className="text-xl font-semibold leading-tight text-gray-800">
                        Add Transaction
                    </h2>
                </div>
            }
        >
            <Head title="Add Transaction" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl space-y-6 sm:px-6 lg:px-8">
                    <div className="bg-white p-4 shadow sm:rounded-lg sm:p-8">
                        <CreateIncomeForm incomes={incomes} />
                    </div>
                </div>
            </div>

            <div className="py-12">
                <div className="mx-auto max-w-7xl space-y-6 sm:px-6 lg:px-8">
                    <div className="bg-white p-4 shadow sm:rounded-lg sm:p-8">
                        <CreateExpenseForm expenses={expenses} />
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
