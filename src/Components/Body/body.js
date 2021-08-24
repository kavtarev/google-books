import { Container, Grid } from '@material-ui/core'
import React from 'react'
import { connect } from 'react-redux'
import { LoadBooksThunkCreator } from '../../redux/mainReducer'
import MediaCard from '../Cards/card'

const Body = (props) => {
    let books = props.items || []
    console.log('render:', props.items)
    return (
        <Container>
            <span>found {props.total} mudaka</span>
            <Grid container spacing={3}>
                {books.map((item) => {
                    return (
                        <Grid key={item.id} item xs={12} sm={6} md={4}>
                            <MediaCard item={item} />
                        </Grid>
                    )
                })}
            </Grid>
        </Container>
    )
}

const mapStateToProps = (state) => {
    return {
        items: state.items,
        total: state.total,
    }
}

export default connect(mapStateToProps, { LoadBooksThunkCreator })(Body)
