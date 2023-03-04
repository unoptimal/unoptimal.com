<script>
    export let data
    </script>
    
    <h2>essays</h2>
      
    <ul>
      {#each data.posts as post}
        <li><a href={post.path}>{post.meta.title}</a><small><time>{post.meta.smalldate}</time></small></li>
      {/each}
    </ul>

    <style>
      li{
          margin-bottom: 10px;
      }
  </style>