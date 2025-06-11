import { IoStarHalfSharp } from "react-icons/io5";
import { FiFlag } from "react-icons/fi";


const Player = ({ player, onSelect, isSelected }) => {
    const { name, rating, cover_img, role, batting_hand, price, country } = player;

    return (
        <div className="card w-96 bg-base-100 shadow-md rounded-lg overflow-hidden p-3">
            <figure>
                <img src={cover_img} alt={name} className="w-full h-52 object-cover" />
            </figure>
            <div className="card-body p-4">
                <div className="flex justify-between items-start">
                    <div>
                        <h3 className="card-title text-lg font-bold">{name}</h3>
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                            <span><FiFlag /></span>
                            <span>{country.name}</span>
                        </div>
                    </div>
                    <span className="badge badge-outline badge-sm">{role}</span>
                </div>
                <div className="mt-2 space-y-1 text-sm font-semibold text-gray-600">
                    <p className="flex items-center">
                        Rating: <IoStarHalfSharp className="ml-1 mr-1" /> {rating}
                    </p>
                    <p>{batting_hand}</p>
                    <p>Price: ${price}</p>
                </div>
                <div className="card-actions mt-3">
                    <button
                        className={`btn btn-soft btn-primary w-full ${isSelected ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 text-white'}`}
                        onClick={() => onSelect(player)}
                        disabled={isSelected}
                    >
                        {isSelected ? 'Selected' : 'Choose Player'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Player;