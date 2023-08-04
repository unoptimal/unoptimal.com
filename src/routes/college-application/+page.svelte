<script context="module">
    export async function load({ page, fetch }) {
        return {
            props: {}
        };
    }
</script>

<svelte:head>
    <title>The College Application Process in a Nutshell</title>
    <meta name="description" content="Applying to college is certainly an Experience.">
</svelte:head>


<div id='container'>
    <h1>The College Application Process in a Nutshell</h1>

    <div style="position: relative; padding-bottom: 56.25%; padding-top: 30px; height: 0; margin: 0 auto;">
        <iframe src="https://www.youtube.com/embed/EGMkrnQMNjg" title="The College Application Process in a Nutshell" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; margin: 0;"></iframe>
    </div>

    <p>Narrator: he did not have much fun applying to college.</p>
</div>


<style>
    #container {
        max-width: 800px;
        margin: 0 auto;
    }
    h1 {
        font-size: 2.75em;
        
    }
    p {
        font-size: 1.75em;
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