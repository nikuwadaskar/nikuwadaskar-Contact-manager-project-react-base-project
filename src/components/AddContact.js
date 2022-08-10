import React from "react";

class AddContact extends React.Component {
  state = {
    name: "",
    phone: "",
    email: "",
  };

  add = (e) => {
    e.preventDefault();
    if (this.state.name === "" || this.state.phone === "" || this.state.email === "") {
      alert("ALl the fields are mandatory!");
      return;
    }
    this.props.addContactHandler(this.state);
    this.setState({ name: "", phone: "", email: "" });
    this.props.history.push("/");
  };
  render() {
    return (
      <div className="ui main">
        <h2>Add Contact</h2>
        <form className="ui form" onSubmit={this.add}>
          <div className="field">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={this.state.name}
              onChange={(e) => this.setState({ name: e.target.value })}
            />
          </div>

          <div className="field">
            <label>Contact Number</label>
            <input
              type="text"
              name="phone"
              placeholder="Contact Number"
              value={this.state.phone}
              onChange={(e) => this.setState({ phone: e.target.value })}
            />
          </div>

          <div className="field">
            <label>Email</label>
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={this.state.email}
              onChange={(e) => this.setState({ email: e.target.value })}
            />
          </div>
          <button className="ui violet button">Add <i className="plus square outline icon" style={{marginLeft: "5px"}}></i></button>
        </form>
      </div>
    );
  }
}

export default AddContact;
