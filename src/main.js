
import './style.css'

const telefono = '595985155176'

const fotos = [
  {
    archivo: 'IMG-20261022-WA0369.jpg',
    titulo: 'Un espacio para disfrutar',
    descripcion: 'Compartí una tarde especial en nuestro patio, rodeado de comodidad y buenos momentos.',
    etiqueta: 'EL PATIO'
  },
  {
    archivo: 'IMG-20261022-WA0370.jpg',
    titulo: 'Diversión para todos',
    descripcion: 'Disfrutá de una partida de pool y convertí tu encuentro en una celebración inolvidable.',
    etiqueta: 'MESA DE POOL'
  },
  {
    archivo: 'IMG-20261022-WA0373.jpg',
    titulo: 'Un rincón para reunirse',
    descripcion: 'Un ambiente preparado para compartir, conversar y disfrutar en compañía.',
    etiqueta: 'ESPACIO DE ENCUENTRO'
  },
  {
    archivo: 'IMG-20261022-WA0375.jpg',
    titulo: 'Refrescá tus mejores momentos',
    descripcion: 'La piscina te espera para disfrutar, relajarte y compartir una jornada diferente.',
    etiqueta: 'PISCINA'
  },
  {
    archivo: 'IMG-20261022-WA0376.jpg',
    titulo: 'El sabor de una buena reunión',
    descripcion: 'Un espacio para preparar tus comidas y disfrutar de momentos alrededor de la parrilla.',
    etiqueta: 'PARRILLA'
  },
  {
    archivo: 'IMG-20261022-WA0378.jpg',
    titulo: 'Prepará una celebración especial',
    descripcion: 'Un lugar para organizar tu encuentro y disfrutar de una buena comida con tus invitados.',
    etiqueta: 'ESPACIO GASTRONÓMICO'
  },
  {
    archivo: 'IMG-20261022-WA0379.jpg',
    titulo: 'Compartí, brindá y disfrutá',
    descripcion: 'Un ambiente cómodo para reunirte con tus familiares y amigos.',
    etiqueta: 'ÁREA DE REUNIÓN'
  },
  {
    archivo: 'IMG-20261022-WA0380.jpg',
    titulo: 'Celebraciones con tu estilo',
    descripcion: 'Dale vida a tu festejo y prepará una decoración que haga especial cada momento.',
    etiqueta: 'CELEBRACIONES'
  },
  {
    archivo: 'IMG-20261022-WA0382.jpg',
    titulo: 'Más espacio para divertirse',
    descripcion: 'Disfrutá de actividades al aire libre y compartí una jornada llena de energía.',
    etiqueta: 'ESPACIO DEPORTIVO'
  }
]

const imagenes = fotos.map(foto => `/images/${foto.archivo}`)

const whatsapp = mensaje =>
  `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`

