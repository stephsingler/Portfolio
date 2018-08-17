import { connect } from 'react-redux';
import LatestWork from '../components/LatestWork';

const mapStateToProps = (state) => {
  return {
    projects: state.projects
  }
};

export default connect(mapStateToProps)(LatestWork);
