import PropTypes from 'prop-types';

import Header from '../ui/Header';
import Navigation from '../ui/Navigation';
import Container from '../ui/Container';
import config from '../../cultbox';

const Layout = ({ children }) => (
  <div className="font-sans min-h-screen text-grey-darkest">
    <Header links={config.mainMenuLinks} />
    <Container>
      <main>{children}</main>
    </Container>
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
