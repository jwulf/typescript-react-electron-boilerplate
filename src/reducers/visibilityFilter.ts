import { Action } from '../types/actions.ts'
import { VisibilityFilter } from '../types/state.ts'
import { isType } from '../utils/actions.ts'
import { setVisibilityFilter } from '../actions/actionCreators.ts'

function visibilityFilter(filter: VisibilityFilter, action: Action<any>): VisibilityFilter {
    if (isType(action, setVisibilityFilter)) {
        return action.payload.filter
    }

    return filter
}

export default visibilityFilter