import { endpoint } from '@sveltejs/kit';

export const get = endpoint(async () => {
  const res = await fetch('http://localhost:1337/api/posts?populate=*');
  console.log(res);
  const data = await res.json();
  return { body: data };
});
