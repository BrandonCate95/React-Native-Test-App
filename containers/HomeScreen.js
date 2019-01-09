import { connect } from 'react-redux'
import { addCount, subtractCount } from '../actions'
import HomeScreen from '../screens/HomeScreen'

const mapStateToProps = (state /*, ownProps */ ) => {
  return {
    count: state.counter
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addCount: () => {
      dispatch(addCount())
    },
    subtractCount: () => {
      dispatch(subtractCount())
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScreen)