import { useState, useEffect } from 'react';
import PerfumeList from '../../component/Perfumelist';
import { Section, ButtonBox , MoodResult, Mood, MonthSeason, List } from './styles';


interface PerfumeResult {
    id: number;
    name: string; 
    month: string; 
    season: string; 
    mood:string[] ;
    img: string; 
}

function Result () {

    const MoodNum = ["달콤한", "시원한","고급스러운", "화사한", "상큼한","성숙한", "중성적인", "차분한"];
    
    const [resultPerfumeInfo, setResultPerfumeInfo] = useState<PerfumeResult[]>([
        {id:1,  name: "워시&에멀전 샘플 키트", month: "1", season:"가을", mood: ["달콤한", "시원한","고급스러운", "화사한", "상큼한","성숙한", "중성적인", "차분한"], img:"https://images.velog.io/images/beablessing/post/de24eeb4-d433-497d-894e-ab75fbf54531/Screenshot%20from%202021-11-25%2005-40-52.png"},
        {id:2, name: "COCOON MUSK", month: "2", season:"겨울", mood: ["달콤한", "시원한","고급스러운", "화사한", "상큼한","성숙한", "중성적인", "차분한"],img:"https://images.velog.io/images/beablessing/post/93205e52-d901-4dc3-962e-f6b50d77b094/Screenshot%20from%202021-11-25%2005-41-08.png"},
        {id:3, name: "WORMWOOD SET", month: "5", season:"겨울", mood: ["달콤한", "시원한","고급스러운", "화사한", "상큼한","성숙한", "중성적인", "차분한"],img:"https://images.velog.io/images/beablessing/post/14a917b0-193c-43e2-9b39-8c458aee114c/Screenshot%20from%202021-11-25%2005-41-02.png"},
        {id:4, name: "BUT I WOULDN'T GO HOME YET", month: "2", season:"가을", mood: ["달콤한", "시원한","고급스러운", "화사한", "상큼한","성숙한", "중성적인", "차분한"],img:"https://images.velog.io/images/beablessing/post/509eb777-3432-4e86-b187-f8e98412e957/Screenshot%20from%202021-11-25%2005-41-28.png"},
        {id:5, name: "워시&에멀전 샘플 키트", month: "1", season:"가을", mood: ["달콤한", "시원한","고급스러운", "화사한", "상큼한","성숙한", "중성적인", "차분한"],img:"https://images.velog.io/images/beablessing/post/de24eeb4-d433-497d-894e-ab75fbf54531/Screenshot%20from%202021-11-25%2005-40-52.png"},
    ]);

    return (
        <>
        <Section>
            <ButtonBox>
                <span>
                    <img src={'../../../icons/share.svg'} alt={""}></img>
                </span>
            </ButtonBox>
            {/*  무드 + 달 + 계절  컴포넌트 */}
            <MoodResult>
                <Mood>
                    {MoodNum.map((el) => (<li>{el}</li>))}
                </Mood>
                <MonthSeason>
                    <span>12월</span>
                    <span>겨울</span>
                </MonthSeason>
            </MoodResult>
            {/* perfumelist 컴포넌트 */}
            <List>
                {resultPerfumeInfo.map((perfume, i:number) => (
                    <PerfumeList key={i} perfume={perfume}/>))}
            </List>
            <ButtonBox>
                <button>내 향수 저장</button>
            </ButtonBox>
        </Section>
        </>
    )
}

export default Result;