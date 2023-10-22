<script lang="ts">
  import RainbowLine from '$lib/RainbowLine.svelte';
  import { onMount } from 'svelte';
  let pageAvailable = false;
  const checkWebsiteAvailability = async () => {
    const url =
      'https://timecatcher.lnbits.de/market/stalls/FZ6Kt7HJTTAY6AHYGqHqSE';

    try {
      const response = await fetch(url);

      if (response.status === 200) {
        console.log(`${url} is available.`);
      } else {
        console.log(`${url} is not available. Status code: ${response.status}`);
      }
    } catch (error: any) {
      console.error(`Error checking ${url}: ${error.message}`);
    }
  };
  onMount(checkWebsiteAvailability);
</script>

<RainbowLine />
<footer
  class="w-screen shadow-inner flex flex-col justify-center items-center gap-2 py-10 px-4 text-center bg-lums-blue text-gray-300 text-sm"
>
  <span class="max-w-2xl text-gray-400"
    >Bevor sich jemand beschwert: dieses Projekt hat keine Assoziationen mit
    irgendwelchen Parteien - auch wenn es teilweise so aussieht. Kunstfreiheit
    und so.
    <br />
    Geld ist ein komplexes Thema, und diese Webseite dient ausschließlich zu Unterhaltungszwecken.
    Du solltest selbst recherchieren und weitere Quellen evaluieren, bevor du finanzielle
    Entscheidungen triffst.</span
  >
  <br />
  <span class="text-xs">
    {#if pageAvailable}
      <a
        href="https://timecatcher.lnbits.de/market/stalls/FZ6Kt7HJTTAY6AHYGqHqSE"
        >Sticker bestellen (Bitcoin only)</a
      >
    {:else}
      <span class="text-cdu-red">Sticker Shop ist aktuell nicht online 😭</span
      >
    {/if}
  </span>
  <span class="text-xs mt-3">
    © 2023 - Made with 🧡 by <a
      href="https://lums.io"
      target="_blank"
      class="text-lums-accent">lums</a
    >
  </span>
  <br />
  <span class="flex gap-1">
    Fragen? schreib mir via:
    <a href="mailto:lumsdnb@skiff.com">Email</a> oder <a href="https://t.me/lumsdnb">Telegram</a>
  </span>
</footer>
