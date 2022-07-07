import { useEffect, useState } from 'react'

const useFetch = (config) => {

    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)

    const interactWithApi = async (configData) => {
        setLoading(true)
        try {
            const resp = await fetch(config.url, {
                method : configData.method,
                body : configData.body ? configData.body : null,
                headers : configData.headers ? configData.headers : null
            })
            const result = await resp.json();
            const arr = [];

            if(configData.method === "GET"){
                for(let key in result){
                    let transformedData = {
                        id : key,
                        name : result[key].name,
                        openingText : result[key].openingText,
                        releaseDate : result[key].releaseDate
                    }
                    arr.unshift(transformedData)
                }
                setData(arr)
            }else{
                const newMovie = {
                    id : result.name,
                    ...JSON.parse(configData.body)
                }
                setData( preData => [newMovie, ...preData])
            }

        } catch (error) {
            setError(error)
        }
        setLoading(false)
    }

    useEffect( () => {
        interactWithApi(config)
    }, [config.url])

  return {data, error, loading, interactWithApi}
}

export default useFetch