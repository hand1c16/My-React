import { useDispatch, useSelector } from "react-redux"
import { addToCart } from "./Actions/CartAction"
import { decreaseQty } from "./Actions/ProductAction"


export default function Shop(){
    const p = useSelector((state) => state.Products)
    const dispatch = useDispatch()
    const card = {"width":"290px","height":"600px;", "margin":"7px", "background-color":"white" }

    return(
        <>
            {p? p.map((item, index)=>(   
                <div class="card" style={card}>
                    <img class="card-img-top" src={item.image} alt="Card image cap" style={{"height":"290px","width":"288px"}}></img>
                    <div class="card-body">
                        <p class="card-title">{item.name}</p>
                        <h5 class="card-text">{item.description}</h5>
                        <h6 class = "card-text">Price: ₪{item.price}</h6>
                        <h6 class = "card-text">Qty: {item.qty}</h6>
                        <button type="button" class="btn btn-outline-secondary" onClick={function(event){dispatch(addToCart(item)); dispatch(decreaseQty(item.id))}}>Add To Cart</button>
                    </div>
              </div>
            )): <div>product are null</div>}
        </>
        )    
}