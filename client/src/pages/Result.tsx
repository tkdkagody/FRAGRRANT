import * as React from 'react';
import styled from 'styled-components';



const Result: React.FC = () => {

    const Wrap = styled.section`
        background-color: darkgoldenrod;
    `;
  
    return (

        <Wrap>투표 결과 페이지 </Wrap>

    )
}

export default Result;