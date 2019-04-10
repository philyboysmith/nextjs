import moment from 'moment';
import EmbedContainer from 'react-oembed-container';
import AuthorList from './AuthorList';
import CategoryList from './CategoryList';
import TagList from './TagList';
import SubNav from './SubNav';

const Post = ({ post, categories }) => (
  <div className="md:flex">
    <aside className="md:w-48 md:pt-4 border-t-2 border-cyan">
      <div>
        <p className="mb-8">
          By{' '}
          <strong>
            <AuthorList authors={post._embedded.author} />
          </strong>
          <div className="w-6 my-4 ">
            <hr className="border-t border-grey-dark" />
          </div>
          {moment(post.date).format('LLL')}
        </p>
        <h4 className="uppercase text-sm">Categories</h4>
        {post._embedded['wp:term'][0].length > 0 && <CategoryList terms={post._embedded['wp:term'][0]} />}
      </div>
    </aside>
    <article className="flex-1 border-t-2 border-cyan md:mx-8 md:pt-2 entry">
      {post._embedded['wp:featuredmedia'].length && (
        <img src={post._embedded['wp:featuredmedia'][0].source_url} alt="" />
      )}
      <h1 dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
      <p>
        <em>
          by <AuthorList authors={post._embedded.author} /> - {moment(post.date).format('LLL')}
        </em>
      </p>
      <EmbedContainer markup={post.content.rendered}>
        <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
      </EmbedContainer>
      {post._embedded['wp:term'][1].length > 0 && <TagList tags={post._embedded['wp:term'][1]} />}
    </article>
    <div className="md:w-64" />
  </div>
);

export default Post;
