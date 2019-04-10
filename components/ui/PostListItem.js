import Link from 'next/link';
import LinkButton from './LinkButton';

const PostListItem = ({ post }) => {
  const thumbnail = post._embedded['wp:featuredmedia']
    ? post._embedded['wp:featuredmedia'][0].media_details.length
      ? post._embedded['wp:featuredmedia'][0].media_details.sizes.medium.source_url
      : post._embedded['wp:featuredmedia'][0].source_url
    : null;
  console.log(thumbnail);
  return (
    <Link className="cursor-pointer" href={`/post?slug=${post.slug}`} as={`/post/${post.slug}`}>
      <a>
        <article className="flex mb-4">
          {thumbnail && (
            <div className="w-64">
              <img src={thumbnail} alt="" />
            </div>
          )}

          <div className="flex-1 px-4">
            <h2
              className="pr-4 text-xl text-grey-darkest mb-2 text-cyan"
              dangerouslySetInnerHTML={{ __html: post.title.rendered }}
            />
            <div
              className="text-grey-darkest font-light mb-4 entry"
              dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
            />
          </div>
        </article>
      </a>
    </Link>
  );
};

export default PostListItem;
