import React from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'

import moment from 'moment'
import numeral from 'numeral'

import Panel from '../common/panel'
import Icon from '../common/icon'

class BrokerListPanel extends React.Component {

  render() {

    const { brokers } = this.props

    return (
      <Panel>
        <h2 className={'panel-header'}><Icon name={'server'} /> Broker List</h2>
        <div className={'responsible-table'}>
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Host</th>
                <th>Port</th>
                <th>JMX Port</th>
                <th>Created</th>
                <th>Input messages</th>
                <th>Input bytes</th>
                <th>Output bytes</th>
              </tr>
            </thead>
            <tbody>
            {brokers.map((broker, index) =>
              <tr onClick={() => browserHistory.push('/brokers/' + broker.id)} className={'clickable'} key={index}>
                <td>{broker.id}</td>
                <td>{broker.host}</td>
                <td>{broker.port}</td>
                <td>{broker.jmxPort}</td>
                <td>{moment(broker.timestamp).format('YYYY/MM/DD HH:mm:ss')}</td>
                <td>{numeral(broker.messageInPerSec).format('0,0') + ' msgs/s'}</td>
                <td>{numeral(broker.bytesInPerSec).format('0.00 b') + '/s'}</td>
                <td>{numeral(broker.bytesOutPerSec).format('0.00 b') + '/s'}</td>
              </tr>
            )}
            </tbody>
          </table>
        </div>
      </Panel>
    )

  }

}

const mapStateToProps = state => ({
  brokers: state.broker.brokers
})

export default connect(mapStateToProps, null)(BrokerListPanel)
