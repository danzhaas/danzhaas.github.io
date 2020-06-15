import React from 'react';
import {
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    CardSubtitle,
    Button
} from 'reactstrap';
import { SITES } from '../shared/SITES'

const sites=SITES;

const generateSiteCards = sites.map((site) => {
    return(
        <Card key={site.id} className='col col-sm-5'>
            <CardImg top src={site.pic} alt={site.name + 'screenshot'} />
            <CardBody>
                <CardTitle>{site.name}</CardTitle>
                <CardSubtitle>{site.subtitle}</CardSubtitle>
                <CardText>{site.desc}</CardText>
                <Button>Button</Button>
            </CardBody>
        </Card>
    )
})

const SiteCards = (props) => {

    return (
        <div>
            <h2>Site Portfolio</h2>
            {generateSiteCards}
        </div>
    );
}

export default SiteCards;
