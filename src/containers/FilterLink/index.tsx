import { IVisibilityFilter, IState } from 'types/state'
import { connect } from 'react-redux'
import { setVisibilityFilter } from 'actions/actionCreators'
import Link from 'components/Link'

const mapStateToProps = (state: IState, ownProps: {filter: IVisibilityFilter}): {active: boolean} => {
  return {
    active: ownProps.filter === state.visibilityFilter
  }
}

const mapDispatchToProps = (dispatch: Function, ownProps: {filter: IVisibilityFilter}): {onClick: () => void} => {
  return {
    onClick: () => {
      dispatch(setVisibilityFilter({filter: ownProps.filter}))
    }
  }
}

const FilterLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(Link)

export default FilterLink
