import './style.css'

const telefono = '595985155176'

const mensaje =
  'Hola, quisiera consultar disponibilidad para reservar la casa quinta. ¿Qué días y horarios tienen disponibles?'

const whatsapp = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`

document.querySelector('#app').innerHTML = `
  <header class="navbar">
    <a class="marca" href="#inicio">
      CASA QUINTA
    </a>

    <a class="nav-link" href="#contacto">
      Consultar reserva
    </a>
  </header>

  <main>
    <section class="hero" id="inicio">
      <div class="hero-contenido">
        <span class="etiqueta">UN LUGAR PARA DISFRUTAR</span>

        <h1>
          Tus mejores momentos
          <span>comienzan aquí.</span>
        </h1>

        <p>
          Consultá disponibilidad y organizá tu próxima
          reunión o celebración en nuestra casa quinta.
        </p>

        <a
          class="boton"
          href="${whatsapp}"
          target="_blank"
          rel="noopener noreferrer"
        >
          Consultar fecha por WhatsApp
        </a>

        <p class="nota">
          Consultá el día y horario que tenés en mente.
        </p>
      </div>

      <div class="hero-decoracion" aria-hidden="true">
        <div class="circulo"></div>
        <div class="hoja">✦</div>
      </div>
    </section>

    <section class="consulta" id="contacto">
      <span class="etiqueta">PLANIFICÁ TU VISITA</span>

      <h2>¿Qué fecha estás buscando?</h2>

      <p>
        Escribinos para consultar si tenemos disponibilidad
        y recibir información sobre la reserva.
      </p>

      <a
        class="boton boton-secundario"
        href="${whatsapp}"
        target="_blank"
        rel="noopener noreferrer"
      >
        Hablar por WhatsApp
      </a>
    </section>
  </main>

  <footer>
    <p>Casa Quinta · Consultas y reservas por WhatsApp</p>
  </footer>
`
