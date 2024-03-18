<script context="module">
    export async function load({ page, fetch }) {
        return {
            props: {}
        };
    }
</script>

<svelte:head>
    <title>unoptimal</title>
    <meta name="description" content="i like making things :)">
</svelte:head>

<script>
    import data from "../data/selected_works.json";
</script>

<h1>Hi! I'm Justin. </h1>
<h3 id='desc'>I'm a creative developer who likes making whimsical things on the Internet. Call them proofs of concepts.</h3>

<div class="container">
    <div class="grid">
        {#each data as item (item.id)}
            <div>
                <a href="{item.id}">
                    <img src="{item.thumbnail}" alt="thumbnail">
                    <div class="project-info">
                        <h2 class="title">{item.title}</h2>
                    </div>
                </a>
                    <p class="description">{item.description}</p>
            </div>
        {/each}
    </div>
</div>

<style>
    
    .container {
        max-width: 1000px;
        width: 100%;
        box-sizing: border-box;
    }

    .grid {
        display: grid;
        grid-template-columns: repeat(2, minmax(300px, 1fr));
        gap: 60px;
        padding: 0 15px;
        margin: 0 auto;
    }
    h1 {
            padding: 0 15px;
        }

    #desc{
        padding: 0 15px;
    }

    img {
        width: 100%;
        height: auto;
    }

    .project-info {
        display: flex;
        flex-direction: column;
    }

    .title {
        font-size: 1.75rem;
        font-weight: bold;
        max-height: 4rem; 
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .description {
        margin-top: 8px;
        flex-grow: 1;
        font-size: 1.25rem;
    }

    @media (max-width: 600px) {
        h1 {
            padding: 0 15px;
        }
        .grid {
            grid-template-columns: 1fr;
            padding: 0 15px;
        }
    }

</style>
