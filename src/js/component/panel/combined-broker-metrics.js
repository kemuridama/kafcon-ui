import React from 'react'
import { connect } from 'react-redux'

import numeral from 'numeral'

import Panel from '../common/panel'
import Icon from '../common/icon'

class CombinedBrokerMetricsPanel extends React.Component {

  render() {

    const { combinedMetrics } = this.props

    if (combinedMetrics && combinedMetrics.latest) {

      const { messageInPerSec, bytesInPerSec, bytesOutPerSec } = combinedMetrics.latest

      return (
        <Panel>
          <h2 className={'panel-header'}><Icon name={'thermometer'} /> Combined Metrics</h2>
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
        </Panel>
      )

    }

    return null

  }

}

const mapStateToProps = state => ({
  combinedMetrics: state.brokerMetrics.combinedMetrics
})

export default connect(mapStateToProps, null)(CombinedBrokerMetricsPanel)
