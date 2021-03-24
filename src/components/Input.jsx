import React,{useState, useContext} from 'react'
import {ContextProvider} from '../context/ContextProvider'

const Input = () => {
    const {sendMessage} = useContext(ContextProvider)
    const [msg, setMsg] = useState('')
    const sendMsg = (e) =>{
        e.preventDefault();
        sendMessage(msg);
        setMsg('');
    }
    return (
        <div>
            <div className="input__form">
                <form onSubmit={sendMsg}>
                    <input 
                        type="text" 
                        className="input__control"
                        name=""
                        onChange={(e)=> setMsg(e.target.value)} 
                        value={msg}
                        placeholder="Write a message..." 
                        required
                        />
                </form>
            </div>
        </div>
    )
}

export default Input
