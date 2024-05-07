import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Shop from "./Shop";
import Cart from "./Cart";
import About from "./About";
import GoToPay from "./GoToPay";
import HomePage from "./HomePage";
import { Provider } from "react-redux";
import store from "./store";
import { Link } from "react-router-dom";
import pic from "../Images/icons8-cart-50.png"
import pic2 from "../Images/לוגו.png"



export default function NavBar(){

  const a = { "text-decoration": "none", "color":"white", "top":"2%"}

    return (
        <Provider store={store}>
        <BrowserRouter>
        <nav class="navbar sticky-top navbar-light bg-light" className="navush">
                <ul className="ulnav" style={{ padding: 0, margin: 0 }}>
                    <img src={pic2} style={{"height":"100px"}}></img>
                    <li class="navbar-brand">< Link to="/homepage" style={a}>Home</Link></li>
                    <li class="navbar-brand"><Link to="/shop" style={a}>Shop</Link></li>
                    <li class="navbar-brand"><Link to="/cart" style={a}><img src={pic} style={{"height":"50px", "width": "50px", "color": "white"}}></img></Link></li>
                </ul>
            </nav>
          <Routes>
            <Route exact path="/homepage" element = {<HomePage/>}></Route>
            <Route exact path="/shop" element = {<Shop/>}></Route>
            <Route exact path="/cart" element = {<Cart/>}></Route>
            <Route exact path="/about" element = {<About/>}></Route>
            <Route exact path="/pay" element = {<GoToPay/>}></Route>
          </Routes>
        </BrowserRouter>
        </Provider>
    )
}