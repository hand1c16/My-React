import { useState } from "react"

export default function StateComponent()
{
    const [products, setProducts] = useState([
        {
            name: "Midi Dress",
            price: 550
        }
    ])

    const AddProduct= (newProductObject) => {
        const newProducts = [...products, newProductObject]
        setProducts(newProducts)
    }

    const removeProduct = (index) =>{
        setProducts(currentProduct => currentProduct.filter((item, i)=> i !== index))
    }

    const updateProduct = (productName, index) => {
        const newProducts = [...products]
        newProducts[index].name=productName
        setProducts(newProducts)
    }

    const updateProductPrice = (productPrice, index) => {
        const newProducts = [...products]
        newProducts[index].price=productPrice
        setProducts(newProducts)
    }

    const [pName, setpName] = useState()
    const [pPrice, setpPrice] = useState()

    return(
        <>
        <table className="table table-dark">
           {products.map((item, index) => (
            <>
           <tr>
            <td><h3>product name: {item.name}</h3></td>
            <input placeholder="update product name" onChange={(e)=>updateProduct(e.target.value, index)}></input>
            <input placeholder="update product price" onChange={(e)=>updateProductPrice(e.target.value, index)}></input>
            <td><h3>product price: {item.price}</h3></td>
           </tr>
           </>
           ))
           } 
        </table>
        <input placeholder="new product name" onChange={(e)=>setpName(e.target.value)}></input>
        <input placeholder="new product price" onChange={(e)=>setpPrice(e.target.value)}></input>
        <button className="btn btn-info" onClick={()=>AddProduct({name: pName, price: pPrice})}>add product</button>
        <button className="btn btn-danger" onClick={()=>removeProduct(1)}>remove product</button>
        </>
    )
}