import './login.css'
export function login() {
  return (
    <>
        <div className="contenedor-inicio_sesion">
        <div className="contenedor-logo">
          <h1>
            Campus<span className="morado">LINK</span>
          </h1>
          <p>Únete a nuestra comunidad estudiantil</p>
          <p>
            ¡Bienvenido de nuevo! Por favor, inicia sesión para acceder a tu
            cuenta.
          </p>
        </div>

        <div className="inicio_sesion">
          <div className="contenedor-card-inicio_sesion">
            <h1>Inicio de Sesion</h1>
            <p>¡Bienvenido de nuevo! </p>
            <p>Por favor, inicia sesión para acceder a tu cuenta.</p>

            <div className="input-inicio_sesion">
              <label
                htmlFor="input"
                className="text"
                style={{ marginLeft: "-210px" }}
              >
                Correo Electronico:
              </label>
              <input
                className="input"
                type="email"
                placeholder="Ingresa un correo electronico"
              />
            </div>

            <div className="input-inicio_sesion">
              <label
                htmlFor="input"
                className="text"
                style={{ marginLeft: "-260px" }}
              >
                Contraseña:
              </label>
              <input
                className="input"
                type="password"
                placeholder="contraseña nueva"
              />
            </div>

            <button className="boton-inicio_sesion">Iniciar Sesion</button>
            <div className="separator"></div>
            <button className="boton-google-inicio_sesion">
              <i className="fab fa-google icono-google"></i> Inicio de sesion
              con Google
            </button>

            <div className="redireccion-inicio_sesion">
              <p>No tienes una cuenta?</p>
              <a href="#">Registrate ahora</a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
