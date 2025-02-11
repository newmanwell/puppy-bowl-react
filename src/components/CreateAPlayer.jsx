
const CreateAPlayer = () => {
  return (
    <section className="new-player">
      <h2>Create A New Player</h2>
      <form>
        <input placeholder="puppy name" />
        <input placeholder="puppy breed" />
        <input placeholder="field or bench" />
        <input placeholder="image url" />
        <button>Submit Player</button>
      </form>
    </section>
  )
}

export default CreateAPlayer;