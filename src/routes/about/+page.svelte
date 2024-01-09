<script context="module">
    export async function load({ page, fetch }) {
        return {
            props: {}
        };
    }
</script>

<svelte:head>
    <title>about</title>
    <meta name="description" content="i like making things">
</svelte:head>


<div id='container'>
<h1>hi! i'm justin. i like making things.</h1>
<img src="/me.PNG" alt="">

<p>in particular: absurd, whimsical, and playful things. call them proofs of concepts.</p>

<p>sometimes, i write <a href='https://unoptimal.substack.com/' target='_blank'>essays</a> and make <a href='https://www.youtube.com/@unoptimal' target='_blank'>videos</a>. i can also be found saving stuff on <a href='https://curius.app/unoptimal' target='_blank'>curius</a>.</p>

<p>i like new friends. <a href='mailto:unoptimalblogs@gmail.com'>say hi!</a> (wherever you prefer)</p>
</div>

<style>
    * {
        max-width: 800px;
    }
    h1{
        font-size: 2em;
    }
    p{
        font-size: 1.5em;
    }

    #container{
        margin: 0 auto;
        padding: 0 20px;
    }

    a{
        color:#16b7ff
    }
</style>