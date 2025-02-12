import { useState } from "react";

const CreateAPlayer = () => {
  const [playerName, setPlayerName] = useState("");
  const [breed, setBreed] = useState("");
  const [status, setStatus] = useState("");
  const [pictureUrl, setPictureUrl] = useState("");

  const addPuppy = async(event) => {
    event.preventDefault();
    
    try {
      const response = await fetch("https://fsa-puppy-bowl.herokuapp.com/api/2501-FTB-ET-WEB-FT/players", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: playerName,
          breed: breed,
          status: status,
          imageUrl: pictureUrl
        })
      });

      const puppy = await response.json();
      setPlayerName("");
      setBreed("");
      setStatus("");
      setPictureUrl("");

    } catch(error) {
      alert(error);
    }
  }

  return (
    <section className="new-player">
      <h2>Create A New Player</h2>
      <form onSubmit={addPuppy}>
        <input placeholder="puppy name" onChange={(event) => {setPlayerName(event.target.value)}} value={playerName} />
        <input placeholder="puppy breed" onChange={(event) => {setBreed(event.target.value)}} value={breed} />
        <input placeholder="field or bench" onChange={(event) => {setStatus(event.target.value) }} value={status} />
        <input placeholder="image url" onChange={(event) => {setPictureUrl(event.target.value)}} value={pictureUrl} />
        <button>Submit Player</button>
      </form>
    </section>
  )
}

export default CreateAPlayer;