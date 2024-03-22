

const devolucionesPage = () => {
    return(
        <div className="px-28 py-7 h-full">
            <p className=" text-4xl py-5 font-bold tracking-wider"> Cambios y Devoluciones </p>
  <main class="container mx-auto mb-10">
    <section class="mb-10">
      <h2 class="text-2xl font-bold">Plazo para realizar un cambio</h2>
      <p>Tienes 3 días desde la fecha de compra para realizar un cambio.</p>
    </section>

    <section class="mb-10">
      <h2 class="text-2xl font-bold">Condiciones para realizar un cambio</h2>
      <ul>
        <li>El calzado debe estar en perfecto estado, sin uso, con las etiquetas originales y en su caja original.</li>
        <li>Debes presentar la factura o ticket de compra.</li>
        <li>No se admiten cambios de productos en oferta o liquidación.</li>
      </ul>
    </section>

    <section class="mb-10">
      <h2 class="text-2xl font-bold">Pasos para realizar un cambio</h2>
      <ol>
        <li>Dirígete a la tienda donde realizaste la compra o a cualquiera de nuestras sucursales.</li>
        <li>Presenta el calzado que deseas cambiar junto con la factura o ticket de compra.</li>
        <li>Elige el nuevo calzado que deseas.</li>
        <li>Si el nuevo calzado tiene un precio mayor al del calzado original, deberás abonar la diferencia.</li>
        <li>Si el nuevo calzado tiene un precio menor al del calzado original, se te emitirá un vale por la diferencia para que puedas utilizarlo en una próxima compra.</li>
      </ol>
    </section>

    <section>
      <h2 class="text-2xl font-bold">Excepciones</h2>
      <ul>
        <li>No se admiten cambios de productos que hayan sido usados o dañados.</li>
        <li>No se admiten cambios de productos en oferta o liquidación.</li>
        <li>No se admiten cambios de productos que no tengan las etiquetas originales o que no estén en su caja original.</li>
      </ul>
    </section>
  </main>
        </div>
    )
}

export default devolucionesPage;