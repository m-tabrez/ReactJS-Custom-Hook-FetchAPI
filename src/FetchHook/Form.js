import React, {useRef} from 'react'
import Input from '../UI/Input'
import Button from '../UI/Button'
import useFetch from './useFetch'

const Form = ({getAndPost}) => {

    const name = useRef()
    const openingText = useRef()
    const releaseDate = useRef()

    const onSubmitHandler = (event) => {
        event.preventDefault()

        const postData = {
            name : name.current.value,
            openingText : openingText.current.value,
            releaseDate : releaseDate.current.value,
        }   
        const jsonData = JSON.stringify(postData)
        getAndPost({
            url : "https://ang-revision-default-rtdb.asia-southeast1.firebasedatabase.app/movies.json",
            method : "POST",
            body : jsonData
        })

        name.current.value = ''
        openingText.current.value = ''
        releaseDate.current.value = ''
    }

  return (
    <>
        <form onSubmit={onSubmitHandler}>
            <Input input={{
                type : "text",
                className : "form-control",
                label : "Name",
                ref : name
            }} />
            <Input input={{
                type : "text",
                className : "form-control",
                label : "Opening Text",
                ref : openingText
            }} />
            <Input input={{
                type : "date",
                className : "form-control",
                label : "Release Date",
                ref : releaseDate
            }} />
            <Button button={{
                type : "submit",
                className : "btn btn-primary",
                value : "Submit"
            }} />
        </form>
    </>
  )
}

export default Form