import { IAction } from 'types/actions'
import { IVisibilityFilter } from 'types/state'
import { isType } from 'utils/actions'
import { setVisibilityFilter } from 'actions/actionCreators'

function visibilityFilter(filter: IVisibilityFilter, action: IAction<any>): IVisibilityFilter {
    if (isType(action, setVisibilityFilter)) {
        return action.payload.filter
    }

    return filter
}

export default visibilityFilter
