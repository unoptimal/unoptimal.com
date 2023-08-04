<script context="module">
    export async function load({ page, fetch }) {
        return {
            props: {}
        };
    }
</script>

<svelte:head>
    <title>The Journey of a Pencil</title>
    <meta name="description" content="Visualizing Leonard Read's essay I, Pencil">
</svelte:head>


<div id='container'>
    <h1>The Journey of a Pencil</h1>
    <img src="/pencil.webp" alt="" style='display:block'>

    <p>Leonard Read's essay <i><a href='https://en.wikipedia.org/wiki/I,_Pencil'>I, Pencil</a></i> walks through the complex social coordination
        needed to make even a simple pencil.</p>
    <p>I thought it was really cool to see all the different forces at play, and wanted to illustrate them in a scrollytell.</p>
    <p>View the project <a href='https://pencil-journey.vercel.app/' target='_blank'>here</a>.</p>
</div>

<style>
    #container {
        max-width: 800px;
        margin: 0 auto;
    }
    h1 {
        font-size: 2.75em;
        
    }
    img {
        width: 100%;
    }
    p {
        font-size: 1.75em;
    }
    a {
        color: #16b7ff;
    }
    @media (max-width: 720px) {
        h1 {
            margin-left: 20px;
        }
        p {
            margin: 10px 0;
            padding: 0 20px;
            font-size: 1.5em;
        }

        img{
            padding: 0 20px;

        }
    }

</style>
