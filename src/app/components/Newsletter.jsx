import React from 'react';

const NewsLetter = () => {
  return (
    <div className="w-full flex justify-center items-center py-7">
      <div className="p-8 rounded">
        <h2 className="w-full text-2xl font-semibold mb-4 text-center">Subscribe to Our Newsletter</h2>
        <form className="space-y-4">
          <div className="relative rounded-md border border-gray-300 focus-within:border-blue-500">
            <input
              type="email"
              id="email"
              className="w-full py-3 px-4 rounded-md focus:outline-none"
              placeholder="Enter your email address"
            />
            <button
              type="submit"
              className="absolute inset-y-0 right-0 px-4 py-3 bg-blue-500 text-white rounded-md"
            >
              Subscribe
            </button>
          </div>
        </form>
        <p className="mt-4 text-center text-gray-500 text-sm">
          Get the latest updates directly to your inbox.
        </p>
      </div>
    </div>
  );
};

export default NewsLetter;
