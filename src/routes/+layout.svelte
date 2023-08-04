<header>
    <div class="logo-section">
        <a href="/"><img src='/logo.png'></a>
        <a href='/' class="title"><b>unoptimal</b></a>
    </div>

    <div class="nav-section">
        <a href="/archives">archives</a>
        <a href="/about">about</a>
    </div>

    <div class="social-section">

        <a href="https://youtube.com/@unoptimal" target="_blank">
            <i class="fab fa-youtube"></i>
        </a>

        <a href="https://twitter.com/thatsnotoptimal" target="_blank">
            <i class="fab fa-twitter"></i>
        </a>

        <a href="https://instagram.com/thatsnotoptimal" target="_blank">
            <i class="fab fa-instagram"></i>
        </a>

        <a href="https://github.com/unoptimal" target="_blank">
            <i class="fab fa-github"></i>
        </a>     

    </div>
</header>

<main>
    <slot />  
</main>

<style>
    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        flex-direction: row;
    }

    .logo-section, .nav-section, .social-section {
        display: flex;
        align-items: center;
    }

    .logo-section {
        margin-right: 20px;
    }

    .nav-section{
        font-size: 1.75em;
    }

    .nav-section a, .social-section a {
        margin: 0 10px;
    }

    .title {
        color:#16b7ff; 
        font-size:1.75em;
    }

    img{
        width: 150px;
        height: 150px;
    }
    
.social-section i {
        font-size: 1.5em;
    }

    @media (max-width: 720px) {
        header {
            flex-direction: column;
        }

        .title {
            font-size: 2.5em;
        }

        .logo-section{
            padding-right:20px;
            padding-left:20px;
        }
        
        img {
            width: 125px;
            height: 125px;
        }

        .nav-section {
            font-size: 2em;
            margin-bottom: 20px;
            padding-right:20px;
            padding-left:20px;
        }
        .social-section{
        margin-bottom: 20px;
    }

    }
</style>
