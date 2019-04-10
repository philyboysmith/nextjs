import { withRouter } from 'next/router';
import React from 'react';
import Layout from '../components/layouts/Layout';
import PostList from '../components/ui/PostList';
import wpapi from '../services/wpapi';
import Pagination from '../components/ui/Pagination';

class PostListPage extends React.Component {
  static async getInitialProps({ query }) {
    // <Pagination /> component add a "page" argument to url
    // const currentPage = query.page ? query.page : 1;
    // const posts = await wpapi
    //   .posts()
    //   .embed()
    //   .perPage(10)
    //   .page(currentPage);
    // return { posts, paging: posts._paging };
  }

  render() {
    return <h1>hello world</h1>;
  }
}

export default withRouter(PostListPage);

// const Index = () => <h1>hello</h1>;

// export default Index;
