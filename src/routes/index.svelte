<script>
  import MobileMenu from "../components/MobileMenu.svelte";
</script>

<style>
  .team-section {
    background: rgb(255, 255, 255);
    background: radial-gradient(
      circle,
      rgba(255, 255, 255, 1) 0%,
      rgba(224, 224, 224, 1) 100%
    );
  }

  .flag {
    bottom: -10px;
    right: 0px;
  }
</style>

<svelte:head>
  <title>NexusAfrik</title>
  <meta
    name="description"
    content="NexusAfrik is a collective of African youth who want to make a
    difference in the continent and have an impact in the fight against the
    novel coronavirus." />
</svelte:head>

<div class="min-h-screen">
  <div class="relative bg-white overflow-hidden">
    <div class="max-w-screen-xl mx-auto ">
      <div
        class="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl
        lg:w-full lg:pb-28 xl:pb-32">
        <svg
          class="hidden lg:block absolute right-0 inset-y-0 h-full w-48
          text-white transform translate-x-1/2"
          fill="currentColor"
          viewBox="0 0 100 100"
          preserveAspectRatio="none">
          <polygon points="50,0 100,0 50,100 0,100" />
        </svg>

        <div class="relative pt-6 px-4 sm:px-6 lg:px-8">
          <nav
            class="relative flex items-center justify-between sm:h-10
            lg:justify-start">
            <div
              class="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
              <div class="flex items-center justify-between w-full md:w-auto">
                <a href="/">
                  <img
                    class="h-16 mt-2"
                    src="/logo/logo-full.png"
                    alt="NexusAfrik Logo" />
                </a>
                <div class="-mr-2 flex items-center md:hidden">
                  <MobileMenu />
                </div>
              </div>
            </div>
            <div class="hidden md:block md:ml-10 md:pr-4">
              <!-- <a
              href="#"
              class="font-medium text-gray-500 hover:text-gray-900
              focus:outline-none focus:text-gray-900 transition duration-150
              ease-in-out">
              COVID-19
            </a> -->
              <a
                href="/africaDay"
                class="font-medium text-gray-500 hover:text-gray-900
                focus:outline-none focus:text-gray-900 transition duration-150
                ease-in-out">
                Africa Day
              </a>
              <!-- <a
              href="#"
              class="ml-8 font-medium text-gray-500 hover:text-gray-900
              focus:outline-none focus:text-gray-900 transition duration-150
              ease-in-out">
              Our Network
            </a> -->
              <!-- <a
              href="/join"
              class="ml-8 font-medium text-green-600 hover:text-green-900
              focus:outline-none focus:text-green-700 transition duration-150
              ease-in-out">
              Join
            </a> -->
            </div>
          </nav>
        </div>

        <div
          class="mt-10 mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-16
          lg:mt-20 lg:px-8 xl:mt-28">
          <div class="sm:text-center lg:text-left">
            <h2
              class="text-4xl tracking-tight leading-10 font-extrabold
              text-gray-900 sm:text-5xl sm:leading-none md:text-6xl">
              Together for a
              <br class="xl:hidden" />
              <span class="text-green-600">stronger Africa</span>
            </h2>
            <p
              class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl
              sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              We add visibility to existing projects, provide networking
              opportunities, connect NGOs with potential partners, and support
              research initiatives. Join the fastest growing community of young
              people in Africa!
            </p>
            <!-- <a
            href="/join"
            class="mt-2 inline-block rounded-md shadow px-8 py-3 border border-transparent
            text-base leading-6 font-medium rounded-md text-white bg-green-600
            hover:bg-green-500 focus:outline-none focus:shadow-outline
            transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10">
            Get started
          </a> -->
          </div>
        </div>
      </div>
    </div>
    <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
      <img
        class="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
        src="/strong-hand.jpg"
        alt="Strong fist" />
    </div>
  </div>
</div>
