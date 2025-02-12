import { useState } from "react";

const DeleteAPup = () => {
  const [puppyId, setPuppyId] = useState("")

  const deletePuppy = async(event) => {
    event.preventDefault();
    
    fetch(`https://fsa-puppy-bowl.herokuapp.com/api/2501-FTB-ET-WEB-FT/players/`, {
      method: "DELETE"
    });
    try {
      const response = await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/2501-FTB-ET-WEB-FT/players/${puppyId}`, {
        method: "DELETE"
      });

      const result = await response.json();
      
      setPuppyId("");
    } catch(error) {
      alert(error);
    }
  }

  return (
    <section className="delete-player">
      <h2>Delete a Bad Puppy</h2>
      <form onSubmit={deletePuppy}>
        <input placeholder="ID Number" onChange={(event) => {setPuppyId(event.target.value)}} />
        <button>Delete</button>
      </form>
    </section>
  )
}

export default DeleteAPup