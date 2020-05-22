<script>
  import Footer from '../components/Footer.svelte';

  export let segment;
</script>

<slot {segment} />

<Footer />