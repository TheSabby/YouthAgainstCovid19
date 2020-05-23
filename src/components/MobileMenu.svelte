<script>
  import { scale } from "svelte/transition";

  let open = false;
</script>

<button
  on:click={() => (open = true)}
  type="button"
  class="inline-flex items-center justify-center p-2 rounded-md text-gray-400
  hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100
  focus:text-gray-500 transition duration-150 ease-in-out">
  <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M4 6h16M4 12h16M4 18h16" />
  </svg>
</button>

{#if open}
  <div
    transition:scale
    class="absolute top-0 inset-x-0 p-2 transition transform origin-top-right
    md:hidden">
    <div class="rounded-lg shadow-md">
      <div class="rounded-lg bg-white shadow-xs overflow-hidden">
        <div class="px-5 pt-4 flex items-center justify-between">
          <div
            class="text-2xl font-extrabold text-black tracking-tighter
            hover:text-black">
            NexusAfrik
          </div>
          <div class="-mr-2">
            <button
              type="button"
              on:click={() => (open = false)}
              class="inline-flex items-center justify-center p-2 rounded-md
              text-gray-400 hover:text-gray-500 hover:bg-gray-100
              focus:outline-none focus:bg-gray-100 focus:text-gray-500
              transition duration-150 ease-in-out">
              <svg
                class="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
        <div class="px-2 pt-2 pb-3">
          <a
            href="/"
            class="mt-1 block px-3 py-2 rounded-md text-base font-medium
            text-gray-700 hover:text-gray-900 hover:bg-gray-50
            focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition
            duration-150 ease-in-out">
            Home
          </a>
          <!-- <a
          href="#"
          class="block px-3 py-2 rounded-md text-base font-medium
          text-gray-700 hover:text-gray-900 hover:bg-gray-50
          focus:outline-none focus:text-gray-900 focus:bg-gray-50
          transition duration-150 ease-in-out">
          COVID-19
        </a> -->
          <a
            href="/africaDay"
            class="mt-1 block px-3 py-2 rounded-md text-base font-medium
            text-gray-700 hover:text-gray-900 hover:bg-gray-50
            focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition
            duration-150 ease-in-out">
            Africa Day
          </a>
          <!-- <a
          href="#"
          class="mt-1 block px-3 py-2 rounded-md text-base font-medium
          text-gray-700 hover:text-gray-900 hover:bg-gray-50
          focus:outline-none focus:text-gray-900 focus:bg-gray-50
          transition duration-150 ease-in-out">
          Our Network
        </a> -->
        </div>
        <div>
          <a
            href="/join"
            class="block w-full px-5 py-3 text-center font-medium text-green-600
            bg-gray-50 hover:bg-gray-100 hover:text-green-700 focus:outline-none
            focus:bg-gray-100 focus:text-green-700 transition duration-150
            ease-in-out">
            Join
          </a>
        </div>
      </div>
    </div>
  </div>
{/if}
