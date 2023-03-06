<script>
    import { base } from "$app/paths";
  </script>
  
  <header>
    <div class="header-container">
      <div class="brand-container">
        <a href="{base}/"><img id='brand' src="{base}/logo.png" alt="website logo"></a>
        <a href="{base}/" style="color:#16b7ff; font-size:2.5em"><b>unoptimal</b></a>
      </div>
      <nav>
        <ul>
          <li><a href="{base}/essays">essays</a></li>
          <li><a href="{base}/videos">videos</a></li>
          <li><a href="{base}/code">code</a></li>
          <li><a href="{base}/misc">misc</a></li>
        </ul>
      </nav>
    </div>
  </header>

  <style>
    header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 1.5rem;
      margin-top:2rem;

  }
  
  #brand {
      max-width: 150px;
      max-height: 150px;
    }
  
  a {
      padding: 0 10px; /* Add padding inside links */
      text-decoration: none;
  }
  
  a:visited {
      color:black;
  }
        
  a:hover {
      color:#16b7ff;
  }

  .header-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

  nav {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
  }

  li {
    margin: 0 10px;
  }

  @media (max-width: 800px) {
    .header-container {
      flex-wrap: wrap;
    }

    .brand-container {
      width: 100%;
      text-align: center;
      margin-bottom: 1rem;
    }

    nav {
      width: 100%;
    }

    ul {
      flex-direction: row;
      align-items: center;
    }
  }
  
  </style>