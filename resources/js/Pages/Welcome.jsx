import { Head, Link } from "@inertiajs/react";

export default function Welcome({auth}){
    return(
        <>
            <Head title="Welcome" />
            <div>
                Welcome Page
            </div>
            {auth.user ? 
                <Link href={route('dashboard')}>Dashboard</Link> 
                :
                <>
                    <Link href={route('login')}>Login</Link>
                    <br />
                    <Link href={route('register')}>Register</Link>
                </>
            }
        </>
    );
};