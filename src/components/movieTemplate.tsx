import React, { useEffect, useState }  from 'react'
import styled  from 'styled-components'
import Loading from 'src/components/loading'


const Wrapper = styled.div`
    background-color: #ebd8b7;
    border-radius: 5px;
    padding: 50px;
    margin-top: 25px;

    @media (max-width: 600px){
        padding: 20px;
    }
`;

const MovieWrapper = styled.div`
    background-color: #c6a9a3;
    padding: 20px;
    margin: 25px 0;
    border-radius: 5px;
    display: flex;
    gap: 25px;

    @media (max-width: 600px){
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`;

const Info = styled.div`
    display: flex;
    flex-direction: column;
    @media (max-width: 600px){
        width: 100%;
    }
`;


const H2 = styled.h2`
    color: #9a8194;
    font-size: 35px;
`;

const Title = styled.p`
    font-size: 23px;
    font-weight: 600;
`;

const Img = styled.img`
    max-width: 150px;
`;

const Text = styled.span`
    font-size: 20px;
    font-weight: 400;
`;

interface Search {
    Title: string;
    Poster: string;
    Type: string;
    Year: string;
    imdbID: string;
}

interface IMovieResponse {
    search: Search[];
}

const MovieTemplate: React.FC<IMovieResponse> = ({search}) => {
    const [movieErr, setMovieErr] = useState(0);

    const handleMovieError = () => {
        setTimeout(() => {
            setMovieErr(movieErr => movieErr+1)
        }, 1000);
    }

    useEffect(() => {
        if(!search) handleMovieError();
        else setMovieErr(0)
    },[search, movieErr])


    return !search ?(
        movieErr<5? <Loading /> : <p>No Movie Found</p>
    ):(
        <Wrapper>
            <H2>Movie list:</H2>
            {
                search.map((item) => 
                    <MovieWrapper key={item.imdbID}>
                        <Img src={item.Poster} alt={item.Title} />
                        <Info>
                            <Title>{item.Title}</Title>
                            <div>
                                <Text>Year: {item.Year}</Text>
                            </div>
                            <div>
                                <Text>Type: {item.Type}</Text>
                            </div>
                        </Info>
                    </MovieWrapper>
                )
            }
        </Wrapper>
    )
}


export default MovieTemplate