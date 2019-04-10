import Link from 'next/link';

const CategoryListItem = ({ term }) => (
  <li className="mr-2 mb-2">
    <Link href={`/category?slug=${term.slug}`} as={`/category/${term.slug}`} prefetch>
      <a className="bg-grey-light text-white block py-1 px-2 no-underline hover:bg-cyan text-sm">{term.name}</a>
    </Link>
  </li>
);

export default CategoryListItem;
