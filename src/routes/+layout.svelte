<script>
  import '../app.css';
  import Footer from '$lib/assets/Footer.svelte';
  import RainbowLine from '$lib/RainbowLine.svelte';
  import CommentBox from '$lib/CommentBox.svelte';
</script>

<svelte:head><title>Werte verbinden</title></svelte:head>
<main class="m-0 p-0 text-lg w-full flex flex-col justify-center">
  <RainbowLine />
  <slot />

  <CommentBox />

  <Footer />
</main>

<style>
  main {
    overflow-x: hidden;
    width: 100vw;
    scrollbar-gutter: stable both-edges;
  }
</style>
