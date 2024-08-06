import React, { useState } from "react";
import styled from "styled-components";

const modal = ({
  children,
  estado,
  cambiarEstado,
  titulo,
  descripcion,
  precior,
  imagen,
  op1,
  opr1,
  op2,
  opr2,
  op3,
  opr3,
}) => {
  const [quantity, setQuantity] = useState(1);
  const [optionPrice, setOptionPrice] = useState(null);
  const [showNotification, setShowNotification] = useState(false);

  const handleOptionChange = (event) => {
    const price = parseFloat(event.target.getAttribute("data-price"));
    setOptionPrice(price);
  };

  const handleAddToCart = () => {
    setShowNotification(true); // Muestra la notificación
    setTimeout(() => {
      setShowNotification(false); // Oculta la notificación después de 2 segundos
      cambiarEstado(false); // Cierra el modal después de ocultar la notificación
    }, 1500); // 2000 ms = 2 segundos
  };

  const totalPrice =
    precior * quantity + (optionPrice ? optionPrice * quantity : 0);

  const incrementQuantity = () => setQuantity(quantity + 1);
  const decrementQuantity = () => setQuantity(quantity > 1 ? quantity - 1 : 1);

  return (
    <>
      {estado && (
        <Overlay>
          <center>
            <div class="product-container">
              <div class="product-header">
                <h1>{titulo}</h1>
                <button
                  onClick={() => cambiarEstado(false)}
                  id="close-modal"
                  class="close-button"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-x"
                    viewBox="0 0 16 16"
                  >
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
                  </svg>
                </button>
              </div>
              <div class="product-content">
                <div class="product-image">
                  <img class="imad" src={imagen} alt="Imagen de referencia" />
                </div>
                <div class="product-details">
                  <p class="product-price">${precior}</p>
                  <p class="product-description">{descripcion}</p>

                  <div class="product-option">
                    <h3>Opciones</h3>

                    <div class="option-group">
                      <label className="option-item">
                        <span>{op1}</span>
                        <span className="option-price">+${opr1}</span>
                        <input
                          type="radio"
                          className="add-option"
                          name="meatOption"
                          data-price={opr1}
                          onChange={handleOptionChange}
                        />
                      </label>
                      <label className="option-item">
                        <span>{op2}</span>
                        <span className="option-price">+${opr2}</span>
                        <input
                          type="radio"
                          className="add-option"
                          name="meatOption"
                          data-price={opr2}
                          onChange={handleOptionChange}
                        />
                      </label>
                      <label className="option-item">
                        <span>{op3}</span>
                        <span className="option-price">+${opr3}</span>
                        <input
                          type="radio"
                          className="add-option"
                          name="meatOption"
                          data-price={opr3}
                          onChange={handleOptionChange}
                        />
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <div class="product-footer">
                <div class="quantity-selector">
                  <button
                    class="quantity-btn"
                    onClick={decrementQuantity}
                    id="decrease-quantity"
                  >
                    -
                  </button>
                  <span id="quantity">{quantity}</span>
                  <button
                    class="quantity-btn"
                    onClick={incrementQuantity}
                    id="agregarP"
                  >
                    +
                  </button>
                </div>
                <div class="action-buttons">
                  <button onClick={handleAddToCart} className="add-button">
                    Agregar y seguir comprando
                  </button>

                  <button id="close-modal" class="add-button primary">
                    Comprar Ahora ${totalPrice}
                  </button>

                  {showNotification && (
                    <div className="notification">
                      Producto agregado al carrito
                    </div>
                  )}
                </div>
              </div>
            </div>
          </center>

          {children}
        </Overlay>
      )}
    </>
  );
};

export default modal;

const Overlay = styled.div`

width: 100vw;
height: 100vh;
position: fixed;
top:0;
left: 0;
background: rgba(0,0,0,.5);
padding-top:170px;
align-items: center;
justify-content: center;

.product-container {
  max-width: 900px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
}

.product-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #e0e0e0;
  padding-bottom: 10px;
}

.product-header h1 {
  margin: 0;
}

.close-button {
  background-color: transparent;
  border: none;
  font-size: 1.2em;
  cursor: pointer;
  text-decoration: none;
}

.close-button:hover {
  background: #f2f2f2;
}

svg {
  width: 35px;
  height: 35px;
}

.product-content {
  display: flex;
  margin-top: 20px;
}

.product-image img {
  width: 225px;
  height: 283px;
  object-fit: fill;
}

.product-details {
  margin-left: 20px;
  flex: 1;
}

.product-price {
  font-size: 1.5em;
  color: #d10024;
}

.product-description {
  margin: 10px 0;
}

.product-option h3 {
  margin: 10px 0;
}

.required {
  color: orange;
  font-size: 0.9em;
}

.option-group {
  border: 1px solid #e0e0e0;
  padding: 10px;
  margin-bottom: 10px;
}

.option-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 5px;
  border-bottom: 0.5px solid #e0e0e0;
  padding: 12px;
  cursor: pointer;
}

.option-item:last-child {
  border-bottom: none;
}

.add-option {
  margin-left: 10px;
  pointer-events: none;
}

.option-price {
  margin-right: 10px;
  width: 60px;
  text-align: justify;
}

input {
  height: 20px;
  width: 20px;
}

.product-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #e0e0e0;
  padding-top: 10px;
  margin-top: 20px;
}

.quantity-selector {
  display: flex;
  align-items: center;
}

.quantity-btn {
  background-color: transparent;
  border: 1px solid #ccc;
  padding: 5px 10px;
  cursor: pointer;
}

.quantity-btn:hover {
  background-color: #f0f0f0;
}

#quantity {
  margin: 0 10px;
  font-size: 1.2em;
}

.action-buttons {
  display: flex;
  gap: 10px;
}

.add-button {
  padding: 10px 20px;
  border: none;
  cursor: pointer;
}

.add-button.primary {
  background-color: #d10024;
  color: #fff;
}

.add-button.primary:hover {
  background-color: #a8001b;
}

.modal-container {
  background-color: rgba(0, 0, 0, 0.55);
}

.notification {
  position: fixed;
  bottom: 10%;
  left: 42%;
  justify-content: space-between;
  right: 10%;
  background-color: #4caf50;
  color: white;
  padding: 15px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}


@media (max-width: 768px) {
  .product-container {
    padding:1px;
    width:90%;
    margin:5px auto;
  }

  .product-content {
    flex-direction: column;
  }

  .product-image img {
    width: 90%;
    height: auto;
    margin-bottom: 10px;
  }

  .product-details {
    margin-left: 0;
  }

  .option-group {
    font-size: 14px;
  }

  .product-footer {
    flex-direction: column;
    align-items: flex-start;
  }

  .quantity-selector {
    margin-bottom: 10px;
  }
}


`;
