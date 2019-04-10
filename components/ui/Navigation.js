import Link from 'next/link';
import PropTypes from 'prop-types';

const Navigation = class extends React.Component {
  state = {
    mobileMenuOpened: false,
  };

  static propTypes = {
    links: PropTypes.arrayOf(
      PropTypes.shape({
        href: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
      }).isRequired
    ),
  };

  render() {
    const { classes, links } = this.props;
    return <nav className="flex-1">{<MenuRight links={links} />}</nav>;
  }
};

/**
 * MenuRight
 */

const MenuRight = ({ links }) => (
  <ul className="list-reset flex">
    {links.map(link => (
      <li key={link.href} className="linksLi">
        <Link href={link.href} as={link.as}>
          <a className="text-grey-darkest no-underline uppercase p-4 md:pl-0 font-bold text-sm ">{link.title}</a>
        </Link>
      </li>
    ))}
  </ul>
);

export default Navigation;
