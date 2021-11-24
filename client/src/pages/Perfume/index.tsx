import * as React from 'react';
import MonthFilter from '../../component/Monthfilter';
import PerfumeList from '../../component/Perfumelist';
import SearchBar from '../../component/Searchbar';
import { Section, ListBorder } from './styles'
import { useState } from 'react';
import axios from 'axios';

interface Perfume {
    name: string; 
    month: string; 
    season: string; 
    img: string; 
}

interface PerfumeProps {
    perfumeInfo : Perfume[];
}

axios.defaults.withCredentials = true;
function Perfume() {
    //퍼퓸리스트 데이터 불러오기 
    // 여기서 리스트 매핑해야 무한호출 안됨 
    //axios
    
    const [perfumeInfo, setPerfumeInfo] = useState(
        [
            {name: "워시&에멀전 샘플 키트", month: "1", season:"가을", img:"https://images.velog.io/images/beablessing/post/de24eeb4-d433-497d-894e-ab75fbf54531/Screenshot%20from%202021-11-25%2005-40-52.png"},
            {name: "COCOON MUSK", month: "2", season:"겨울", img:"https://images.velog.io/images/beablessing/post/93205e52-d901-4dc3-962e-f6b50d77b094/Screenshot%20from%202021-11-25%2005-41-08.png"},
            {name: "WORMWOOD SET", month: "5", season:"겨울", img:"https://images.velog.io/images/beablessing/post/14a917b0-193c-43e2-9b39-8c458aee114c/Screenshot%20from%202021-11-25%2005-41-02.png"},
            {name: "BUT I WOULDN'T GO HOME YET", month: "2", season:"가을", img:"https://images.velog.io/images/beablessing/post/509eb777-3432-4e86-b187-f8e98412e957/Screenshot%20from%202021-11-25%2005-41-28.png"},
            {name: "워시&에멀전 샘플 키트", month: "1", season:"가을", img:"https://images.velog.io/images/beablessing/post/de24eeb4-d433-497d-894e-ab75fbf54531/Screenshot%20from%202021-11-25%2005-40-52.png"},
            {name: "COCOON MUSK", month: "2", season:"겨울", img:"https://images.velog.io/images/beablessing/post/93205e52-d901-4dc3-962e-f6b50d77b094/Screenshot%20from%202021-11-25%2005-41-08.png"},
            {name: "WORMWOOD SET", month: "5", season:"겨울", img:"https://images.velog.io/images/beablessing/post/14a917b0-193c-43e2-9b39-8c458aee114c/Screenshot%20from%202021-11-25%2005-41-02.png"},
            {name: "BUT I WOULDN'T GO HOME YET", month: "2", season:"가을", img:"https://images.velog.io/images/beablessing/post/509eb777-3432-4e86-b187-f8e98412e957/Screenshot%20from%202021-11-25%2005-41-28.png"},
            {name: "워시&에멀전 샘플 키트", month: "1", season:"가을", img:"https://images.velog.io/images/beablessing/post/de24eeb4-d433-497d-894e-ab75fbf54531/Screenshot%20from%202021-11-25%2005-40-52.png"},
            {name: "COCOON MUSK", month: "2", season:"겨울", img:"https://images.velog.io/images/beablessing/post/93205e52-d901-4dc3-962e-f6b50d77b094/Screenshot%20from%202021-11-25%2005-41-08.png"},
            {name: "WORMWOOD SET", month: "5", season:"겨울", img:"https://images.velog.io/images/beablessing/post/14a917b0-193c-43e2-9b39-8c458aee114c/Screenshot%20from%202021-11-25%2005-41-02.png"},
            {name: "BUT I WOULDN'T GO HOME YET", month: "2", season:"가을", img:"https://images.velog.io/images/beablessing/post/509eb777-3432-4e86-b187-f8e98412e957/Screenshot%20from%202021-11-25%2005-41-28.png"},
            {name: "워시&에멀전 샘플 키트", month: "1", season:"가을", img:"https://images.velog.io/images/beablessing/post/de24eeb4-d433-497d-894e-ab75fbf54531/Screenshot%20from%202021-11-25%2005-40-52.png"},
            {name: "COCOON MUSK", month: "2", season:"겨울", img:"https://images.velog.io/images/beablessing/post/93205e52-d901-4dc3-962e-f6b50d77b094/Screenshot%20from%202021-11-25%2005-41-08.png"},
            {name: "WORMWOOD SET", month: "5", season:"겨울", img:"https://images.velog.io/images/beablessing/post/14a917b0-193c-43e2-9b39-8c458aee114c/Screenshot%20from%202021-11-25%2005-41-02.png"},
            {name: "BUT I WOULDN'T GO HOME YET", month: "2", season:"가을", img:"https://images.velog.io/images/beablessing/post/509eb777-3432-4e86-b187-f8e98412e957/Screenshot%20from%202021-11-25%2005-41-28.png"},
            {name: "워시&에멀전 샘플 키트", month: "1", season:"가을", img:"https://images.velog.io/images/beablessing/post/de24eeb4-d433-497d-894e-ab75fbf54531/Screenshot%20from%202021-11-25%2005-40-52.png"},
        ]
    );


   

    return (
        <Section>
            <MonthFilter></MonthFilter>
            <SearchBar></SearchBar>
            <ListBorder>
                <div>향수리스트</div>
                <div>
                {perfumeInfo.map((perfume, i:number) => (
                    <PerfumeList key={i} perfume={perfume}/>
                ))}
                   
                </div>
            </ListBorder>
        </Section>
    );
}

export default Perfume;