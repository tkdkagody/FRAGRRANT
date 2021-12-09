import styled from 'styled-components';
import DetailInfo from '../../component/Detailinfo';
import { Section, ImgBorder, Box } from './styles'
import { useState, useEffect } from 'react';


interface DetailProps {
    id: number;
    name: string; 
    month: string; 
    season: string; 
    mood:string[] ;
    img: string; 
}


function PerfumeDetail() {

    const [listImg, setListImg] = useState<DetailProps[]>([
        {id:2, name: "COCOON MUSK", month: "2", season:"겨울 ", mood: ["달콤한", "시원한","고급스러운", "화사한", "상큼한","성숙한", "중성적인", "차분한"],img:"https://images.velog.io/images/beablessing/post/93205e52-d901-4dc3-962e-f6b50d77b094/Screenshot%20from%202021-11-25%2005-41-08.png"},
    ]);


    return (
        <Section>
            <ImgBorder>
                <Box>
                {listImg.map((pImg, i:number) => (
                        <img alt={""}  src={pImg.img}></img>
                    ))}
                </Box>
            </ImgBorder>
            <DetailInfo></DetailInfo>
        </Section>
    )
}

export default PerfumeDetail;