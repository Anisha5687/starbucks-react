import React from "react";

const Footer = () => {
  return (
    <footer className="bg-green-900 text-white py-10">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <h3 className="font-bold mb-3">About Us</h3>
          <ul className="space-y-2 text-gray-300">
            <li>
              <a href="#" className="hover:underline">
                Our Heritage
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Coffeehouse
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Our Company
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-3">Responsibility</h3>
          <ul className="space-y-2 text-gray-300">
            <li>
              <a href="#" className="hover:underline">
                Diversity
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Community
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Ethical Sourcing
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Environmental Stewardship
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Learn More
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-300">
            <li>
              <a href="#" className="hover:underline">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                FAQs
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Customer Service
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Delivery
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Loyalty Program Terms
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Beverage Subscription
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Mobile App Terms
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Special Discount 25% Off
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-3">SOCIAL MEDIA</h3>
          <div className="flex space-x-4 mb-4">
            <a href="#" className="hover:underline">
              {" "}
              Instagram
            </a>
            <a href="#" className="hover:underline">
              {" "}
              Facebook
            </a>
            <a href="#" className="hover:underline">
              {" "}
              Twitter
            </a>
          </div>
          <div className="flex flex-col space-y-3">
            <button className="bg-black text-white px-4 py-2 rounded-lg flex items-center justify-center">
              Download on App Store
            </button>
            <button className="bg-white text-black px-4 py-2 rounded-lg flex items-center justify-center">
              Get it on Google Play
            </button>
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-600 text-center text-sm text-gray-400 py-4">
        <div className="flex justify-center space-x-6">
          <a href="#" className="hover:underline">
            Web Accessibility
          </a>
          <a href="#" className="hover:underline">
            Privacy Statement
          </a>
          <a href="#" className="hover:underline">
            Terms of Use
          </a>
          <a href="#" className="hover:underline">
            Contact Us
          </a>
        </div>
        <p className="mt-4">
          &copy; 2025 Starbucks Coffee Company. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
