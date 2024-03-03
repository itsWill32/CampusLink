import React from "react";
import { useState } from "react";

export function feed() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isconfiguracionModalOpen, setconfiguracionModalOpen] = useState(false);
  const [isEventoModalOpen, setEventoModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openconfiguracionModal = () => {
    setconfiguracionModalOpen(true);
  };

  const closeconfiguracionModal = () => {
    setconfiguracionModalOpen(false);
  };

  const openEventoModal = () => {
    setEventoModalOpen(true);
  };

  const closeEventoModal = () => {
    setEventoModalOpen(false);
  };
  return (
    <>
      {isconfiguracionModalOpen && (
        <div className="modal-configuracion">
          <div className="modal-contenedor-configuracion">
            <span className="close2" onClick={closeconfiguracionModal}>
              &times;
            </span>
            <nav className="columna-nav">
              <a href="#">Configuración</a>
              <a href="#">Administrar Contenido</a>
              <a href="#">Cerrar Sesión</a>
            </nav>
          </div>
        </div>
      )}

      {/* Modal */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <p>Agregar contenido Multimedia</p>
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <div className="modal-contentenedor">
              <div className="input-publicar-modal">
                <div className="perfil-publicar-modal">
                  <img
                    className="icono-img-publicar-modal"
                    src="foto.png"
                    alt=""
                  />
                </div>
                <form className="form-publicar-modal">
                  <input
                    className="input-home"
                    type="text"
                    placeholder="Buscar..."
                  />
                </form>
              </div>
              <div className="contenedor-contenido">
                <input type="file" />
              </div>
              <div className="botones-modal">
                <select>
                  <option value="opcion1">Publico</option>
                  <option value="opcion2">Privado</option>
                </select>
                <button>Publicar contenido</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modal */}
      {isEventoModalOpen && (
        <div className="modal-overlay">
          <div className="modal-evento">
            <p>Crear Evento</p>
            <span className="close" onClick={closeEventoModal}>
              &times;
            </span>
            <div className="modal-contentenedor-evento">
              <div className="multimedia-input">
                <img src="foto.png" alt="" />
              </div>
              <div className="acercaMi-evento">
                <p>Acerca Evento</p>
                <input
                  type="text"
                  placeholder="[Campo para compartir una breve descripción sobre el evento]"
                />
              </div>
              <div className="datos-evento-inicio">
                <div className="fecha-inicio">
                  <p>Fecha de inicio</p>
                  <input type="text" placeholder="00/00/00" />
                </div>
                <div className="hora-inicio">
                  <p>Hora de inicio</p>
                  <input type="text" placeholder="00:00 hrs" />
                </div>
              </div>
              <div className="datos-evento-inicio">
                <div className="fecha-inicio">
                  <p>Fecha de inicio</p>
                  <input type="text" placeholder="00/00/00" />
                </div>
                <div className="hora-inicio">
                  <p>Hora de inicio</p>
                  <input type="text" placeholder="00:00 hrs" />
                </div>
              </div>
              <div className="enlace-input">
                <p>Enlace externo al evento</p>
                <input type="text" placeholder="meet.com/234687515" />
              </div>
              <div className="enlace-input">
                <p>Ponentes</p>
                <input type="text" placeholder="nombre" />
              </div>
              <div className="contenedor-boton-evento">
                <button>Publicar evento</button>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="contenido-home">
        <div className="contenedor-header">
          <div className="contenedor-titulo">
            <h1>
              Campus<span className="blanco">LINK</span>
            </h1>
            <div className="contenedor-busqueda">
              <input
                className="input-home"
                type="text"
                placeholder="Buscar..."
              />
              <button className="button-home" type="submit">
                Buscar
              </button>
            </div>
          </div>
          <div className="botones-header">
            <button className="perfil-button">
              <img className="icono-perfil" src="perfil.png" alt="" />
            </button>
            <button className="ajuste-button" onClick={openconfiguracionModal}>
              <img className="icono-ajustes" src="ajuste.png" alt="" />
            </button>
          </div>
        </div>

        <div className="contenedor-body">
          <section className="contenedor-izquierdo">
            <div className="card-informacion">
              <h1>
                Campus<span className="morado">LINK</span>
              </h1>
              <p>Bienvenido a nuestra red social estudiantil.</p>
              <p>
                Conectate con compañeros, acceder a recursos educativos y
                participar en eventos emocionantes.
              </p>
            </div>

            <div className="botones-contenedor-izquierdo">
              <button className="boton-izquierdo">Grupos</button>
              <button className="boton-izquierdo">Articulos</button>
              <button className="boton-izquierdo">Comunidades</button>
              <button className="boton-izquierdo">Eventos</button>
            </div>
          </section>

          <section className="contenedor-principal">
            <div className="contenedor-publicar">
              <div className="input-publicar">
                <div className="perfil-publicar">
                  <img className="icono-img-publicar" src="foto.png" alt="" />
                </div>
                <form className="form-publicar">
                  <input
                    className="input-home"
                    type="text"
                    placeholder="Buscar..."
                  />
                </form>
              </div>
              <div className="tipo-publicacion">
                <button className="boton-tipo_publicacion" onClick={openModal}>
                  Agregar multimedia
                </button>
                <button
                  className="boton-tipo_publicacion"
                  onClick={openEventoModal}
                >
                  Evento
                </button>
                <button className="boton-tipo_publicacion">Articulo</button>
              </div>
            </div>
            <div className="contenedor-filtrar">
              <p>Filtrar por:</p>
              <select className="filtro" name="" id="">
                <option value="opcion1">Categorias: evento</option>
                <option value="opcion2">Articulo</option>
                <option value="opcion3">Comunicado</option>
              </select>
            </div>

            <div className="contenedor-publicaciones">
              <div className="card-publicacion">
                <div className="perfil-publicar">
                  <img className="icono-img-publicar" src="foto.png" alt="" />
                  <h1>Nombre Perfil</h1>
                </div>
                <div className="texto-publicacion">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Fugiat aperiam, cum aut, consequatur maiores iure numquam
                    delectus sed eveniet porro, distinctio explicabo libero esse
                    itaque rerum voluptatum dolor ullam! Corrupti.
                  </p>
                </div>
                <div className="contenedor-foto_publicacion">
                  <img className="foto-publicacion" src="foto.png" alt="" />
                </div>
                <div className="funciones-publicacion">
                  <div
                    className="funcion-Me_gusta"
                    id="corazon"
                    onclick="toggleMeGusta()"
                  >
                    <span id="meGustaTexto">0 Me gusta</span>
                  </div>
                  <div className="funcion-comentarios">
                    <span id="meGustaTexto">0 Comentarios</span>
                  </div>
                </div>
              </div>
              <div className="card-publicacion">
                <div className="perfil-publicar">
                  <img className="icono-img-publicar" src="foto.png" alt="" />
                  <h1>Nombre Perfil</h1>
                </div>
                <div className="texto-publicacion">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Fugiat aperiam, cum aut, consequatur maiores iure numquam
                    delectus sed eveniet porro, distinctio explicabo libero esse
                    itaque rerum voluptatum dolor ullam! Corrupti.
                  </p>
                </div>
                <div className="contenedor-foto_publicacion">
                  <img className="foto-publicacion" src="foto.png" alt="" />
                </div>
                <div className="funciones-publicacion"></div>
              </div>
              <div className="card-publicacion"></div>
            </div>
          </section>

          <section className="contenedor-derecho">
            <h1>
              Articulos<span className="morado"> Recientes</span>
            </h1>
            <div className="card-articulos-derecho">
              <div className="contenedor-img-card-articulos">
                <img src="foto.png" alt="" />
              </div>
              <h1>Nombre Articulo</h1>
              <button className="boton-izquierdo">Saber Mas</button>
            </div>
            <div className="card-articulos-derecho">
              <div className="contenedor-img-card-articulos">
                <img src="foto.png" alt="" />
              </div>
              <h1>Nombre Articulo</h1>
              <button className="boton-izquierdo">Saber Mas</button>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
