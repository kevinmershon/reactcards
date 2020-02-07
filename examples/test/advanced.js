import React from 'react'
import { assert } from 'chai'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-15'
import { Foo, Bar } from '../components'

configure({ adapter: new Adapter() })

export function testBarAdvancedComponent() {
    describe('Test <Bar />', () => {
        it('should display a bar. drink up!', () => {
            const wrapper = shallow(<Bar/>)
            assert.equal(wrapper.text(), 'a bar. drink up!')
        })

        it('should contain class bar', () => {
            const wrapper = shallow(<Bar />)
            assert.equal(wrapper.find('.bar').length, 1)
        })
    })
}

export function testFooAdvancedComponent() {
    describe('Test <Foo />', () => {
        it('should display Foo says \'testing\'', () => {
            const wrapper = shallow(<Foo message="testing"/>)
            assert.equal(wrapper.text(), "Foo says 'testing.'")
        })

        it('should contain class foo', () => {
            const wrapper = shallow(<Foo message="testing"/>)
            assert.equal(wrapper.find('.foo').length, 1)
        })
    })
}
