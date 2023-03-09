<script>
    import { onMount } from 'svelte';
    import data from '../../data/weekly-links.json';
    import { Accordion, AccordionItem } from 'svelte-collapsible'
    let issues = [];
  
    onMount(() => {
      issues = data.issues;
    });

    const duration = 0.3 // seconds
    const easing = 'linear'

  </script>

<Accordion { duration } { easing }>
  {#each issues as issue, index}
    <AccordionItem key={index}>
      <h2 slot='header'>
        {issue.title}
      </h2>
      <div slot="body" class='container'>
        <h4>Articles:</h4>
        {#each issue.articles as article}
          <div class="article">
            <ul>
              <li><a href={article.url} target="_blank" rel="noopener noreferrer">{article.title}</a> <small>{article.time}</small></li>
            </ul>
          </div>
        {/each}
        <h4>Tweets:</h4>
        {#each issue.tweets as tweet}
          <div class="tweet">
            <ul>
              <li><a href={tweet.url} target="_blank" rel="noopener noreferrer">{tweet.text}</a> <small>{tweet.time}</small></li>
            </ul>
          </div>
        {/each}
        <h4>Misc:</h4>
        {#each issue.misc as misc}
          <div class="misc">
            <ul>
              <li><a href={misc.url} target="_blank" rel="noopener noreferrer">{misc.title}</a> <small>{misc.time}</small></li>
            </ul>
          </div>
        {/each}
        <h4>Question Of The Week:</h4>
          <ul>
            <li>{issue.question}</li>
          </ul>
      </div>

    </AccordionItem>
  {/each}
</Accordion>

<style>

  .article, .tweet, .misc{
    line-height: 1;
  }

  h4 {
  margin-top: 0;
  margin-bottom: 10px;
}

    :global(.accordion-item) {
		border-bottom: 1px solid rgb(100, 120, 140);
	}


  li{
      margin-bottom: 10px;
  }

  small{
      color: #16b7ff
  }

  .container {
  border: 1px solid #ddd;
  padding: 10px;
  background-color: #f5f5f5;
  margin-bottom: 20px;
}


</style>