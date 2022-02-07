import React from 'react';
import { Link } from 'react-router-dom';
import RoyalFamily from './RoyalFamily';
import Homepage from './Homepage';
import RoyalAssets from './RoyalAssets';
import Contact from './Contact';

const Navbar = () => {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to="" element={<Homepage/>}>Home</Link></li>
          <li><Link to="/royal-family" element={<RoyalFamily/> }>Royal Family</Link></li>
          <li><Link to="/royal-assets" element={<RoyalAssets/> }>Royal Assets</Link></li>
          <li><Link to="/contact" element={<Contact/> }>Contact us</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;