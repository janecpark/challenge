import React from 'react'
import { Container, Row, Col} from 'reactstrap'

const Main = () =>{
    return(
        <Container className='Main'>
            <p className='Main-header'>Lorem ipsum dolor</p><br/><br/>      
            <Row>
                <Col sm='6'>
                    <h3>Consectetur adipiscing elit</h3><br/><br/>
                    <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p><br/><br/>
                    <small>Duis aute inure dolor in <strong>reprehenderit in voluptate</strong> velit esse cilum dolore eu fuglat nulla pariatur</small>
                </Col>
                <Col sm='6'>
                <svg width="342" height="309" viewBox="0 0 342 309" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="154.5" cy="154.5" r="154.5" fill="#C4C4C4"/>
                <circle cx="284" cy="246" r="58" fill="#C4C4C4"/>
                </svg>
                </Col>
            </Row>
        
        </Container>
    
    )
}
export default Main;