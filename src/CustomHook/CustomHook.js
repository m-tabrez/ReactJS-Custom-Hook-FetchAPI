import React from 'react'
import Card from '../UI/Card'
import Container from '../UI/Container'
import useCounter from './use-counter'

const CustomHook = () => {

    const forwardCounter = useCounter();

    const backwardCounter = useCounter(false)

  return (
    <>
        <Container>
            <Card>
                {forwardCounter}
            </Card>
            <br />
            <Card>
                {backwardCounter}
            </Card>
        </Container>
    </>
  )
}

export default CustomHook