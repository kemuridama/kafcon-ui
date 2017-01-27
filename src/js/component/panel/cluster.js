import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import numeral from 'numeral'

import Panel from '../common/panel'
import Icon from '../common/icon'

import { fetchCluster } from '../../action/cluster'

class ClusterPanel extends React.Component {

  render() {

    const {
      name,
      brokerCount,
      topicCount,
      partitionCount,
      messageCount,
      zookeepers
    } = this.props

    return (
      <Panel>
        <h2 className={'panel-header'}><Icon name={'globe'} /> Cluster</h2>
        <div className={'responsible-table'}>
          <table>
            <tbody>
              <tr>
                <th>Cluster Name</th>
                <td>{name}</td>
              </tr>
              <tr>
                <th>ZooKeepers</th>
                <td>
                  <ul>
                  {zookeepers.map((zookeeper, index) =>
                    <li key={index}>{zookeeper}</li>
                  )}
                  </ul>
                </td>
              </tr>
              <tr>
                <th># of Brokers</th>
                <td>{numeral(brokerCount).format('0,0')}</td>
              </tr>
              <tr>
                <th># of Topics</th>
                <td>{numeral(topicCount).format('0,0')}</td>
              </tr>
              <tr>
                <th># of Partitions</th>
                <td>{numeral(partitionCount).format('0,0')}</td>
              </tr>
              <tr>
                <th># of Messages</th>
                <td>{numeral(messageCount).format('0,0')}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Panel>
    )

  }

}

const mapStateToProps = state => ({
  name: state.cluster.name,
  brokerCount: state.cluster.brokers.length,
  topicCount: state.cluster.topics.length,
  partitionCount: state.cluster.partitionCount,
  messageCount: state.cluster.messageCount,
  zookeepers: state.cluster.zookeepers
})

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    fetchCluster
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ClusterPanel)
