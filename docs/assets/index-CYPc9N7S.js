(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=`595985155176`,t=[{archivo:`IMG-20261022-WA0369.jpg`,titulo:`Un espacio para disfrutar`,descripcion:`Compartí una tarde especial en nuestro patio, rodeado de comodidad y buenos momentos.`,etiqueta:`EL PATIO`},{archivo:`IMG-20261022-WA0370.jpg`,titulo:`Diversión para todos`,descripcion:`Disfrutá de una partida de pool y convertí tu encuentro en una celebración inolvidable.`,etiqueta:`MESA DE POOL`},{archivo:`IMG-20261022-WA0373.jpg`,titulo:`Un rincón para reunirse`,descripcion:`Un ambiente preparado para compartir, conversar y disfrutar en compañía.`,etiqueta:`ESPACIO DE ENCUENTRO`},{archivo:`IMG-20261022-WA0375.jpg`,titulo:`Refrescá tus mejores momentos`,descripcion:`La piscina te espera para disfrutar, relajarte y compartir una jornada diferente.`,etiqueta:`PISCINA`},{archivo:`IMG-20261022-WA0376.jpg`,titulo:`El sabor de una buena reunión`,descripcion:`Un espacio para preparar tus comidas y disfrutar de momentos alrededor de la parrilla.`,etiqueta:`PARRILLA`},{archivo:`IMG-20261022-WA0378.jpg`,titulo:`Prepará una celebración especial`,descripcion:`Un lugar para organizar tu encuentro y disfrutar de una buena comida con tus invitados.`,etiqueta:`ESPACIO GASTRONÓMICO`},{archivo:`IMG-20261022-WA0379.jpg`,titulo:`Compartí, brindá y disfrutá`,descripcion:`Un ambiente cómodo para reunirte con tus familiares y amigos.`,etiqueta:`ÁREA DE REUNIÓN`},{archivo:`IMG-20261022-WA0380.jpg`,titulo:`Celebraciones con tu estilo`,descripcion:`Dale vida a tu festejo y prepará una decoración que haga especial cada momento.`,etiqueta:`CELEBRACIONES`},{archivo:`IMG-20261022-WA0382.jpg`,titulo:`Más espacio para divertirse`,descripcion:`Disfrutá de actividades al aire libre y compartí una jornada llena de energía.`,etiqueta:`ESPACIO DEPORTIVO`}],n=t.map(e=>`/casa-quinta-web/images/${e.archivo}`),r=t=>`https://wa.me/${e}?text=${encodeURIComponent(t)}`;document.querySelector(`#app`).innerHTML=`
  <header class="navbar">
    <a class="marca" href="#inicio" aria-label="Casa Quinta Buena Onda, inicio">
      <span class="marca-icono">CQ</span>
      <span>CASA QUINTA BUENA ONDA</span>
    </a>

    <a class="nav-link" href="#reservas">
      Consultar reserva <span aria-hidden="true">↗</span>
    </a>
  </header>

  <main>
    <section class="hero" id="inicio">
      <div class="hero-contenido">
        <span class="hero-nombre">CASA QUINTA <span>BUENA ONDA</span></span>

        <span class="etiqueta">TU LUGAR PARA DISFRUTAR</span>

        <h1>
          Celebrá los momentos
          <span>que merecen recordarse.</span>
        </h1>

        <p>
          Piscina, diversión y buenos momentos para compartir con
          tu familia y amigos. Prepará tu próxima celebración en
          un ambiente pensado para disfrutar.
        </p>

        <a class="boton" href="#reservas">
          Consultar disponibilidad
          <span aria-hidden="true">↗</span>
        </a>

        <p class="nota">
          Consultá tu fecha y empezá a organizar ese día especial.
        </p>
      </div>

      <div class="hero-foto">
        <img
          src="/casa-quinta-web/images/banner-piscina.png"
          alt="Vista del patio de Casa Quinta Buena Onda, con mesa de pool, espacio de reunión y piscina"
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
          <h2>Así se vive Casa Quinta Buena Onda</h2>
        </div>

        <span class="contador">9 espacios en imágenes</span>
      </div>

      <div class="galeria-grid">
        ${t.map((e,t)=>`
          <article class="galeria-item" style="--card-index: ${t}">
            <div class="galeria-imagen">
              <img
                src="${n[t]}"
                alt="${e.titulo}. ${e.descripcion}"
                loading="lazy"
              >
              <span class="galeria-etiqueta">${e.etiqueta}</span>
            </div>

            <div class="galeria-texto">
              <span class="galeria-numero">
                ${String(t+1).padStart(2,`0`)}
              </span>

              <h3>${e.titulo}</h3>
              <p>${e.descripcion}</p>
            </div>
          </article>
        `).join(``)}
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
        y consultá la disponibilidad de Casa Quinta Buena Onda.
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
          que Casa Quinta Buena Onda verifique la disponibilidad.
        </p>
      </form>
    </section>
  </main>

  <footer class="footer">
    <a class="marca marca-footer" href="#inicio">
      <span class="marca-icono">CQ</span>
      <span>CASA QUINTA BUENA ONDA</span>
    </a>

    <p>Tu próximo recuerdo comienza aquí.</p>

    <a href="#reservas">
      Consultá tu fecha por WhatsApp ↗
    </a>

    <span>© ${new Date().getFullYear()} Casa Quinta Buena Onda</span>
  </footer>
`;var i=document.querySelector(`#fecha`),a=new Date;i.min=[a.getFullYear(),String(a.getMonth()+1).padStart(2,`0`),String(a.getDate()).padStart(2,`0`)].join(`-`),document.querySelector(`#form-reserva`).addEventListener(`submit`,e=>{e.preventDefault();let t=new FormData(e.currentTarget),n=[`Hola, quisiera consultar disponibilidad para reservar Casa Quinta Buena Onda.`,``,`Nombre: ${t.get(`nombre`)}`,`Fecha del evento: ${t.get(`fecha`)}`,`Horario: ${t.get(`horario`)}`,`Tipo de evento: ${t.get(`evento`)}`,`Cantidad de invitados: ${t.get(`invitados`)}`,`Detalles: ${t.get(`detalles`)||`Sin detalles adicionales`}`,``,`¿Me pueden confirmar si la fecha está disponible y pasarme información sobre el precio y la reserva?`].join(`
`);window.open(r(n),`_blank`,`noopener,noreferrer`)});var o=document.querySelectorAll(`.hero-contenido, .hero-foto, .intro, .seccion-heading, .galeria-item, .cierre, .reserva-intro, .form-reserva`);if(o.forEach(e=>e.classList.add(`reveal`)),`IntersectionObserver`in window){let e=new IntersectionObserver((e,t)=>{e.forEach(e=>{e.isIntersecting&&(e.target.classList.add(`visible`),t.unobserve(e.target))})},{threshold:.12});o.forEach(t=>e.observe(t))}else o.forEach(e=>e.classList.add(`visible`));