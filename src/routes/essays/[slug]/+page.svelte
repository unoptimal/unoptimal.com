<script>
    export let data;
  </script>

  <svelte:head>
    <title>{data.title}</title>
    <meta property="og:title" content={data.title} />
  </svelte:head>

  <article>
    {#if data.series}
      <h1><i>{data.series}</i></h1>
    {/if}
    <h1>{ data.title }</h1>
    <p>{data.date}</p>
    <svelte:component this={data.content} />
  </article>

  