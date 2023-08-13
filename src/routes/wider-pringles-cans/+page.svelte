<script context="module">
    export async function load({ page, fetch }) {
        return {
            props: {}
        };
    }
</script>

<svelte:head>
    <title>Wider Pringles Cans</title>
    <meta name="description" content="Never get your hand stuck in a Pringles can again.">
</svelte:head>


<div id='container'>
    <h1>Wider Pringles Cans</h1>
    <img src="/pringles2.webp" alt="" style='display:block'>
    <img src="/pringles3.webp" alt="" style='display:block'>

    <div style="position: relative; padding-bottom: 56.25%; padding-top: 30px; height: 0; margin: 0 auto;">
        <iframe src="https://www.youtube.com/embed/4TBWZnceI9o" title="Introducing: Wider Pringles Cans" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; margin: 0;"></iframe>
    </div>

    <p>Never get your hand stuck inside of a Pringles can again.</p>
    <p>View the website <a href='https://wider-pringles-cans.vercel.app/' target='_blank'>here</a>, and the video <a href='https://www.youtube.com/watch?v=4TBWZnceI9o' target='_blank'>here</a>.</p>
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
    a{
        color: #16b7ff;
    }
    @media (max-width: 720px) {
        h1 {
            font-size: 2em;
            margin-left: 20px;
        }
        p {
            margin: 10px 0;
            padding: 0 20px;
            font-size: 1.75em;
        }
        iframe {
            width: 100%;
            height: auto;
            padding: 0 20px;
        }
    }

</style>