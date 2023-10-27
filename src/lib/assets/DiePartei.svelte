<script lang="ts">
  import RainbowLine from '$lib/RainbowLine.svelte';
  import { onMount } from 'svelte';
  let pageAvailable = false;
  const checkWebsiteAvailability = async () => {
    const url =
      'https://timecatcher.lnbits.de/market/stalls/FZ6Kt7HJTTAY6AHYGqHqSE';

    console.log('Checking website availability...');

    try {
      const response = await fetch(url);

      if (response.status === 200) {
        console.log(`${url} is available.`);
        pageAvailable = true;
      } else {
        console.error(
          `${url} is not available. Status code: ${response.status}`
        );
        pageAvailable = false;
      }
    } catch (error: any) {
      console.error(`Error checking ${url}: ${error.message}`);
    }
  };

  onMount(checkWebsiteAvailability);
</script>

<section
  class="flex flex-col lg:mx-20 md:w-96 p-0 border-black border-4 bg-white"
>
  <div class="m-2 px-3 mb-0 py-1">
    <h2 class="font-partei text-black text-6xl py-3 pb-0">
      Stabiles Geld für Europa. Für alles andere gibt es den Euro.
    </h2>
  </div>

  <span
    class="bg-partei-red px-0 scale-110 lg:scale-105 relative top-1 m-0  text-white text-xl p-4 text-center"
  >
    Wählt Bitcoin - es ist sehr gut!
  </span>
</section>

