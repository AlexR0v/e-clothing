import React, { Component } from 'react'
import PreviewCollection from '../../components/preview-collection/PreviewCollection'
import collections from './shop.data'

class Shop extends Component {
  constructor (props) {
    super(props)
    this.state = {
      collections
    }
  }

  render () {
    return (
      <div className='shop-page'>
        {
          this.state.collections.map(({ id, ...props }) => (
            <PreviewCollection key={id} {...props} />
          ))
        }
      </div>
    )
  }
}

export default Shop
