import React, {useContext} from 'react'
import Input from './Input'
import {ContextProvider} from '../context/ContextProvider'


const Messages = () => {
    const {allMsg, user} = useContext(ContextProvider)
    return (
        <div className="messages">
            <>
                {allMsg.map((message) => message.email === user.email ? 
                (<div className="messages__my" key={message.id}>
                    <div className="messages__my-msg">
                        <p>{message.msg}</p>
                    </div>
                </div>)
                :
                (<div className="messages__other" key={message.id}>
                    <div className="messages__other-img">
                        <img src={message.profile} alt="user" />
                    </div>
                    <div className="messages__other-msg">
                        <span>{message.username}</span>
                        <p>{message.msg}</p>
                    </div>
                </div>
                )
                )}
            </>

            <Input />
        </div>
    )
}

export default Messages
