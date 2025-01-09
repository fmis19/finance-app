import PrimaryButton from "@/Components/PrimaryButton";
import { Head, Link } from "@inertiajs/react";

export default function Welcome({auth}){
    return(
        <>
            <Head title="Welcome" />
            <div className="flex justify-center py-10">
                Welcome to $$$-app!
            </div>
            {auth.user ? 
                <div className="flex flex-col place-items-center">
                    <Link href={route('dashboard')}>
                        <PrimaryButton>
                            Dashboard
                        </PrimaryButton>
                    </Link> 
                </div>
                :
                <div className="flex flex-col place-items-center gap-3">
                    <Link href={route('login')}>
                        <PrimaryButton className="w-[100px] flex justify-center">
                            Login
                        </PrimaryButton>
                    </Link>
                    <Link href={route('register')}>
                        <PrimaryButton className="w-[100px] flex justify-center">
                            Register
                        </PrimaryButton>
                    </Link>
                </div>
            }
        </>
    );
};