import React from 'react'
import { connect } from 'react-redux'

import { Link } from 'react-router'

import Icon from './icon'

class Sidebar extends React.Component {

  render() {

    const { cluster } = this.props

    return (
      <nav className="sidebar">
        <ul className="nav-list">
          <li className="active"><Link to={'/'}><Icon name={'dashboard'} /> Dashboard</Link></li>
        </ul>
        <h2 className={'sidebar-header'}><Icon name={'server'} /> Broker</h2>
        <ul className={'nav-list'}>
          <li><Link to={'/brokers'}>Broker Summary</Link></li>
        {cluster.brokers.map((broker, index) =>
          <li key={index}><Link to={'/brokers/' + broker.id}>Broker {broker.id}</Link></li>
        )}
        </ul>
        <h2 className={'sidebar-header'}><Icon name={'book'} /> Topic</h2>
        <ul className={'nav-list'}>
          <li><Link to={'/topics'}>Topic Summary</Link></li>
        {cluster.topics.map((topic, index) =>
          <li key={index}><Link to={'/topics/' + topic.name}>{topic.name}</Link></li>
        )}
        </ul>
      </nav>
    )

  }

}

const mapStateToProps = state => ({
  cluster: state.cluster
})

export default connect(mapStateToProps, null)(Sidebar)
