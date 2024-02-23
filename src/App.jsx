
import './App.css';

function App() {

  return (
    <>
       <div className="contenido-home">
        
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
                <button className="boton-tipo_publicacion">
                  Agregar multimedia
                </button>
                <button className="boton-tipo_publicacion">Evento</button>
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
                    class="funcion-Me_gusta"
                    id="corazon"
                    onclick="toggleMeGusta()"
                  >
                    <span id="meGustaTexto">0 Me gusta</span>
                  </div>
                  <div class="funcion-comentarios">
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
  )
}

export default App