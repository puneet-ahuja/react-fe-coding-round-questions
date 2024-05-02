import data from './data';
import './Accordian.css'

import { useState } from 'react';


// Q. Is there a better way to implement on click handler?
// A. Yes, We can have a handler on the parent and haldle the click from there only.


// Q. Can we make in multiselect

const Accordian = () =>{

    const [ selectedItems, setSelectedItems ] = useState(new Set());
    const [isMultiSelectEnabled, setIsMultiSelecteElabled] = useState(false);

    const handleTitleClick = (id) => {

        if(isMultiSelectEnabled){
            const updatedSelectedItems = new Set(selectedItems);

            if(updatedSelectedItems.has(id)){
                updatedSelectedItems.delete(id);
            }
            else {
                updatedSelectedItems.add(id);
            }
            setSelectedItems(updatedSelectedItems)
            
        }
        else{
            if(selectedItems.size >= 1 && selectedItems.has(id)){
                setSelectedItems(new Set());
            }
            else {
                setSelectedItems(new Set([id]));
            }
        }

    }

    return <div className="accordian-wrapper">
            <button className={'switch-button'} onClick={()=>{
                setIsMultiSelecteElabled(!isMultiSelectEnabled)
            }}>
                { isMultiSelectEnabled ? 'Disable' : 'Enable'} Multi Select
            </button>
            <div className="accordian">
                {data && data.length > 0 && data.map((dataItem) => {
                    return (
                        // Key should always be there as it os required by the react for its optimizations.
                        <div className='accordian-item' key={dataItem.key}>
                            <div className={'accordian-title'} onClick={()=>{
                                handleTitleClick(dataItem.id)
                            }}>
                                <h3 >{dataItem.question}</h3>
                                <span>+</span>
                            </div>
                            {selectedItems.has(dataItem.id) && <span className='accordian-description'>{dataItem.answer}</span>}
                        </div>
                    )
                })}
                
            </div>
        </div>

}

export default Accordian;