import { useEffect, useState } from 'react'
import './App.css'
import Body from './Components/Body/body'
import Header from './Components/Header/header'
import { connect } from 'react-redux'
import { Switch, Route } from 'react-router-dom'
import BookPage from './Components/BookPage/bookpage'

function App(props) {
    let [data, setData] = useState([])

    console.log('render ___', props)

    useEffect(() => {
        setData(props.items)
    })
    return (
        <Switch>
            <Route exact path='/'>
                <div>
                    <Header />
                    <Body data={data} />
                </div>
            </Route>

            <Route path='/:id'>
                <BookPage />
            </Route>
        </Switch>
    )
}

const mapStateToProps = (state) => {
    return {
        items: state.items,
    }
}

export default connect(mapStateToProps)(App)
