import React from 'react';
import Content from '../../Components/Content';
import Header from '../../Components/Header';
import Spinner from '../../Components/Spinner';
import useTravel from '../../hooks/useTravel';

export default function Home() {
  const { loading } = useTravel();

  if(loading) return <Spinner />

  return <div>
    {/*Header*/}
    <Header />
    {/*content*/}
    <Content />
    {/*Footer*/}
  </div>;
}
