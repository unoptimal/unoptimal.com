<script context="module">
    export async function load({ page, fetch }) {
        return {
            props: {}
        };
    }
</script>

<svelte:head>
    <title>"End" Meeting Buttons</title>
    <meta name="description" content="Everyone gets a button. If enough people press theirs, the meeting ends via a very loud siren.">
</svelte:head>


<div id='container'>
    <h1>"End Meeting" Buttons</h1>
    <p>Sometimes, it can be hard for leaders to smoothly end awful meetings. This is why democracy exists.
        Give everyone discreet access to a button, and if a majority presses theirs, we end the meeting via a very loud siren.</p>
    <p>Made with a handful of ESP8266's, buttons, and lots of tape.</p>

    <img src="/meeting_buttons.gif" style="width: 100%; object-fit: cover;">
    <div style="position: relative; padding-bottom: 56.25%; padding-top: 30px; height: 0; margin: 0 auto;">
        <iframe src="https://www.youtube.com/embed/L1zs8c32Kqs" title="this meeting ends when most people decide it SUCKS" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; margin: 0;"></iframe>
    </div>

    
</div>


<style>
    #container {
        max-width: 800px;
        margin: 0 auto;
    }
    @media (max-width: 720px) {
  img {
    padding: 20px;  }
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