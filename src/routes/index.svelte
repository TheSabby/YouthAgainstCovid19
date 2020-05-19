<script>
  import MobileMenu from "../components/MobileMenu.svelte";
</script>

<svelte:head>
  <title>AYACOVID-19</title>
  <meta
    name="description"
    content="African Youth Against COVID-19 is a collective of African youth who want to
    make a difference in the continent and have an impact in the fight against
    the novel coronavirus." />
</svelte:head>

<div class="relative bg-white overflow-hidden">
  <div class="max-w-screen-xl mx-auto ">
    <div
      class="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl
      lg:w-full lg:pb-28 xl:pb-32">
      <svg
        class="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white
        transform translate-x-1/2"
        fill="currentColor"
        viewBox="0 0 100 100"
        preserveAspectRatio="none">
        <polygon points="50,0 100,0 50,100 0,100" />
      </svg>

      <div class="relative pt-6 px-4 sm:px-6 lg:px-8">
        <nav
          class="relative flex items-center justify-between sm:h-10
          lg:justify-start">
          <div class="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
            <div class="flex items-center justify-between w-full md:w-auto">
              <a href="/">
                <img
                  class="h-8 w-auto sm:h-24 sm:mt-8"
                  src="/logo-512.png"
                  alt="" />
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
            </a>
            <a
              href="#"
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
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
            lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
            fugiat aliqua.
          </p>
          <div
            class="mt-5 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left
            lg:mx-0">
            <p class="text-base font-medium text-gray-900">
              Sign up to receive updates about the network.
            </p>
            <form action="#" method="POST" class="mt-3 sm:flex">
              <input
                aria-label="Email"
                class="appearance-none block w-full px-3 py-3 border
                border-gray-300 text-base leading-6 rounded-md
                placeholder-gray-500 shadow-sm focus:outline-none
                focus:placeholder-gray-400 focus:shadow-outline
                focus:border-blue-300 transition duration-150 ease-in-out
                sm:flex-1"
                placeholder="Enter your email" />
              <button
                type="submit"
                class="mt-3 w-full px-6 py-3 border border-transparent text-base
                leading-6 font-medium rounded-md text-white bg-gray-800
                shadow-sm hover:bg-gray-700 focus:outline-none
                focus:shadow-outline active:bg-gray-900 transition duration-150
                ease-in-out sm:mt-0 sm:ml-3 sm:flex-shrink-0 sm:inline-flex
                sm:items-center sm:w-auto">
                Notify me
              </button>
            </form>
            <p class="mt-3 text-sm leading-5 text-gray-500">
              We care about the protection of your data. Read our
              <a href="/privacy" class="font-medium text-gray-900 underline">
                Privacy Policy
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
    <img
      class="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
      src="/strong-hand.jpg"
      alt="" />
  </div>
</div>

<!-- Footer -->
<div class="bg-white">
  <div
    class="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 md:flex md:items-center
    md:justify-between lg:px-8">
    <div class="flex justify-center md:order-2">
      <a href="#" class="text-gray-400 hover:text-gray-500">
        <span class="sr-only">Facebook</span>
        <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
          <path
            fill-rule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128
            8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89
            1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63
            1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clip-rule="evenodd" />
        </svg>
      </a>
      <a href="#" class="ml-6 text-gray-400 hover:text-gray-500">
        <span class="sr-only">Instagram</span>
        <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
          <path
            fill-rule="evenodd"
            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218
            2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153
            1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0
            2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902
            4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772
            1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643
            0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902
            0 01-1.772-1.153 4.902 4.902 0
            01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902
            4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247
            1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081
            1.802h-.468c-2.456
            0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748
            1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058
            3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344
            1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3
            1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01
            3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398
            1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097
            3.097 0 00-.748-1.15 3.098 3.098 0
            00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12
            6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333
            3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110
            2.4 1.2 1.2 0 010-2.4z"
            clip-rule="evenodd" />
        </svg>
      </a>
      <a href="#" class="ml-6 text-gray-400 hover:text-gray-500">
        <span class="sr-only">Twitter</span>
        <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
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
    </div>
    <div class="mt-8 md:mt-0 md:order-1">
      <p class="text-center text-base leading-6 text-gray-400">
        &copy; 2020 African Youth Against COVID-19. All rights reserved.
      </p>
    </div>
  </div>
</div>
