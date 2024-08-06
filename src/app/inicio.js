import React from "react";
import styles from "./inicio.module.css"
import Link from "next/link";

const inicio = () => {
  return (
    <div className={styles.body}>

      <br />

      <div className={styles.boxx}>
        <section id="inicio">
          <img src="./portada.jpg" className={styles.portada} alt="portada" />
          <h1 className="h1-1">Bienvenidos</h1>
          <br />
          <p className="h1-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </section>
      </div>
      <br />

      <div className={styles.special}>
        <img
          className={styles.imgs}
          src="https://www.yateenteraste.mx/wp-content/uploads/2019/05/maruchan.jpg"
          alt="Especial de la Semana"
        />
        <h2 className="s-title">ESPECIAL DE LA SEMANA</h2>
        <br />
        <p className="s-desc">
          Cada semana, un plato único y delicioso elaborado con ingredientes
          frescos de temporada Una experiencia culinaria que combina tradición e
          innovación Opciones para todos los gustos ya sean amantes de la carne
          o vegetarianos No se pierda esta delicia gastronómica que enriquece su
          visita
        </p>
      </div>

      <br />
      <div className={styles.fav}>
        <div className={styles.fav1}>
          <img
            className={styles.image1}
            src="https://unareceta.com/wp-content/uploads/2017/02/sandwich-vegetal.jpg"
            alt="Sandwich"
          />

          <p className={styles.namee}>Sandwich</p>
        </div>
        <div className={styles.fav2}>
          <img
            className={styles.image1}
            src="https://cdn.britannica.com/13/234013-050-73781543/rice-and-chorizo-burrito.jpg"
            alt="Burrito"
          />

          <p className={styles.namee}>Burrito</p>
        </div>
        <div className={styles.fav3}>
          <img
            className={styles.image1}
            src="https://th.bing.com/th/id/OIP.DwdPof12T-G250jp6z5A4AHaE8?rs=1&pid=ImgDetMain"
            alt="Paletas de sabor"
          />

          <p className={styles.namee}>Paletas de sabor</p>
        </div>
      </div>

      <br />

      <center>
        <h3>Se te antoja algo más? Ve nuestro menú completo</h3>
      </center>
      <center>
        <Link href="/menu">
          <button className={styles.bm}>Menú</button>
        </Link>
      </center>

      <br />

      <h1>
        <center>¿Por qué pedir en línea?</center>
      </h1>
      <section id="menu">
        <div className={styles.menu}>
          <div className={styles.com1}>
            <div className={styles.prom1}>
              <center>
                <img
                  src="https://img.icons8.com/?size=100&id=1bcRmKcRbKIb&format=png&color=000000"
                  alt="Aparta tu comida en cualquier lugar"
                />
              </center>
              <h6 className={styles.h6}>Aparta tu comida en cualquier lugar</h6>
              <p className={styles.p}>Evita las largas filas con solo un CLICK</p>
            </div>
          </div>
          <div className={styles.com2}>
            <div className={styles.prom2}>
              <center>
                <img
                  src="https://img.icons8.com/?size=100&id=swVFuMRjFQ9c&format=png&color=000000"
                  alt="Entrega más rápida"
                />
              </center>
              <h6 className={styles.h6}>Entrega más rápida</h6>
              <p className={styles.p}>Solo llega, recoge y disfruta tu comida</p>
            </div>
          </div>
          <div className={styles.com3}>
            <center>
              <img
                src="https://img.icons8.com/?size=100&id=12089&format=png&color=000000"
                alt="Promociones"
              />
            </center>
            <div className={styles.prom3}>
            <h6 className={styles.h6}>Promociones</h6>
            <p className={styles.p}>
                Encuentra promociones y las comidas del día, ¡NO TE LO PIERDAS!
              </p>
            </div>
          </div>
        </div>
      </section>
      <br />

      <footer className={styles.footer}>
        <div className={styles.contactos}>
          <div className={styles.ayuda}>
            <h2 className={styles.h2}>Ayuda</h2>
            <ul>
              <li>
                <a href="#">Contáctanos</a>
              </li>
              <li>
                <a href="#">Horario de atención</a>
              </li>
              <li>
                <a href="#">Métodos de pago</a>
              </li>
              <li>
                <a href="#">Preguntas frecuentes</a>
              </li>
            </ul>
          </div>
          <div className={styles.acerca}>
          <h2 className={styles.h2}>Acerca de La Cafe</h2>
            <ul>
              <li>
                <a href="#">¿Quiénes somos?</a>
              </li>
              <li>
                <a href="#">Encuéntranos</a>
              </li>
            </ul>
          </div>
          <div className={styles.social}>
          <h2 className={styles.h2}>Síguenos</h2>
            <ul className={styles.ul}>
              <li>
                <a href="#">
                  <img
                    src="https://img.icons8.com/?size=50&id=118497&format=png"
                    alt="Facebook"
                  />
                </a>
              </li>
              <li>
                <a href="#">
                  <img
                    src="https://img.icons8.com/?size=50&id=118498&format=png"
                    alt="Twitter"
                  />
                </a>
              </li>
              <li>
                <a href="#">
                  <img
                    src="https://img.icons8.com/?size=50&id=118499&format=png"
                    alt="Instagram"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default inicio;