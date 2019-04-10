import TagListItem from './TagListItem';

const TagList = ({ tags }) => (
  <ul className="my-2 list-reset flex flex-wrap">
    <span className="mr-2">Tags: </span>
    {tags.map(tag => (
      <TagListItem key={tag.id} tag={tag} />
    ))}
  </ul>
);

export default TagList;
