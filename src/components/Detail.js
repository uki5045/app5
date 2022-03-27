import React, {useEffect, useState} from 'react';
import { useParams } from "react-router-dom";
import axios from "axios";

const Detail = () => {

    const params = useParams()

    const [ movie, setMovie ] = useState({})

    const getData = async () => {
        try {
            const { data } = await axios.get(`https://api.themoviedb.org/3/tv/${params.movieId}?api_key=8597e491ed6e80f0de12e349eb60ea6e&language=en-US`)
            setMovie(data)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <div>
            <h1>{movie.name}</h1>
        </div>
    );
};

export default Detail;