import { IAction } from 'types/actions'
import { IVisibilityFilter } from 'types/state'
import { expect } from 'chai'
import * as actions from 'actions/actionCreators'

describe('Action Creators', () => {

  describe('addTodo', () => {
    it('Should create an action to add a todo', () => {
      const text = 'Finish docs'
      const id = 0
      const actual = actions.addTodo({id, text})
      const expected: IAction<{ id: number, text: string }> = {
        type: 'ADD_TODO',
        payload: {
            id,
            text
        }
      }

      expect(actual).to.deep.equal(expected)
    })
  })

  describe('toggleTodo', () => {
    it('Should create an action to toggle a todo', () => {
      const index = 5
      const actual = actions.toggleTodo({index})
      const expected: IAction<{ index: number }>  = {
        type: 'TOGGLE_TODO',
        payload: {
          index
        }
      }

      expect(actual).to.deep.equal(expected)
    })
  })

  describe('setVisibilityFilter', () => {
    it('Should create an action to change the visibility filter', () => {
      const filter: IVisibilityFilter = 'SHOW_ALL'
      const actual = actions.setVisibilityFilter({filter})
      const expected: IAction<{ filter: IVisibilityFilter }> = {
        type: 'SET_VISIBILITY_FILTER',
        payload: {
          filter
        }
      }

      expect(actual).to.deep.equal(expected)
    })
  })

})
