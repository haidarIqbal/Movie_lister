import Form from "../common/form";
import Joi from "joi-browser";
class Register extends Form {
  state = {
    data: {
      email: "",
      password: "",
      username: "",
    },
    errors: {},
  };
  schema = {
    email: Joi.string().required().label("email"),
    password: Joi.string().required().label("Password").min(5),
    username: Joi.string().required().label("Username"),
  };
  doSubmit = () => {};

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <br />
        {this.renderInput("email", "Email", "email")}
        {this.renderInput("password", "Password", "password")}
        {this.renderInput("username", "Username")}

        {this.renderButton("Register")}
      </form>
    );
  }
}

export default Register;
