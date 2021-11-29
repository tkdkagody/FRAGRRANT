import React, { useEffect, useState } from 'react';
import Question1 from '../../component/TestDetail/Question1';
import { Section1, Text, Button, Section2, Progress, TestWrap } from './styles'



function Test () {
//첫 페이지는 Section1 .
//if button이 눌리면 
//section2 나와야함 => 여기서 컴포넌트 변경! 
//진행바는 여기 위치 
    const [progressValue, setProgressValue] = useState(0);

    useEffect(() => {
        // setProgressValue(percent * width);
    },[]);

    return (
        <>

        {/* <Section1>
            <Text>
                나에게 어울리는 향을 찾기 어려우셨나요?<br></br>
                간단한 테스트로 내 향기를 찾아보세요 
            </Text>
            <Button>START</Button>
        </Section1> */}

        <Section2>
            <Progress>
                <div>30%</div>
            </Progress>
            <TestWrap>
                <Question1></Question1>
            </TestWrap>
        </Section2>
        </>
    )
}

export default Test;