import React, { Component } from 'react';

class AddContact extends Component {
  constructor(props) {
    super(props);
    this.nameInput = React.createRef();
    this.emailInput = React.createRef();
    this.phoneInput = React.createRef();
  }

  onSubmit = e => {
    e.preventDefault();
    const contact = {
      name: this.nameInput.current.value,
      email: this.emailInput.current.value,
      phone: this.phoneInput.current.value
    };
  };
  static defaultProps = {
    name: 'Fred Smith',
    email: 'alan@gmail.com',
    phone: '666-666-666'
  };

  render() {
    const { name, email, phone } = this.props;
    return (
      <div className="card mb-3">
        <div className="card-header">Add Contact</div>
        <div className="card-body">
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label htmlFor="name">
                <input
                  type="text"
                  name="name"
                  className="form-control form-control-lg"
                  placeholder="Enter Name..."
                  defaultValue={name}
                  ref={this.nameInput}
                />
              </label>
            </div>
            <div className="form-group">
              <label htmlFor="email">
                <input
                  type="email"
                  name="email"
                  className="form-control form-control-lg"
                  placeholder="Enter Email..."
                  defaultValue={email}
                  ref={this.emailInput}
                />
              </label>
            </div>
            <div className="form-group">
              <label htmlFor="phone">
                <input
                  type="text"
                  name="phone"
                  className="form-control form-control-lg"
                  placeholder="Enter Phone No..."
                  defaultValue={phone}
                  ref={this.phoneInput}
                />
              </label>
            </div>
            <input
              type="submit"
              value="Add Contact"
              className="btn btn-light btn-block"
            />
          </form>
        </div>
      </div>
    );
  }
}
export default AddContact;
