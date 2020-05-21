<script>
  import MobileMenu from "../../components/MobileMenu.svelte";
</script>

<div class="top pb-8">
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
    Together for a
    <span style="color: #eaa739">stronger Africa</span>
  </h1>

  <div class="mt-4 flex items-center justify-center p-4">
    <div
      style="height: 576px; width: 1024px; max-width: 90%; background: #000" />
    <!-- <iframe
      title="Africa Day videos"
      width="1024"
      height="576"
      src="https://www.youtube-nocookie.com/embed/4tYjRp2pl3c"
      frameborder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope;
      picture-in-picture"
      allowfullscreen /> -->
  </div>

  <div class="mt-4 flex justify-center">
    <span class="inline-flex rounded-md shadow-sm">
      <button
        type="button"
        class="support-btn inline-flex items-center px-6 py-3 border
        border-transparent text-2xl tracking-tight leading-6 font-semibold rounded-md text-white
        focus:outline-none transition ease-in-out duration-150">
        Support Us
      </button>
    </span>
  </div>
</div>

<img
  class="hidden sm:block"
  src="/AfricaDay_BannerLarge.png"
  alt="Africa Day" />
<img class="sm:hidden" src="/AfricaDay_BannerMobile.png" alt="Africa Day" />
