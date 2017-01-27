import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { fetchBrokers } from '../../action/broker'
import { fetchAllBrokerMetrics, fetchCombinedBrokerMetrics } from '../../action/broker-metrics'
import { fetchTopics } from '../../action/topic'

import Icon from '../common/icon'
import ClusterPanel from '../panel/cluster'
import CombinedBrokerMetricsChart from '../chart/combined-broker-metrics'
import BrokerListPanel from '../panel/broker-list'
import TopicListPanel from '../panel/topic-list'

class DashboardPage extends React.Component {

  componentDidMount() {
    const { fetchBrokers, fetchAllBrokerMetrics, fetchCombinedBrokerMetrics, fetchTopics } = this.props
    fetchBrokers()
    fetchAllBrokerMetrics()
    fetchCombinedBrokerMetrics()
    fetchTopics()
    this.timer = setInterval(() => {
      fetchBrokers()
      fetchAllBrokerMetrics()
      fetchCombinedBrokerMetrics()
      fetchTopics()
    }, 30000)
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  render() {
    return (
      <main className={'main'}>
        <h1 className={'page-header'}><Icon name={'dashboard'} /> Dashboard</h1>
        <div className={'row'}>
          <div className={'half'}>
            <ClusterPanel />
          </div>
          <div className={'half'}>
            <CombinedBrokerMetricsChart />
          </div>
        </div>
        <BrokerListPanel />
        <TopicListPanel />
      </main>
    )
  }

}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    fetchBrokers,
    fetchAllBrokerMetrics,
    fetchCombinedBrokerMetrics,
    fetchTopics
  }, dispatch)
}

export default connect(null, mapDispatchToProps)(DashboardPage)
