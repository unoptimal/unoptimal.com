<script context="module">
    export async function load({ page, fetch }) {
        return {
            props: {}
        };
    }
</script>

<svelte:head>
    <title>The Sisyph-inbox</title>
    <meta name="description" content="Every time you delete an email, this Chrome extension sends you one back.">
</svelte:head>


<div id='container'>
    <h1>The Sisyph-inbox</h1>
    <p>Big Sisphyus fan. Also a big fan of never hitting Inbox Zero.</p>
    <p>And that's how The Sisph-inbox was born. 
        This is a Chrome extension that sends you a email anytime it detects that you've deleted one. 
        (s/o <a href='https://thestanleyparable.fandom.com/wiki/The_End_Is_Never...' target="_blank">The Stanley Parable</a>)</p>
    <img src="/sisphyinbox.gif" style="width: 100%; object-fit: cover;">
  

    
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