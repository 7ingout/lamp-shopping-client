import React, {useState, useEffect} from 'react';
import './index.scss';
import axios from 'axios';

const MainPage = (props) => {
    const [ products, setProducts ] = useState([]);
    useEffect(()=>{
        axios.get("http://localhost:3000/products")
        .then((result)=>{
            const products = result.data.products;
            setProducts(products);
        }).catch((e)=>{
            console.log(e);
        })
    }, [])
 
    return (
        <div>
            <div id="main">
                <div id="banner">
                     {/* 바로 images 하면 public에 있는 images 들어감 */}
                    <img src="images/banners/banner1.png" alt="" />
                </div>
                <div id="product-list" className='inner'>
                    <h2>그린조명 최신상품</h2>
                    <div id="product-items">
                        {/* 나중에 map 이용해서 밑에꺼 8개 뿌려줄거임 */}
                        {products.map(product => (
                            <div className="product-card" key={product.id}>
                                <div className='product-img'>
                                    <img src={product.imgsrc} alt="" />
                                </div>
                                <div className='product-contents'>
                                    <span className='product-name'>제품명 {product.name}</span>
                                    <span className='product-price'>가격 {product.price}</span>
                                    <div className='product-seller'>
                                    <img src="images/icons/avatar.png" alt=""/>{product.seller}
                                    </div>
                                </div>
                            </div>
                        ))}   
                    </div>
                </div>
            </div>
        </div>
    );
};
export default MainPage;