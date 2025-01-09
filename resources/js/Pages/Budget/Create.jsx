import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from "@inertiajs/react";
import { useState } from "react";

export default function Create({ expenses }) {
    const [validationError, setValidationError] = useState("");
    const {
        data,
        setData,
        post,
        processing,
        errors,
        reset,
        recentlySuccessful,
    } = useForm({
        in_out_cat_id: "",
        amount: "",
        month: "",
        year: "",
    });

    const validate = () => {
        if (data.in_out_cat_id === "" || data.amount === "" || data.month === "" || data.year === "") {
            setValidationError("Fill all required fileds.");
            return false;
        }
        return true;
    }
    
    const setBudget = (e) => {
        e.preventDefault();
        
        if(!validate()){
            return;
        }
        post(route('budget.store'));
    };

    return (
        <AuthenticatedLayout
            header={
                <div className="flex justify-between items-center">
                    <h2 className="text-xl font-semibold leading-tight text-gray-800">
                        Set Budget
                    </h2>
                </div>
            }
        >
            <Head title="Set Budget" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl space-y-6 sm:px-6 lg:px-8">
                    <div className="bg-white p-4 shadow sm:rounded-lg sm:p-8">
                        <section className="max-w-xl">
                            <header>
                                <p className="mt-1 text-sm text-gray-600">
                                    Fill all required fields.
                                </p>
                            </header>
                            <form
                                className="mt-6 space-y-6"
                                onSubmit={setBudget}
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
                                        className="mt-1 block w-full"
                                        onChange={(e) => {
                                            setData("amount", e.target.value);
                                            setValidationError("");
                                        }}
                                    />
                                </div>

                                <div className="mt-4">
                                    <InputLabel
                                        htmlFor="year"
                                        value="Year*"
                                    />

                                    <TextInput
                                        id="year"
                                        type="number"
                                        name="year"
                                        min={new Date().getFullYear()}
                                        step={1}
                                        className="mt-1 block w-full"
                                        onChange={(e) => {
                                            setData("year", e.target.value);
                                            setValidationError("");
                                        }}
                                    />
                                </div>

                                <div className="mt-4">
                                    <InputLabel
                                        htmlFor="month"
                                        value="Month*"
                                    />

                                    <TextInput
                                        id="month"
                                        type="number"
                                        name="month"
                                        min={new Date().getFullYear() == data.year ? new Date().getMonth() + 1 : 1}
                                        max={12}
                                        step={1}
                                        className="mt-1 block w-full"
                                        onChange={(e) => {
                                            setData("month", e.target.value);
                                            setValidationError("");
                                        }}
                                    />
                                </div>

                                <InputError
                                    className="mt-2"
                                    message={validationError}
                                />

                                <div className="mt-4 text-right gap-4">
                                    <Link href={route("budget.index")}>
                                        Cancel
                                    </Link>
                                    <PrimaryButton
                                        className="ms-4"
                                        disabled={processing}
                                    >
                                        Set Budget
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
