import { useState } from "react";
import { useEffect } from "react";
import { format } from "date-fns";

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
        <div>
            <div>
                <h3>
                    {format(date, "dd/MM/yyyy hh:mm:ss")}
                </h3>

            </div>
        </div>
    );
};

export default Clock;