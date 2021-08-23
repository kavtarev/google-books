import { Container, TextField, InputAdornment, makeStyles } from '@material-ui/core'
import { Search } from '@material-ui/icons'
import React from 'react'
import { useState } from 'react'
const useStyle = makeStyles({
    inp: {
        minWidth: 500,
    },
    selects: {
        padding: 50,
    },
})

const choiceOptions = ['all', 'art', 'biography', 'computers', 'history', 'medical', 'poetry']
const orderOptions = ['newest', 'oldest']
export const Header = (props) => {
    const style = useStyle()
    const [choice, setChoise] = useState('all')
    const [order, setOrder] = useState('newest')
    const [input, setInput] = useState('')
    const handleInput = (e) => {
        setInput(e.target.value)
    }
    const handleChange = (e) => {
        setChoise(e.target.value)
    }
    const handleChangeOrder = (e) => {
        setOrder(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('input: ', input, 'select: ', choice, 'select2: ', order)
    }
    return (
        <Container>
            <h1>Search for books</h1>
            <form onSubmit={handleSubmit}>
                <TextField
                    value={input}
                    onChange={handleInput}
                    className={style.inp}
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
                <div className={style.selects}>
                    <TextField
                        size='medium'
                        id='standard-select-currency-native'
                        select
                        label='Native select'
                        value={choice}
                        onChange={handleChange}
                        SelectProps={{
                            native: true,
                        }}
                        helperText='Please select your currency'
                    >
                        {choiceOptions.map((option) => (
                            <option key={option} value={option}>
                                {option}
                            </option>
                        ))}
                    </TextField>
                    <TextField
                        size='medium'
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
                        {orderOptions.map((option) => (
                            <option key={option} value={option}>
                                {option}
                            </option>
                        ))}
                    </TextField>
                </div>
            </form>
        </Container>
    )
}
