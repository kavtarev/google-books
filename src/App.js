import { useEffect, useState } from 'react'
import './App.css'
import { Body } from './Components/Body/body'
import { Header } from './Components/Header/header'

function App() {
    let [data, setData] = useState([])
    let [load, setLoad] = useState(false)

    useEffect(() => {
        async function moon() {
            let data2 = await fetch(
                'https://www.googleapis.com/books/v1/volumes?q=search-terms&key=AIzaSyDAELsd-BUUExjct5xTpUeAWZN9kaidr_8'
            )

            let d = await data2.json()
            setData(d)
        }
        moon()
    }, [])
    return (
        <div>
            <Header />
            <Body data={data} />
        </div>
    )
}

export default App
