import React from 'react';
import Navbar from './Navbar';
import useTravel from '../../hooks/useTravel';
import styled from 'styled-components';


export default function Header() {
    const { travel } = useTravel();
    if (!travel.length) return null
    return <>
        <Nav>
            <li></li>
            {
                travel.map(item => <Navbar key={item.id} travel={item} />)
            }
        </Nav>
        <H6>Aerolineas de viajes internacionales</H6>
    </>
        ;
}

const Nav = styled.ul`
    display: flex;
    width: 100%;
    justify-content: space-around;
    background-color: #f9f8f2;
    min-height: 80px;
    align-items: center;
    max-width: 1200px;
    margin: auto;
    list-style-type: none;
        @media (max-width: 920px) {
        position: absolute;
        flex-direction: column;
        width: 100%;
        min-height: 100vh;
    }
`
const H6 = styled.h6`
    max-width: 1080px;
    margin: auto;
    padding: 0 40px;
    color: #3287b7;
`
