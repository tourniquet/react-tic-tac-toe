/* globals describe, test, expect */

import React from 'react'
import { shallow } from 'enzyme'
import { createStore } from 'redux'

import ConnectedApp from './Cell'
import reducer from '../../config/reducer'

const store = createStore(reducer)

const wrapper = shallow(
  <ConnectedApp store={store} />
).dive()

describe('Cell', () => {
  test('Cell must have type div', () => {
    expect(wrapper.find('div').type()).tBe('div')
  })

  test('Cell component must create only one div', () => {
    expect(wrapper.find('div')).toHaveLength(1)
  })
})
