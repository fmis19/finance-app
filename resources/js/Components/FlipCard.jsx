import React from "react";
import "../../css/rotation.css";

export default function FlipCard({ children, frontButtonText, backButtonText, flip = true, className }) {
    const [frontSide, backSide] = React.Children.toArray(children);
    
    const flipCard = () => {
        if(flip){
            const card = document.getElementById("card");
            card.classList.toggle("rotate-y-180");
        }
    };

    return (
        <div className={`flex items-center relative perspective ${className}`}>
            <div
                id="card"
                className="relative w-full h-full transform-style-preserve-3d transition-transform duration-700"
            >
                <div className="absolute w-full h-full backface-hidden bg-white rounded-lg shadow-md p-6">
                    {frontSide}
                    <button
                        className="absolute bottom-0 inset-x-0 m-4 text-sm text-gray-600 underline"
                        onClick={flipCard}
                    >
                        {frontButtonText}
                    </button>
                </div>
                <div className="absolute w-full h-full backface-hidden bg-white rounded-lg shadow-md p-6 transform rotate-y-180">
                    {backSide}
                    <button
                        className="absolute bottom-0 inset-x-0 m-4 text-sm text-gray-600 underline"
                        onClick={flipCard}
                    >
                        {backButtonText}
                    </button>
                </div>
            </div>
        </div>
    );
}
