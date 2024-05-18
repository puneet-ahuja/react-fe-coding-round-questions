import './ProductItem.css'


const ProductItem = ({ product }) => {

    const { title, thumbnail} = product;
    return <div className='product-item'>
        <img src={thumbnail} alt={title} className='product-item-img'></img>
        <p>{title}</p>

    </div>
}


export default ProductItem;