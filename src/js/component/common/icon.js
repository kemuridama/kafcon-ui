import React from 'react'

export default class Icon extends React.Component {

  render() {

    const { name } = this.props

    return (
      <i className={'fa fa-' + name}></i>
    )

  }

}
