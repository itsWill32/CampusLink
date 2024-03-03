"use client";
import { useState } from "react";

export function administrador() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isReportedModalOpen, setIsReportedModalOpen] = useState(false);
  const [isEliminarModalOpen, setIsEliminarModalOpen] = useState(false);
  const [isAlertaBloqueoModalOpen, setisAlertaBloqueoModalOpen] = useState(false);
  const [isAlertaEliminarModalOpen, setisAlertaEliminarModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openReportedModal = () => {
    setIsReportedModalOpen(true);
  };

  const closeReportedModal = () => {
    setIsReportedModalOpen(false);
  };

  const openEliminarModal = () => {
    setIsEliminarModalOpen(true);
  };

  const closeEliminarModal = () => {
    setIsEliminarModalOpen(false);
  };

  const openAlertaBloqueoModal = () => {
    setisAlertaBloqueoModalOpen(true);
  };

  const closeAlertaBloqueoModal = () => {
    setisAlertaBloqueoModalOpen(false);
  };

  const openAlertaEliminarModal = () => {
    setisAlertaEliminarModalOpen(true);
  };

  const closeAlertaEliminarModal = () => {
    setisAlertaEliminarModalOpen(false);
  };

  return (
    <>
      {/* Modales */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <p>LISTA DE USUARIOS ADMINISTRADORES</p>
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <div className="modal-contentenedor">
              <div className="input-publicar-modal">
                <form className="form-publicar-modal">
                  <input
                    className="input-modal"
                    type="text"
                    placeholder="Buscar Usuarios"
                  />
                </form>
                <div className="boton-buscar">
                  <button className="boton-modal" type="submit">
                    Buscar
                  </button>
                </div>
              </div>
              <div className="informacion-busqueda">
                <div className="ejemplo-busqueda">
                  <div className="nombre-busqueda">
                    <p>ejemplo usuario</p>
                  </div>
                  <div className="icono-usuario_encontrado">
                    <img src="boton-menos.png" alt="" />
                  </div>
                </div>
                <div className="ejemplo-busqueda">
                  <div className="nombre-busqueda">
                    <p>ejemplo usuario</p>
                  </div>
                  <div className="icono-usuario_encontrado">
                    <img src="boton-menos.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {isReportedModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <p>LISTA DE USUARIOS REPORTADOS</p>
            <span className="close" onClick={closeReportedModal}>
              &times;
            </span>
            <div className="modal-contentenedor">
              <div className="input-publicar-modal">
                <form className="form-publicar-modal">
                  <input
                    className="input-modal"
                    type="text"
                    placeholder="Buscar Usuarios"
                  />
                </form>
                <div className="boton-buscar">
                  <button className="boton-modal" type="submit">
                    Buscar
                  </button>
                </div>
              </div>
              <div className="informacion-busqueda">
                <div className="ejemplo-busqueda">
                  <div className="nombre-busqueda">
                    <p>ejemplo usuario</p>
                  </div>
                  <div className="icono-usuario_encontrado">
                    <img src="boton-menos.png" alt="" />
                  </div>
                  <div className="contenedor-boton_bloquear">
                    <button onClick={openAlertaBloqueoModal}>Bloquear</button>
                  </div>
                </div>
                <div className="ejemplo-busqueda">
                  <div className="nombre-busqueda">
                    <p>ejemplo usuario</p>
                  </div>
                  <div className="icono-usuario_encontrado">
                    <img src="boton-menos.png" alt="" />
                  </div>
                  <div className="contenedor-boton_bloquear">
                    <button onClick={openAlertaBloqueoModal}>Bloquear</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {isEliminarModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <p>LISTA DE USUARIOS BLOQUEADOS</p>
            <span className="close" onClick={closeEliminarModal}>
              &times;
            </span>
            <div className="modal-contentenedor">
              <div className="input-publicar-modal">
                <form className="form-publicar-modal">
                  <input
                    className="input-modal"
                    type="text"
                    placeholder="Buscar Usuarios"
                  />
                </form>
                <div className="boton-buscar">
                  <button className="boton-modal" type="submit">
                    Buscar
                  </button>
                </div>
              </div>
              <div className="informacion-busqueda">
                <div className="ejemplo-busqueda">
                  <div className="nombre-busqueda">
                    <p>ejemplo usuario</p>
                  </div>
                  <div className="icono-usuario_encontrado">
                    <img src="boton-menos.png" alt="" />
                  </div>
                  <div className="contenedor-boton_bloquear">
                    <button onClick={openAlertaEliminarModal}>Eliminar</button>
                  </div>
                </div>
                <div className="ejemplo-busqueda">
                  <div className="nombre-busqueda">
                    <p>ejemplo usuario</p>
                  </div>
                  <div className="icono-usuario_encontrado">
                    <img src="boton-menos.png" alt="" />
                  </div>
                  <div className="contenedor-boton_bloquear">
                    <button onClick={openAlertaEliminarModal}>Eliminar</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {isAlertaBloqueoModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <p>bloquear usuario reportado</p>
            <span className="close" onClick={closeAlertaBloqueoModal}>
              &times;
            </span>
            <div className="modal-contentenedor">
              <div className="texto-bloqueo">
                <p>
                  ¿Estás seguro de que deseas bloquear a este usuario reportado?
                  Al bloquearlo, no podrá ver feed, ningún perfil ni contactara
                  ningún usuario en nuestra comunidad estudiantil.
                </p>
              </div>
              <div className="botones-bloqueo">
                <button className="boton-rojo">bloquear usuario</button>
                <button className="boton-gris">cancelar</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {isAlertaEliminarModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <p>Eliminar usuario bloqueado</p>
            <span className="close" onClick={closeAlertaEliminarModal}>
              &times;
            </span>
            <div className="modal-contentenedor">
              <div className="texto-bloqueo">
                <p>
                  ¿Estás seguro de que deseas eliminar este usuario bloqueado?
                  Esta acción no se puede deshacer y eliminará permanentemente
                  su cuenta de nuestra comunidad estudiantil.
                </p>
              </div>
              <div className="botones-bloqueo">
                <button className="boton-rojo">eliminar usuario</button>
                <button className="boton-gris">cancelar</button>
              </div>
            </div>
          </div>
        </div>
      )}

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
          <h1>
            Campus<span className="blanco">LINK</span>
          </h1>
          <div className="administrador_usuarios">
            <h1>Administrador de Usuarios</h1>
            <div className="administradores-casilla">
              <div className="contenedor-admin">
                <p>Administradores</p>
                <b>0 Administradores</b>
              </div>
              <div className="contenedor-editar">
                <button className="boton-blanco" onClick={openModal}>
                  Editar
                </button>
              </div>
            </div>
            <div className="administradores-casilla">
              <div className="contenedor-admin">
                <p>Directores</p>
                <b>0 Directores</b>
              </div>
              <div className="contenedor-editar">
                <button className="boton-blanco" onClick={openModal}>
                  Editar
                </button>
              </div>
            </div>
            <div className="administradores-casilla">
              <div className="contenedor-admin">
                <p>Usuarios Reportados</p>
                <b>0 Usuarios Reportados</b>
              </div>
              <div className="contenedor-editar">
                <button className="boton-blanco" onClick={openReportedModal}>
                  Editar
                </button>
              </div>
            </div>
            <div className="administradores-casilla">
              <div className="contenedor-admin">
                <p>Usuarios Bloqueados</p>
                <b>0 Usuarios Bloqueados</b>
              </div>
              <div className="contenedor-editar">
                <button className="boton-blanco" onClick={openEliminarModal}>
                  Editar
                </button>
              </div>
            </div>
            <div className="administradores-casilla">
              <div className="contenedor-admin">
                <p>Usuarios Eliminados</p>
                <b>0 Usuarios Eliminados</b>
              </div>
              <div className="contenedor-editar">
                <button className="boton-blanco">Editar</button>
              </div>
            </div>
          </div>

          <div className="administrador_contenido">
            <h1>Administrador de Contenido</h1>
            <div className="administradores-casilla">
              <div className="contenedor-admin">
                <p>Publicacion reportada</p>
                <b>0 Publicacion reportada</b>
              </div>
              <div className="contenedor-editar">
                <button className="boton-blanco">Editar</button>
              </div>
            </div>
            <div className="administradores-casilla">
              <div className="contenedor-admin">
                <p>Publicacion eliminada</p>
                <b>0 Publicacion eliminada</b>
              </div>
              <div className="contenedor-editar">
                <button className="boton-blanco">Editar</button>
              </div>
            </div>
            <div className="administradores-casilla">
              <div className="contenedor-admin">
                <p>Eventos reportados</p>
                <b>0 Eventos reportados</b>
              </div>
              <div className="contenedor-editar">
                <button className="boton-blanco">Editar</button>
              </div>
            </div>
            <div className="administradores-casilla">
              <div className="contenedor-admin">
                <p>eventos eliminados</p>
                <b>0 eventos eliminados</b>
              </div>
              <div className="contenedor-editar">
                <button className="boton-blanco">Editar</button>
              </div>
            </div>
            <div className="administradores-casilla">
              <div className="contenedor-admin">
                <p>Eventos bloqueados</p>
                <b>0 Eventos bloqueados</b>
              </div>
              <div className="contenedor-editar">
                <button className="boton-blanco">Editar</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
