import React from 'react'

import Icon from '../common/icon'

export default class ErrorPage extends React.Component {

  render() {
    return (
      <main className={'main'}>
        <h1 className={'page-header'}><Icon name={'exclamation-triangle'} /> Error</h1>
      </main>
    )
  }

}
