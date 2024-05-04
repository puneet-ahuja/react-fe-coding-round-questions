import { useState } from 'react'
import './Header.css'

const Header = ({
    addItem,
    onUpdateAll
}) => {

    const [isChecked , setIsChecked ] = useState(false);

    const onKeyDownHandler = (event) => {
        console.log('===>Value',event.target.value)
        if(event.key === 'Enter' && event.target.value.length > 0){
            addItem(event.target.value)
            event.target.value = ''
        }


    }


    return <>
        <header className='header'>Todos</header>
        <div className='input-box-container'>
            <input 
                type='checkbox' 
                checked={isChecked} 
                className='checkbox-markall'
                onChange={()=>{

                    const updatedCheckedValue = !isChecked;
                    setIsChecked(updatedCheckedValue);
                    onUpdateAll(updatedCheckedValue ? 'done': 'new')
            
                }
            }></input>
            <input type="text"
                className='input-box'
            
            placeholder="Add Item here"
                onKeyDown={onKeyDownHandler}
            ></input>
        </div>
    </>
}

export default Header;