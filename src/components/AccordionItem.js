import React, { Component } from 'react'
import styled from '@emotion/styled/macro'
import AccordionHeader from './AccordionHeader'
import AccordionBody from './AccordionBody'

const Wrapper = styled.div({
  width: '400px',
  display: 'flex',
  flexDirection: 'column'
})

class AccordionItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: this.props.procedure.order === 1 ? true : false
    }
  }
  handleToggle = (e) => {
    e.preventDefault()
    this.setState(state => ({
      isOpen: !state.isOpen
    }))
  }
  render() {
    const { procedure } = this.props;
    const { isOpen } = this.state;
    return (
      <Wrapper>
        <AccordionHeader procedure={procedure} handleToggle={this.handleToggle} />
        <AccordionBody procedure={procedure} isOpen={isOpen} />
      </Wrapper>
    );
  }
}

export default AccordionItem;