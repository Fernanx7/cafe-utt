import React from "react";
import styles from "./page.module.css";


const compras = () => {
  return (
    <div className={styles.main}>
      

      <div className={styles.shopping}> {/* Agrega una clase principal al main */}
        <h1 className={styles.h1}>Mi carrito</h1>
        <div className={styles.cartCont}>
          <div className={styles.items} id="cart-items">
            {/* Los artículos del carrito se agregarán aquí */}
          </div>
          <div className={styles.resumen}>
            <h2 className={styles.h2}>Resumen</h2>
            <div className="totals">
  <div class="total-container"> {/* Nuevo contenedor */}
    <span>Total: $</span>
    <span className={styles.span}>0.00</span>
  </div>
</div>
            <button className={styles.checkbutton}>Comprar</button>
            <div className={styles.pagos}>
              <img src="./icons8-mercado-pago.svg" alt="Mercado Pago" />
              <img src="./icons8-visa.svg" alt="Visa" />
              <img src="./icons8-mastercard.svg" alt="MasterCard" />
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default compras;