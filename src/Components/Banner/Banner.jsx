

const Banner = () => {

    return (
        <div className="bg-gradient-to-r from-black via-blue-900 to-purple-900 rounded-xl py-8 px-4 sm:py-12 sm:px-6 flex flex-col items-center justify-center text-center shadow-lg my-6">
            <div className="space-y-5">
                <img className="mx-auto" src="/src/assets/banner-main.png" alt="" />
                <h2 className="text-4xl font-bold text-white">Assemble Your Ultimate Dream 11 Cricket Team</h2>
                <h4 className="text-2xl text-gray-300 font-semibold">Beyond Boundaries Beyond Limits</h4>
                <button className="btn bg-amber-300 border-4 border-double border-amber-950 rounded-lg">Claim Free Credit</button>
            </div>
        </div>
    );
};

export default Banner;