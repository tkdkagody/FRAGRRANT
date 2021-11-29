import styled from "styled-components";

function Question1 () {
    
    const Section = styled.section`
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 0.5rem;
    `;

    const Question = styled.div`
        width: 50%;
        height: 13rem;
        text-align: center;
        line-height: 6rem;
        & > div:nth-child(1){
            font-size: 1.8rem;
        }
        & > div:nth-child(2){
            font-size: 1rem;
            
        }
    `;
    const VoteWrap = styled.div`
        width: 90%;
        height: 25rem;
        display: flex;
        align-items: center;
        justify-content: center;
    `;
    const Option = styled.div`
        width: 24rem;
        height: 20rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        & > img {
            width: 70%;
            object-fit: contain;
            cursor: pointer;
        }
        & > span {
            display: block;
            width: 18rem;
            height: 3rem;
            line-height: 3rem;
            text-align: center;
        }
    `;

    return(
        <>
        <Section>
            <Question>
                <div>1. 하루 일과를 마치고침대에 누운 당신,</div>
                <div>회사에서 있었던 일을 되돌아봅니다. 어떤 생각을 하시나요?</div>
            </Question>
            <VoteWrap>
                <Option>
                    <img src={"https://images.velog.io/images/beablessing/post/efe438ea-0dc5-4388-a79a-de8a6c81445b/image.png"} alt={""}></img>
                    <span>동료에게 칭찬받았던 것이 떠오른다.</span>
                </Option>
                <Option>
                    <img src={"https://images.velog.io/images/beablessing/post/086e2290-e680-4e7a-a611-dcc5558483dd/image.png"} alt={""}></img>
                    <span>자신이 낸 업무 성과가 떠오른다.</span>
                </Option>
            </VoteWrap>
        </Section>
        </>
    )
}
export default Question1;