<script context="module">
    export async function load({ page, fetch }) {
        return {
            props: {}
        };
    }
</script>

<svelte:head>
    <title>a day in the life of student who make 'a day in the life' video</title>
    <meta name="description" content="Let me show you what a REAL day in the life looks like.">
</svelte:head>


<div id='container'>
    <h1>a day in the life of students who make 'a day in the life' videos</h1>
    <div style="position: relative; padding-bottom: 56.25%; padding-top: 30px; height: 0; margin: 0 auto;">
        <iframe src="https://www.youtube.com/embed/8p7pphdSOYk" title="a day in the life of students who make &#39;a day in the life&#39; videos" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; margin: 0;"></iframe>
    </div>
    <p>I felt like most of the 'day in the life' videos I'd seen were a bit <i>too</i> productive, picturesque, and exciting, so I decided to try my hand at one. </p>
</div>

<style>
    #container {
        max-width: 800px;
        margin: 0 auto;
    }
    h1 {
        font-size: 2.75em;
        
    }

    p {
        font-size: 1.75em;
    }
    
    @media (max-width: 720px) {
        h1 {
            margin-left: 20px;
            font-size: 1.75em;
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
