import * as React from 'react';
import styled from 'styled-components';


const Main: React.FC = () => {

    const Wrap = styled.section`
        background-color: red;
    `;
    return (

        <Wrap>섹션1</Wrap>
    )
}

export default Main;