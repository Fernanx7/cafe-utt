import React from "react";
import styles from "./page.module.css";

const pedidos = () => {
  return (
    <div className={styles.main}>

<div className={styles.conte}>
    <div className={styles.contopciones}>
        Usuarios
        <div className={styles.botones}>Ingresar</div>
    </div>
    <div className={styles.contopciones}>
        Productos
        <div className={styles.botones}>Productos</div>
    </div>
    <div className={styles.contopciones}>
        Pedidos
        <div className={styles.botones}>Pedidos</div>
    </div>
    <div className={styles.contopciones}>
        Orden
        <div className={styles.botones}>Orden</div>
    </div>
</div>

  </div>
);
};

export default pedidos;