document.querySelector('#app').innerHTML = `
  <header class="navbar">
    <a class="marca" href="#inicio" aria-label="Casa Quinta, inicio">
      <span class="marca-icono">CQ</span>
      <span>CASA QUINTA</span>
    </a>

    <a class="nav-link" href="#reservas">
      Consultar reserva <span aria-hidden="true">↗</span>
    </a>
  </header>

  <main>
    <section class="hero" id="inicio">
      <div class="hero-contenido">
        <span class="etiqueta">UN LUGAR PARA CREAR RECUERDOS</span>

        <h1>
          Tu próxima celebración
          <span>merece este lugar.</span>
        </h1>

        <p>
          Imaginá una tarde de piscina, risas y buenos momentos
          con las personas que más querés. En Casa Quinta,
          cada encuentro puede convertirse en un recuerdo especial.
        </p>

        <a class="boton" href="#reservas">
          ¡Quiero celebrar aquí!
          <span aria-hidden="true">↗</span>
        </a>

        <p class="nota">
          Consultá tu fecha y empezá a organizar ese día especial.
        </p>
      </div>

      <div class="hero-foto">
        <img
          src="${imagenes[0]}"
          alt="Vista del patio de Casa Quinta, con mesa de pool, espacio de reunión y piscina"
          fetchpriority="high"
        >
        <span class="foto-caption">
          Un lugar para disfrutar juntos
        </span>
      </div>
    </section>

    <section class="intro">
      <span class="etiqueta">TU PRÓXIMO RECUERDO COMIENZA AQUÍ</span>

      <h2>
        Hay momentos que merecen
        <span>un lugar especial.</span>
      </h2>

      <p>
        Cumpleaños, reuniones familiares o una tarde con amigos.
        Descubrí nuestros espacios y encontrá el escenario
        para tu próxima celebración.
      </p>
    </section>

    <section class="galeria" id="galeria">
      <div class="seccion-heading">
        <div>
          <span class="etiqueta">DESCUBRÍ CADA RINCÓN</span>
          <h2>Así se vive Casa Quinta</h2>
        </div>

        <span class="contador">9 espacios en imágenes</span>
      </div>

      <div class="galeria-grid">
        ${fotos.map((foto, i) => `
          <article class="galeria-item" style="--card-index: ${i}">
            <div class="galeria-imagen">
              <img
                src="${imagenes[i]}"
                alt="${foto.titulo}. ${foto.descripcion}"
                loading="lazy"
              >
              <span class="galeria-etiqueta">${foto.etiqueta}</span>
            </div>

            <div class="galeria-texto">
              <span class="galeria-numero">
                ${String(i + 1).padStart(2, '0')}
              </span>

              <h3>${foto.titulo}</h3>
              <p>${foto.descripcion}</p>
            </div>
          </article>
        `).join('')}
      </div>
    </section>

    <section class="cierre">
      <span class="etiqueta">EL DÍA ESPECIAL QUE IMAGINÁS</span>

      <h2>
        Hagamos que ese momento
        <span>se vuelva inolvidable.</span>
      </h2>

      <p>
        Elegí una fecha, contanos qué querés celebrar
        y consultá la disponibilidad de Casa Quinta.
      </p>

      <a class="boton" href="#reservas">
        Consultar mi fecha <span aria-hidden="true">↗</span>
      </a>
    </section>

    <section class="reserva" id="reservas">
      <div class="reserva-intro">
        <span class="etiqueta">PLANIFICÁ TU VISITA</span>

        <h2>¿Qué fecha estás buscando?</h2>

        <p>
          Completá los datos de tu evento.
          Te contactaremos por WhatsApp para consultar
          la disponibilidad y la información de la reserva.
        </p>
      </div>

      <form id="form-reserva" class="form-reserva">
        <div class="campo">
          <label for="nombre">Tu nombre y apellido</label>
          <input
            id="nombre"
            name="nombre"
            type="text"
            placeholder="Ej.: María González"
            autocomplete="name"
            required
          >
        </div>

        <div class="campo">
          <label for="fecha">Fecha del evento</label>
          <input
            id="fecha"
            name="fecha"
            type="date"
            required
          >
        </div>

        <div class="campo">
          <label for="horario">Horario aproximado</label>
          <input
            id="horario"
            name="horario"
            type="time"
            required
          >
        </div>

        <div class="campo">
          <label for="evento">Tipo de evento</label>
          <select id="evento" name="evento" required>
            <option value="">Seleccioná una opción</option>
            <option value="Cumpleaños">Cumpleaños</option>
            <option value="Reunión familiar">Reunión familiar</option>
            <option value="Celebración">Celebración</option>
            <option value="Evento con amigos">Evento con amigos</option>
            <option value="Otro evento">Otro evento</option>
          </select>
        </div>

        <div class="campo">
          <label for="invitados">Cantidad aproximada de invitados</label>
          <input
            id="invitados"
            name="invitados"
            type="number"
            min="1"
            placeholder="Ej.: 30 personas"
            required
          >
        </div>

        <div class="campo">
          <label for="detalles">Detalles adicionales (opcional)</label>
          <textarea
            id="detalles"
            name="detalles"
            rows="4"
            placeholder="Contanos un poco sobre tu evento..."
          ></textarea>
        </div>

        <button class="boton boton-formulario" type="submit">
          Consultar disponibilidad por WhatsApp
          <span aria-hidden="true">↗</span>
        </button>

        <p class="nota-formulario">
          La fecha queda pendiente de confirmación hasta
          que Casa Quinta verifique la disponibilidad.
        </p>
      </form>
    </section>
  </main>

  <footer class="footer">
    <a class="marca marca-footer" href="#inicio">
      <span class="marca-icono">CQ</span>
      <span>CASA QUINTA</span>
    </a>

    <p>Tu próximo recuerdo comienza aquí.</p>

    <a href="#reservas">
      Consultá tu fecha por WhatsApp ↗
    </a>

    <span>© ${new Date().getFullYear()} Casa Quinta</span>
  </footer>
`

// Impedir que se seleccionen fechas anteriores a hoy.
const fechaInput = document.querySelector('#fecha')
const hoy = new Date()

const fechaLocal = [
  hoy.getFullYear(),
  String(hoy.getMonth() + 1).padStart(2, '0'),
  String(hoy.getDate()).padStart(2, '0')
].join('-')

fechaInput.min = fechaLocal

// Enviar la consulta del evento a WhatsApp.
document.querySelector('#form-reserva').addEventListener(
  'submit',
  event => {
    event.preventDefault()

    const datos = new FormData(event.currentTarget)

    const mensaje = [
      'Hola, quisiera consultar disponibilidad para reservar Casa Quinta.',
      '',
      `Nombre: ${datos.get('nombre')}`,
      `Fecha del evento: ${datos.get('fecha')}`,
      `Horario: ${datos.get('horario')}`,
      `Tipo de evento: ${datos.get('evento')}`,
      `Cantidad de invitados: ${datos.get('invitados')}`,
      `Detalles: ${datos.get('detalles') || 'Sin detalles adicionales'}`,
      '',
      '¿Me pueden confirmar si la fecha está disponible y pasarme información sobre el precio y la reserva?'
    ].join('\n')

    window.open(
      whatsapp(mensaje),
      '_blank',
      'noopener,noreferrer'
    )
  }
)
