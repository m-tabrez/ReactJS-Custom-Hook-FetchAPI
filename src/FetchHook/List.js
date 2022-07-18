import React from 'react'
import { useEffect } from 'react'
import useFetch from './useFetch'
import Form from './Form'

const List = () => {

  const {isLoading, error, movies, getAndPost} =  useFetch()

  useEffect(() => {
    getAndPost({
        url : "https://ang-revision-default-rtdb.asia-southeast1.firebasedatabase.app/movies.json",
        method : "GET",
    })
  }, [])

  return (
    <>
        <Form getAndPost={getAndPost}/>
        {movies && movies.map(curEle => <li key={curEle.id}>{curEle.name}</li> )}
    </>
  )
}

export default List