<script>
  let number = 1; // Initial number
  let numberOfZeroes = 0; // Initial number of zeroes

  // Function to increment the number
  function incrementNumber() {
    number *= 10;
    numberOfZeroes += 1;
  }
</script>

<main>
  <h1>Number Visualization</h1>
  <p>
    Number: {number}
    {#each Array(numberOfZeroes) as _, i}
      <span>0</span>
    {/each}
  </p>
  <button on:click={incrementNumber}>Add Zero</button>
</main>

<style>
  /* Style the zeroes as desired */
  span {
    font-size: 1.5em;
    color: #666;
  }
</style>
