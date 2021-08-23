import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { InsertEmoticonRounded, SpaRounded } from '@material-ui/icons'

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        backgroundSize: 'contain',
        height: 140,
    },
})

export default function MediaCard({ item }) {
    const classes = useStyles()

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={item.volumeInfo.imageLinks.thumbnail}
                    title='Contemplative Reptile'
                />
                <CardContent>
                    <Typography gutterBottom variant='h5' component='h2'>
                        {item.volumeInfo.title}
                    </Typography>
                    <Typography gutterBottom variant='h6' component='h2' color='textSecondary'>
                        {item.volumeInfo.categories[0]}
                    </Typography>
                    <Typography variant='body2' color='textSecondary' component='p'>
                        {item.volumeInfo.authors || null}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}
