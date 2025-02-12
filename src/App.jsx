import { Routes, Route, Link } from "react-router-dom";

import Home from "./components/Home";
import PupDetails from "./components/Details";
import CreateAPlayer from "./components/CreateAPlayer";
import DeleteAPup from "./components/DeleteAPup";

const App = () => {
 

  return (
    <>
      <header>
        <h1>Puppy Bowl I</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/create">Create A Player</Link>
          <Link to="/delete">Delete a Bad Puppy</Link>
        </nav>
      </header>
      <div>
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/details/:id" element={ <PupDetails/> } />
          <Route path="/create" element={ <CreateAPlayer />} />
          <Route path="/delete" element={ <DeleteAPup /> } />
        </Routes>
      </div>
    </>
  )
}

export default App
