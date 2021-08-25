import { Container } from '@material-ui/core'

import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { LoadSpecificBookThunkCreator } from '../../redux/mainReducer'

const BookPage = (props) => {
    let location = useLocation()
    useEffect(() => {
        props.LoadSpecificBookThunkCreator(location.pathname)
    }, [location.pathname])
    console.log('location ', location)
    console.log('book ', props.book)
    return (
        <Container>
            {props.book.volumeInfo && (
                <div>
                    <p>{props.book.volumeInfo.title}</p>
                    <div
                        className='content'
                        dangerouslySetInnerHTML={{ __html: props.book.volumeInfo.description }}
                    ></div>

                    <p>{props.book.volumeInfo.authors[0]}</p>
                    <p>{props.book.volumeInfo.averageRating}</p>
                </div>
            )}
        </Container>
    )
}
const mapStateToProps = (state) => {
    return {
        isLoading: state.isLoading,
        book: state.specificBook,
    }
}

export default connect(mapStateToProps, { LoadSpecificBookThunkCreator })(BookPage)
