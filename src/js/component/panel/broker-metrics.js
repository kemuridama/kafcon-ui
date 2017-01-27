import React from 'react'
import { connect } from 'react-redux'

import Panel from '../common/panel'
import Icon from '../common/icon'

import numeral from 'numeral'

class BrokerMetricsPanel extends React.Component {

  render() {

    const { id, metrics } = this.props
    const brokerMetrics = metrics.filter(x => x.brokerId == id)[0]
    if (!brokerMetrics) return null

    const { messageInPerSec, bytesInPerSec, bytesOutPerSec } = brokerMetrics.latest

    return (
      <Panel>
        <h2 className={'panel-header'}><Icon name={'thermometer'} /> Broker Metrics</h2>
        <div className={'responsible-table'}>
          <table>
            <thead>
              <tr>
                <th>Rate</th>
                <th>Mean</th>
                <th>1 min</th>
                <th>5 min</th>
                <th>15 min</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Input messages</td>
                <td>{numeral(messageInPerSec.meanRate).format('0,0.00') + ' msgs/s'}</td>
                <td>{numeral(messageInPerSec.oneMinuteRate).format('0,0.00') + ' msgs/s'}</td>
                <td>{numeral(messageInPerSec.fiveMinuteRate).format('0,0.00') + ' msgs/s'}</td>
                <td>{numeral(messageInPerSec.fifteenMinuteRate).format('0,0.00') + ' msgs/s'}</td>
              </tr>
              <tr>
                <td>Input bytes</td>
                <td>{numeral(bytesInPerSec.meanRate).format('0.00 b') + '/s'}</td>
                <td>{numeral(bytesInPerSec.oneMinuteRate).format('0.00 b') + '/s'}</td>
                <td>{numeral(bytesInPerSec.fiveMinuteRate).format('0.00 b') + '/s'}</td>
                <td>{numeral(bytesInPerSec.fifteenMinuteRate).format('0.00 b') + '/s'}</td>
              </tr>
              <tr>
                <td>Output bytes</td>
                <td>{numeral(bytesOutPerSec.meanRate).format('0.00 b') + '/s'}</td>
                <td>{numeral(bytesOutPerSec.oneMinuteRate).format('0.00 b') + '/s'}</td>
                <td>{numeral(bytesOutPerSec.fiveMinuteRate).format('0.00 b') + '/s'}</td>
                <td>{numeral(bytesOutPerSec.fifteenMinuteRate).format('0.00 b') + '/s'}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Panel>
    )

  }

}

const mapStateToProps = state => ({
  metrics: state.brokerMetrics.metrics
})

export default connect(mapStateToProps, null)(BrokerMetricsPanel)
