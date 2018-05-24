import { connect } from 'react-redux';
import InstagramFeed from '../components/InstagramFeed';

const mapStateToProps = (state) => {
  return {
    instagram: state.instagram
  };
};

export default connect(mapStateToProps)(InstagramFeed);
