import Joi from "joi-browser";
import Form from "../common/form";

class LoginForm extends Form {
  state = {
    data: {
      email: "",
      password: "",
    },
    errors: {},
  };

  schema = {
    email: Joi.string().required().label("Email"),
    password: Joi.string().required().label("Password"),
  };

  doSubmit = () => {};

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <br />
        {this.renderInput("email", "Email")}
        {this.renderInput("password", "Password")}

        {this.renderButton("login")}
      </form>
    );
  }
}

export default LoginForm;
