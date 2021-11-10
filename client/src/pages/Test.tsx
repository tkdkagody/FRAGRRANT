import * as React from 'react';
import styled from 'styled-components';


const Test: React.FC = () => {

    const Wrap = styled.section`
        background-color: blue;
    `;
    return (

        <Wrap>섹션2</Wrap>
    )
}

export default Test;