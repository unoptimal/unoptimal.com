<script context="module">
    export async function load({ page, fetch }) {
        return {
            props: {}
        };
    }
</script>

<svelte:head>
    <title>Automated Ragequitting</title>
    <meta name="description" content="A custom mechanism that closes the active tab if my BPM gets too high.">
</svelte:head>


<div id='container'>
    <h1>Automated Ragequitting</h1>
    <p>Sometimes I get mad when I read dumb things on the Internet. 
        And then I think: this is stupid. Why am I getting mad over stupid things that don't matter?
    </p>
    <p>So I put together a mechanism that tracks your BPM in a Chrome extension and closes the active tab if it gets too high.</p>
    <p>Made with a Pulse Sensor, Arduino, and Javascript.</p>
    <img src="/automated_ragequitting.gif" style="width: 100%; object-fit: cover;">

    
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