<svelte:head>
    <title>unoptimal</title>
    <meta property="og:title" content=unoptimal />
  </svelte:head>

<script>
    export let data
    import { base } from '$app/paths';

</script>
    
    <h1>essays</h1>
    * indicate personal favorites
      
    <ul>
      {#each data.posts as post}
        <li><a href="{base}{post.path}">{post.meta.title}</a><small><time>{post.meta.smalldate}</time></small></li>
      {/each}
    </ul>

