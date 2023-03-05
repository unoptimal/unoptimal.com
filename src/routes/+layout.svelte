<script>

import Header from "$lib/components/Header.svelte";
import Footer from "$lib/components/Footer.svelte";
import '$lib/styles/styles.css'
import { fade } from 'svelte/transition'
export let data;

</script>
<Header />

{#key data.currentRoute}
  <main in:fade={{ duration: 150, delay: 150 }} out:fade={{ duration: 150 }}>
    <slot />
    <Footer />  
  </main>
{/key}  


<style>
  main {
    max-width: 800px;
    margin: 0 auto;
  }
  
</style>

