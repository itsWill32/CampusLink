import './completeProfile.css';

export  function completeProfile() {
  return (
    <>
        
      <div className="contenedor-completar_perfil">
        <div className="contenedor-header">
          <div className="contenedor-titulo">
            <h1>
              Campus<span className="blanco">LINK</span>
            </h1>
            <div className="contenedor-busqueda">
              <form>
                <input
                  className="input-home"
                  type="text"
                  placeholder="Buscar..."
                />
                <button className="button-home" type="submit">
                  Buscar
                </button>
              </form>
            </div>
          </div>
          <div className="botones-header">
            <button className="perfil-button">
              <img className="icono-perfil" src="perfil.png" alt="" />
            </button>
            <button className="ajuste-button">
              <img className="icono-ajustes" src="ajuste.png" alt="" />
            </button>
          </div>
        </div>

        <div className="formulario-perfil">
          <h1>Completa <span className="blanco">tu perfil</span></h1>
          <div className="contenedor-formulario">
            <div className="card-formulario-izquuerdo">
              <div className="carrera-form">
                <label htmlFor="input" className="text">
                  Correo Electronico:
                </label>
                <input
                  className="input"
                  type="text"
                  placeholder="Ingresa un correo electronico"
                />
              </div>
              <div className="carrera-form">
                <label htmlFor="input" className="text">
                  ID Estudiante:
                </label>
                <input className="input" type="text" placeholder="xxxxxxxx" />
              </div>
              <div className="carrera-form">
                <label htmlFor="input" className="text">
                  Telefono:
                </label>
                <input
                  className="input"
                  type="text"
                  placeholder="123 456 7890"
                />
              </div>
              <div className="intereses-form">
                <label htmlFor="input" className="text">
                  Intereses:
                </label>
                <input
                  className="input"
                  type="text"
                  placeholder="(materias) (Deportes) (Comida) (hobbies)"
                />
              </div>
              <div className="redes_sociales-form">
                <p>Redes Sociales:</p>
                <div className="instagram-form">
                  <img src="instagram.png" alt="" />
                  <input
                    className="input"
                    type="text"
                    placeholder="@tuCuenta"
                  />
                </div>
                <div className="facebook-form">
                  <img src="facebook.png" alt="" />
                  <input
                    className="input"
                    type="text"
                    placeholder="@tuCuenta"
                  />
                </div>
                <div className="twiter-form">
                  <img src="gorjeo.png" alt="" />
                  <input
                    className="input"
                    type="text"
                    placeholder="@tuCuenta"
                  />
                </div>
              </div>
            </div>
            <div className="card-formulario-derecho">
              <div className="intereses-form">
                <label htmlFor="input" className="text">
                  Acerca de Mi:
                </label>
                <input
                  className="input"
                  type="text"
                  placeholder="[Campo para compartir una breve descripción sobre ti]"
                />
              </div>
              <div className="foto_perfil-form">
                <img src="perfil.png" alt="" />
                <div className="foto_perfil-form-input">
                  <label htmlFor="input" className="text">
                    Seleccionar Archivo:
                  </label>
                  <input className="input" type="file" placeholder="" />
                </div>
              </div>
              <div className="ubicacion-form">
                <p>Datos de ubicacion:</p>
                <div className="datos_calle-form">
                  <div className="calle-form">
                    <label htmlFor="input" className="text">
                      Calle
                    </label>
                    <input className="input" type="text" placeholder="" />
                  </div>
                  <div className="N_interno-form">
                    <label htmlFor="input" className="text">
                      N.int
                    </label>
                    <input className="input" type="text" placeholder="" />
                  </div>
                </div>
                <div className="datos_calle-form">
                  <div className="calle-form">
                    <label htmlFor="input" className="text">
                      Colonia
                    </label>
                    <input className="input" type="text" placeholder="" />
                  </div>
                  <div className="N_interno-form">
                    <label htmlFor="input" className="text">
                      C.P
                    </label>
                    <input className="input" type="text" placeholder="" />
                  </div>
                </div>
                <div className="datos_calle-form">
                  <div className="calle-form">
                    <label htmlFor="input" className="text">
                      Estado
                    </label>
                    <input className="input" type="text" placeholder="" />
                  </div>
                  <div className="N_interno-form">
                    <label htmlFor="input" className="text">
                      Pais
                    </label>
                    <input className="input" type="text" placeholder="" />
                  </div>
                </div>
              </div>
              <div className="contenedor-boton">
              <button className="boton-blanco">Guardar Cambios</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
