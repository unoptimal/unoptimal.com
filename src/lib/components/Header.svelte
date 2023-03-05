<script>
  import { base } from "$app/paths";
</script>

<header>
    <a href="{base}/"><img src="/logo.png" alt="website logo"></a>
    <a href="{base}/essays">essays</a>
    <a href="{base}/videos">videos</a>
    <a href="{base}/code">code</a>
    <a href="{base}/misc">misc</a>
</header> 

<style>
header {
  display: flex;
  justify-content: center;
  align-items: center;
}
img {
  max-width: 150px;
  height: auto;
}
a {
  padding: 0 10px; /* Add padding inside links */
  text-decoration: none;
}

</style>