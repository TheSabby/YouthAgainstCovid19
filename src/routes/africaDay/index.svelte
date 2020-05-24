<script>
  import { onMount } from "svelte";
  import moment from "moment";
  import MobileMenu from "../../components/MobileMenu.svelte";

  function pad(n, width, z) {
    z = z || "0";
    n = n + "";
    return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
  }

  const eventTime = 1590332400000;
  let diffTime = 3600000;
  let duration = moment.duration(diffTime, "milliseconds");
  let hours = pad(duration.hours(), 2);
  let minutes = pad(duration.minutes(), 2);
  let seconds = pad(duration.seconds(), 2);

  onMount(() => {
    const interval = 1000;
    const currentTime = Date.now();
    diffTime = eventTime - currentTime;
    setInterval(() => {
      duration = moment.duration(duration - interval, "milliseconds");
      hours = pad(duration.hours(), 2);
      minutes = pad(duration.minutes(), 2);
      seconds = pad(duration.seconds(), 2);
    }, interval);
  });
</script>

<style>
  .top {
    background: rgb(52, 143, 65);
    background: radial-gradient(
      circle,
      rgba(52, 143, 65, 1) 52%,
      rgba(32, 97, 41, 1) 100%
    );
  }

  .gold-btn {
    background-color: #eaa739;
  }

  .gold-btn:hover {
    background-color: #ffbd50;
  }

  .gold-btn:active {
    background-color: #d89a35;
  }

  .gold {
    color: #eaa739;
  }
</style>

<svelte:head>
  <title>Africa Day Pre-event | NexusAfrik</title>
  <meta
    name="description"
    content="It's time to celebrate Africa Liberation Day. We're going digital
    with Africa's talented musicians &amp; artists &amp; African Union
    leadership. Watch on the 24th the Pre-Event featuring Pape Diouf to know
    more about the concert and Africa COVID-19 Fund." />
  <meta property="og:title" content="Africa Day Pre-event | NexusAfrik" />
  <meta
    property="og:description"
    content="It's time to celebrate Africa Liberation Day. We're going digital
    with Africa's talented musicians &amp; artists &amp; African Union
    leadership. Watch on the 24th the Pre-Event featuring Pape Diouf to know
    more about the concert and Africa COVID-19 Fund." />
  <meta
    property="og:image"
    content="https://nexusafrik.org/PreAfricaDay_BannerLarge.jpg" />
  <meta property="og:url" content="https://nexusafrik.org/africaDay" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta property="og:site_name" content="NexusAfrik" />
  <meta name="twitter:image:alt" content="Africa Day Pre-Event" />
  <meta name="twitter:site" content="@nexusafrik" />
</svelte:head>

