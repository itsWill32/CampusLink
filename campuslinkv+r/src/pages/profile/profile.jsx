import './profile.css'

export  function profile() {
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
          <section className="contenedor-principal">
            <div className="contenedor-publicaciones">
              <div className="card-publicacion-perfil">
                <div className="foto-portada">
                  <img src="portada.jpg" alt="" />
                </div>
                <div className="foto-perfil-info">
                  <img src="foto.png" alt="" />
                </div>
                <div className="descripcion-portada">
                  <div className="contenedor-descripcion">
                    <div className="descripcion-izquierda">
                      <h1>Jhoana Rosenbaum</h1>
                      <p>Ing. Sistemas de la Informacion</p>
                      <p>Chiapas, México</p>
                    </div>
                    <div className="descripcion-derecha">
                      <h1>Intereses</h1>
                      <div className="intereses-p">
                        <p>Materias</p>
                        <p>Deportes</p>
                        <p>Comida</p>
                        <p>Hobbies</p>
                        <p>Peliculas/Series</p>
                      </div>
                    </div>
                  </div>
                  <div className="redes-perfil">
                    <div className="instagram">
                      <img src="instagram.png" alt="" />
                      <p>@JhoannaRose</p>
                    </div>
                    <div className="facebook">
                      <img src="facebook.png" alt="" />
                      <p>/JhoannaRose</p>
                    </div>
                    <div className="twitter">
                      <img src="gorjeo.png" alt="" />
                      <p>@JhoannaRose</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="acercaMi-contenedor">
                <div className="acercaMi">
                  <h1>Acerca de mí</h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. In
                    dicta laborum delectus, fugit consequatur, nobis ipsam
                    aliquam voluptatem vel sequi, numquam facilis eius tempore
                    maiores a quo dolorum. Consequatur, maxime. Lorem ipsum
                    dolor sit amet consectetur adipisicing elit. Commodi
                    sapiente inventore, at quisquam similique sint dolores.
                    Modi, omnis cupiditate? Earum quo culpa tempore eveniet
                    doloremque unde nihil sapiente amet possimus?
                  </p>
                </div>
                <div className="amigos">
                  <h1>Amigos</h1>
                  <div className="info-amigos">
                    <p>123 amigos</p>
                    <p className="buscar-amigos">buscar amigos</p>
                  </div>
                  <div className="perfil-amigos">
                    <div className="amigo1">
                      <img
                        className="icono-img-publicar"
                        src="foto.png"
                        alt=""
                      />
                      <div className="descripcion-amigo">
                        <h1>Josep Toledo</h1>
                        <p>Ingeniero en software</p>
                      </div>
                    </div>
                    <div className="amigo1">
                      <img
                        className="icono-img-publicar"
                        src="foto.png"
                        alt=""
                      />
                      <div className="descripcion-amigo">
                        <h1>Josep Toledo</h1>
                        <p>Ingeniero en software</p>
                      </div>
                    </div>
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
