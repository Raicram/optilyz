import { AxiosResponse} from 'axios'
import { axios } from 'src/config'

interface IValues {
    s: string
    type?: string
    y?: string;
}

export const getMovies = async ({s, type, y}: IValues): Promise<AxiosResponse<Object>> => { 
    const result = await axios.get('', {params: {s, type, y }})
    return result.data;
}