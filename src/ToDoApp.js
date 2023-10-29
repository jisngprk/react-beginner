import Button from './components/Button';
import styles from './ToDoApp.module.css';
import { useState, useEffect } from 'react';
import { func } from 'prop-types';

function ToDoApp() {
    const [toDo, setToDo] = useState('');
    const [toDos, setToDos] = useState([]);

    const onChange = (event) => setToDo(event.target.value);
    const onSubmit = (event) => {
        event.preventDefault();
        if (toDo === '') {
            return;
        }

        setToDos((prevState) => [toDo, ...prevState]);
        setToDo('');

    };
    console.log('bb', toDos);
    return (
        <div>
            <h1>My ToDos {toDos.length} </h1>
            <form onSubmit={onSubmit}>
                <input onChange={onChange} value={toDo} type={'text'}
                       placeholder={'write your to-do'} />
                <button>Add To DO</button>
            </form>
            <hr />
            <ul>
                {toDos.map((item, index) => <li key={index}>{toDos[toDos.length - 1 - index]}</li>)}
            </ul>

        </div>
    );
}

export default ToDoApp;
