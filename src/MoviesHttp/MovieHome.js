import React, { useEffect, useState, useCallback } from 'react'
import MoviesList from './MoviesList'
import Button from '../UI/Button'
import Container from '../UI/Container'
import Card from '../UI/Card'
import Input from '../UI/Input'
// import useFetch from './use-fetch'
import useFetch from './useFetch'

const MovieHome = () => {

    const {data, error, loading, interactWithApi} = useFetch({
      url : "https://ang-revision-default-rtdb.asia-southeast1.firebasedatabase.app/movies.json",
      method : "GET",
      headers : {
        'Content-Type': 'application/json'
      }
    })
    const [movieData, setMovieData] = useState({
      name : "",
      releaseDate : "",
      openingText : ""
    })

 
   const postData = () => {
      interactWithApi({
        url : "https://ang-revision-default-rtdb.asia-southeast1.firebasedatabase.app/movies.json",
        method : "POST",
        body : JSON.stringify(movieData),
        headers : {
          'Content-Type': 'application/json'
        }
      })
   }

    const onChangeHandler = event => {
      const name = event.target.name;
      setMovieData( preEle => {
        return {
          ...preEle,
          [name] : event.target.value
        }
      })
    }


  return (
    <>
      <Container>
        <Card >
          <Input input={{
            type : "text",
            className : "form-control mb-2",
            placeholder : "Enter Movie Name",
            label : "Movie Name",
            name : "name",
            value : movieData.name,
            onChange : onChangeHandler
          }} />
          <Input input={{
            type : "date",
            className : "form-control mb-2",
            placeholder : "Enter Movie Date",
            label : "Movie Date",
            name : "releaseDate",
            value : movieData.releaseDate,
            onChange : onChangeHandler
          }} />
          <Input input={{
            type : "text",
            className : "form-control mb-2",
            placeholder : "Enter Movie Description",
            label : "Movie Description",
            name : "openingText",
            value : movieData.openingText,
            onChange : onChangeHandler
          }} />

        </Card>
        <section>
              {/* <button onClick={fetchMovies}>Fetch Movies</button> */}
              <Button  value="Post Data" button={{
                type : "button",
                className : "btn btn-primary",
                onClick : postData
              }}/>
        </section>
        <section>
          {loading && <p>Loading ...</p>}
          {!loading && error && <p>Something went wrong</p> }
          {!loading && !error &&  <MoviesList movies={data ? data : []} />}
         
        </section>
      </Container>
    </>
  )
}

export default MovieHome