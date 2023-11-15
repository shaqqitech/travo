import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="py-8 px-16 md:px-20 lg:px-24">
      <div className="container mx-auto px-4 text-center md:text-start">
        <div className="flex flex-wrap -mx-4">
          {/* Column 1 */}
          <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 px-4 mb-4">
            <div className="mb-4">
              <h2 className="text-xl font-bold mb-2">Travo</h2>
              <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla maximus pellentesque velit, eget.</p>
            </div>
            <div className="flex space-x-4 text-black text-2xl justify-center md:justify-start items-center">
              {/* React Icons for social media */}
              <FaFacebookF className='cursor-pointer' />
              <FaTwitter className='cursor-pointer' />
              <FaInstagram className='cursor-pointer' />
            </div>
          </div>
          
          {/* Column 2 */}
          <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 px-4 mb-4">
            <h2 className="text-xl font-bold mb-4">Quick Links</h2>
            <ul className="text-sm">
              <li className="mb-2"><a href="#">Home</a></li>
              <li className="mb-2"><a href="#">Category</a></li>
              <li className="mb-2"><a href="#">Blog</a></li>
              <li className="mb-2"><a href="#">About Us</a></li>
            </ul>
          </div>
          
          {/* Column 3 */}
          <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 px-4 mb-4">
            <h2 className="text-xl font-bold mb-4">Quick Links</h2>
            <ul className="text-sm">
              <li className="mb-2"><a href="#">FAQs</a></li>
              <li className="mb-2"><a href="#">Privacy Policy</a></li>
              <li className="mb-2"><a href="#">Term &amp; Conditions</a></li>
              <li className="mb-2"><a href="#">Support</a></li>
            </ul>
          </div>
          
          {/* Column 4 */}
          <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 px-4 mb-4">
            <h2 className="text-xl font-bold mb-4">Contact Us</h2>
            <p className="text-sm">123 Main Street<br />City, State<br />12345</p>
            <p className="text-sm mt-2">Email: info@example.com<br />Phone: 123-456-7890</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
