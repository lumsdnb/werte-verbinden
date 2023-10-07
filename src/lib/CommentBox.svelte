<script lang="ts">
  import { onMount } from 'svelte';
  import { Discussions } from 'sveltegram';

  let isVisible = true;
</script>

<section>
  <div class="bg-white w-full relative top-10 h-10" />
  <Discussions link="https://t.me/werteverbinden/3" />
</section>
