'use client';
import React, { useState } from "react";
import styles from "./page.module.css";
import Modal from "../modal";
import Link from "next/link";

const menu = () => {

  const [estadoModal1, cambiarEstadoModal1] = useState(false);
  const [estadoModal2, cambiarEstadoModal2] = useState(false);
  const [estadoModal3, cambiarEstadoModal3] = useState(false);
  const [estadoModal4, cambiarEstadoModal4] = useState(false);
  const [estadoModal5, cambiarEstadoModal5] = useState(false);
  const [estadoModal6, cambiarEstadoModal6] = useState(false);
  const [estadoModal7, cambiarEstadoModal7] = useState(false);
  const [estadoModal8, cambiarEstadoModal8] = useState(false);
  const [estadoModal9, cambiarEstadoModal9] = useState(false);
  const [estadoModal10, cambiarEstadoModal10] = useState(false);
  const [estadoModal11, cambiarEstadoModal11] = useState(false);
  const [estadoModal12, cambiarEstadoModal12] = useState(false);
  const [estadoModal13, cambiarEstadoModal13] = useState(false);
  const [estadoModal14, cambiarEstadoModal14] = useState(false);
  const [estadoModal15, cambiarEstadoModal15] = useState(false);
  const [estadoModal16, cambiarEstadoModal16] = useState(false);
  const [estadoModal17, cambiarEstadoModal17] = useState(false);
  const [estadoModal18, cambiarEstadoModal18] = useState(false);
  const [estadoModal19, cambiarEstadoModal19] = useState(false);
  const [estadoModal20, cambiarEstadoModal20] = useState(false);
  const [estadoModal21, cambiarEstadoModal21] = useState(false);
  const [estadoModal22, cambiarEstadoModal22] = useState(false);
  const [estadoModal23, cambiarEstadoModal23] = useState(false);
  const [estadoModal24, cambiarEstadoModal24] = useState(false);
  const [estadoModal25, cambiarEstadoModal25] = useState(false);

    return (
    <div className={styles.menu}>


      <center>
        <h1>Nuestro Menu</h1>
        <nav>
          <ul>
            <li>
              <a href="#comidar">Comida Rapida</a>
            </li>
            <li>
              <a href="#desayuno">Desayuno</a>
            </li>
            <li>
              <a href="#postres">Postres</a>
            </li>
            <li>
              <a href="#bebidas">Bebidas</a>
            </li>
            <li>
              <a href="#botanas">Botanas</a>
            </li>
          </ul>
        </nav>
      </center>

      <main className={styles.main}>
        <section className={styles.section} id="comidar">
          <h2>Comida Rapida</h2>

          <div class={styles.box}>
            <a class="t" onClick={() => cambiarEstadoModal1(!estadoModal1)}>
              <div class={styles.menuitem}>
                < img className={styles.imgp} src="https://babycocina.com/wp-content/uploads/2021/02/tacos-mexicanos-tradicionales.jpeg" />
                <div>
                  <h3 className={styles.h3}>Tacos tradicionales</h3>
                  <p className={styles.p}>Tacos simples pero inigualables en el sabor</p>
                  <b className={styles.b}>
                    <p className={styles.p}>$12</p>
                  </b>
                </div>
              </div>
            </a>

            <a class="t" onClick={() => cambiarEstadoModal2(!estadoModal2)}>
              <div class={styles.menuitem}>
                < img className={styles.imgp}
                  src="https://cdn.pixabay.com/photo/2020/02/18/03/07/plugs-4858335_1280.jpg"
                  alt="tacos dorados"
                />
                <div>
                  <h3 className={styles.h3}>Tacos Especiales</h3>
                  <p className={styles.p}>Tacos de harina</p>
                  <b className={styles.b}>
                    <p className={styles.p}>$23</p>
                  </b>
                </div>
              </div>
            </a>

            <a class="t" onClick={() => cambiarEstadoModal3(!estadoModal3)}>
              <div class={styles.menuitem}>
                < img className={styles.imgp}
                  src="https://cdn.pixabay.com/photo/2020/12/02/18/59/tacos-5798443_1280.jpg"
                  alt="Cereal con Leche"
                ></img>
                <div>
                  <h3 className={styles.h3}>Tacos Dorados</h3>
                  <p className={styles.p}>Taco fritos</p>
                  <b className={styles.b}>
                    <p className={styles.p}>$17</p>
                  </b>
                </div>
              </div>
            </a>

            <a class="t" onClick={() => cambiarEstadoModal4(!estadoModal4)}>
              <div class={styles.menuitem}>
                < img className={styles.imgp}
                  src="https://cdn.pixabay.com/photo/2022/05/25/21/28/burger-7221436_1280.jpg"
                  alt="Cereal con Leche"
                ></img>
                <div>
                  <h3 className={styles.h3}>Hamburguesas</h3>
                  <p className={styles.p}>Deliciosas Hamburguesas</p>
                  <b className={styles.b}>
                    <p className={styles.p}>$35</p>
                  </b>
                </div>
              </div>
            </a>

            <a class="t" onClick={() => cambiarEstadoModal5(!estadoModal5)}>
              <div class={styles.menuitem}>
                < img className={styles.imgp}
                  src="https://cdn.pixabay.com/photo/2020/06/01/15/37/tortilla-5247120_1280.jpg"
                  alt="Cereal con Leche"
                ></img>
                <div>
                  <h3 className={styles.h3}>Burritos</h3>
                  <p className={styles.p}>Con tortilla de harina</p>
                  <b className={styles.b}>
                    <p className={styles.p}>$35</p>
                  </b>
                </div>
              </div>
            </a>

            <a class="t" onClick={() => cambiarEstadoModal6(!estadoModal6)}>
              <div class={styles.menuitem}>
                < img className={styles.imgp}
                  src="https://gourmetdemexico.com.mx/wp-content/uploads/2024/03/torta.jpg"
                  alt="Cereal con Leche"
                ></img>
                <div>
                  <h3 className={styles.h3}>Tortas</h3>
                  <p className={styles.p}>Deliciosas</p>
                  <b className={styles.b}>
                    <p className={styles.p}>$25</p>
                  </b>
                </div>
              </div>
            </a>
          </div>
        </section>

        <section className={styles.section} id="desayuno">
          <h2>Desayuno</h2>
          <div className={styles.box}>
            <a class="t" onClick={() => cambiarEstadoModal7(!estadoModal7)}>
              <div class={styles.menuitem}>
                < img className={styles.imgp}
                  src="https://cdn7.kiwilimon.com/recetaimagen/24487/19178.jpg"
                  alt="Cereal con Leche"
                ></img>
                <div>
                  <h3 className={styles.h3}>Tostadas</h3>
                  <p className={styles.p}>Deliciosas</p>
                  <b className={styles.b}>
                    <p className={styles.p}>$15</p>
                  </b>
                </div>
              </div>
            </a>
            <a class="t" onClick={() => cambiarEstadoModal8(!estadoModal8)}>
              <div class={styles.menuitem}>
                < img className={styles.imgp}
                  src="https://i.blogs.es/3d5202/68887283_1614048452065816_2801099764039417856_o/1366_2000.jpg"
                  alt="Cereal con Leche"
                ></img>
                <div>
                  <h3 className={styles.h3}>Chalupas</h3>
                  <p className={styles.p}>Sabrosas chalupas de salsa roja y/o verde</p>
                  <b className={styles.b}>
                    <p className={styles.p}>$17</p>
                  </b>
                </div>
              </div>
            </a>

            <a class="t" onClick={() => cambiarEstadoModal9(!estadoModal9)}>
              <div class={styles.menuitem}>
                < img className={styles.imgp}
                  src="https://komalito.com/wp-content/uploads/2022/05/memelas_presentacion-1024x768.jpg"
                  alt="Cereal con Leche"
                ></img>
                <div>
                  <h3 className={styles.h3}>Memelas</h3>
                  <p className={styles.p}>Sabrosas memelas de salsa roja y/o verde</p>
                  <b className={styles.b}>
                    <p className={styles.p}>$17</p>
                  </b>
                </div>
              </div>
            </a>

            <a class="t" onClick={() => cambiarEstadoModal10(!estadoModal10)}>
              <div class={styles.menuitem}>
                < img className={styles.imgp}
                  src="https://d2j6dbq0eux0bg.cloudfront.net/images/50348138/2234774859.jpg"
                  alt="Cereal con Leche"
                ></img>
                <div>
                  <h3 className={styles.h3}>Huevos</h3>
                  <p className={styles.p}>Deliciosos huevos al gusto</p>
                  <b className={styles.b}>
                    <p className={styles.p}>$32</p>
                  </b>
                </div>
              </div>
            </a>

            <a class="t" onClick={() => cambiarEstadoModal11(!estadoModal11)}>
              <div class={styles.menuitem}>
                < img className={styles.imgp}
                  src="https://www.isabeleats.com/wp-content/uploads/2018/02/enfrijoladas-recipe-small-5-650x973.jpg"
                  alt="Enfrijoladas"
                ></img>
                <div>
                  <h3 className={styles.h3}>Enfrijoladas</h3>
                  <p className={styles.p}>Muy buenas</p>
                  <b className={styles.b}>
                    <p className={styles.p}>$35</p>
                  </b>
                </div>
              </div>
            </a>

            <a class="t" onClick={() => cambiarEstadoModal12(!estadoModal12)}>
              <div class={styles.menuitem}>
                < img className={styles.imgp}
                  src="https://th.bing.com/th/id/OIP.pCyFE5pYiKkFzZKXMbMw_gHaHT?rs=1&pid=ImgDetMain"
                  alt="Enfrijoladas"
                ></img>
                <div>
                  <h3 className={styles.h3}>Enchiladas</h3>
                  <p className={styles.p}>Muy buenas</p>
                  <b className={styles.b}>
                    <p className={styles.p}>$38</p>
                  </b>
                </div>
              </div>
            </a>

            <a class="t" onClick={() => cambiarEstadoModal13(!estadoModal13)}>
              <div class={styles.menuitem}>
                < img className={styles.imgp}
                  src="https://cdn.kiwilimon.com/recetaimagen/20864/9713.jpg"
                  alt="Enfrijoladas"
                ></img>
                <div>
                  <h3 className={styles.h3}>Chilaquiles</h3>
                  <p className={styles.p}>Muy buenas</p>
                  <b className={styles.b}>
                    <p className={styles.p}>$38</p>
                  </b>
                </div>
              </div>
            </a>
          </div>
        </section>

        <section className={styles.section} id="postres">
          <h2>Postres</h2>
          <div className={styles.box}>
            <a class="t" onClick={() => cambiarEstadoModal14(!estadoModal14)}>
              <div class={styles.menuitem}>
                < img className={styles.imgp}
                  src="https://th.bing.com/th/id/OIP.Ge0uuxoFLsiwsKXYUHrhwAHaE8?rs=1&pid=ImgDetMain"
                  alt="Enfrijoladas"
                ></img>
                <div>
                  <h3 className={styles.h3}>Coctel de frutas</h3>
                  <p className={styles.p}>Rico</p>
                  <b className={styles.b}>
                    <p className={styles.p}>$17</p>
                  </b>
                </div>
              </div>
            </a>

            <a class="t" onClick={() => cambiarEstadoModal15(!estadoModal15)}>
              <div class={styles.menuitem}>
                < img className={styles.imgp}
                  src="https://mx.hola.com/imagenes/estar-bien/20190906148837/es-sana-la-gelatina/0-716-337/gelatina-t.jpg"
                  alt="Enfrijoladas"
                ></img>
                <div>
                  <h3 className={styles.h3}>Gelatina</h3>
                  <p className={styles.p}>Fria y de diferentes sabores</p>
                  <b className={styles.b}>
                    <p className={styles.p}>$17</p>
                  </b>
                </div>
              </div>
            </a>

            <a class="t" onClick={() => cambiarEstadoModal16(!estadoModal16)}>
              <div class={styles.menuitem}>
                < img className={styles.imgp}
                  src="https://d1uz88p17r663j.cloudfront.net/original/eaf1276f7dd96582fd3fb26af427113c_CARLOTA_DE_PAY_DE_LIMON.jpg"
                  alt="Enfrijoladas"
                ></img>
                <div>
                  <h3 className={styles.h3}>Carlota</h3>
                  <p className={styles.p}>Fria y sabrosa</p>
                  <b className={styles.b}>
                    <p className={styles.p}>$17</p>
                  </b>
                </div>
              </div>
            </a>

            <a class="t" onClick={() => cambiarEstadoModal17(!estadoModal17)}>
              <div class={styles.menuitem}>
                < img className={styles.imgp}
                  src="https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/A2A25AFB-3186-4F11-AF69-576F977C1258/Derivates/a54a3592-8ffc-4e7d-a6c1-3ebe590491ab.jpg"
                  alt="Enfrijoladas"
                ></img>
                <div>
                  <h3 className={styles.h3}>Hot Cakes</h3>
                  <p className={styles.p}>Suavecito</p>
                  <b className={styles.b}>
                    <p className={styles.p}>$25</p>
                  </b>
                </div>
              </div>
            </a>
          </div>
        </section>

        <section className={styles.section} id="bebidas">
          <h2>Bebidas</h2>
          <div className={styles.box}>
            <a class="t" onClick={() => cambiarEstadoModal18(!estadoModal18)}>
              <div class={styles.menuitem}>
                < img className={styles.imgp}
                  src="https://th.bing.com/th/id/OIP.smlckffkQGA3l00ZmizP3AHaE5?rs=1&pid=ImgDetMain"
                  alt="Enfrijoladas"
                ></img>
                <div>
                  <h3 className={styles.h3}>Licuados</h3>
                  <p className={styles.p}>Sabrosos</p>
                  <b className={styles.b}>
                    <p className={styles.p}>$20</p>
                  </b>
                </div>
              </div>
            </a>

            <a class="t" onClick={() => cambiarEstadoModal19(!estadoModal19)}>
              <div class={styles.menuitem}>
                < img className={styles.imgp}
                  src="https://th.bing.com/th/id/OIP.6po16osEaP55h6sR9HaP6wHaDt?rs=1&pid=ImgDetMain"
                  alt="Enfrijoladas"
                ></img>
                <div>
                  <h3 className={styles.h3}>Bebidas Calientes</h3>
                  <p className={styles.p}>Para combatir el frio</p>
                  <b className={styles.b}>
                    <p className={styles.p}>$10 - $20</p>
                  </b>
                </div>
              </div>
            </a>
            </div>
        </section>

        <section className={styles.section} id="botanas">
          <h2>Botanas</h2>
          <div className={styles.box}>
            <a class="t" onClick={() => cambiarEstadoModal20(!estadoModal20)}>
              <div class={styles.menuitem}>
                < img className={styles.imgp}
                  src="https://th.bing.com/th/id/R.1e6f8992c508aa49e557e27779a180ec?rik=MOeYexyGFwesoA&pid=ImgRaw&r=0"
                  alt="papas a la francesa"
                ></img>
                <div>
                  <h3 className={styles.h3}>Papas a la francesa</h3>
                  <p className={styles.p}>Crujientes</p>
                  <b className={styles.b}>
                    <p className={styles.p}>$25</p>
                  </b>
                </div>
              </div>
            </a>

            <a class="t" onClick={() => cambiarEstadoModal21(!estadoModal21)}>
              <div class={styles.menuitem}>
                < img className={styles.imgp}
                  src="https://th.bing.com/th/id/R.9b37aa266754fde480a23b3ee3893c62?rik=qXMsMaVTxIfNpg&riu=http%3a%2f%2frecetinas.com%2fwp-content%2fuploads%2f2017%2f10%2fsalchipapas.jpg&ehk=On2NmrydnhKVuQKEXGzk%2bLJtGKe7IYc7ORC48ow6Q94%3d&risl=&pid=ImgRaw&r=0"
                  alt="salchipapas"
                ></img>
                <div>
                  <h3 className={styles.h3}>Salchipapas</h3>
                  <p className={styles.p}>Deliciosa combinacion</p>
                  <b className={styles.b}>
                    <p className={styles.p}>$35</p>
                  </b>
                </div>
              </div>
            </a>

            <a class="t" onClick={() => cambiarEstadoModal22(!estadoModal22)}>
              <div class={styles.menuitem}>
                < img className={styles.imgp}
                  src="https://th.bing.com/th/id/OIP.ULmBXayNe_lAPi0n5UaxgAHaD2?rs=1&pid=ImgDetMain"
                  alt="maruchan"
                ></img>
                <div>
                  <h3 className={styles.h3}>Sopa maruchan</h3>
                  <p className={styles.p}>Rapida y deliciosa</p>
                  <b className={styles.b}>
                    <p className={styles.p}>$20</p>
                  </b>
                </div>
              </div>
            </a>

            <a class="t" onClick={() => cambiarEstadoModal23(!estadoModal23)}>
              <div class={styles.menuitem}>
                < img className={styles.imgp}
                  src="https://th.bing.com/th/id/R.23f14e654bec50f1c13d2f5e975effc4?rik=Gs%2bBNtl3LdUMxQ&pid=ImgRaw&r=0"
                  alt="banderillas"
                ></img>
                <div>
                  <h3 className={styles.h3}>Banderillas</h3>
                  <p className={styles.p}>Crujientes pero esponjosas</p>
                  <b className={styles.b}>
                    <p className={styles.p}>$12</p>
                  </b>
                </div>
              </div>
            </a>

            <a class="t" onClick={() => cambiarEstadoModal24(!estadoModal24)}>
              <div class={styles.menuitem}>
                < img className={styles.imgp}
                  src="https://th.bing.com/th/id/R.ebc81952239c0e8f218ebd0da83fe4dd?rik=Ty5aGKnPvQQvUw&pid=ImgRaw&r=0"
                  alt="Nachos"
                ></img>
                <div>
                  <h3 className={styles.h3}>Nachos</h3>
                  <p className={styles.p}>Cubiertos de queso derretido</p>
                  <b className={styles.b}>
                    <p className={styles.p}>$50</p>
                  </b>
                </div>
              </div>
            </a>

            <a class="t" onClick={() => cambiarEstadoModal25(!estadoModal25)}>
              <div class={styles.menuitem}>
                < img className={styles.imgp}
                  src="https://th.bing.com/th/id/OIP.OcVOs44GqLbINSeHVLJnwgHaHa?rs=1&pid=ImgDetMain"
                  alt="Enfrijoladas"
                ></img>
                <div>
                  <h3 className={styles.h3}>Dedos de queso</h3>
                  <p className={styles.p}>Sabrosos</p>
                  <b className={styles.b}>
                    <p className={styles.p}>$30</p>
                  </b>
                </div>
              </div>
            </a>
          </div>
        </section>

        {/* Modal 1*/}
        <Modal
          estado={estadoModal1}
          cambiarEstado={cambiarEstadoModal1}
          titulo=""
          Tacos
          descripcion="Deliciosos tacos de tortilla de maiz"
          precior="12"
          imagen="https://ramenparados.com/wp-content/uploads/2023/07/tragones-y-mazmorras-destacada-1-1000x583.jpg"
          op1="Enchilada"
          op2="Bistec"
          op3="Chorizo"
        ></Modal>

        {/* Modal 2*/}
        <Modal
          estado={estadoModal2}
          cambiarEstado={cambiarEstadoModal2}
          titulo="Hot Cakes"
          descripcion="Tacos con tortilla de harina y queso derretido"
          precior="23"
          imagen="https://cdn.pixabay.com/photo/2019/07/07/01/29/tofu-4321561_1280.jpg"
          op1="Enchilada"
          op2="Chorizo"
          op3="Bistec"
        ></Modal>

        {/* Modal 3*/}
        <Modal
          estado={estadoModal3}
          cambiarEstado={cambiarEstadoModal3}
          titulo="Tacos Dorados"
          descripcion="Tacos de tortilla frita"
          precior="17"
          imagen="https://cdn.pixabay.com/photo/2018/04/27/19/32/food-3355655_1280.jpg"
          op1="Pollo"
          op2="Quesillo"
          op3="Chorizo"
        ></Modal>

        {/* Modal 4*/}
        <Modal
          estado={estadoModal4}
          cambiarEstado={cambiarEstadoModal4}
          titulo="Hamburguesas"
          descripcion="Deliciosas hamburguesas de diferentes ingredientes todas con un sabor muy especial"
          precior="35"
          imagen="https://cdn.pixabay.com/photo/2022/07/15/18/16/beef-burger-7323692_1280.jpg"
          op1="Clasica"
          op2="Hawaiana"
          opr2="7"
          op3="BBQ"
          opr3="7"
        ></Modal>

        {/* Modal 5*/}
        <Modal
          estado={estadoModal5}
          cambiarEstado={cambiarEstadoModal5}
          titulo="Burrito"
          descripcion="Burritos rellenos de carne"
          precior="35"
          imagen="https://cdn.pixabay.com/photo/2016/08/01/20/10/mexican-food-1561970_960_720.jpg"
          op1="Bistec"
          op2="Enchilada"
          op3="Tinga"
        ></Modal>

        {/* Modal 6*/}
        <Modal
          estado={estadoModal6}
          cambiarEstado={cambiarEstadoModal6}
          titulo="Tortas"
          descripcion="Bolillo"
          precior="25"
          imagen="https://th.bing.com/th/id/OIP.3RwoCwrwMxw2n_UymVyx6gHaE8?rs=1&pid=ImgDetMain"
          op1="Salchica"
          op2="Bistec"
          op3="Enchilada"
        ></Modal>

        {/* Modal 7*/}
        <Modal
          estado={estadoModal7}
          cambiarEstado={cambiarEstadoModal7}
          titulo="Tostadas"
          descripcion="Deliciosas tostadas"
          precior="15"
          imagen="https://consalyazucar.com/cdn/recipes/tostadas_de_salpicon.jpg"
          op1="Sencillas"
          op2="Con carne"
          opr2="10"
        ></Modal>

        {/* Modal 8*/}
        <Modal
          estado={estadoModal8}
          cambiarEstado={cambiarEstadoModal8}
          titulo="Chalupas"
          descripcion="De salsa verde o roja"
          precior="17"
          imagen="https://th.bing.com/th/id/OIP.4aii47ydQI_hRKYh22PLKQHaFj?w=736&h=552&rs=1&pid=ImgDetMain"
          op1="Verdes"
          op2="Rojas"
          op3="Combinadas"
        ></Modal>

        {/* Modal 9*/}
        <Modal
          estado={estadoModal9}
          cambiarEstado={cambiarEstadoModal9}
          titulo="Memelitas"
          descripcion="De salsa verde o roja"
          precior="17"
          imagen="https://th.bing.com/th/id/OIP.4aii47ydQI_hRKYh22PLKQHaFj?w=736&h=552&rs=1&pid=ImgDetMain"
          op1="Verdes"
          op2="Rojas"
          op3="Combinadas"
        ></Modal>

        {/* Modal 10 toca cambio*/}
        <Modal
          estado={estadoModal10}
          cambiarEstado={cambiarEstadoModal10}
          titulo="Huevos"
          descripcion="Huevitos al gusto"
          precior="32"
          imagen="https://elperiban.com/media/menus/images/platillos/huevos-al-gusto-2_OUz6Vio.png"
          op1="A la mexicana"
          op2="Con Jamon"
          op3="Con Chorizo"
        ></Modal>

        {/* Modal 11*/}
        <Modal
          estado={estadoModal11}
          cambiarEstado={cambiarEstadoModal11}
          titulo="Enfrijoladas"
          descripcion="Tortilla cubierta de frijol molido"
          precior="35"
          imagen="https://www.isabeleats.com/wp-content/uploads/2018/02/enfrijoladas-recipe-small-5-650x973.jpg"
          op1="Sencillas"
          op2="Jarochas"
          opr2="10"
        ></Modal>

        {/* Modal 12*/}
        <Modal
          estado={estadoModal12}
          cambiarEstado={cambiarEstadoModal12}
          titulo="Enchiladas"
          descripcion="Tortilla"
          precior="38"
          imagen="https://thequick-witted.com/wp-content/uploads/2020/10/authentic-mexican-enchiladas-beautiful-chicken-enchiladas-recipe-jessica-gavin-of-authentic-mexican-enchiladas.jpg"
          op1="Verdes"
          op2="Rojas"
        ></Modal>

        {/* Modal 13*/}
        <Modal
          estado={estadoModal13}
          cambiarEstado={cambiarEstadoModal13}
          titulo="Chilaquiles"
          descripcion="Tortilla"
          precior="38"
          imagen="https://th.bing.com/th/id/OIP.NqSa2jyebR_jnCeWl7HGIAHaLH?rs=1&pid=ImgDetMain"
          op1="Verdes"
          op2="Rojos"
          op3="Bistec"
        ></Modal>

        {/* Modal 14*/}
        <Modal
          estado={estadoModal14}
          cambiarEstado={cambiarEstadoModal14}
          titulo="Coctel de fruta"
          descripcion="Refrescante coctel de fruta"
          precior="17"
          imagen="https://entrecampeonas.com/wp-content/uploads/2021/03/GettyImages-155440023-2048x1365.jpg"
        ></Modal>

        {/* Modal 15*/}
        <Modal
          estado={estadoModal15}
          cambiarEstado={cambiarEstadoModal15}
          titulo="Gelatina"
          descripcion="Deliciosa gelatina"
          precior="17"
          imagen="https://th.bing.com/th/id/OIP.FUMbGWsXr6-SoHdlZmX3bAHaJ4?rs=1&pid=ImgDetMain"
        ></Modal>

        {/* Modal 16*/}
        <Modal
          estado={estadoModal16}
          cambiarEstado={cambiarEstadoModal16}
          titulo="Carlota"
          descripcion="De galleta maria"
          precior="17"
          imagen="https://th.bing.com/th/id/R.5c267e75fb9532293e3afb886b5b67f3?rik=kHbqwRG2MIZxVw&pid=ImgRaw&r=0"
        ></Modal>

        {/* Modal 17*/}
        <Modal
          estado={estadoModal17}
          cambiarEstado={cambiarEstadoModal17}
          titulo="Hot Cakes"
          descripcion="Esponjosos"
          precior="25"
          imagen="https://th.bing.com/th/id/OIP.mgc0jg_fgg0j4kfh9cpNXwHaE7?rs=1&pid=ImgDetMain"
        ></Modal>

        {/* Modal 18*/}
        <Modal
          estado={estadoModal18}
          cambiarEstado={cambiarEstadoModal18}
          titulo="Licuados"
          descripcion="Siempre vienen bien"
          precior="20"
          imagen="https://th.bing.com/th/id/R.18fe2115db5595edf5c1a43283729e71?rik=8o3aX6JRi7kzjg&riu=http%3a%2f%2fwww.supichka.com%2ffiles%2fimages%2f367%2fsmuti_s_banan_i_yagodi_1.jpg&ehk=c9vTkpz7ZxXqfT1d7TIX39d2lenGTA0PcIiaIeHTvew%3d&risl=&pid=ImgRaw&r=0"
          op1="Platano"
          op2="Chocolate"
          op3="Fresa"
          opr3="5"
        ></Modal>

        {/* Modal 19*/}
        <Modal
          estado={estadoModal19}
          cambiarEstado={cambiarEstadoModal19}
          titulo="Bebidas Calientes"
          descripcion="Con variedad"
          precior="10"
          imagen="https://th.bing.com/th/id/R.81a50fb3043c23e759460e18b91fa71d?rik=GsQ3KQGBGvR%2frA&pid=ImgRaw&r=0"
          op1="Cafe"
          op2="Te"
          op3="Chocolate caliente"
          opr3="10"
        ></Modal>

        {/* Modal 20*/}
        <Modal
          estado={estadoModal20}
          cambiarEstado={cambiarEstadoModal20}
          titulo="Papas a la francesa"
          descripcion="Con ketchup, mayonesa y mostaza"
          precior="25"
          imagen="https://cdn.shopify.com/s/files/1/0401/9421/2000/products/patatas-onduladas.jpg?v=1593026614"
        ></Modal>

        {/* Modal 21*/}
        <Modal
          estado={estadoModal21}
          cambiarEstado={cambiarEstadoModal21}
          titulo="Salchipapas"
          descripcion="Con ketchup, mayonesa y mostaza"
          precior="35"
          imagen="https://elmen.pe/wp-content/uploads/2023/02/SALCHIPAPA-scaled.jpg"
        ></Modal>

        {/* Modal 22*/}
        <Modal
          estado={estadoModal22}
          cambiarEstado={cambiarEstadoModal22}
          titulo="Sopa maruchan"
          descripcion="Instantanea"
          precior="20"
          imagen="https://th.bing.com/th/id/OIP.JzCiq8K6ecjvCVfYS7ovpAAAAA?rs=1&pid=ImgDetMain"
        ></Modal>

        {/* Modal 23*/}
        <Modal
          estado={estadoModal23}
          cambiarEstado={cambiarEstadoModal23}
          titulo="Banderillas"
          descripcion="Muy ricas"
          precior="12"
          imagen="https://th.bing.com/th/id/R.d9fec5a3ea19586f280dba87b5e997b2?rik=eRU2hTcdxzqc4g&riu=http%3a%2f%2fwww.wikihow.com%2fimages%2f0%2f0d%2fMake-Homemade-Corndogs-Intro.jpg&ehk=v0cq0LjbyUD5ueCbabnyUOpz%2fWOHQ8FloQxesE1hzGY%3d&risl=1&pid=ImgRaw&r=0"
        ></Modal>

        {/* Modal 24*/}
        <Modal
          estado={estadoModal24}
          cambiarEstado={cambiarEstadoModal24}
          titulo="Nachos"
          descripcion="Crujientes"
          precior="50"
          imagen="https://th.bing.com/th/id/OIP.nGw30UpjknlrU2N7eUep9gHaGl?rs=1&pid=ImgDetMain"
        ></Modal>

        {/* Modal 25*/}
        <Modal
          estado={estadoModal25}
          cambiarEstado={cambiarEstadoModal25}
          titulo="Dedos de queso"
          descripcion="Crujientes"
          precior="30"
          imagen="https://th.bing.com/th/id/R.cefd3f58acfd97cfc510f0f87cfcfed1?rik=BDxhz1Lt2olAjw&riu=http%3a%2f%2f2.bp.blogspot.com%2f-2FF7QB-pNgg%2fU5oro8H4pwI%2fAAAAAAAACH8%2fYqISEfY3Mww%2fs1600%2f20140611_202215.jpg&ehk=v1FwLiR4jgqKCv533Z4juBVtDbkWIMpU9f5CKISkNwg%3d&risl=&pid=ImgRaw&r=0"
        ></Modal>
      </main>

</div>
    );
  };

export default menu;