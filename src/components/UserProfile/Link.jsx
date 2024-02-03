import PropTypes from 'prop-types';

const Link = (props) => {
  return (
    <div className='flex gap-3 text-txt-high-contrast'>
      <img src={props.image} alt={props.alt} width={20} height={16} />
      <h1>{props.info}</h1>
    </div>
  );
};

Link.propTypes = {
  image: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  info: PropTypes.string.isRequired,
};

export default Link;
