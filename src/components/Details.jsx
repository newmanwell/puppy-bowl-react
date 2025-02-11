import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PupDetails = () => {
  const [onePuppy, setOnePuppy] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const getPuppyDetails = async() => {
      try {
      const response = await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/2501-FTB-ET-WEB-FT/players/${id}`);
      const detailObject = await response.json();
      const pupDetail = detailObject.data.player;
      setOnePuppy(pupDetail);
      } catch(error) {
        console.log(error);
      }
    }
    getPuppyDetails();
  }, []);

  return (
    <>
     {
      onePuppy.id ? 
        <section className="player-card">
            <section className="pup-detail">
              <h2 className="card-title">Player Card</h2>
              <h2>Name: { onePuppy.name }</h2>
              <h2>Breed: { onePuppy.breed }</h2>
              <h2>Team: { onePuppy.team.name }</h2>
              <img src={ onePuppy.imageUrl } alt="Puppy Image"/>
            </section>
        </section>
        :
        null
     }
    </>
  )
}

export default PupDetails