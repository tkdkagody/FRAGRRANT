import { useState, useEffect } from 'react';
import { Section, ContentWrap, Selection, Category } from './styles';


function Mypage() {


  
    return (

        <Section>
            <ContentWrap>
                {"내 정보 자리!"}
            </ContentWrap>
            <Selection>
                <Category>
                    <img src={"../../../icons/profile.svg"} alt={""}></img>
                    <span>Profile</span>
                    <label>회원님의 개인정보를 관리하는 <br></br> 공간입니다.</label>
                </Category>
                <Category>
                    <img src={"../../../icons/flower.svg"} alt={""}></img>
                    <span>My Fragrant</span>
                    <label>회원님의 향을 저장하는 <br></br>공간입니다.</label>
                </Category>
            </Selection>
        </Section>

    )
}

export default Mypage;