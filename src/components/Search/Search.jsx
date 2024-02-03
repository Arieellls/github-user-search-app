import PropTypes from 'prop-types';

const Search = (props) => {
  return (
    <div className="flex justify-center items-center gap-2 p-3 text-high w-full rounded-2xl bg-bg-secondary max-w-xl">
      {props.children}
    </div>
  );
};


Search.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Search;