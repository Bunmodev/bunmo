import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const blogPosts = await getCollection('blog');

  return rss({
    title: 'BunmoDev Blog',
    description: 'Join me on my journey through software development and web technologies.',
    site: context.site,
    items: blogPosts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      link: `/blog/${post.slug}/`,
    })),
    customData: `<language>en</language>`,
  });
}
