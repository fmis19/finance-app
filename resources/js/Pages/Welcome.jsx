import Login from "./Auth/Login";
import Register from "./Auth/Register";
import "../../css/rotation.css";
import FlipCard from "@/Components/FlipCard";

export default function Welcome() {
    return (
        <div className="bg-gray-100 h-dvh">
            <div className="flex justify-center py-10">
                Welcome to $-app!
            </div>
            <div className="flex flex-col place-items-center">
                <FlipCard frontButtonText={"You don't have account? Register."} backButtonText={"Already registered? Login."} className={"w-[320px] h-[400px]"}>
                    <div>
                        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
                        <Login side={"front-side"}/>
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold mb-4 text-center">Register</h2>
                        <Register side={"back-side"} />
                    </div>
                </FlipCard>
            </div>
        </div>
    );
}
