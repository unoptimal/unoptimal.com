<script>
    import { onMount } from 'svelte';
    import data from '../../data/weekly-links.json';
  
    let issues = [];
  
    onMount(() => {
      issues = data.issues;
    });
  
    function toggleVisibility(index) {
      issues[index].visible = !issues[index].visible;
    }
  </script>
  
  {#each issues as issue, index}
    <div class="collapsible" on:click={() => toggleVisibility(index)}>
      <h3>{issue.title}</h3>
    </div>
    <div class="content" style="max-height: {issue.visible ? 'none' : '0px'};">
      <h4>Articles</h4>
      {#each issue.articles as article}
        <div class="article">
          <ul>
            <li><a href={article.url} target="_blank" rel="noopener noreferrer">{article.title}</a></li>
            <span>{article.time}</span>
          </ul>
        </div>
      {/each}
      <h4>Tweets</h4>
      {#each issue.tweets as tweet}
        <div class="tweet">
          <a href={tweet.url} target="_blank" rel="noopener noreferrer">{tweet.text}</a>
          <span>{tweet.time}</span>
        </div>
      {/each}
      <h4>Misc</h4>
      {#each issue.misc as misc}
        <div class="misc">
          <a href={misc.url} target="_blank" rel="noopener noreferrer">{misc.title}</a>
          <span>{misc.time}</span>
        </div>
      {/each}
      <h4>Question</h4>
      <p>{issue.question}</p>
    </div>
  {/each}
  
<style>
.collapsible {
  background-color: #f9f9f9;
  color: black;
  cursor: pointer;
  padding: 10px;
  width: 100%;
  border: none;
  text-align: left;
  outline: none;
  font-size: 14px;
}

.collapsible:hover {
  background-color: #ccc;
}

.content {
  padding: 0 10px;
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.2s ease-out;
  background-color: #f9f9f9;
}

li{
    margin-bottom: 10px;
}

</style>