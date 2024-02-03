import PropTypes from 'prop-types';

const StatusTile = (props) => {
  return (
    <div className='flex flex-col justify-center items-center'>
        <p>{props.title}</p>
        <p>{props.value}</p>
    </div>
  )
}

// Define propTypes
StatusTile.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.any.isRequired,
};

export default StatusTile