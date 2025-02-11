import { Routes, Route, Link } from "react-router-dom";

import Home from "./components/Home";

const App = () => {
 

  return (
    <>
      <header>
        <h1>Puppy Bowl I</h1>
        <nav>
          <Link to="/">Home</Link>
        </nav>
      </header>
      <section>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details" element={<h2>testing</h2> } />
        </Routes>
      </section>
    </>
  )
}

export default App
