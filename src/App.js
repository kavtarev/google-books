import { useEffect, useState } from 'react'
import './App.css'
import Body from './Components/Body/body'
import { Header } from './Components/Header/header'
import { connect } from 'react-redux'

function App(props) {
    let [data, setData] = useState([])

    console.log('render ___', props)

    useEffect(() => {
        setData(props.items)
    })
    return (
        <div>
            <Header />
            <Body data={data} />
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        items: state.items,
    }
}

export default connect(mapStateToProps)(App)
