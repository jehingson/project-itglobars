import React from 'react';
import FormData from '../../Components/FromData/FormData';
import Spinner from '../../Components/Spinner';
import useStatusTravel from '../../hooks/useStatusTravel';
export default function Form({ params }) {
    let { travelOne, isLoading } = useStatusTravel({ id: params.id });
    

    if(isLoading) return <Spinner />;
    return <FormData {...travelOne} />;
}
