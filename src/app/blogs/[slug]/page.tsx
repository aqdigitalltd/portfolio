/*
 * Once the blog data source is in place, add:
 * - generateStaticParams() returning every slug (Cache Components needs at
 *   least one) so each article is prerendered at build time
 * - generateMetadata() for the article's title, description, Open Graph
 *   data and canonical URL (`/blogs/${slug}`)
 * - notFound() for unknown slugs
 *
 * Until then this page doesn't read `params`, so it stays a static shell.
 */
export default function BlogArticlePage() {
  return null;
}
