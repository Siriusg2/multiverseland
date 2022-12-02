/* eslint-disable */
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
      alert("Los datos son correctos, pero no estas registrado");

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

    if (
      !state.username ||
      !regexEmail.test(state.username) ||
      state.username.length > 35
    ) {
      errors.username = "Debe ser:";
      errors.username1 = '- Un correo válido. Ejemplo: "alguien@algo.com"';
      errors.username2 = "- De menos de 35 caracterres";
    }

    if (
      state.password.length > 10 ||
      state.password.length < 6 ||
      !/[0-9]/.test(state.password)
    ) {
      errors.password = "La contraseña debe tener:";
      errors.password1 = "- Mínimo seis caracteres";
      errors.password2 = "- Máximo diez caracteres";
      errors.password3 = "- Al menos un caracter numérico";
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
          <div className={styles.hr}>
            <label htmlFor="username" className={styles.labels}>
              Username:
            </label>
            <input
              type="text"
              name="username"
              value={this.state.username}
              onChange={this.handleChange}
              placeholder="Ingresa tu correo..."
              className={styles.input}
            />
            <span className={styles.span}>
              {this.state.errors.username}
              <br />
              {this.state.errors.username1}
              <br />
              {this.state.errors.username2}
              <br />
            </span>
          </div>
          <br />
          <div className={styles.hr}>
            <label htmlFor="password" className={styles.labels}>
              Password:
            </label>
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
              placeholder="Ingresa tu contraseña..."
              className={styles.input}
            />
            <span className={styles.span}>
              {this.state.errors.password}
              <br />
              {this.state.errors.password1}
              <br />
              {this.state.errors.password2}
              <br />
              {this.state.errors.password3}
            </span>
          </div>
          <br />
          <div className={styles.divlogin}>
            <button type="submit" className={styles.buttonlogin}>
              LOGIN
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Form;
// eslint-disable-next-line linebreak-style
/* eslint-enable */
