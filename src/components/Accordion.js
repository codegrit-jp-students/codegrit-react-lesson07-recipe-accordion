import React from 'react'
import styled from '@emotion/styled/macro'
import AccordionItem from './AccordionItem'

const Wrapper = styled.div({
  height: 'auto',
  width: '100%',
  display: 'flex',
  flexDirection: 'column'
})

const Accordion = ({procedures}) => {
  const orderedProcedures = procedures.sort((p1, p2) => {
    return p1.order < p2.order
  })
  const AccordionItems = orderedProcedures.map((procedure) => {
    return <AccordionItem 
      key={`procedure-${procedure.id}`} 
      procedure={procedure} />
  })
  return (
    <Wrapper id="accordion-items">
      {AccordionItems}
    </Wrapper>
  );
}

export default Accordion;