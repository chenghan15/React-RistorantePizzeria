import React, {Component} from 'react';
import {media} from 'reactstrap';
import {Card, CardImg, CardImgOverlayer, CardText, CardBody, CardTitle} from 'reactstrap';

class DishDetail extends Component{

    renderDish(dish){
        if(dish != null){
            return (
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.descrition}</CardText>
                    </CardBody>
                </Card>
            );
        }
        else 
        {
            return(<div></div>);
        }
    }    

    render(){
        return (
            <div className="col-12 col-md-5 m-1">
                {this.renderDish(this.props.selectedDish)}
            </div>         
        );
    }
}

export default DishDetail;