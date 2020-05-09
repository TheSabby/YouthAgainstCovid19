<script>
  import { fade, slide, scale, fly } from "svelte/transition";
  import { key } from "../actions/key";
  import { away } from "../actions/away";
  import Nav from "../components/Nav.svelte";
</script>

<div class="min-h-screen border-t-8 border-teal-700">

  <div class="max-w-7xl mx-auto px-4 py-10 sm:max-w-2xl sm:px-6 lg:px-8">
    <slot></slot>
  </div>
</div>