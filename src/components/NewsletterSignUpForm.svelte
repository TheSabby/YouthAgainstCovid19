<script>
  import { onMount } from "svelte";

  let form;
  let submitting = false;
  let error = false;
  let isRegistered = false;
  let justRegistered = false;

  onMount(() => {
    isRegistered = localStorage.getItem("registered");
  });

  function handleRegistration(e) {
    submitting = true;
    const formData = new FormData(form);
    fetch(form.getAttribute("action"), {
      method: "POST"
    })
      .then(res => {
        if (!res.ok) {
          error = "Response was not ok";
        } else {
          localStorage.setItem("registered", true);
          isRegistered = true;
          justRegistered = true;
        }
      })
      .catch(err => {
        error = "Failed to submit";
      })
      .finally(() => (submitting = false));
  }
</script>

{#if justRegistered}
  <div class="rounded-md bg-green-50 p-4">
    <div class="flex">
      <div class="flex-shrink-0">
        <svg
          class="h-5 w-5 text-green-400"
          fill="currentColor"
          viewBox="0 0 20 20">
          <path
            fill-rule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0
            00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0
            001.414 0l4-4z"
            clip-rule="evenodd" />
        </svg>
      </div>
      <div class="ml-3">
        <p class="text-sm leading-5 font-medium text-green-800">
          Successfully registered
        </p>
      </div>
      <div class="ml-auto pl-3">
        <div class="-mx-1.5 -my-1.5">
          <button
            on:click={() => justRegistered = false}
            class="inline-flex rounded-md p-1.5 text-green-500
            hover:bg-green-100 focus:outline-none focus:bg-green-100 transition
            ease-in-out duration-150">
            <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0
                111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10
                11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1
                1 0 010-1.414z"
                clip-rule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
{/if}

{#if !isRegistered}
  <div
    class="px-6 py-6 bg-green-700 rounded-lg md:py-12 md:px-12 lg:py-16 lg:px-16
    xl:flex xl:items-center">
    <div class="xl:w-0 xl:flex-1">
      <h2
        class="text-2xl leading-8 font-extrabold tracking-tight text-white
        sm:text-3xl sm:leading-9">
        Stay in the loop!
      </h2>
      <p class="mt-3 max-w-3xl text-lg leading-6 text-green-200">
        Sign up for the newsletter to stay up to date on all the african youth
        initiatives surrounding Covid-19.
      </p>
    </div>
    <div class="mt-8 sm:w-full sm:max-w-md xl:mt-0 xl:ml-8">
      <form
        bind:this={form}
        class="sm:flex"
        name="newsletter"
        method="POST"
        on:submit|preventDefault={handleRegistration}
        netlify-honeypot="last-name"
        netlify>
        <input
          aria-label="Email address"
          type="email"
          name="email"
          required
          class="appearance-none w-full px-5 py-3 border border-transparent
          text-base leading-6 rounded-md text-gray-900 bg-white
          placeholder-gray-500 focus:outline-none focus:placeholder-gray-400
          transition duration-150 ease-in-out"
          placeholder="Enter your email" />
        <p class="hidden">
          <label>Last name: <input name="last-name" /></label>
        </p>
        {#if !submitting}
          <div class="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
            <button
              class="w-full flex items-center justify-center px-5 py-3 border
              border-transparent text-base leading-6 font-medium rounded-md
              text-white bg-green-500 hover:bg-green-400 focus:outline-none
              focus:bg-green-400 transition duration-150 ease-in-out">
              Notify me
            </button>
          </div>
        {:else}
          <div class="mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
            <button
              class="w-full flex items-center justify-center px-5 py-3 border
              border-transparent text-base leading-6 font-medium rounded-md
              text-white bg-gray-400 focus:outline-none focus:bg-green-400
              transition duration-150 ease-in-out"
              disabled>
              Submitting...
            </button>
          </div>
        {/if}
      </form>
    </div>
  </div>
{/if}
<form name="newsletter" method="POST" netlify-honeypot="last-name" netlify hidden>
  <input type="email" name="email" />
  <input name="last-name" />
</form>
