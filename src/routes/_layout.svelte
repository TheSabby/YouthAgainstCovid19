<script>
  import { fade, slide, scale, fly } from "svelte/transition";
  import { key } from "../actions/key";
  import { away } from "../actions/away";
  import Nav from "../components/Nav.svelte";

  export let segment;
</script>

<div class="min-h-screen bg-gray-100">
  <Nav {segment} />

  <div class="max-w-7xl mx-auto px-4 py-10 sm:px-6 lg:px-8">
    <slot></slot>
  </div>
</div>