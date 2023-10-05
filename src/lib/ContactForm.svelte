<script>
  import RainbowLine from './RainbowLine.svelte';
</script>

<form
  class="my-5 w-full max-w-md mx-auto p-0 bg-slate-50 shadow-md rounded-lg"
  method="post"
  name="contact-form"
  data-netlify="true"
  data-netlify-recaptcha="true"
>
  <div class="p-4 pb-0">
    <h3 class="mb-5 p-3 text-4xl">Fragen Feedback, Anregungen?</h3>
    <input type="hidden" name="form-name" value="contact-form" />
    <div class="mb-4">
      <label for="name" class="block text-gray-700 font-bold mb-2">Name</label>
      <input
        name="name"
        id="name"
        required
        placeholder="Name"
        type="text"
        class="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
      />
    </div>
    <div class="mb-4">
      <label for="email" class="block text-gray-700 font-bold mb-2">Email</label
      >
      <input
        name="email"
        id="email"
        required
        placeholder="Email"
        type="email"
        class="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-afd-blue"
      />
    </div>
    <div class="mb-4">
      <label for="message" class="block text-gray-700 font-bold mb-2"
        >Deine Nachricht</label
      >
      <textarea
        name="message"
        id="message"
        required
        placeholder="Message"
        class="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
      />
    </div>
  </div>
  <div class="text-right w-full">
    <input
      type="submit"
      value="Nachricht senden"
      class="border hover:bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rainbow-button bg-slate-200 text-black bold text-xl p-5 inline-block w-full"
    />
  </div>
  <!-- <RainbowLine /> -->
</form>
