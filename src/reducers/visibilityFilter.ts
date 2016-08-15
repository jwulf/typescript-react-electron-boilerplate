import { IAction } from '../types/actions.ts'
import { IVisibilityFilter } from '../types/state.ts'
import { isType } from '../utils/actions.ts'
import { setVisibilityFilter } from '../actions/actionCreators.ts'

function visibilityFilter(filter: IVisibilityFilter, action: IAction<any>): IVisibilityFilter {
    if (isType(action, setVisibilityFilter)) {
        return action.payload.filter
    }

    return filter
}

export default visibilityFilter