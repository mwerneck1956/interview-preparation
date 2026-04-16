import { useCallback, useState } from "react";

export function useCounter() {
    const [counter, setCounter] = useState(0);

    const increment = useCallback(() => {
        console.log("Recriando func increment")
        setCounter(prevState => prevState + 1)
    }, [])

    // const increment = () => {
    //     setCounter(prevState => prevState + 1)
    // }

    const decrement = useCallback(() => {
        setCounter(prevState => prevState - 1)
    }, [])


    return { counter, increment, decrement }
}