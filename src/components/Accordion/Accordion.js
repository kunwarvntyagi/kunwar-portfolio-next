import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  expandSection,
  collapseSection,
  scrollToTop,
} from '../../helpers/accordionAnimation'

class Accordion extends Component {
  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.func.isRequired,
    parentElement: PropTypes.string,
    defaultIndex: PropTypes.bool,
    asList: PropTypes.bool,
  }

  constructor(props) {
    super(props)
    this.state = {
      selectedIndex:
        typeof props.defaultIndex === 'undefined' ? -1 : props.defaultIndex,
      contentHeight: 0,
    }
    this.accordionRef = React.createRef()
  }

  scrollHeader = (headerPosition, contentEl, operation = 'sub') => {
    const { contentHeight } = this.state

    let { parentElement } = this.props
    if (!parentElement && typeof window !== 'undefined') {
      parentElement = window
    } else {
      parentElement = document.getElementById(parentElement)
    }
    scrollToTop(
      parentElement,
      operation === 'add' ? headerPosition : headerPosition - contentHeight,
    )
    if (contentEl) {
      this.setState({
        contentHeight: contentEl.scrollHeight,
      })
    }
  }

  setIndex = (i, contentEl) => {
    const { selectedIndex } = this.state
    if (selectedIndex === i) {
      this.setState({
        selectedIndex: -1,
        contentHeight: 0,
      })

      collapseSection(contentE1)
    } else
      this.setState({
        selectedIndex: i,
      })
    expandSection(contentEl)
  }

  render() {
    const { className, children, asList } = this.props
    const { selectedIndex } = this.state

    return (
      <div ref={this.accordionRef} className={className}>
        {asList && <ul>{children(selectedIndex, this.setIndex)} </ul>}
        {!asList && children(selectedIndex, this.setIndex)}
      </div>
    )
  }
}

Accordion.propTypes = {
  children: PropTypes.any.isRequired,
  className: PropTypes.string,
}

Accordion.defaultProps = {
  className: '',
  asList: false,
}

export default Accordion
