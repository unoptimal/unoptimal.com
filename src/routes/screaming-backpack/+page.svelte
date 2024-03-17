<script context="module">
    export async function load({ page, fetch }) {
        return {
            props: {}
        };
    }
</script>

<svelte:head>
    <title>Anti-Theft Screaming Backpack</title>
    <meta name="description" content="An armable contraption that SCREAMS if someone picks it up.">
</svelte:head>


<div id='container'>
    <h1>Anti-Theft Screaming Backpack</h1>
    <p>I don't like working in public spaces alone because I worry that someone 
        is going to take my stuff. So I made an armable contraption that screams if it is picked up.</p>
    <p>Made with an Arduino, accelerometer, RF receiver, and a few other things. 5k+ views on socials.</p>

    <img src="/backpack2.webp" alt="" style='display:block'>\
    <img src="/backpack1.webp" alt="" style='display:block'>
    <img src="/screaming_backpack.gif" alt="" style='display:block'>
    <blockquote class="tiktok-embed" cite="https://www.tiktok.com/@thatsnotoptimal/video/7295100575207705902" data-video-id="7295100575207705902" style="max-width: 605px;min-width: 325px;" > <section> <a target="_blank" title="@thatsnotoptimal" href="https://www.tiktok.com/@thatsnotoptimal?refer=embed">@thatsnotoptimal</a> <p>this is a cutting edge anti theft mechanism </p> <a target="_blank" title="♬ original sound - unoptimal" href="https://www.tiktok.com/music/original-sound-7295100614516951854?refer=embed">♬ original sound - unoptimal</a> </section> </blockquote> <script async src="https://www.tiktok.com/embed.js"></script>


    
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
    a{
        color: #16b7ff;
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
        img{
            padding: 0 20px;

        }
    }

</style>