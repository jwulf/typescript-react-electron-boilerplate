//
//  Utility functions for creating and checking action types
//
//  See https://github.com/reactjs/redux/issues/992#issuecomment-191152574
//
//  CREATE AN ACTION:
//    const fooAction = actionCreator<{foo: string }>('FOO_ACTION');
//
//  CHECK FOR ACTION TYPES IN A REDUCER:
//    const reducer = (state: State, action: Action<any>): State => {
//      if (isType(action, fooAction)) {
//        // action payload type is inferred to `{foo: string}`
//      }
//      return state;
//    }
//

import { IAction } from 'types/actions'

interface ActionCreator<P> {
  type: string;
  (payload: P): IAction<P>
}

const actionTypes: any = {}
export function actionCreator<P>(type: string): ActionCreator<P> {
  if (actionTypes[type]) {
    throw new Error(`Duplicate action type: ${type}`)
  }

  actionTypes[type] = true

  return Object.assign(
    (payload: P): IAction<P> => ({type, payload}),
    {type}
  )
}

export function isType<P>(action: IAction<any>,
                          actionCreator: ActionCreator<P>): action is IAction<P> {
  return action.type === actionCreator.type
}
