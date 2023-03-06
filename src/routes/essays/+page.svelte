<svelte:head>
    <title>unoptimal</title>
    <meta property="og:title" content=unoptimal />
  </svelte:head>

<script>
    export let data
    import { base } from '$app/paths';

    function formatDate(dateString) {
    const date = new Date(dateString);
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const year = date.getFullYear().toString().slice(-2);
    return `${month}.${day}.${year}`;
  }

</script>
    
    <h1>essays</h1>
    * indicate personal favorites
      
    <ul>
      {#each data.posts as post}
        <li><a href="{base}{post.path}">{post.meta.title}</a><small><time>{formatDate(post.meta.date)}</time></small> {post.meta.fav ?? ''}</li>
      {/each}
    </ul>

