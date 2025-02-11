import { Routes, Route, Link, BrowserRouter } from "react-router-dom";

import Home from "./components/Home";
import PupDetails from "./components/Details";

const App = () => {
 

  return (
    <>
      <header>
        <h1>Puppy Bowl I</h1>
        <nav>
          <Link to="/">Home</Link>
        </nav>
      </header>
      <div>
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/details/:id" element={ <PupDetails/> } />
        </Routes>
      </div>
    </>
  )
}

export default App
