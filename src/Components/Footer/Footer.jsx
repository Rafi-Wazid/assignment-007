const Footer = () => {
  return (
    <div className="footer flex flex-col items-center p-10 bg-gray-800 text-white">
      <div className="w-3/4 bg-gradient-to-r from-blue-100 via-pink-100 to-yellow-100 p-8 rounded-xl shadow-lg max-w-4xl mx-auto my-8 flex flex-col items-center text-center">
       <div className="text-black">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">Subscribe to our Newsletter</h2>
        <p className="text-gray-600 mb-6">Get the latest updates and news right in your inbox!</p>
        <div className="flex justify-center items-center gap-4 flex-col sm:flex-row">
          <input
            type="email"
            placeholder="Enter your email"
            className="input input-bordered w-full max-w-xs bg-white"
          />
          <button className="btn bg-gradient-to-r from-pink-500 to-yellow-500 text-white border-none">
            Subscribe
          </button>
        </div>
      </div>
      </div>
      <div className="text-center mb-8">
        <img
          src="/src/assets/logo-footer.png"
          alt="Cricket Logo"
          className="mx-auto w-24 h-24"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <span className="footer-title">About Us</span>
          <p className="text-gray-300 w-1/2">
            We are a passionate team dedicated to providing the best services to
            our customers.
          </p>
        </div>
        <div>
          <span className="footer-title">Quick Links</span>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-gray-300 hover:text-white">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-300 hover:text-white">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-300 hover:text-white">
                About
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-300 hover:text-white">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div>
          <span className="footer-title">Subscribe</span>
          <p className="text-gray-300 mb-4">
            Subscribe to our newsletter for the latest updates.
          </p>
          <div className="flex items-center gap-2">
            <input
              type="text"
              placeholder="Enter your email"
              className="input input-bordered w-64 bg-white"
            />
            <button className="btn bg-gradient-to-r from-orange-500 to-yellow-500 text-white">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="text-center mt-8 text-gray-500">
        ©2025 Your Company All Rights Reserved.
      </div>
    </div>
  );
};

export default Footer;
