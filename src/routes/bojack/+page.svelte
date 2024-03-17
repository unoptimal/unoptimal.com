<script context="module">
    export async function load({ page, fetch }) {
        return {
            props: {}
        };
    }
</script>

<svelte:head>
    <title>I tracked every running gag in Bojack Horseman</title>
    <meta name="description" content="...and mapped them onto an interactive timeline">
</svelte:head>

<div id='container'>
    <h1>I tracked every running gag in Bojack Horseman</h1>
    <p>...and mapped them onto an interactive timeline. And a video. <b>740,000+ views</b> on YouTube.</p>
    <p>Made with D3.js.</p>
    <p>View the timeline <a href='https://unoptimal.github.io/bojack/' target='_blank'>here</a>, and the video <a href='https://www.youtube.com/watch?v=qeDGjrbWSOw' target='_blank'>here</a>.</p>
    <img src="/bojack2.webp" alt="" style='display:block'>
    <div style="position: relative; padding-bottom: 56.25%; padding-top: 30px; height: 0; margin: 0 auto;">
        <iframe src="https://www.youtube.com/embed/qeDGjrbWSOw" title="Every running gag in Bojack Horseman" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; margin: 0;"></iframe>
    </div>
    
</div>

<style>
    #container {
        max-width: 800px;
        margin: 0 auto;
    }
    h1 {
        font-size: 2.5em;
        
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
