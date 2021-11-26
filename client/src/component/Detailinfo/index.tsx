import { Section, Box, Name, Capacity, MonthBox, Month, Mood, Scent, DescColumn, DescTxt } from './styles'
import { useState, useEffect } from 'react';

interface ListProps {
    id: number;
    name: string; 
    capacity : string;
    month: string; 
    season: string; 
    mood:string[] ;
    scent: string[];
    desc: string;
    img: string; 
}

function DetailInfo () {

        const [listInfo, setListInfo] = useState<ListProps>(
            {id:2, 
            name: "COCOON MUSK", 
            capacity: "15ml", 
            month: "2월", 
            season:"겨울",
            mood: ["달콤한", "시원한","고급스러운", "화사한", "상큼한","성숙한", "중성적인", "차분한"],
            scent : ["베르가못","민트", "화이트머스크"],
            desc: "히노키 향을 머금은 숲속의 온천. 넛멕과 블랙페퍼의 터치를 가미한 스파클링한 유주와, 바람에 실려오는 프랑킨센스의 힌트로 완성하는 섬세하고 모던한 우디 향.숲으로 둘러싸인 온천에서 피어오르는 향긋한 수증기. 이마를 식히는 시원한 바람과 물기 머금은 돌 사이에 핀 이끼. 깊어지는 호흡을 따라, 침전하고 떠오르기를 반복하는 기억의 잔상들. 포 레스트는 섬세하게 표현된 우디 머스크를 베이스로 편안함과 미스터리가 공존하는 숲과 고요한 휴식의 이미지를 담아냅니다. 미네랄과 히노키, 인센스의 아로마가 빚어내는 우디 어코드 사이로 차갑고 신선한 유주 티 한 모금의 상쾌함이 깃들고, 넛멕과 블랙페퍼의 스파이시한 터치로 모던한 무드를 완성합니다.",
            img:"https://images.velog.io/images/beablessing/post/93205e52-d901-4dc3-962e-f6b50d77b094/Screenshot%20from%202021-11-25%2005-41-08.png"},
        );

        if(listInfo.month === "2월"){
            listInfo.month = "https://images.velog.io/images/beablessing/post/52d8d7b4-651d-4894-a8a0-9e466d0e2a4d/Screenshot%20from%202021-11-27%2002-58-34.png"; 
        }else if(listInfo.season ==="겨울"){
            listInfo.season = "https://images.velog.io/images/beablessing/post/00d1f507-a4ce-4370-9c5d-f791cd4ae1a6/Screenshot%20from%202021-11-27%2003-00-20.png" ;
        }
    
    return (
        <Section>
            <Box>
                    <Name>{listInfo.name}</Name>
                    <Capacity>{listInfo.capacity}</Capacity>
                    <Month>
                        <MonthBox>
                            <img src={listInfo.month} alt={""}></img>
                            <span>2월</span>
                        </MonthBox>
                        <MonthBox>
                            <img src={listInfo.season} alt={""}></img>
                            <span>겨울</span>
                        </MonthBox>
                    </Month>
                    <Mood>{listInfo.mood.map((el)=>(<span>{el}</span>))}</Mood>
                    <Scent>{listInfo.scent[0]}{listInfo.scent[1]}{listInfo.scent[2]}</Scent>
                    <DescColumn>Description(토글)</DescColumn>
                    <DescTxt>{listInfo.desc}</DescTxt>
            </Box>
        </Section>
    )
}

export default DetailInfo;