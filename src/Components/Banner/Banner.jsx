

const Banner = () => {
    return (
        <div className="relative">
            <img className="w-full h-full" src="/src/assets/bg-banner.avif" alt="" />
            <div className="absolute ">
                <img src="/src/assets/banner-main.png" alt="" />
                <h2>Assemble Your Ultimate Dream 11 Cricket Team</h2>
                <h4>Beyond Boundaries Beyond Limits</h4>
                <button>Claim Free Credit</button>
            </div>
        </div>
    );
};

export default Banner;