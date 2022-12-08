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

  handleSubmit(event) {
    event.preventDefault();
    if (!this.state.username.length && !this.state.password.length) {
      this.setState({
        ...this.state,
        errors: { ...this.validateForm(this.state) },
      });
    } else if (
      !Object.keys(this.state.errors).length &&
      this.state.username.length &&
      this.state.password.length
    ) {
      alert("Data is correct, but you aren't  registered");

      this.setState({ username: "", password: "", errors: {} });
    } else {
      alert("You must correct the mistakes");
    }
  }

  handleChange(event) {
    this.setState({ ...this.state, [event.target.name]: event.target.value });
    this.setState({
      errors: {
        ...this.validateForm({
          ...this.state,
          [event.target.name]: event.target.value,
        }),
      },
    });
  }
  validateForm({ username, password }) {
    const errors = {};
    const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

    if (!username) {
      errors.usernamevoid = 'The "Username" field  must not be empty';
    } else if (!regexEmail.test(username)) {
      errors.usernametype =
        'It must be a valid email. Example: "someone@something.com"';
    } else if (username.length > 35) {
      errors.usernamelength = "Must be less than 35 characters";
    }

    if (password.length === 0) {
      errors.passwordvoid = 'The "Password" field must not be empty';
    } else if (password.length < 6) {
      errors.password6 = "Must be at least 6 characters";
    } else if (!/[0-9]/.test(password)) {
      errors.passwordnum = "Must have at least 1 numeric character";
    } else if (password.length > 10) {
      errors.password10 = "Must have a maximum of 10 characters";
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
            <div className={styles.divLabelInput}>
              <label htmlFor="username" className={styles.labels}>
                Username:
              </label>
              <input
                type="text"
                name="username"
                value={this.state.username}
                onChange={this.handleChange}
                placeholder="Enter your email..."
                className={styles.input}
              />
            </div>
            <div className={styles.divSpan}>
              {this.state.errors.usernamevoid && (
                <p className={styles.span}>
                  -{this.state.errors.usernamevoid}{" "}
                </p>
              )}

              {this.state.errors.usernamelength && (
                <p className={styles.span}>
                  -{this.state.errors.usernamelength}
                </p>
              )}

              {this.state.errors.usernametype && (
                <p className={styles.span}>-{this.state.errors.usernametype}</p>
              )}
            </div>
            <br className={styles.br} />
          </div>
          <br />
          <div className={styles.hr}>
            <div className={styles.divLabelInput}>
              <label htmlFor="password" className={styles.labels}>
                Password:
              </label>
              <input
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.handleChange}
                placeholder="Enter your password..."
                className={styles.input}
              />
            </div>
            <div className={styles.divSpan}>
              {this.state.errors.passwordvoid && (
                <p className={styles.span}>-{this.state.errors.passwordvoid}</p>
              )}
              {this.state.errors.password10 && (
                <p className={styles.span}>-{this.state.errors.password10}</p>
              )}

              {this.state.errors.password6 && (
                <p className={styles.span}>-{this.state.errors.password6}</p>
              )}

              {this.state.errors.passwordnum && (
                <p className={styles.span}>-{this.state.errors.passwordnum}</p>
              )}
            </div>
          </div>
          <div className={styles.divButtonLogin}>
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
