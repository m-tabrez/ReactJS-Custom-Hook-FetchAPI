import React, {useState} from 'react'

const useFetch = () => {

    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)
    const [movies, setMovies] = useState([])

    const getAndPost = async (config) => {
        setIsLoading(true)
        try {
            const res = await fetch(config.url, {
                method : config.method,
                body : config.body ? config.body : null,
                headers : {
                    'Content-Type': 'application/json'
                }
            })
            const result = await res.json()
    
            if(config.method === "POST"){
                postMethod(result, config.body)
            }else{
                getMethod(result)
            }
        } catch (error) {
            setError(error.message)
        }

       setIsLoading(false)
    }

    const postMethod = (result, bodyData) => {
        const newMovie = {
            id : result.name,
            ...JSON.parse(bodyData)
        }  

        setMovies( preData => {
            console.log(preData, 'this is pre data')
            return [...preData, newMovie]
        })
    }

    const getMethod = (result) => {
        const arr = [];
        for(let key in result){
            let modifiedData = {
                id : key,
                name: result[key].name ,
                openingText: result[key].openingText,
                releaseDate: result[key].releaseDate
            }
            arr.push(modifiedData)
        }
        setMovies(arr)
    }

  return {
    isLoading,
    error,
    movies,
    getAndPost
  }
}

export default useFetch