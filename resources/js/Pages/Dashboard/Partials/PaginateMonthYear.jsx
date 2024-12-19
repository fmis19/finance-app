import PrimaryButton from "@/Components/PrimaryButton";
import { useState } from "react";

export default function PaginateMonthYear({sendDataToParent}) {
    let [currentMonth, setCurrentMonth] = useState(new Date().getMonth() + 1);
    let [currentYear, setCurrentYear] = useState(new Date().getFullYear());


    const goInPast = () => {
        if(currentMonth > 1){
            currentMonth -= 1;
            setCurrentMonth(currentMonth);
        }
        else{
            currentMonth = 12;
            setCurrentMonth(currentMonth);
            currentYear -= 1;
            setCurrentYear(currentYear);
        }

        sendDataToParent({currentMonth, currentYear});
    }

    const goInFuture = () => {
        if(currentMonth < 12){
            currentMonth += 1;
            setCurrentMonth(currentMonth);
        }
        else{
            currentMonth = 1;
            setCurrentMonth(currentMonth);
            currentYear += 1;
            setCurrentYear(currentYear);
        }
        sendDataToParent({currentMonth, currentYear});
    }
    return (
        <div className="flex items-center gap-4">
            <PrimaryButton onClick={goInPast}>Left</PrimaryButton>
            <div>{`${currentYear}-${currentMonth}`}</div>
            <PrimaryButton onClick={goInFuture}>Right</PrimaryButton>
        </div>
    );
}
