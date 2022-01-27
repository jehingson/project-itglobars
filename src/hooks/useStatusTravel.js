import { useContext, useState, useEffect } from 'react';
import travelContext from "../context/TreavelContext";
import getTravel from '../services/getTravel';

export default function useStatusTravel({ id }) {
    const { travel } = useContext(travelContext)
    const travelId = travel.find(item => item.id == id)
    const [travelOne, setTraveOne] = useState(travelId)
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        if (!travelOne) {
            setIsLoading(true)
            setTimeout(() => {
                setIsLoading(false)
            }, 1500)
            const res = getTravel()
            const travelId = res.find(item => item.id == id)
            setTraveOne(travelId)
        }
    }, [travelOne, id])

    return { travelOne, isLoading };
}
