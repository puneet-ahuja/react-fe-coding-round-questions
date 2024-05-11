import './CircleIndicators.css'

const CircleIndicators = ({
    length = 5,
    onCircleClickHandler,
    selectedIndex = 0
}) => {
    return <div className='circle-indicators-wrapper'>
    {[...Array(length)].map((_,index)=>{
        return <div className={`circle-indicator ${selectedIndex === index ? 'active-circle-indicator':''}`} onClick={()=>{onCircleClickHandler(index)}}></div>
    })}
    </div>

}


export default CircleIndicators