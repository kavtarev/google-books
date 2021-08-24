import { Container } from '@material-ui/core'
import React from 'react'
import { useHistory } from 'react-router-dom'

const BookPage = (props) => {
    let history = useHistory()
    const handleClick = () => {
        console.log(this)
    }
    console.log(history)
    return (
        <Container>
            {' '}
            <a onClick={handleClick} herf='#'>
                fffff
            </a>
        </Container>
    )
}

export default BookPage
