import { Routes, Route, Link } from "react-router-dom";

import Home from "./components/Home";
import PupDetails from "./components/Details";
import CreateAPlayer from "./components/CreateAPlayer";

const App = () => {
 

  return (
    <>
      <header>
        <h1>Puppy Bowl I</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/create">Create A Player</Link>
        </nav>
      </header>
      <div>
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/details/:id" element={ <PupDetails/> } />
          <Route path="/create" element={ <CreateAPlayer />} />
        </Routes>
      </div>
    </>
  )
}

export default App
