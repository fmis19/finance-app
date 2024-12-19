import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextArea from "@/Components/TextArea";
import TextInput from "@/Components/TextInput";
import { Link, useForm } from "@inertiajs/react";
import { useState } from "react";

export default function UpdateTransactionForm({ transaction, in_out_cats, className = "" }) {
    const priorities = ["low", "medium", "high"];
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
        in_out_cat_id: transaction.in_out_cat_id,
        amount: transaction.amount,
        description: transaction.description,
        priority: transaction.priority,
    });

    const validate = () => {
        if (
            data.in_out_cat_id === 0 ||
            data.amount === 0 ||
            data.priority === ""
        ) {
            setValidationError("Fill all required fileds.");
            return false;
        }
        return true;
    };

    return (
        <section className={className}>
            <header>
                <p className="mt-1 text-sm text-gray-600">
                    Fill all required fields.
                </p>
            </header>
            <form className="mt-6 space-y-6">
                <div>
                    <InputLabel htmlFor="income_type" value="Income Type*" />
                    <select
                        name="income_type"
                        id="income_type"
                        onChange={(e) => {
                            setData("in_out_cat_id", e.target.value);
                            setValidationError("");
                        }}
                        className="rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 mt-1 block w-full"
                    >
                        <option value={data.in_out_cat_id}>{data.name}</option>
                        {in_out_cats.map((in_out_cat) => (
                            <option
                                value={in_out_cat.in_out_cat_id}
                                key={in_out_cat.in_out_cat_id}
                            >
                                {in_out_cat.name}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="amount" value="Amount (in €)*" />

                    <TextInput
                        id="amount"
                        type="number"
                        name="amount"
                        min={0.0}
                        step={0.01}
                        placeholder={0.0}
                        className="mt-1 block w-full"
                        onChange={(e) => {
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
                            setData("description", e.target.value);
                            setValidationError("");
                        }}
                    />
                </div>

                <div>
                    <InputLabel htmlFor="priority" value="Priority*" />
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
                            <option value={priority} key={index}>
                                {priority}
                            </option>
                        ))}
                    </select>
                </div>

                <InputError className="mt-2" message={validationError} />

                <div className="mt-4 text-right gap-4">
                    <Link href={route("transaction.index")}>Cancel</Link>
                    <PrimaryButton className="ms-4" disabled={processing}>
                        Add Income
                    </PrimaryButton>
                </div>
            </form>
        </section>
    );
}
