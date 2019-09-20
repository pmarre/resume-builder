import React from 'react';

class PersonalInfo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fname: '',
      lname: '',
      tel: '',
      email: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    let change = {};
    change[event.target.name] = event.target.value;
    this.setState(change);
  }

  handleSubmit(event) {
    event.preventDefault();
    document.querySelector('form').style.display = 'none';
  }

  render() {
    return (
      <div className="form-container container-fluid">
        <div className="resumeHeader row">
          <div className="col">
            <h1 className="resume--name">{`${this.state.fname} ${this.state.lname}`}</h1>
            <span>{`Phone: ${this.state.tel} Email: ${this.state.email}`}</span>
          </div>
        </div>
        <div className="form-group row">
          <div className="col-md">
            <form className="form" onSubmit={this.handleSubmit}>
              <div className="row">
                <div className="col">
                  <label htmlFor="fname">First Name:</label>
                  <input
                    type="fname"
                    id="fname"
                    name="fname"
                    placeholder="Jane"
                    className="form-control"
                    value={this.state.value}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="col">
                  <label htmlFor="lname">Last Name:</label>
                  <input
                    type="lname"
                    id="lname"
                    name="lname"
                    placeholder="Doe"
                    className="form-control"
                    value={this.state.value}
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div className="form-group row">
                <div className="col">
                  <label htmlFor="phone">Phone Number:</label>
                  <input
                    type="tel"
                    id="phone"
                    name="tel"
                    placeholder="(555)-123-9876"
                    className="form-control"
                    value={this.state.value}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="col">
                  <label htmlFor="email">Email:</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="janedoe@email.com"
                    className="form-control"
                    value={this.state.value}
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div className="form-group row">
                <div className="col">
                  <input
                    type="submit"
                    value="Complete"
                    className="btn btn-primary"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default PersonalInfo;
