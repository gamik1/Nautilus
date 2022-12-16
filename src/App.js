import Navigation from './Components/Navigation.Component/Navigation.Component';
import Footer from './Components/Footer.Component/Footer.Component';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from './Pages/Home.Page';
import Collection from './Pages/Collection.page';
import Stores from './Pages/Stores.Page';
import ContactUs from './Pages/Contact.Page';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/gallery" element={<Collection/>}/>
          <Route path="/stores" element={<Stores/>}/>
          <Route path="/contact" element={<ContactUs/>}/>
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
