import React from "react";
import styles from "./Form.module.css";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "", errors: {} };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    this.setState({ errors: { ...this.validateForm(this.state) } });
  }
  handleSubmit(event) {
    event.preventDefault();
    if (!Object.keys(this.state.errors).length) {
      alert("Datos completos");

      this.setState({ username: "", password: "", errors: {} });
    } else {
      alert("Debes corregir los errores");
      console.log(this.state.errors);
    }
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
    this.setState({ errors: { ...this.validateForm(this.state) } });
  }
  validateForm(state) {
    const errors = {};
    const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

    if (!state.username) {
      errors.usernamevoid = "El campo no debe estar vacio";
    }
    if (!regexEmail.test(state.username)) {
      errors.usernametype = "Debes colocar un correo valido";
    }
    if (state.username.length > 35) {
      errors.usernamelength = "El correo no debe tener mas de 35 caracteres";
    }
    if (state.password.length > 10 || state.password.length < 6) {
      errors.passwordlength =
        "La contraseña debe tener minimo 6 caracteres y maximo 10";
    }
    if (!/[0-9]/.test(state.password)) {
      errors.passwordincludes =
        "La contraseña debe tener minimo 1 caracter numerico";
    }

    return errors;
  }

  render() {
    return (
      <div className={styles.divForm}>
        <form
          onSubmit={this.handleSubmit}
          onClick={() => this.props.login(this.state)}
        >
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            value={this.state.username}
            onChange={this.handleChange}
            placeholder="Ingresa tu correo..."
            className={this.state.errors.usernametype && "warning"}
          />
          <p style={{ color: "red" }}>{this.state.errors.usernametype}</p>
          <hr />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
            placeholder="Ingresa tu contraseña..."
          />
          <p style={{ color: "red" }}>{this.state.errors.passwordlength}</p>
          <hr />
          <button type="submit">LOGIN</button>
        </form>
      </div>
    );
  }
}

export default Form;
