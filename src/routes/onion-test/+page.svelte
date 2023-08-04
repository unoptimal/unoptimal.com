<script context="module">
    export async function load({ page, fetch }) {
        return {
            props: {}
        };
    }
</script>

<svelte:head>
    <title>The Onion Test</title>
    <meta name="description" content="Was this headline written by the Onion? How sure are you?">
</svelte:head>


<div id='container'>
    <h1>The Onion Test</h1>
    <img src="/onion.png" alt="" style='display:block'>

    <p>The <a href='https://www.urbandictionary.com/define.php?term=Onion%20test'>Onion test</a> is a test to see if a headline sounds
        like it could have been written by the satirical newspaper <a href='https://www.theonion.com/'>The Onion</a>.
    </p>
    <p>Inspired by this, I scraped a bunch of entries from <a href='https://www.reddit.com/r/TheOnion'>r/TheOnion</a> and <a href='https://www.reddit.com/r/nottheonion/'>r/nottheonion</a>
    and made a game out of it. You also have to report a confidence level and are rewarded points accordingly. You might be surprised about some of the entries.</p>
    <p>View the project <a href='https://unoptimal.github.io/the-onion-test/' target='_blank'>here</a>.</p>
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