<div class="top pb-16 min-h-screen">
  <div class="relative">
    <div
      class="flex justify-between items-center px-4 py-6 sm:px-6
      md:justify-start md:space-x-10">
      <div>
        <a
          href="/"
          class="text-base leading-6 font-medium text-gray-50
          hover:text-gray-300 focus:outline-none focus:text-gray-900 transition
          ease-in-out duration-150">
          Home
        </a>
      </div>
      <div class="-mr-2 -my-2 md:hidden">
        <MobileMenu />
      </div>
      <div
        class="hidden md:flex-1 md:flex md:items-center md:justify-between
        md:space-x-12">
        <nav class="flex space-x-10">
          <a
            href="/africaDay"
            class="text-base leading-6 font-medium text-gray-50
            hover:text-gray-300 focus:outline-none focus:text-gray-900
            transition ease-in-out duration-150">
            Africa Day
          </a>
        </nav>
      </div>
    </div>
  </div>

  <h1
    style="line-height: 3.5rem"
    class="mt-6 px-1 text-white text-center text-5xl font-extrabold
    tracking-tighter sm:text-6xl sm:font-extrabold md:leading-10
    sm:tracking-tight">
    Together for
    <span class="gold">stronger Africa</span>
  </h1>

  {#if duration > 0}
    <h3
      class="mt-6 px-1 text-white text-center text-3xl font-extrabold
      sm:text-4xl sm:font-extrabold md:leading-10 font-mono">
      {`${hours}:${minutes}:${seconds}`}
    </h3>

    <div class="mt-2 flex flex-col px-2 sm:items-center">
      <h4
        class="text-center text-2xl leading-9 font-extrabold tracking-tight
        text-white sm:text-3xl sm:leading-10">
        It's almost time!
      </h4>
    </div>

    <picture>
      <source
        media="(max-width: 640px)"
        srcset="/PreAfricaDay_BannerMobile.jpg" />
      <img class="mt-8" src="/PreAfricaDay_BannerLarge.jpg" alt="Africa Day" />
    </picture>
  {:else}
    <div class="mt-4 flex items-center justify-center p-4">
      <iframe
        title="Africa Day Pre-event"
        width="1024"
        height="576"
        src="https://www.youtube-nocookie.com/embed/8FP4y2mGess"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope;
        picture-in-picture"
        allowfullscreen />
    </div>
  {/if}

  <div class="mt-8 flex flex-col items-center">
    <div class="text-2xl tracking-tight font-bold text-center">
      <h3 class="text-white text-4xl gold">Spread the word!</h3>
      <a
        href="https://twitter.com/intent/tweet?button_hashtag=StrongerTogether&ref_src=twsrc%5Etfw"
        class="text-white hover:text-gray-300 focus:text-white
        active:text-gray-500"
        target="_blank"
        rel="noopener noreferrer">
        #StrongerTogether
      </a>
    </div>

    <div class="mt-4 flex justify-center">
      <a
        href="https://twitter.com/_AfricanUnion"
        target="_blank"
        rel="noopener noreferrer"
        class="text-white hover:text-gray-300">
        <span class="sr-only">Twitter</span>
        <svg class="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
          <path
            d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178
            0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646
            4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0
            00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27
            5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022
            4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0
            012 18.407a11.616 11.616 0 006.29 1.84" />
        </svg>
      </a>
      <a
        href="https://www.facebook.com/AfricanUnionCommission/"
        target="_blank"
        rel="noopener noreferrer"
        class="ml-6 text-white hover:text-gray-300">
        <span class="sr-only">Facebook</span>
        <svg class="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
          <path
            fill-rule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128
            8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89
            1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63
            1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clip-rule="evenodd" />
        </svg>
      </a>
    </div>

    <span class="mt-8 inline-flex rounded-md shadow-sm">
      <a
        href="https://au.int/aucovid19responsefund"
        class="gold-btn inline-flex items-center px-6 py-3 border
        border-transparent text-2xl tracking-tight leading-6 font-semibold
        rounded-md text-white hover:text-white active:text-white
        focus:outline-none transition ease-in-out focus:text-white duration-150"
        target="_blank"
        rel="noopener noreferrer">
        Support Us
      </a>
    </span>

    <section class="py-8 overflow-hidden">
      <div class="relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="relative">
          <blockquote>
            <div
              class="max-w-3xl mx-auto text-center text-2xl leading-9
              font-medium text-white">
              <p>
                &ldquo;In celebration of the 57 years of African unity, we rely
                on your solidarity, to show up for Africa today, and support us
                to fundraise for Africa COVID-19 Response Fund.&rdquo;
              </p>
            </div>
            <footer class="mt-8">
              <div class="md:flex md:items-center md:justify-center">
                <div class="md:flex-shrink-0">
                  <img
                    class="mx-auto h-10 w-10 rounded-full"
                    src="/Aya-Chebbi.jpg"
                    alt="Special Envoy on Youth, Aya Chebbi" />
                </div>
                <div
                  class="mt-3 text-center md:mt-0 md:ml-4 md:flex
                  md:items-center">
                  <div class="text-base leading-6 font-medium text-white">
                    Aya Chebbi
                  </div>

                  <svg
                    class="hidden md:block mx-1 h-5 w-5 gold"
                    fill="currentColor"
                    viewBox="0 0 20 20">
                    <path d="M11 0h3L9 20H6l5-20z" />
                  </svg>

                  <div class="text-base leading-6 font-medium text-gray-300">
                    Special Envoy on Youth
                  </div>
                </div>
              </div>
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  </div>
</div>
