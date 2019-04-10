import { withRouter } from "next/router";
import DefaultLayout from "../components/layouts/Layout";
import PostList from "../components/ui/PostList";
import wpapi from "../services/wpapi";
import Pagination from "../components/ui/Pagination";

class TagPage extends React.Component {
  static async getInitialProps({ query }) {
    // <Pagination /> component add a "page" argument to url
    const currentPage = query.page ? query.page : 1;
    const tags = await wpapi.tags().slug(query.slug);
    const tag = tags[0];
    const posts = await wpapi
      .posts()
      .tags(tag.id)
      .perPage(10)
      .embed()
      .page(currentPage);
    return { tag, posts, paging: posts._paging };
  }

  render() {
    return (
      <DefaultLayout>
        <h1>{this.props.tag.name}</h1>
        <PostList posts={this.props.posts} />
        <Pagination totalPages={this.props.paging.totalPages} />
      </DefaultLayout>
    );
  }
}

export default withRouter(TagPage);
