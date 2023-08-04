<script context="module">
    export async function load({ page, fetch }) {
        return {
            props: {}
        };
    }
</script>

<svelte:head>
    <title>Grandeur</title>
    <meta name="description" content="Reimagining college as a SaaS buisness. Kind of.">
</svelte:head>


<div id='container'>
    <h1>Grandeur</h1>
    <img src="/grandeur.webp" alt="" style='display:block'>
    <img src="/grandeur2.webp" alt="" style='display:block'>
    <div style="position: relative; padding-bottom: 56.25%; padding-top: 30px; height: 0; margin: 0 auto;">
        <iframe src="https://www.youtube.com/embed/kIpOuMnGpt4" title="What is Grandeur?" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; margin: 0;"></iframe>
    </div>

    <p>I asked myself what college would look like if it was a SaaS (Software as a service) business. Had a bit of fun with the marketing while I was at it.</p>
    <p>View the website <a href='https://grandeur-six.vercel.app/' target='_blank'>here</a>, and promotional video <a href='https://www.youtube.com/watch?v=kIpOuMnGpt4' target='_blank'>here</a>.</p>
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
            font-size: 1.75em;
        }
        iframe {
            width: 100%;
            height: auto;
            padding: 0 20px;
        }
        img{
            padding: 0 20px;

        }
    }

</style>
