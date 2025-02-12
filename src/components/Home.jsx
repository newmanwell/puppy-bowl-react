import { useEffect, useState } from "react";
import { Link } from "react-router-dom"

const Home = () => {
  const [ allPuppies, setAllPuppies ] = useState([]);

  useEffect(() => {
    const getPuppies = async() => {
      try {
        const response = await fetch("https://fsa-puppy-bowl.herokuapp.com/api/2501-FTB-ET-WEB-FT/players");
        const dataObject = await response.json();
        const puppyArray = dataObject.data.players;
        console.log(puppyArray)
        setAllPuppies(puppyArray);
      } catch(error) {
        console.log(error);
      }
    }
    getPuppies();
  }, []);

  return (
        allPuppies.map((onePuppy) => {
          return (
            <Link to={`/details/${onePuppy.id}`} className="pup-container" key={ onePuppy.id }>
              <div>
                <img src={ onePuppy.imageUrl } alt="Puppy Image"/>
                <h2 >{ onePuppy.name }</h2>
              </div>
            </Link>
          )
        })
  )
}

export default Home;