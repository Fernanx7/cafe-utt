import React from "react";
import styles from "./page.module.css";

const signup = () => {
    return (
    <div className={styles.sap}>


        <div className={styles.container}>
          <h2 className={styles.h2}>Formulario de Registro</h2>
          <form className={styles.form} id="registroForm">
            <label className={styles.label} htmlFor="nombre">Nombre:</label>
            <input className={styles.input} type="text" id="nombre" name="nombre" required />

            <label className={styles.label} htmlFor="apellido">Apellido:</label>
            <input className={styles.input} type="text" id="apellido" name="apellido" required />

            <label className={styles.label} htmlFor="email">Correo   
 Electrónico:</label>
            <input className={styles.input} type="email" id="email" name="email" required />

            <label className={styles.label} htmlFor="password">Contraseña:</label>
            <input className={styles.input} type="password" id="password" name="password" required   
 />

            <label className={styles.label} htmlFor="confirmPassword">Confirmar Contraseña:</label>
            <input className={styles.input}
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              required   

            />

            <center>
              <button className={styles.o} type="submit">
                Registrarse
              </button>
            </center>
          </form>
        </div>


    </div>
    );
};

export default signup;