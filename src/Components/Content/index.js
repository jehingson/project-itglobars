import React from 'react';
import styled from 'styled-components';
import Widget from '../Widget';

export default function Content() {
  return <ContentHome>
  {/*Widget*/}
  <Widget />
  {/*Image viajes */}
  <Div>
      <img src="https://cdn.aarp.net/content/dam/aarp/travel/travel_tips/2020/08/1140-globe-and-world-map-esp.jpg" alt="viajes" />
  </Div>
  </ContentHome>;
}


const ContentHome = styled.div`
    max-width: 1200px;
    margin: auto;
    min-height:80vh;
    display: grid;
    grid-template-columns: 1fr 2fr;
    height: 100%;
  
`

const Div = styled.div`
   padding: 50px;
   >img{
        width: 100%;
        max-width: 800px;
        border-radius: 5px;
    }

`