import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Consumer } from '../../context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortDown } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

class Contact extends Component {
  state = {
    showContactInfo: false
  };
  onDeleteClick = (id, dispatch) => {
    dispatch({
      type: 'DELETE_CONTACT',
      payload: id
    });
  };
  render() {
    const { id, name, email, phone } = this.props.contact;
    const { showContactInfo } = this.state;
    const sortDown = <FontAwesomeIcon icon={faSortDown} />;
    const times = <FontAwesomeIcon icon={faTimes} />;
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card card-body mb-3">
              <h4>
                {name}
                <span
                  style={{ cursor: 'pointer' }}
                  onClick={() =>
                    this.setState({
                      showContactInfo: !this.state.showContactInfo
                    })
                  }
                >
                  {sortDown}
                </span>
                <span
                  style={{ cursor: 'pointer', float: 'right', color: 'red' }}
                  onClick={this.onDeleteClick.bind(this, id, dispatch)}
                >
                  {times}
                </span>
              </h4>
              {showContactInfo ? (
                <ul className="list-group">
                  <li className="list-group-item">Email: {email}</li>
                  <li className="list-group-item">Phone: {phone}</li>
                </ul>
              ) : null}
            </div>
          );
        }}
      </Consumer>
    );
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired
};
export default Contact;
