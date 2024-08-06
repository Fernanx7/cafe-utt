import Link from 'next/link';
import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <nav>
            <ul className="ul">
              <div className="left-section">
                <li>
                  <img
                    src="/cafe-Photoroom.png" 
                    className="Logo-principal"
                    alt="icon"
                  />
                </li>
                <h1 className="project">La Cafe UTT</h1>
              </div>
              <div className="right-section">
                <li className="l1">
                  <Link href="/">Inicio</Link>
                </li>
                <li className="l2">
                  <Link href="/menu">Menú</Link> 
                </li>
                <li className="l3">
                  <Link href="/pedidos">Pedidos</Link> 
                </li>
                <li className="l4">
  <div className="dropdown"> 
    <button className="icon-nav dropbtn"> 
      <img src="/user-svgrepo-com.svg" className="carrito" alt="" />
    </button>
    <div className="dropdown-content"> 
      <Link href="/login">Cuenta</Link>
      <a href="/pedidos">Mi pedido</a>
      <a href="/logout">Salir</a> 
    </div>
  </div>
</li>
                <li className="l5">
                  <Link href="/compras">
                    <button className="icon-nav">
                      <img
                        src="/basket-svgrepo-com.svg" 
                        className="carrito"
                        alt="Carrito" 
                      />
                    </button>
                  </Link>
                </li>
              </div>
            </ul>
          </nav>
        </header>
        {children} 
      </body>
    </html>
  );
}