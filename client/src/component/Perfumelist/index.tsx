import { Box } from './styles';

interface PerfumeProps {
    perfume: {
        name: string; 
        month: string; 
        season: string; 
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