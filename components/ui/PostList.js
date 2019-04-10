import Link from 'next/link';
import PostListItem from './PostListItem';

const PostList = ({ tree, category, posts }) => (
  <div className="md:flex">
    {tree && (
      <aside className="md:w-48 md:pt-4 border-t-2 border-cyan md:mr-8">
        <div>
          <h2>{tree.parent.name}</h2>
          <ul className="list-reset">
            {tree.children.map(child => (
              <li>
                <Link href={`/category?slug=${child.slug}`} as={`/category/${child.slug}`} prefetch>
                  <a className="text-grey-darkest no-underline uppercase py-2 md:pl-0 font-bold text-sm hover:text-cyan block border-b border-cyan">
                    {child.name}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    )}
    <section className="flex-1 border-t-2 border-cyan md:mr-8 md:pt-2 entry">
      {posts.map(post => (
        <PostListItem key={post.id} post={post} />
      ))}
    </section>
    <div className="md:w-64" />
  </div>
);

export default PostList;
