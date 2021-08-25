import './App.css'
import Body from './Components/Body/body'
import Header from './Components/Header/header'
import { connect } from 'react-redux'
import { Switch, Route } from 'react-router-dom'
import BookPage from './Components/BookPage/bookpage'
import Loader from './Comon/loader'

function App(props) {
    console.log('render ___', props)

    return (
        <Switch>
            <Route exact path='/'>
                <div>
                    <Header />
                    {props.isLoading ? <Loader /> : <Body />}
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
        isLoading: state.isLoading,
    }
}

export default connect(mapStateToProps)(App)
