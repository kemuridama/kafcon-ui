import React from 'react'
import { connect } from 'react-redux'

import Panel from '../common/panel'
import Icon from '../common/icon'

import numeral from 'numeral'

class BrokerSystemMetricsPanel extends React.Component {

  render() {

    const { id, metrics } = this.props
    const brokerMetrics = metrics.filter(x => x.brokerId == id)[0]

    if (brokerMetrics) {

      const {
        systemLoadAverage,
        systemCpuLoad,
        processCpuLoad,
        totalPhysicalMemorySize,
        freePhysicalMemorySize,
        totalSwapSpaceSize,
        freeSwapSpaceSize,
        commitedVirtualMemorySize
      } = brokerMetrics.latest.system


      const physicalMemoryUsageRate = (totalPhysicalMemorySize - freePhysicalMemorySize) / totalPhysicalMemorySize
      const swapSpaceUsageRate = (totalSwapSpaceSize - freeSwapSpaceSize) / totalSwapSpaceSize

      return (
        <Panel>
          <h2 className={'panel-header'}><Icon name={'server'} /> Broker System Metrics</h2>
          <div className={'responsible-table'}>
            <table>
              <tbody>
                <tr>
                  <th>System Load Average</th>
                  <td>{systemLoadAverage}</td>
                </tr>
                <tr>
                  <th>System CPU Load</th>
                  <td>{numeral(systemCpuLoad).format('0.000')}</td>
                </tr>
                <tr>
                  <th>Process CPU Load</th>
                  <td>{numeral(processCpuLoad).format('0.000')}</td>
                </tr>
                <tr>
                  <th>Total Physical Memory Size</th>
                  <td>{numeral(totalPhysicalMemorySize).format('0.00 b')}</td>
                </tr>
                <tr>
                  <th>Free Physical Memory Size</th>
                  <td>{numeral(freePhysicalMemorySize).format('0.00 b')}</td>
                </tr>
                <tr>
                  <th>Physical Memory Usage Rate</th>
                  <td>{numeral(physicalMemoryUsageRate).format('0.00 %')}</td>
                </tr>
                <tr>
                  <th>Total Swap Space Size</th>
                  <td>{numeral(totalSwapSpaceSize).format('0.00 b')}</td>
                </tr>
                <tr>
                  <th>Free Swap Space Size</th>
                  <td>{numeral(freeSwapSpaceSize).format('0.00 b')}</td>
                </tr>
                <tr>
                  <th>Swap Space Usage Rate</th>
                  <td>{numeral(swapSpaceUsageRate).format('0.00 %')}</td>
                </tr>
                <tr>
                  <th>Committed Virtual Memory Size</th>
                  <td>{numeral(commitedVirtualMemorySize).format('0.00 b')}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Panel>
      )

    }

    return null

  }

}

const mapStateToProps = state => ({
  metrics: state.brokerMetrics.metrics
})

export default connect(mapStateToProps, null)(BrokerSystemMetricsPanel)
