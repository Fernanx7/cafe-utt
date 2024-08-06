import React from "react";
import styles from "./page.module.css";
import Link from "next/link";

const login = () => {
return (
    <div className={styles.main}>
<br/>
        <div className={styles.sesioncont}>
        <h2>Iniciar Sesión</h2>
          <div className={styles.sesionimg}>
            <img src="./burrito.jpg" alt="imagen demostrativo" />
          </div>
          <div className={styles.sesionform}>
            <form className={styles.form}>
              <img
                src="./cafe-Photoroom.png"
                className={styles.logoS}
                alt=""
              />
              <div className={styles.inputgroup}>
                <label htmlFor="usuario">Usuario:</label>
                <input type="text" id="usuario" name="usuario" required />
              </div>
              <div className={styles.inputgroup}>
                <label htmlFor="password">Contraseña:</label>
                <input type="password" id="password" name="password" required />
              </div>
              <button type="submit" className={styles.submitBtn}>
                Iniciar Sesión
              </button>
              <div className={styles.addbuttons}>
                <button type="button" className={styles.forgotPassword}>
                  Olvidé la contraseña
                </button>
                <Link href="/signup">
                  <button type="button" className={styles.createAccount}>
                    Crear cuenta
                  </button>
                </Link>
              </div>
            </form>
          </div>
        </div>

    </div>
  );
};

export default login;