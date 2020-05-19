<script>
  import MobileMenu from '../../components/MobileMenu.svelte';
</script>

<div class="relative bg-white">
  <div
    class="flex justify-between items-center px-4 py-6 sm:px-6 md:justify-start
    md:space-x-10">
    <div>
      <a href="/" class="flex">
        <img class="h-8 w-auto sm:h-10" src="/logo-512.webp" alt="Workflow" />
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
          class="text-base leading-6 font-medium text-gray-500
          hover:text-gray-900 focus:outline-none focus:text-gray-900 transition
          ease-in-out duration-150">
          Africa Day
        </a>
      </nav>
    </div>
  </div>
</div>

<div class="flex items-center justify-center p-8">
  <iframe
    title="Africa Day videos"
    width="1024"
    height="576"
    src="https://www.youtube-nocookie.com/embed/4tYjRp2pl3c"
    frameborder="0"
    allow="accelerometer; autoplay; encrypted-media; gyroscope;
    picture-in-picture"
    allowfullscreen />
</div>
