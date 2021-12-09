import { Box } from './styles';

interface PerfumeProps {
    perfume: {
        id: number;
        name: string; 
        month: string; 
        season: string; 
        mood: Array<string>;
        img: string; 
    };
    key: number;
  }

function PerfumeList ({ perfume }:PerfumeProps) {

    return(
       
        <Box>
            <img src={perfume.img}></img>
            <div>{perfume.name}</div>
        </Box>
       
    );
}

export default PerfumeList ; 