import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextArea from "@/Components/TextArea";
import TextInput from "@/Components/TextInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from "@inertiajs/react";
import { useState } from "react";

export default function Create({ incomes, expenses }) {
    const priorities = ["low", "medium", "high"];
    const [validationError, setValidationError] = useState("");
    // post for sending request
    // processing -> is form in processing mode or not
    // errors
    // reset function to reset the form
    const {
        data,
        setData,
        post,
        processing,
        errors,
        reset,
        recentlySuccessful,
    } = useForm({
        in_out_cat_id: 0,
        amount: 0,
        description: "",
        priority: "",
    });

    const validate = () => {
        if (data.in_out_cat_id === 0 || data.amount === 0 || priority === "") {
            setValidationError("Fill all required fileds.");
            return false;
        }
        return true;
    };

    const addIncome = (e) => {
        e.preventDefault();
        
        if (!validate()) {
            return;
        }
        
        console.log(data);
        post(route('transaction.store'));
    };

    const addExpense = (e) => {
        e.preventDefault();
        
        if (!validate()) {
            return;
        }
        
        console.log(data);
        post(route('transaction.store'));
    };

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
                        <section className="max-w-xl">
                            <header>
                                <h2 className="text-lg font-medium text-gray-900">
                                    Add Income
                                </h2>

                                <p className="mt-1 text-sm text-gray-600">
                                    Fill all required fields.
                                </p>
                            </header>
                            <form
                                className="mt-6 space-y-6"
                                onSubmit={addIncome}
                            >
                                <div>
                                    <InputLabel
                                        htmlFor="income_type"
                                        value="Income Type*"
                                    />
                                    <select
                                        name="income_type"
                                        id="income_type"
                                        onChange={(e) => {
                                            setData(
                                                "in_out_cat_id",
                                                e.target.value,
                                            );
                                            setValidationError("");
                                        }}
                                        className="rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 mt-1 block w-full"
                                    >
                                        <option value={0}>-</option>
                                        {incomes.map((income) => (
                                            <option
                                                value={income.in_out_cat_id}
                                                key={income.in_out_cat_id}
                                            >
                                                {income.name}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                <div className="mt-4">
                                    <InputLabel
                                        htmlFor="amount"
                                        value="Amount (in €)*"
                                    />

                                    <TextInput
                                        id="amount"
                                        type="number"
                                        name="amount"
                                        min={0.0}
                                        step={0.01}
                                        placeholder={0.0}
                                        className="mt-1 block w-full"
                                        onChange={(e) =>{
                                            setData("amount", e.target.value);
                                            setValidationError("");
                                        }}
                                    />
                                </div>

                                <div className="mt-4">
                                    <InputLabel
                                        htmlFor="description"
                                        value="Description (optional)"
                                    />

                                    <TextArea
                                        id="description"
                                        className="rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 mt-1 block w-full"
                                        value={data.description}
                                        onChange={(e) => {
                                            setData(
                                                "description",
                                                e.target.value,
                                            );
                                            setValidationError("");
                                        }}
                                    />
                                </div>

                                <div>
                                    <InputLabel
                                        htmlFor="priority"
                                        value="Priority*"
                                    />
                                    <select
                                        name="priority"
                                        id="priority"
                                        onChange={(e) => {
                                            setData("priority", e.target.value);
                                            setValidationError("");
                                        }}
                                        className="rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 mt-1 block w-full"
                                    >
                                        <option value="-">-</option>
                                        {priorities.map((priority, index) => (
                                            <option
                                                value={priority}
                                                key={index}
                                            >
                                                {priority}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                <InputError
                                    className="mt-2"
                                    message={validationError}
                                />

                                <div className="mt-4 text-right gap-4">
                                    <Link href={route('transaction.index')}>Cancel</Link>
                                    <PrimaryButton
                                        className="ms-4"
                                        disabled={processing}
                                    >
                                        Add Income
                                    </PrimaryButton>
                                </div>
                            </form>
                        </section>
                    </div>
                </div>
            </div>

            <div className="py-12">
                <div className="mx-auto max-w-7xl space-y-6 sm:px-6 lg:px-8">
                    <div className="bg-white p-4 shadow sm:rounded-lg sm:p-8">
                    <section className="max-w-xl">
                            <header>
                                <h2 className="text-lg font-medium text-gray-900">
                                    Add Expense
                                </h2>

                                <p className="mt-1 text-sm text-gray-600">
                                    Fill all required fields.
                                </p>
                            </header>
                            <form
                                className="mt-6 space-y-6"
                                onSubmit={addExpense}
                            >
                                <div>
                                    <InputLabel
                                        htmlFor="expense_type"
                                        value="Expense Type*"
                                    />
                                    <select
                                        name="expense_type"
                                        id="expense_type"
                                        onChange={(e) => {
                                            setData(
                                                "in_out_cat_id",
                                                e.target.value,
                                            );
                                            setValidationError("");
                                        }}
                                        className="rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 mt-1 block w-full"
                                    >
                                        <option value={0}>-</option>
                                        {expenses.map((expense) => (
                                            <option
                                                value={expense.in_out_cat_id}
                                                key={expense.in_out_cat_id}
                                            >
                                                {expense.name}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                <div className="mt-4">
                                    <InputLabel
                                        htmlFor="amount"
                                        value="Amount (in €)*"
                                    />

                                    <TextInput
                                        id="amount"
                                        type="number"
                                        name="amount"
                                        min={0.0}
                                        step={0.01}
                                        placeholder={0.0}
                                        className="mt-1 block w-full"
                                        onChange={(e) =>{
                                            setData("amount", e.target.value);
                                            setValidationError("");
                                        }}
                                    />
                                </div>

                                <div className="mt-4">
                                    <InputLabel
                                        htmlFor="description"
                                        value="Description (optional)"
                                    />

                                    <TextArea
                                        id="description"
                                        className="rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 mt-1 block w-full"
                                        value={data.description}
                                        onChange={(e) => {
                                            setData(
                                                "description",
                                                e.target.value,
                                            );
                                            setValidationError("");
                                        }}
                                    />
                                </div>

                                <div>
                                    <InputLabel
                                        htmlFor="priority"
                                        value="Priority*"
                                    />
                                    <select
                                        name="priority"
                                        id="priority"
                                        onChange={(e) => {
                                            setData("priority", e.target.value);
                                            setValidationError("");
                                        }}
                                        className="rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 mt-1 block w-full"
                                    >
                                        <option value="-">-</option>
                                        {priorities.map((priority, index) => (
                                            <option
                                                value={priority}
                                                key={index}
                                            >
                                                {priority}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                <InputError
                                    className="mt-2"
                                    message={validationError}
                                />

                                <div className="mt-4 text-right gap-4">
                                    <Link href={route('transaction.index')}>Cancel</Link>
                                    <PrimaryButton
                                        className="ms-4"
                                        disabled={processing}
                                    >
                                        Add Expense
                                    </PrimaryButton>
                                </div>
                            </form>
                        </section>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
