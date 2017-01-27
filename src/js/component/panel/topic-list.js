import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Panel from '../common/panel'
import Icon from '../common/icon'

import numeral from 'numeral'

class TopicListPanel extends React.Component {

  render() {

    const { topics } = this.props

    return (
      <Panel>
        <h2 className={'panel-header'}><Icon name={'book'} /> Topic List</h2>
        <div className={'responsible-table'}>
          <table>
            <thead>
              <tr>
                <th>Topic name</th>
                <th># of Brokers</th>
                <th># of Partitions</th>
                <th># of Replicas</th>
                <th># of Messages</th>
              </tr>
            </thead>
            <tbody>
            {topics.map((topic, index) =>
              <tr key={index}>
                <td>{topic.name}</td>
                <td>{numeral(topic.brokers.length).format('0,0')}</td>
                <td>{numeral(topic.partitions.length).format('0,0')}</td>
                <td>{numeral(topic.replicationFactor).format('0,0')}</td>
                <td>{numeral(topic.messageCount).format('0,0')}</td>
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
  topics: state.topic.topics
})

export default connect(mapStateToProps, null)(TopicListPanel)
