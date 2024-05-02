import './Item.css'

const Item = ({
    title,
    id,
    status,
    onDelete,
    onCompleteHandler
}) => {
    return <div className={'item'}>
        <div className='item__title'>{title}</div>
        <button className="update-status-button" onClick={()=>onCompleteHandler(id)}>{status === 'new'? 'Mark Complete':'Undo'}</button>
        <button className="delete-button" onClick={()=>onDelete(id)}>delete</button>
        </div>
}

export default Item;