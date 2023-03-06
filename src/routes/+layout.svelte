<script>

import Header from "$lib/components/Header.svelte";
import CompressedHeader from "$lib/components/CompressedHeader.svelte";
import Footer from "$lib/components/Footer.svelte";
import '$lib/styles/styles.css'
import { fade } from 'svelte/transition'
export let data;

let innerWidth = 0

</script>

<svelte:window bind:innerWidth/>

{#if innerWidth <= 670}
  <CompressedHeader />
{:else}
  <Header />
{/if}

<!-- <Header /> -->
{#key data.currentRoute}
  <main in:fade={{ duration: 150, delay: 150 }} out:fade={{ duration: 150 }}>
    <slot />
    <Footer />  
  </main>
{/key}  




