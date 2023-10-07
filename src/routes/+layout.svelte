<script>
  import '../app.css';
  import Footer from '$lib/assets/Footer.svelte';
  import RainbowLine from '$lib/RainbowLine.svelte';
  import CommentBox from '$lib/CommentBox.svelte';
</script>

<svelte:head><title>Werte verbinden</title></svelte:head>
<RainbowLine />
<main
  class=" m-0 p-0 text-lg lg:text-xl w-full flex items-center flex-col justify-center"
>
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
