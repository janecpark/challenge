import React from 'react'
import CardComp from './CardComp'
import { Container, Row, Col } from 'reactstrap'

const CardContainer = ({header, text, title}) =>{
    
    return(
       <Container>
           <h3>{header}</h3>
            <p>Ut enim ad minim veniam, <strong>quis nostrud exercitation</strong> ullamco laboris nisi ut aliquip ex ea commodo consequa</p>
           <Row>
            <Col sm='6' md='4'>
            <CardComp title='Lorem' subtitle='highlight 1' text={text} />
            </Col>
            <Col sm='6' md='4'>
            <CardComp title='Duis aute' subtitle='highlight 2'/>
            </Col>
            <Col sm='6' md='4'>
            <CardComp title='Excepteur' subtitle='highlight 3' />
            </Col>
           </Row>
       </Container>
    )
}
CardContainer.defaultProps = {
    header: 'Excepteur sint occaecat'
}
export default CardContainer;