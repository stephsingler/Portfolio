import { connect } from 'react-redux';
import About from '../components/About';

const mapStateToProps = (state) => {
  return {
    projects: state.projects
  }
};

export default connect(mapStateToProps)(About);
