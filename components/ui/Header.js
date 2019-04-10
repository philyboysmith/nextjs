import { IoLogoTwitter, IoLogoFacebook, IoMdSearch } from 'react-icons/io';
import Link from 'next/link';

// import Logo from '../../images/cultbox-logo.svg';
import Container from './Container';
import Navigation from './Navigation';

const Header = ({ links }) => (
  <Container>
    <div className="py-2 md:pt-16" />
    <div className="flex flex-col md:flex-row text-cyan items-center mb-2">
      <Navigation links={links} />
      <div className="">
        <ul className="list-reset flex text-3xl">
          <li>
            <a href="#" className="text-cyan p-2">
              <IoLogoTwitter />
            </a>
          </li>
          <li>
            <a href="#" className="text-cyan p-2">
              <IoLogoFacebook />
            </a>
          </li>
          <li>
            <a href="#" className="text-cyan p-2">
              <IoMdSearch />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </Container>
);

export default Header;
