import { connect } from 'react-redux';
import Portfolio from '../components/Portfolio';

const mapStateToProps = (state) => {
  return {
    projects: state.projects
  }
};

export default connect(mapStateToProps)(Portfolio);
