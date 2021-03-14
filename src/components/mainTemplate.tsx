import React, { useState , useEffect } from 'react'
import styled from 'styled-components'
import InputSearch from 'src/components/inputSearch'
import MovieTemplate from 'src/components/movieTemplate'


const Wrapper = styled.div`
  max-width: 1300px;
  margin: 25px auto;
  padding: 25px;
  min-height: 80vh;

  @media (max-width: 600px){
        padding: 10px;
    }
`;

interface IResponse {
        Response: string;
        Search: any;
}

const MainTemplate: React.FC = () => {
    const [response , setResponse] = useState<IResponse | undefined>(undefined);

    useEffect(() => {
    },[response])

    return(
        <Wrapper>
            <InputSearch setResponse={setResponse}/>
            {response&&<MovieTemplate search={response.Search}/>}
        </Wrapper>
    )
}


export default MainTemplate
