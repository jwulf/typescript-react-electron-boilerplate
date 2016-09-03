import React from 'react' // tslint:disable-line:no-unused-variable
import expect from 'expect'
import { shallow } from 'enzyme'
import Todo from '../Todo'


let calledCount = 0
function setup(completed = false) {

  const props = {
    onClick: () => { calledCount++ },
    text: 'HI',
    completed
  }

  const enzymeWrapper = shallow(<Todo {...props} />)

  return {
    props,
    enzymeWrapper
  }
}

describe('components', () => {
  describe('Todo', () => {
    it('should display text prop', () => {
      const { props, enzymeWrapper } = setup()
      expect(enzymeWrapper.text()).toBe(props.text)
    })

    it('should have a line through when completed', () => {
      const completed = true
      const { props, enzymeWrapper } = setup(completed)
      expect(enzymeWrapper.html()).toInclude('line-through')
    })

    it('should not have a line through when not completed', () => {
      const completed = false
      const { props, enzymeWrapper } = setup(completed)
      expect(enzymeWrapper.html()).toExclude('line-through')
    })

    it('should call onClick prop when clicked', () => {
      calledCount = 0
      const { props, enzymeWrapper } = setup()
      enzymeWrapper.simulate('click')
      expect(calledCount).toBe(1)
    })

  })
})
