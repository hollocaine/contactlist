import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faQuestion } from '@fortawesome/free-solid-svg-icons';
//import './contact.css';

const Header = props => {
  const { branding } = props;
  const homeIcon = <FontAwesomeIcon icon={faHome} />;
  const plusIcon = <FontAwesomeIcon icon={faPlus} />;
  const questionIcon = <FontAwesomeIcon icon={faQuestion} />;
  return (
    <nav className="navbar navbar-exapnd-sm navbar-dark bg-danger mb-3 py-0">
      <div className="container">
        <Link to="/" className="navbar-brand">
          {branding}
        </Link>
        <div>
          <ul className="nav navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                {homeIcon}
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact/add" className="nav-link">
                {plusIcon}
                Add
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                {questionIcon}
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

// const headingStyle = {
//   color: 'green',
//   fontSize: '24px'
// };

Header.defaultProps = {
  branding: 'My App'
};
Header.propTypes = {
  branding: PropTypes.string.isRequired
};
export default Header;
