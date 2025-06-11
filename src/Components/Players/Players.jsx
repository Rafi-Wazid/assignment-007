import { useEffect, useState } from "react";
import Player from "../Player/Player";
import { toast } from "react-toastify";
import { MdDeleteForever } from "react-icons/md";

const Players = ({ currentBalance, setCurrentBalance, selectedPlayers, setSelectedPlayers }) => {
    const [players, setPlayers] = useState([]);
    const [view, setView] = useState('available');

    useEffect(() => {
        fetch('players.json')
            .then(res => res.json())
            .then(data => setPlayers(data));
    }, []);

    const handleSelectPlayer = (player) => {
        if (selectedPlayers.length >= 6) {
            toast.error('Maximum players have been selected');
            return;
        }
        if (currentBalance < player.price) {
            toast.error('Not enough balance');
            return;
        }
        setSelectedPlayers([...selectedPlayers, player]);
        setCurrentBalance(currentBalance - player.price);
        toast.success(`Player ${player.name} selected successfully`);
    };

    const handleDeletePlayer = (player) => {
        setSelectedPlayers(selectedPlayers.filter(p => p.id !== player.id));
        setCurrentBalance(currentBalance + player.price);
    };

    return (
        <div className="mb-24">
            <div className="flex justify-between items-center py-8">
                <h1 className="text-xl font-bold">
                    {view === 'available' ? 'Available Players' : `Selected Player (${selectedPlayers.length}/6)`}
                </h1>
                <div className="flex">
                    <button
                        className={`btn ${view === 'available' ? 'bg-amber-300' : 'bg-gray-200'} mr-2`}
                        onClick={() => setView('available')}
                    >
                        Available
                    </button>
                    <button
                        className={`btn ${view === 'selected' ? 'bg-amber-300' : 'bg-gray-200'}`}
                        onClick={() => setView('selected')}
                    >
                        Selected ({selectedPlayers.length})
                    </button>
                </div>
            </div>

            {view === 'available' && (
                <div className="grid md:grid-cols-3 gap-4 justify-items-center">
                    {players.map(player => (
                        <Player
                            key={player.id}
                            player={player}
                            onSelect={handleSelectPlayer}
                            isSelected={selectedPlayers.some(p => p.id === player.id)}
                        />
                    ))}
                </div>
            )}

            {view === 'selected' && (
                <div>
                    
                    <div className="flex flex-col gap-4 justify-items-center">
                        {selectedPlayers.map(player => (
                            <div key={player.id} className="md:w-4/6 bg-white rounded-lg shadow-sm p-4 flex items-center justify-between transition duration-300 ease-in-out hover:shadow-md">
                                <div className="flex items-center">
                                    <div className="w-16 bg-gray-200 mr-4">
                                        <img src={player.cover_img} alt="" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold">{player.name}</h3>
                                        <p className="text-sm text-gray-600">{player.batting_hand}</p>
                                    </div>
                                </div>
                                <button
                                    onClick={() => handleDeletePlayer(player)}
                                    className="text-red-500"
                                >
                                    <MdDeleteForever />
                                </button>
                            </div>
                        ))}
                    </div>
                    {selectedPlayers.length < 6 && (
                        <button
                            onClick={() => setView('available')}
                            className="bg-amber-300 text-black px-4 py-2 mt-4 rounded-box font-bold"
                        >
                            ADD MORE PLAYER
                        </button>
                    )}
                </div>
            )}
        </div>
    );
};

export default Players;