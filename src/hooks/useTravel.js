import { useState, useEffect, useContext } from "react";
import travelContext from "../context/TreavelContext";
import getTravel from "../services/getTravel"

export default function useTravel() {
    const { travel, setTravel } = useContext(travelContext)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        // el setTimeout simula un tiempo minimo de carga
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 1500)
        const res = getTravel()
        if (Array.isArray(res)) {
            setTravel(res)
        }
    }, [])

    return { travel, loading }
}