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

    <h1>About</h1>
    <img src="/me.PNG" alt="">

<p>hello. i like making things. </p>
<p>
    i try to avoid pigeonholing myself into specific labels or mediums.
    if an idea is compelling enough, i bring it to life. 
</p>

<p>
    i've built websites, assembled electronics, made <a href='https://www.youtube.com/@unoptimal/featured'>videos</a>, and written <a href='https://unoptimal.substack.com/'>blogposts</a>.   
    more to come.
</p>

<p>i like new friends. feel free to <a href='mailto:unoptimalblogs@gmail.com'>say hi!</a></p>
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