import React from 'react'
import { Card } from 'reactstrap'
import CardContainer from './CardContainer'

const CardLayout = () =>{
    return(
        <div>
            <CardContainer />
            <hr/>
            <CardContainer header='Duis aute irure dolor' text='Lorem ipsum dolor sit amet'/>
            <hr/>
            <CardContainer title='230,000'/>
        </div>
    )
}

export default CardLayout;