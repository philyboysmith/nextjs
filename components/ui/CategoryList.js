import CategoryListItem from './CategoryListItem';

const TermList = ({ terms }) => (
  <ul className="my-2 list-reset flex flex-wrap">
    {terms.map(term => (
      <CategoryListItem key={term.id} term={term} />
    ))}
  </ul>
);

export default TermList;
