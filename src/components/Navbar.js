import React from 'react';
import PropTypes from 'prop-types';

const Navbar = () => {
  return (
    <div className="border-b-indigo-500 h-12 bg-emerald-300">
      <h1>This is not the navbar</h1>
    </div>
  );
};

export default Navbar;

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
  title: 'Employee Information System',
};
