import { Section, Month, Circle, Title } from './styles'


function MonthFilter () {
    
    const info = [
        {title: "전체보기", img:"../../../images/main3.jpg"},
        {title: "컬럼1", img:"../../../images/main2.jpg"},
        {title: "컬럼2", img:"../../../images/main3.jpg"},
        {title: "컬럼3", img:"../../../images/main2.jpg"},
        {title: "컬럼4", img:"../../../images/main3.jpg"},
        {title: "컬럼5", img:"../../../images/main2.jpg"},
        {title: "컬럼6", img:"../../../images/main3.jpg"},
        {title: "컬럼7", img:"../../../images/main2.jpg"},
        {title: "컬럼8", img:"../../../images/main3.jpg"},
        {title: "컬럼9", img:"../../../images/main2.jpg"},
        {title: "컬럼10", img:"../../../images/main3.jpg"},
        {title: "컬럼11", img:"../../../images/main2.jpg"},
        {title: "컬럼12", img:"../../../images/main3.jpg"}

    ];

    return (
        <Section>
            {info.map(el=> <Month>
                <Circle>
                    <img src={el.img}></img>
                </Circle>
                <Title>{el.title}</Title>
            </Month>)}
        </Section>
    );
}

export default MonthFilter; 