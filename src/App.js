import "./App.css";
import Clients from "./components/Clients";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Reservation from "./components/Reservation";
import Services from "./components/Services";

function App() {
  return (
    <div className="App">
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="./styles.css" />
        <title>food website | foodies.com</title>
        <Navbar/>
        <Home/>
        <Services/>
        <Clients/>
        <Reservation/>
    </div>
  );
}

export default App;
