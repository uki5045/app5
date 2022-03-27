import React from 'react';
import { useState, useEffect } from "react";
import axios from "axios";
import { Container, Col, Row, Card, Button } from 'react-bootstrap'
import {Poster} from "../components";

const Home = () => {

    const [ movies, setMovies ] = useState([])

    const getData = async () => {
        const {data} = await axios.get('https://api.themoviedb.org/3/tv/on_the_air?api_key=8597e491ed6e80f0de12e349eb60ea6e&language=en-US&page=1')
        setMovies(data.results)
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <Container>
            <Row>
            {movies.map(movie => (
                <Poster
                    poster={movie.poster_path}
                    name={movie.name}
                    overview={movie.overview}
                    id={movie.id}
                />
            ))}
            </Row>
        </Container>
    );
};

export default Home;