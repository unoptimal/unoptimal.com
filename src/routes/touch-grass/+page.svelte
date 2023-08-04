<div id='container'>
    <h1>Touching Grass</h1>
    <video controls style="width: 100%;">
        <source src="/grass.mp4" type="video/mp4">
        Your browser does not support the video tag.
    </video>

    <p><a href='https://knowyourmeme.com/memes/touch-grass'>"Go touch grass"</a> is a popular online phrase used to suggest 
        that someone spends too much time online. </p>
        <br>
    <p>So naturally, I set up a mechanism where touching a houseplant triggers
        a Python script (via an Arduino) that automatically turns the computer off. You don't even have to get out of your chair!</p>
    
</div>


<style>
    #container *{
        max-width: 800px;
        margin: 0 auto;
    }
    video{
        padding-bottom:20px
    }
    h1{
        font-size: 2.75em;
    }
    p{
        font-size: 1.75em;
    }
    @media (max-width: 720px) {
        video{
            padding: 0 20px;
            padding-bottom:20px
        }
        h1{
            padding: 0 20px;
            font-size: 2.75em;
        }
        p {
            margin: 10px 0;
            padding: 0 20px;
            font-size: 1.75em;
        }
    }

</style>