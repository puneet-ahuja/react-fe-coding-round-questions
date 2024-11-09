import './ProductList.css'

import ProductItem from '../ProductItem/ProductItem';


const ProductList = ({
     products // TODO: We can fetch this from context
    }) => {

    return <div className='product-list'>
        {products && products.length > 0 && products.map((product)=>{
            return <ProductItem key={product.id} product={product}/>
        }) }

    </div>
}


export default ProductList;