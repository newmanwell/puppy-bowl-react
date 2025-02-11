import { Routes, Route } from "react-router-dom";
const App = () => {
 

  return (
    <>
      <h1>Puppy Bowl I</h1>
      <section id="routes">
        <Routes>
          <Route path="/details" element={<h2>testing</h2> } />
        </Routes>
      </section>
    </>
  )
}

export default App
