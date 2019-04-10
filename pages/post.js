import { withRouter } from 'next/router';
import DefaultLayout from '../components/layouts/Layout';
import Post from '../components/ui/Post';
import wpapi from '../services/wpapi';

class PostPage extends React.Component {
  static async getInitialProps({ query }) {
    const posts = await wpapi
      .posts()
      .slug(query.slug)
      .embed();
    const categories = await wpapi.categories();
    return { post: posts[0], categories };
  }

  render() {
    const { post, categories } = this.props;
    return (
      <DefaultLayout>
        <Post post={post} categories={categories} />
      </DefaultLayout>
    );
  }
}

export default withRouter(PostPage);
