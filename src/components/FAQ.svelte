<script>
  import { slide } from "svelte/transition";

  const faq = [
    {
      open: false,
      question: "What's the best thing about Switzerland?",
      answer:
        "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat."
    },
    {
      open: false,
      question: "How do you make holy water?",
      answer:
        "You boil the hell out of it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam aut tempora vitae odio inventore fuga aliquam nostrum quod porro. Delectus quia facere id sequi expedita natus."
    },
    {
      open: false,
      question: "What do you call someone with no body and no nose?",
      answer:
        "Nobody knows. Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, voluptas ipsa quia excepturi, quibusdam natus exercitationem sapiente tempore labore voluptatem."
    },
    {
      open: false,
      question: "Why do you never see elephants hiding in trees?",
      answer:
        "Because they're so good at it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat."
    },
    {
      open: false,
      question: "Why can't you hear a pterodactyl go to the bathroom?",
      answer:
        "Because the pee is silent. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, quas voluptatibus ex culpa ipsum, aspernatur blanditiis fugiat ullam magnam suscipit deserunt illum natus facilis atque vero consequatur! Quisquam, debitis error."
    },
    {
      open: false,
      question: "Why did the invisible man turn down the job offer?",
      answer:
        "He couldn't see himself doing it. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet perspiciatis officiis corrupti tenetur. Temporibus ut voluptatibus, perferendis sed unde rerum deserunt eius."
    }
  ];
</script>

<div class="max-w-screen-xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
  <div class="max-w-3xl mx-auto">
    <h2
      class="text-center text-3xl leading-9 font-extrabold text-gray-900
      sm:text-4xl sm:leading-10">
      Frequently asked questions
    </h2>
    <div class="mt-6 border-t-2 border-gray-200 pt-6">
      <dl>
        {#each faq as entry, i (entry.question)}
          {#if i === 0}
            <div>
              <dt class="text-lg leading-7">
                <button
                  on:click={() => {
                    entry.open = !entry.open;
                  }}
                  class="text-left w-full flex justify-between items-start
                  text-gray-400 focus:outline-none focus:text-gray-900">
                  <span class="font-medium text-gray-900">
                    {entry.question}
                  </span>
                  <span class="ml-6 h-7 flex items-center">
                    <svg
                      class:-rotate-180={entry.open}
                      class:rotate-0={!entry.open}
                      class="h-6 w-6 transform"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 24 24">
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </button>
              </dt>
              {#if entry.open}
                <dd
                  class="mt-2 pr-12 transition duration-150 ease-in-out"
                  transition:slide>
                  <p class="text-base leading-6 text-gray-500">
                    {entry.answer}
                  </p>
                </dd>
              {/if}
            </div>
          {:else}
            <div class="mt-6 border-t border-gray-200 pt-6">
              <dt class="text-lg leading-7">
                <button
                  on:click={() => {
                    entry.open = !entry.open;
                  }}
                  class="text-left w-full flex justify-between items-start
                  text-gray-400 focus:outline-none focus:text-gray-900">
                  <span class="font-medium text-gray-900">
                    {entry.question}
                  </span>
                  <span class="ml-6 h-7 flex items-center">
                    <svg
                      class:-rotate-180={entry.open}
                      class:rotate-0={!entry.open}
                      class="h-6 w-6 transform"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 24 24">
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </button>
              </dt>
              {#if entry.open}
                <dd
                  class="mt-2 pr-12 transition duration-150 ease-in-out"
                  transition:slide>
                  <p class="text-base leading-6 text-gray-500">
                    {entry.answer}
                  </p>
                </dd>
              {/if}
            </div>
          {/if}
        {/each}
      </dl>
    </div>
  </div>
</div>
