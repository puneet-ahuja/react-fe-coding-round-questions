import './Footer.css'

const Footer = ({
    leftCount,
    onClearCompleted,
    onStatusChange
}) => {
    return  <footer className='footer'>
    <div className="status">{leftCount} left</div>
    <div className="switch-state">
        <button className='status-button' onClick={()=>onStatusChange('All')}>All</button>
        <button className='status-button' onClick={()=>onStatusChange('Active')}>Active</button>
        <button className='status-button' onClick={()=>onStatusChange('Completed')}>Completed</button>

    </div>
    <button className='complete-clear' onClick={onClearCompleted}>Clear Completed</button>
</footer> 
}

export default Footer;
