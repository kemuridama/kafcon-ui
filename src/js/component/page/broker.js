import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Icon from '../common/icon'
import BrokerMetricsPanel from '../panel/broker-metrics'
import BrokerMetricsChart from '../chart/broker-metrics'
import BrokerSystemMetricsPanel from '../panel/broker-system-metrics'

import { fetchBroker } from '../../action/broker'
import { fetchBrokerMetrics } from '../../action/broker-metrics'

class BrokerPage extends React.Component {

  componentDidMount() {
    const { params, fetchBroker, fetchBrokerMetrics } = this.props
    fetchBroker(params.id)
    fetchBrokerMetrics(params.id)
    this.timer = setInterval(() => {
      fetchBroker(params.id)
      fetchBrokerMetrics(params.id)
    }, 30000)
  }

  componentWillReceiveProps(props) {
    const { params, fetchBroker, fetchBrokerMetrics } = props
    clearInterval(this.timer)
    fetchBroker(params.id)
    fetchBrokerMetrics(params.id)
    this.timer = setInterval(() => {
      fetchBroker(params.id)
      fetchBrokerMetrics(params.id)
    }, 30000)
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  render() {

    const { params } = this.props

    return (
      <main className={'main'}>
        <h1 className={'page-header'}><Icon name={'server'} /> Broker {params.id}</h1>
        <div className={'row'}>
          <div className={'half'}>
            <BrokerMetricsPanel id={params.id} />
            <BrokerSystemMetricsPanel id={params.id} />
          </div>
          <div className={'half'}>
            <BrokerMetricsChart id={params.id} />
          </div>
        </div>
      </main>
    )

  }

}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    fetchBroker,
    fetchBrokerMetrics
  }, dispatch)
}

export default connect(null, mapDispatchToProps)(BrokerPage)
