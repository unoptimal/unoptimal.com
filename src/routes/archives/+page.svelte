<script>
    import data from "../../data/archives.json"

    function getUniqueMediums() {
        const mediums = data.map(item => item.medium);
        return [...new Set(mediums)];
    }

</script>

<h1>Archives</h1>

{#each getUniqueMediums() as medium}
    <div id='container'>
        <h2><b>{medium}</b></h2>
        {#each data.filter(item => item.medium === medium) as item}
            <div>
                <p><a href="{item.link}" target='_blank'><b>{item.title}</b></a> - {item.description}</p>
            </div>
        {/each}
    </div>
{/each}

<style>
    #container {
        max-width: 800px;
        margin-bottom: 40px; /* Add some bottom margin for spacing */
    }

    h2 {
        font-size: 1.75em;
        margin: 20px 0;
        color: #16b7ff;
    }

    p {
        margin: 5px 0; /* Add some spacing between project entries */
        font-size:1.3em;
    }

    @media (max-width: 720px) {
        h1{
            padding-left:20px;
            padding-right:20px;
        }
        h2 {
            font-size: 1.8em;
            padding-left:20px;
            padding-right:20px;
        }

        p {
            margin: 10px 0; /* Increase spacing on mobile */
            padding-left:20px;
            padding-right:20px;
        }
    }
</style>
