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

    let allPosts = data.posts.slice();

    allPosts.sort((a, b) => {
        const dateA = new Date(a.meta.date);
        const dateB = new Date(b.meta.date);
        return dateB - dateA;
    });

</script>

<h1>essays</h1>
* indicate personal favorites

<ul>
    {#each allPosts as post}
        <li>
          {#if post.meta.series}
            <i>{post.meta.series}:</i>
        { /if}
            <a href="{base}{post.path}">
                {post.meta.title}
            </a>
            <small>
                <time>{formatDate(post.meta.date)}</time>
            </small>
            {post.meta.fav ?? ''}

        </li>
    {/each}
</ul>
