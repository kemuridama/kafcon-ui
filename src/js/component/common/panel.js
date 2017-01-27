import React from 'react'

export default class Panel extends React.Component {

  render() {

    const { children } = this.props

    return (
      <div className={'panel'}>
        {children}
      </div>
    )
  }

}
