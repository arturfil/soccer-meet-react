import React, {useState, useEffect} from 'react';
import { getGames } from '../../../services/apiGames';
import Navigation from '../../functional/navigation/Navigation';

const Home = () => {
  const [games, setGames] = useState([])

  const fetchGames = () => {
    getGames().then(json => {
      if (json.error) {
        console.log("error");
      } else {
        setGames(json.data);
      }
    })
  }

  useEffect(() => {
    fetchGames()
  }, [])

  return (
    <>
      <Navigation/>
      <div className="container">
        <h1 className="mt-5" style={{textAlign: 'center'}}>Home Component</h1>
        <p>Below this</p>
        { games && games.map((game, i) => (
          <div key={i}>{game.Place}</div>
        ))}
        
      </div>
    </>
  )
}

export default Home;