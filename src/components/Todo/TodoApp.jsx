import React, { useMemo, useState } from 'react'
import './Todo.css'
import Header from './components/Header/Header';
import ItemList from './components/ItemList/ItemList';
import Footer from './components/Footer/Footer';


const TodoApp = () => {

    const [todos, setTodos] = useState({});
    const [selectedStatus, setSelectedStatus] = useState('All');

    const addTodo = (item) =>{
        const id = new Date().getTime();
        setTodos({
            ...todos,
            [id]: {
                id,
                title: item,
                status: 'new'
            }
        })
    }

    const onUpdateAll = (updatedStatus) => {
        const updatedTodos = {
            ...todos
        };
        Object.keys(updatedTodos).forEach((key) => {
            updatedTodos[key] = {
                ...updatedTodos[key],
                status: updatedStatus
            }
        })

        setTodos(updatedTodos)
    }

    const deleteTodo = (id) => {
        if(todos[id]){
            const updatedTodos = {...todos};
            delete updatedTodos[id];
            setTodos(updatedTodos);
        }
    }

    const onUpdateHandler = (id, updatedObj) => {
        if(todos[id]){
            const updatedTodos = {...todos};
            updatedTodos[id] = updatedObj;
            setTodos(updatedTodos);
        }
    }

    console.log(selectedStatus);

    const list = useMemo(()=>{
        return Object.values(todos).filter((value)=>{
            if(selectedStatus === 'All'){
                return true;
            }
            else if(selectedStatus === 'Active'){
                return value.status === 'new'
            }
            else {
                return value.status === 'done'
            }

        })
    },[selectedStatus, todos])

    const leftCount = useMemo(()=>{
        return Object.values(todos).filter((value)=>{
            return value.status === 'new';
        }).length;
    },[todos])

    const onCompleteHandler = (id) =>{
        const item = todos[id];
        setTodos({
            ...todos,
            [id]: {
                ...item,
                status: item.status === 'new'? 'done' : 'new'
            }
        })
    }

    return (

        <div className='todoapp-container'>
            <div className={'todo-app'}>

                <Header addItem={addTodo} onUpdateAll={onUpdateAll}></Header>

                <ItemList 
                    list={list}
                    deleteTodo={deleteTodo}
                    onCompleteHandler={onCompleteHandler}
                    onUpdateHandler={onUpdateHandler}
                ></ItemList>
            
                <Footer leftCount={leftCount} selectedStatus={selectedStatus} onClearCompleted={()=>{
                    const updatedTodos = {...todos};
                    Object.keys(todos).forEach((key)=>{
                        if(todos[key].status === 'done'){
                            delete updatedTodos[key];
                        }
                    })
                    setTodos(
updatedTodos
                    )
                } } onStatusChange={setSelectedStatus}></Footer>
            </div>
           
        </div>
    )

}

export default TodoApp