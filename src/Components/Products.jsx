import React from 'react'
import Card from './Card';

function Products() {
    const products = [
  {
    id: 1,
    name: "Classic Leather Boots",
    price: 120.00,
    category: "Footwear",
    image: "https://images.unsplash.com/photo-1520639889427-8c14470fc218",
    description: "Durable handcrafted leather boots for everyday wear.",
    rating: 4.5,
    inStock: true
  },
  {
    id: 2,
    name: "Minimalist Watch",
    price: 85.50,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
    description: "Sleek stainless steel watch with a leather band.",
    rating: 4.8,
    inStock: true
  },
  {
    id: 3,
    name: "Wireless Headphones",
    price: 199.99,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
    description: "Noise-canceling over-ear headphones with 30-hour battery life.",
    rating: 4.2,
    inStock: false
  }
];
const elements=products.map((value)=><h1>{value.name}</h1>)
console.log(elements);
  return (
    <div>
        {products.map((item,index)=>
        {
            return<Card key={item.id} value={item} but={index}  name="negm"/>
        })}
    </div>
  )
}

export default Products