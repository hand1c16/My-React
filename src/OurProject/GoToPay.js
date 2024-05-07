import { useEffect} from "react"
import { useSelector } from "react-redux"

export default function GoToPay() {
    useEffect(() => { alert("Are you sure you want to go to pay?") }, [])
    const cartProducts = useSelector((state) => state.Cart)

    const totalAmount = cartProducts.reduce((acc, product) => acc + (product.cartqty * product.price), 0);
    return (
        <>
            <table class="table">
                <tr>
                    <th scope="col">Image</th>
                    <th scope="col">Product name</th>
                    <th scope="col">Price</th>
                    <th scope="col">Qty</th>
                    <th scope="col">Total</th>

                </tr>
                {cartProducts ? cartProducts.map((item, index) => (
                    <tr>
                        <td><img src={item.image} style={{ "height": "150px", "width": "100px" }}></img></td>
                        <td scope="row">{item.name}</td>
                        <td scope="row">₪{item.price}</td>
                        <td scope="row">{item.cartqty}</td>
                        <td>₪{item.price * item.cartqty}</td>

                    </tr>
                )) : <div>product are null</div>}
            </table>
            <p>Final Price: ₪{totalAmount} </p>
            <br></br>
            <button type="button" class="btn btn-outline-secondary">Pay Now</button>
        </>
    )
}