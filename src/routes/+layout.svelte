<script>
  import '../app.css';
</script>

<svelte:head><title>Werte verbinden</title></svelte:head>

<div class="m-0 h-screen">
  <slot />
  <footer
    class="shadow-inner flex flex-col justify-center items-center gap-4 py-10 text-center bg-lums-blue text-gray-300 text-sm"
  >
    <span class="max-w-2xl text-gray-400"
      >Bevor sich jemand beschwert: dieses Projekt hat keine Assoziationen mit
      irgendwelchen Parteien - auch wenn es teilweise so aussieht. Kunstfreiheit
      und so.
      <br />Geld ist ein komplexes Thema, und diese Webseite dient
      ausschließlich zu Informationszwecken. Du solltest selbst recherchieren
      und weitere Quellen evaluieren, bevor du riskante Entscheidungen triffst.</span
    >
    <br />
    <span>
      © 2023 - Made with ❤️ by <a
        href="https://lums.io"
        target="_blank"
        class="text-lums-accent">lums</a
      > (yes, it was actually fun to build this)
    </span>
  </footer>
</div>
