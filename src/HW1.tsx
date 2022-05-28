import React, {useState} from 'react';
import './App.css';
import {Message} from "./Message";
import style from './modules/superInput.module.css';
import {MessageType} from "./interface";

function HW1() {

    const [message, setMessage] = useState('');
    const [frame, setFrame] = useState<MessageType[]>([
        {
            avatar: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
            name: 'Some Name',
            message: 'Hi, I am fine!',
            time: '22:00',
        },
        {
            avatar: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
            name: 'Some Name',
            message: 'Hello John! How are you?>',
            time: '22:00',
        }
    ]);

    const sendMessage = () => {
        const now = new Date();
        const time = now.getHours() + ':' + now.getMinutes();
        let newMessage: MessageType = {
            avatar: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
            name: 'Some Name',
            message,
            time
        }
        setFrame([...frame, newMessage]);
    }

    return (
        <div className="App">
            <hr/>
            homeworks 1

            {
                frame.map((item: any) => (
                    <Message
                        key={item.id}
                        avatar={item.avatar}
                        name={item.name}
                        message={item.message}
                        time={item.time}
                    />
                ))
            }

            <hr/>
            <hr/>
            <div style={{display: "flex", marginLeft: "20px"}}>
                <div className={style.InputTemplate}>
                    <input className={style.Input} type="text" onChange={({target}) => setMessage(target.value)}/>
                </div>
                <button onClick={sendMessage}>SEND</button>
            </div>
        </div>
    );
}

const SuperInput: React.FC<any> = (props) => {
    return (
        <div>
            <div className={style.InputTemplate}>
            </div>
        </div>
    )
}


export default HW1;
