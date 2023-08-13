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

<p>in particular: absurd, whimsical and playful things. the term i've adopted from my high school newspaper in an attempt to describe this is
    <a href='https://unoptimal.substack.com/p/an-introduction-to-backpage-content' target='_blank'>"backpage content"</a>. will report back when i figure out what that means.</p>

<p>these days i usually find myself making videos and interactive web content while trying to get into physical computing and design.
    i don't really know what means, but it sounds legible enough.

</p>

<p>previously, i wrote a lot of essays. most of them were bad. i've since moved the few i like to <a href='https://unoptimal.substack.com/' target='_blank'>substack</a>. 
i also make videos from time to time. you can find them on <a href='https://www.youtube.com/@unoptimal' target='_blank'>my youtube channel</a>.</p>

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