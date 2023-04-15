import { useState } from "react";
import { useEffect } from "react";
import { format } from "date-fns";
import iconClock from '../../Assets/icon-clock.svg';


const Clock = () => {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setDate(new Date());
        }, 1000);

        return () => {
            clearInterval(timer);
        };
    }, []);

    return (
        <div className="clock">
            <img src={iconClock} alt="this" className="icon-clocker" />
            <p>
                {format(date, "dd/MM/yyyy kk:mm:ss")}
            </p>

        </div>
    );
};

export default Clock;