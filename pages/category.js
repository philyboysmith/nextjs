import { withRouter } from 'next/router';
import DefaultLayout from '../components/layouts/Layout';
import PostList from '../components/ui/PostList';
import wpapi from '../services/wpapi';
import Pagination from '../components/ui/Pagination';

class categoryPage extends React.Component {
  static async getInitialProps({ query }) {
    // <Pagination /> component add a "page" argument to url
    const currentPage = query.page ? query.page : 1;
    const categories = await wpapi.categories().slug(query.slug);
    const category = categories[0];
    const categoryArray = [];
    categoryArray.push(category.id);
    const tree = {
      parent: {},
      children: [],
    };
    if (category.parent == 0) {
      tree.parent = category;
      const children = await wpapi.categories().parent(category.id);
      tree.children = children;
      children.map(child => categoryArray.push(child.id));
    } else {
      const parent = await wpapi.categories().id(category.parent);
      tree.parent = parent;
      tree.children = await wpapi.categories().parent(parent.id);
    }
    console.log(tree);
    const posts = await wpapi
      .posts()
      .categories(categoryArray)
      .embed()
      .perPage(10)
      .page(currentPage);
    return { tree, category, posts, paging: posts._paging };
  }

  render() {
    return (
      <DefaultLayout>
        <PostList tree={this.props.tree} category={this.props.category} posts={this.props.posts} />
        {this.props.paging && <Pagination totalPages={this.props.paging.totalPages} />}
      </DefaultLayout>
    );
  }
}

export default withRouter(categoryPage);
