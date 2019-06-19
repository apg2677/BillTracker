import React, { Component } from "react";

class PasswordShowHide extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hidden: true,
      password: ""
    };

    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.toggleShow = this.toggleShow.bind(this);
  }

  handlePasswordChange(j) {
    this.setState({ password: j.target.value });
  }

  toggleShow() {
    this.setState({ hidden: !this.state.hidden });
  }

  componentDidMount() {
    if (this.props.password) {
      this.setState({ password: this.props.password });
    }
  }


  render() {
    return (
      <div>
        <input
          name="password"
          id="password"
          className="form-control"
          type={this.state.hidden ? "password" : "text"}
          value={this.state.password}
          onChange={this.handlePasswordChange}
          placeholder="Enter Password.."
          required={true}
        />
        <br></br>
        <button class="btn btn-outline-danger btn-sm" onClick={this.toggleShow}>Show / Hide</button>
      </div>
    );
  }
}

export default PasswordShowHide;
