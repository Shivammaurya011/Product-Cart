import React, { useState, useEffect } from "react";
import star from './star.png';
import './Products.css'

function Products(){


    const [user, setUser] = useState([]);
    const productArray = [];

    const getUser = async () => {
        console.log(user);
        fetch(
          "https://acciojob-module-7-sept-2022-default-rtdb.asia-southeast1.firebasedatabase.app/products.json"
        )
          .then((response) => response.json())
          .then((data) => {
            for (const prod in data) {
              productArray.push({
                img: data[prod].productImage,
                name: data[prod].productName,
                oldPrice: data[prod].oldPrice,
                newPrice: data[prod].newPrice,
              });
            }
            setUser(productArray);
            console.log(productArray);
          });
      };
      useEffect(() => {
        getUser();
      }, []);

    return(
        <div className="product-container">
            <h3>Products</h3>
            <div className="product-list">
                {user &&
                user.map((item) => (
                    <div key={item.id} className="product-item">
                        <img className="product-image" src={item.img} alt={item.name} />
                        <div className="item-body">
                            <p className="pName">{item.name}</p>
                            <div className="star-price-container">
                            <div className="start">
                                <img src={star} width={20} height={20} alt="Not fount" />
                                <img src={star} width={20} height={20} alt="Not fount" />
                                <img src={star} width={20} height={20} alt="Not fount" />
                                <img src={star} width={20} height={20} alt="Not fount" />
                                <img src={star} width={20} height={20} alt="Not fount" />
                            </div>
                            <div className="price">
                                <p className="oldPrice">₹{item.oldPrice}/-</p>
                                <p className="newPrice">₹ {item.newPrice}/-</p>
                            </div>
                        </div>
                        <button className="addToCart" > Add to Cart</button>
                    </div>             
                </div> 
                ))}
            </div>
        </div>
    )
}
export default Products;