import {useEffect, useState} from "react";
import axios from "axios";

export const usePokemonCount = () => {
    const [count, setCount] = useState(0)

    useEffect(() => {
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=1").then(res => {
            setCount(res.data.count)
        })
    }, [])

    return count;
}