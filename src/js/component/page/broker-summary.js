import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { fetchBrokers } from '../../action/broker'
import { fetchCombinedBrokerMetrics } from '../../action/broker-metrics'

import Icon from '../common/icon'
import CombinedBrokerMetricsPanel from '../panel/combined-broker-metrics'
import CombinedBrokerMetricsChart from '../chart/combined-broker-metrics'
import BrokerListPanel from '../panel/broker-list'


class BrokerSummaryPage extends React.Component {

  componentDidMount() {
    const { fetchBrokers, fetchCombinedBrokerMetrics } = this.props
    fetchBrokers()
    fetchCombinedBrokerMetrics()
    this.timer = setInterval(() => {
      fetchBrokers()
      fetchCombinedBrokerMetrics()
    }, 30000)
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  render() {
    return (
      <main className={'main'}>
        <h1 className={'page-header'}><Icon name={'server'} /> Broker Summary</h1>
        <div className={'row'}>
          <div className={'half'}>
            <CombinedBrokerMetricsPanel />
          </div>
          <div className={'half'}>
            <CombinedBrokerMetricsChart />
          </div>
        </div>
        <BrokerListPanel />
      </main>
    )
  }

}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    fetchBrokers,
    fetchCombinedBrokerMetrics
  }, dispatch)
}

export default connect(null, mapDispatchToProps)(BrokerSummaryPage)
