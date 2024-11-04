import logo from './logo.svg';
import './App.css';
import FirstComponent from './lesson 1/FirstComponent';
import StateComponent from './lesson 2/StateComponent';
import UseHOC from './lesson 3/UseHOC';
import UseHOC2 from './lesson 3/UseHOC2';
import Home from './lesson 4/Home';
import Image1 from './lesson 4/Image1';
import Image2 from './lesson 4/Image2';
import Image3 from './lesson 4/Image3';
import Image4 from './lesson 4/Image4';
import BooksDetails from './lesson 5/BooksDetails';
import { Provider } from 'react-redux';
//import store from './lesson 5/store';
import store from "../src/OurProject/store"
import UseRef from './lesson 7/UseRef';
import FormHook from './lesson 7/FormHook';
import Shop from './OurProject/Shop';
import HomePage from './OurProject/HomePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cart from './OurProject/Cart';
import About from './OurProject/About';
import GoToPay from './OurProject/GoToPay';
import NavBar from './OurProject/NavBar';
function App() {
  return (
    <div className="App">
      <header className="App-header">
      {/* <FirstComponent></FirstComponent> */}
      {/* <StateComponent></StateComponent> */}
      {/* <UseHOC></UseHOC>
      <UseHOC2></UseHOC2> */}
      {/* <Home>
        <Image1></Image1>
        <Image2></Image2>
        <Image3></Image3>
        <Image4></Image4>
        </Home> */}
        {/* <Provider store = {store}>
          <BooksDetails></BooksDetails>
        </Provider> */}
      {/* <UseRef></UseRef> */}
      {/*<FormHook></FormHook>*/}
      <Provider store={store}>
        
        <BrowserRouter>
        <NavBar></NavBar>
          <Routes>
            {/* <Route path="/" element = {<NavBar/>}>
              <Route index element = {<HomePage/>}/>
              <Route path="/shop" element = {<Shop/>}/>
              <Route path="/cart" element = {<Cart/>}/>
              <Route path="/pay" element = {<GoToPay/>}/>
            </Route> */}
            <Route index element = {<HomePage/>}></Route>
            <Route exact path="/shop" element = {<Shop/>}></Route>
            <Route exact path="/cart" element = {<Cart/>}></Route>
            <Route exact path="/about" element = {<About/>}></Route>
            <Route exact path="/pay" element = {<GoToPay/>}></Route>
          </Routes>
        </BrowserRouter>
      </Provider>
      </header>
    </div>
  );
}

export default App;
