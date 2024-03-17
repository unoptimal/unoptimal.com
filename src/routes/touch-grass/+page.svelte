<script context="module">
    export async function load({ page, fetch }) {
        return {
            props: {}
        };
    }
</script>

<svelte:head>
    <title>Touching Grass</title>
    <meta name="description" content="This is how you touch grass without doing anything remotely resembling offline behavior.">
</svelte:head>


<div id='container'>
    <h1>Touching Grass</h1>
    <p><a href='https://knowyourmeme.com/memes/touch-grass'>"Go touch grass"</a> is a popular online phrase used to suggest 
        that someone spends too much time online. </p>
    <p>So naturally, I set up a mechanism where touching a houseplant triggers
        a Python script (via an Arduino) that automatically turns the computer off. You don't even have to get out of your chair for it to!</p>
    <img src="/touching_grass.gif" style="width: 100%; object-fit: cover;">

    
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