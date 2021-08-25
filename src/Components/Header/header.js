import { Container, TextField, InputAdornment, makeStyles, Grid } from '@material-ui/core'
import { Search } from '@material-ui/icons'
import React from 'react'
import { useState } from 'react'
import { connect } from 'react-redux'
import { LoadBooksThunkCreator, LoadMoreBooksThunkCreator } from '../../redux/mainReducer'
const useStyle = makeStyles({
    selects: {
        display: 'flex',
        gap: '10px',
        marginBottom: 10,
    },
    form: {
        marginBottom: 15,
    },
    btn: {
        position: 'relative',
        top: '100%',
    },
})

const Header = (props) => {
    const style = useStyle()
    const [category, setCategory] = useState('all')
    const [order, setOrder] = useState('newest')
    const [input, setInput] = useState('')
    const handleInput = (e) => {
        setInput(e.target.value)
    }
    const handleChange = (e) => {
        setCategory(e.target.value)
    }
    const handleChangeOrder = (e) => {
        setOrder(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        props.LoadBooksThunkCreator({ input, category, order })
    }

    return (
        <Container>
            <h1>Search for books</h1>

            <form className={style.form} onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            value={input}
                            onChange={handleInput}
                            size='medium'
                            id='input-with-icon-textfield'
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position='end'>
                                        <Search />
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            id='standard-select-currency-native'
                            select
                            label='Native select'
                            value={category}
                            onChange={handleChange}
                            SelectProps={{
                                native: true,
                            }}
                            helperText='Please select your currency'
                        >
                            {props.choiceOptions.map((option) => (
                                <option key={option} value={option}>
                                    {option}
                                </option>
                            ))}
                        </TextField>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            id='standard-select-currency-native'
                            select
                            label='Native select'
                            value={order}
                            onChange={handleChangeOrder}
                            SelectProps={{
                                native: true,
                            }}
                            helperText='Please select your currency'
                        >
                            {props.orderOptions.map((option) => (
                                <option key={option} value={option}>
                                    {option}
                                </option>
                            ))}
                        </TextField>
                    </Grid>
                </Grid>
            </form>
        </Container>
    )
}

const mapStateToProps = (state) => {
    return {
        choiceOptions: state.choiceOptions,
        orderOptions: state.orderOptions,
    }
}

export default connect(mapStateToProps, { LoadBooksThunkCreator, LoadMoreBooksThunkCreator })(
    Header
)
