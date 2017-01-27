import React from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'

import Chart from 'chart.js'
import moment from 'moment'

import Panel from '../common/panel'
import Icon from '../common/icon'

class BrokerMetricsChart extends React.Component {

  componentDidMount() {
    const { id, metrics } = this.props

    const chartElement = ReactDOM.findDOMNode(this.refs.chart)
    this.chart = new Chart(chartElement, {
      type: 'line',
      data: {
        datasets: [
          {
            label: 'Input messages',
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255,99,132,1)',
            fill: false,
            borderWidth: 1
          },
          {
            label: 'Input bytes',
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor:  'rgba(54, 162, 235, 1)',
            fill: false,
            borderWidth: 1
          },
          {
            label: 'Output bytes',
            backgroundColor: 'rgba(255, 206, 86, 0.2)',
            borderColor: 'rgba(255, 206, 86, 1)',
            fill: false,
            borderWidth: 1
          }
        ]
      },
      options: {
        responsibe: true,
        scales: {
          xAxes: [{
            display: false
          }]
        }
      }
    })
  }

  componentWillReceiveProps(props) {
    const { id, metrics } = props
    const brokerMetrics = metrics.filter(x => x.brokerId == id)[0]
    if (!brokerMetrics) return

    this.chart.data.labels = brokerMetrics.logs.map(x => moment(x.created).format('YYYY/MM/DD HH:mm:ss'))
    this.chart.data.datasets[0].data = brokerMetrics.logs.map(x => x.messageInPerSec.meanRate)
    this.chart.data.datasets[1].data = brokerMetrics.logs.map(x => x.bytesInPerSec.meanRate)
    this.chart.data.datasets[2].data = brokerMetrics.logs.map(x => x.bytesOutPerSec.meanRate)
    this.chart.update()
  }

  componentWillUnmount() {
    this.chart.destroy()
  }

  render() {
    return (
      <Panel>
        <h2 className={'panel-header'}><Icon name={'line-chart'} /> Broker Metrics</h2>
        <canvas width={'400'} height={'200'} ref={'chart'} />
      </Panel>
    )
  }

}

const mapStateToProps = state => ({
  metrics: state.brokerMetrics.metrics
})

export default connect(mapStateToProps, null)(BrokerMetricsChart)
