export async function load({ params }){
    const post = await import(`../${params.slug}.md`)
    const { title, smalldate, date } = post.metadata
    const content = post.default
  
    return {
      content,
      title,
      smalldate,
      date,
    }
  }