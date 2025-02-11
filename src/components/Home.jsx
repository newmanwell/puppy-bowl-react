import { useEffect, useState } from "react";

const Home = () => {
  const [ allPuppies, setAllPuppies ] = useState([]);

  useEffect(() => {
    const getPuppies = async() => {
      try {
        const response = await fetch("https://fsa-puppy-bowl.herokuapp.com/api/2501-FTB-ET-WEB-FT/players");
        const dataObject = await response.json();
        const puppyArray = dataObject.data.players;
        setAllPuppies(puppyArray);
      } catch(error) {
        console.log(error);
      }
    }
    getPuppies();
  }, []);
  console.log(allPuppies);

  return (
        allPuppies.map((onePuppy) => {
          return (
            <section className="pup-container" key={ onePuppy.id }>
              <div>
                <img src={ onePuppy.imageUrl } alt="Puppy Image"/>
                <h2 >{ onePuppy.name }</h2>
              </div>
            </section>
          )
        })
  )
}

export default Home;