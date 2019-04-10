import Link from 'next/link';

const TagListItem = ({ tag }) => (
  <li className="mr-2 mb-2">
    <Link href={`/tag?slug=${tag.slug}`} as={`/tag/${tag.slug}`} prefetch>
      <a className=" block ">{tag.name}</a>
    </Link>
  </li>
);

export default TagListItem;
