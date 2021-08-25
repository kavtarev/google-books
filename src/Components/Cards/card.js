import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'

import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'

import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        backgroundSize: 'contain',
        height: 140,
    },
    a: {
        textDecoration: 'none',
    },
})

export default function MediaCard({ item }) {
    const classes = useStyles()

    return (
        <a href={item.id} className={classes.a}>
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={
                            item.volumeInfo && item.volumeInfo.imageLinks
                                ? item.volumeInfo.imageLinks.thumbnail
                                : null
                        }
                    />
                    <CardContent>
                        <Typography gutterBottom variant='h5' component='h2'>
                            {item.volumeInfo ? item.volumeInfo.title : null}
                        </Typography>
                        <Typography gutterBottom variant='h6' component='h2' color='textSecondary'>
                            {item.volumeInfo && item.volumeInfo.categories
                                ? item.volumeInfo.categories[0]
                                : 'not defined'}
                        </Typography>
                        <Typography variant='body2' color='textSecondary' component='p'>
                            {item.volumeInfo ? item.volumeInfo.authors : null}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </a>
    )
}
