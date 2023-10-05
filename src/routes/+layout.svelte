<script>
  import '../app.css';
  import Footer from '$lib/assets/Footer.svelte';
  import RainbowLine from '$lib/RainbowLine.svelte';
</script>

<svelte:head><title>Werte verbinden</title></svelte:head>
<div class="m-0 p-0">
  <RainbowLine />
  <slot />

  <Footer />
</div>
