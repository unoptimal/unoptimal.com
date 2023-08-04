<script>
    import data from "../data/selected_works.json";
</script>

<h1>Selected Work</h1>

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
        gap: 20px;
        padding: 0 20px;
        margin: 0 auto;
    }
    h1 {
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
