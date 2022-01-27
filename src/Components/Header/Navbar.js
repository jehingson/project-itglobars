import React from 'react';
import styled from 'styled-components';
import { Link } from 'wouter'

export default function Navbar({ travel }) {
  
  return <Li>
          <Link to={`/travel/${travel.id}`}>
            <h3>{travel.name}</h3>
          </Link>
        </Li>;
}

const Li = styled.li`
position: relative;
margin: auto;
text-align: center;
   > h3{
     background-color: white;
     width:100px;
     padding:10px;
     cursor: pointer;
     margin: auto;
     color: #414042;
     font-style: normal;
     font-weight: 500;
   }
   &:hover{
     opacity: .7;
   }
   @media (max-width: 920px) {
     >h3{
      width:200px;
     }
    }
`