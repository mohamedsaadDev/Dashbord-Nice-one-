"use client";
import React, { useState, useEffect } from "react";
interface NumberCounterProps {
    endValue: number;
}
const NumberCounter: React.FC<NumberCounterProps> = ({ endValue }) => {
    const [count, setCount] = useState(0);
    useEffect(() => {
    const intervalId = setInterval(() => {
        setCount((prevCount) =>
            prevCount < endValue ? prevCount + 1 : endValue
        );
    }, 1000 / endValue);
    return () => clearInterval(intervalId);
}, [endValue]);
    return <h4 className="text-3xl font-semibold text-neutral-600">{count.toLocaleString()}</h4>;
};
export default NumberCounter;
