import React from "react";
import styles from "../styles/Login.module.css";
import Image from "next/image";

function login() {
  return (
    <div className={styles.login}>
      <section className={styles.homeLogin}>
        <Image
          src="/logo_bota_fora.svg"
          alt="Logo"
          className={styles.logo}
          width={250}
          height={16}
        />
      </section>
      <section className={styles.formContainer}>
        <form action="" className={styles.form}>
          <label htmlFor="email" className={styles.label}>
            Email address
            <input
              id="email"
              type="email"
              name="email"
              placeholder="enter an valid email"
              className={styles.input}
            />
          </label>
          <label htmlFor="password" className={styles.label}>
            Password
            <input
              id="password"
              type="password"
              name="password"
              placeholder="enter a password"
              className={styles.input}
            />
          </label>
          <button type="submit" className="primary-button login-button">
            Log in
          </button>
          <a href="#" className={styles.forgotLogin}>
            Forgot my password
          </a>
          <button
            className={
              (styles.secundaryButton, styles.loginButton, styles.button)
            }
          >
            Sign up
          </button>
        </form>
      </section>
    </div>
  );
}

export default login;
