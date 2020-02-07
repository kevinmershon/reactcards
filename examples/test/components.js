import React from 'react'
import { assert } from 'chai'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-15'
import { Foo, Bar } from '../components'

configure({ adapter: new Adapter() })

export function testBarComponent() {
  const wrapper = shallow(<Bar/>)
  assert.equal(wrapper.text(), 'a bar. drink up!')
}

export function testFooComponent() {
  const wrapper = shallow(<Foo message="testing"/>)
  assert.equal(wrapper.text(), "Foo says 'testing'")
}
