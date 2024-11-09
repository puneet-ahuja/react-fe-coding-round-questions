import Item from "../Item/Item";

const ItemList = ({
    list,
    deleteTodo,
    onCompleteHandler,
    onUpdateHandler
}) => {
    return <>{list && list.length > 0 &&
        list.map((item)=>{
            return <Item key={item.id} {...item} onDelete={deleteTodo}
            onCompleteHandler={onCompleteHandler}
            onUpdateHandler = {onUpdateHandler}
            ></Item>
        })
    }
    </>
}

export default ItemList;