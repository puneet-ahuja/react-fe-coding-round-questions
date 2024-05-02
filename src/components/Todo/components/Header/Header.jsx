const Header = ({
    addItem
}) => {

    const onKeyDownHandler = (event) => {
        console.log('===>Value',event.target.value)
        if(event.key === 'Enter' && event.target.value.length > 0){
            console.log({
                targetValue: event.target.value
            })

            addItem(event.target.value)
            event.target.value = ''
        }


    }


    return <>
    <header className='header'>Todos</header>
    <div className='input-box'>
        <input type="text" placeholder="Add Item here"
            onKeyDown={onKeyDownHandler}
         ></input>
    </div>
    </>
}

export default Header;