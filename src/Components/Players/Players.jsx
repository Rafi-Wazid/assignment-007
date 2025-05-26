import { useEffect, useState } from "react";
import Player from "../Player/Player";



const Players = () => {

    const [players , setPlayers] = useState([])

    useEffect(() => {
        fetch('players.json')
        .then(res => res.json())
        .then(data => setPlayers(data))
    } , [])
   
    return (
        <div className="">
            <div className="flex justify-between items-center py-8">
            <h1 className="text-xl font-bold">Available Players :{}</h1>
            <div className="flex">
                <button className="btn bg-amber-300">Available</button>
                <button className="btn bg-amber-300">Selected</button>
            </div>
        </div>
        <div className="grid md:grid-cols-3 gap-4 justify-items-center">
            {
                players.map(player => <Player key={players.id} player={player}></Player>)
            }
        </div>
        </div>
    );
};

export default Players;