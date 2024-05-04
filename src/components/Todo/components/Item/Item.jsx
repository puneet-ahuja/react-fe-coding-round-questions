import './Item.css'
import { useState } from 'react';

const Item = ({
    title,
    id,
    status,
    onDelete,
    onCompleteHandler,
    onUpdateHandler
}) => {

    const [isEditable, setIsEditable] = useState(false);
    return (
    <div className={'item'}>
        {
            isEditable? <input type='text' className='item__title' defaultValue={title} onBlur={()=>{
                setIsEditable(false)
            }} autoFocus onKeyDown={(event)=>{
                if(event.key === 'Enter'){
                    onUpdateHandler(id, {
                        id,
                        title: event.target.value,
                        status
                    })
                    setIsEditable(false)
                }
                
            }}
            />: <div className='item__title' onDoubleClick={(event)=>{
                setIsEditable(!isEditable)
            }}
            >{title}</div>
        }
        <div className='button-wrapper'>
            <button className="update-status-button" onClick={()=>onCompleteHandler(id)}>{status === 'new'? 'Mark Complete':'Undo'}</button>
            <button className="delete-button" onClick={()=>onDelete(id)}>delete</button>
        </div>
    </div>
    );
}

export default Item;