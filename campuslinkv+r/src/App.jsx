import './App.css';
import { Link } from 'react-router-dom';


function App() {

  return (
    <>
      <div className="contenedor-registro">
      <div className="contenedor-titulo">
        <h1>Campus<span className="morado">LINK</span></h1>
        <p>Únete a nuestra comunidad estudiantil</p>
        <p>
          Bienvenido a nuestra red social estudiantil. Regístrate ahora para
          conectarte con compañeros, acceder a recursos educativos y participar
          en eventos emocionantes.
        </p>
      </div>

      <div className="login">
        <div className="contenedor-login">
          <h1>REGISTRO</h1>
          <div className="nombre-input">
            <label htmlFor="input" className="text" style={{marginLeft: '-270px'}}>Nombre:</label>
            <input
              className="input"
              type="text"
              placeholder="ingresa tu nombre completo"
            />
          </div>

          <div className="nombre-input">
            <label htmlFor="input" className="text" style={{marginLeft: '-270px'}}>Apellidos:</label>
            <input
              className="input"
              type="text"
              placeholder="Ingresa tus apellidos"
            />
          </div>

          <div className="nombre-input">
            <label htmlFor="input" className="text" style={{marginLeft: '-210px'}}>Correo Electronico:</label>
            <input
              className="input"
              type="email"
              placeholder="Ingresa un correo electronico"
            />
          </div>

          <div className="nombre-input">
            <label htmlFor="input" className="text" style={{marginLeft: '-260px'}}>Contraseña:</label>
            <input
              className="input"
              type="password"
              placeholder="contraseña nueva"
            />
          </div>

          <div className="nombre-input">
            <label htmlFor="input" className="text" style={{marginLeft: '-195px'}}>Confirmar contraseña:</label>
            <input
              className="input"
              type="password"
              placeholder="confirmar contraseña"
            />
          </div>

          <div className="checkbox-terminos">
            <input className="checkbox-input" type="checkbox" />
            <label className="terms-checkbox">
              Al registrarte, aceptas nuestros Términos de Servicio y Política
              de Privacidad.
            </label>
          </div>

          <button className="registro-boton">Registrarme</button>
          <div className="separator"></div>
          <button className="registro-boton-google">
            <i className="fab fa-google icono-google"></i> Registrarme con Google
          </button>

          <div className="redireccion-login">
            <p>Ya tienes una cuenta?</p>
            <Link to="/login">Inicia secion aqui</Link>
          </div>
        </div>
      </div>
    </div>       
    </>

  );
}

export default App