import { Container, Grid } from '@material-ui/core'
import React from 'react'
import MediaCard from '../Cards/card'

export const Body = ({ data }) => {
    let books = data.items || []
    console.log('render:', data.items)
    return (
        <Container>
            <span>found {data.totalItems} mudaka</span>
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
