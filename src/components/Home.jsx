import React, {useContext} from 'react'
import Messages from './Messages'
import Welcome from './Welcome'
import {ContextProvider} from '../context/ContextProvider'

const Home = () => {
    const {loader, user} = useContext(ContextProvider)

    return (
        <div>
            {!loader ? user ? <Messages /> : <Welcome /> : "Loading..."}            
        </div>
    )
}

export default Home
