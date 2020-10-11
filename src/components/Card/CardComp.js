import React from 'react'
import {
    Card, CardText, CardBody,
    CardSubtitle, CardImg
  } from 'reactstrap';
import '../../assets/css/index.css'

const CardComp = ({title, subtitle, text}) =>{
    return(
        <div className='Card'>
            <Card>
                <CardBody>
                <CardSubtitle>{subtitle}</CardSubtitle>
                </CardBody>
                <svg width="121" height="114" viewBox="0 0 121 114" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="121" height="114" fill="#C4C4C4"/>
                </svg>
                <br/>
                <h3>{title}</h3>
                <CardBody>
                <CardText>{text}</CardText>
                </CardBody>
            </Card>
        </div>
    )
}

CardComp.defaultProps = {
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
}

export default CardComp