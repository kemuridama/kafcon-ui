import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Container from './common/container'
import NavigationBar from './common/navigation-bar'
import Sidebar from './common/sidebar'

import { fetchCluster } from '../action/cluster'

class Kafcon extends React.Component {

  static timer = null

  componentDidMount() {
    const { fetchCluster } = this.props
    fetchCluster()
    this.timer = setInterval(fetchCluster, 30000)
  }

  componentWillUnmount() {
    clearTimeout(this.timer)
  }


  render() {

    const { children } = this.props

    return (
      <div>
        <NavigationBar />
        <Container>
          <div className={'row'}>
            <Sidebar />
            {children}
          </div>
        </Container>
      </div>
    )
  }

}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    fetchCluster
  }, dispatch)
}

export default connect(null, mapDispatchToProps)(Kafcon)
