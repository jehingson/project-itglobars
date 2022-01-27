import React from 'react';
import styled from 'styled-components';

export default function Widget() {
  return <WidgetContent>
    <div>
      <h3>Prueba FrontEnd React.js</h3> 
      <h1>Jehingson Pernia</h1>
      <p>Ing. Electronico. programador fullStack</p>
    </div>
    <br />
    <div className="div">
    <h5>Temas relacionados</h5>
    <a target="_blank" href="https://jehingsonpernia.netlify.app/#">Portfolio</a>
    <h6>Redes sociales</h6>
    <a target="_blank" href="https://www.linkedin.com/in/jehingson-pernia-0b3984204/">Linkedin</a>
    <br />
    <a target="_blank" href="https://www.youtube.com/channel/UC93nu9iAZlqtUkFbky9bUQQ">Youtube</a>
    </div>
  </WidgetContent>;
}

const WidgetContent = styled.div`
    padding: 46px 0px 50px 50px;
    color: #414042;
    >div{
        background-color: #cdfefe;
        padding: 15px;
        border-radius: 15px;
    }
    .div{
        background-color:#fff;
    }
    a{
      color: #3287b7;
      font-weight: bold;
      text-decoration:none;
      font-size:.8rem;
      padding: 5px;
      cursor:pointer;
      &:hover{
        opacity:.8;
      }
    }
`