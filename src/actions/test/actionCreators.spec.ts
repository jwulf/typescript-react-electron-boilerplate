import expect from 'expect'
import * as actions from '../actionCreators'
import { IVisibilityFilter } from '../../types/state'

describe('Action Creators', () => {

  describe('addTodo', () => {
    it('Should create an action to add a todo', () => {
      const text = 'Finish docs'
      const id = 0
      const actual = actions.addTodo({id, text})
      const expected = {
        type: 'ADD_TODO',
        payload: {
            id,
            text
        }
      }

      expect(actual).toEqual(expected)
    })
  })

  describe('toggleTodo', () => {
    it('Should create an action to toggle a todo', () => {
      const index = 5
      const actual = actions.toggleTodo({index})
      const expected  = {
        type: 'TOGGLE_TODO',
        payload: {
          index
        }
      }

      expect(actual).toEqual(expected)
    })
  })

  describe('setVisibilityFilter', () => {
    it('Should create an action to change the visibility filter', () => {
      const filter: IVisibilityFilter = 'SHOW_ALL'
      const actual = actions.setVisibilityFilter({filter})
      const expected = {
        type: 'SET_VISIBILITY_FILTER',
        payload: {
          filter
        }
      }

      expect(actual).toEqual(expected)
    })
  })

})