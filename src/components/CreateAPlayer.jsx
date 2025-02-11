import { useState } from "react";

const CreateAPlayer = () => {
  const [playerName, setPlayerName] = useState("");
  const [breed, setBreed] = useState("");
  const [status, setStatus] = useState("");
  const [pictureUrl, setPictureUrl] = useState("");

  return (
    <section className="new-player">
      <h2>Create A New Player</h2>
      <form>
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