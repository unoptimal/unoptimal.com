<script context="module">
    export async function load({ page, fetch }) {
        return {
            props: {}
        };
    }
</script>

<svelte:head>
    <title>Snail is Inevitable</title>
    <meta name="description" content="A snail follows your cursor FOREVER.">
</svelte:head>


<div id='container'>
    <h1>Snail is Inevitable</h1>
    <img src="/snail.png" alt="" style='display:block'>
    <img src="/snail2.png" alt="" style='display:block'>
    <img src="/snail3.png" alt="" style='display:block'>

    <p>A chrome extension that emulates the <a href='https://knowyourmeme.com/memes/immortal-snail'>Immortal Snail</a> hypothetical. Except instead of your life, this snail goes after your cursor (s/o Slay The Spire).</p>
    <p>View the project <a href='https://chrome.google.com/webstore/detail/snail-is-inevitable/nfeomodjclpbblbenogffoaifdkdnnoh?hl=en' target='_blank'>here</a>.</p>
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

        img{
            padding: 0 20px;

        }
    }

</style>
