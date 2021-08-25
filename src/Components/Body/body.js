import { Button, Container, Grid } from '@material-ui/core'
import React from 'react'
import { connect } from 'react-redux'
import { LoadMoreBooksThunkCreator } from '../../redux/mainReducer'
import MediaCard from '../Cards/card'

const Body = (props) => {
    console.log('render:', props.items)
    const handleLoad = () => {
        props.LoadMoreBooksThunkCreator()
    }
    return (
        <Container>
            {props.total && <span>found {props.total} items</span>}
            <Grid container spacing={3}>
                {props.items.map((item) => {
                    return (
                        <Grid key={item.id + item.etag} item xs={12} sm={6} md={4}>
                            <MediaCard item={item} />
                        </Grid>
                    )
                })}
            </Grid>
            <Button onClick={handleLoad}>Load More</Button>
        </Container>
    )
}

const mapStateToProps = (state) => {
    return {
        items: state.items,
        total: state.total,
    }
}

export default connect(mapStateToProps, { LoadMoreBooksThunkCreator })(Body)
