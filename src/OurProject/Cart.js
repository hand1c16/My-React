import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addToCart, decreaseFromCart, removeFromCart } from "./Actions/CartAction";
import { addQty, decreaseQty } from "./Actions/ProductAction";
import { useNavigate } from "react-router-dom";


export default function Cart() {
  const cartProducts = useSelector((state) => state.Cart)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const MinQty = (item) => {
    debugger
    const product=cartProducts.find((p) => p.id === item.id)
    dispatch(addQty(product))
    if (product.cartqty !== 1){
        dispatch(decreaseFromCart(item.id))}
    else dispatch(removeFromCart(product))
    
  }

  return (
    <>
    
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Quantity</th>
            <th scope="col">Product Price</th>
            <th scope="col">Product Name</th>
            <th scope="col"></th>
          </tr>
        </thead>
        {cartProducts ? cartProducts.map((item) => (

          <tbody>
            <tr>
              <td><button type="button" class="btn btn-light" onClick={() => {MinQty(item)}}>-</button> {item.cartqty} <button type="button" class="btn btn-light" onClick={function () { dispatch(addToCart(item)); dispatch(decreaseQty(item.id)) }}>+</button></td>
              <td>₪{item.price}</td>
              <td scope="row">{item.name}</td>
              <td><img src={item.image} style={{ "height": "200px", "width": "133.3px" }}></img></td>
            </tr>
          </tbody>
        )) : <div>product are null</div>}
      </table>
      <button type="button" class="btn btn-outline-secondary" onClick={() => navigate("/pay")}>To Pay</button>
    </>
  )
}