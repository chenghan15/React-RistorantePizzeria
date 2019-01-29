import React, {Component} from 'react';
import {media} from 'reactstrap';
import {Card, CardImg, CardImgOverlayer, CardText, CardBody, CardTitle} from 'reactstrap';

class DishDetail extends Component{

    renderComments(arrComm){        
        if(null != arrComm)
        {
            return (
                <div>
                    <h4>{"Comments:"}</h4>  
                    <ul className="list-unstyled">
                        {arrComm.map((val, ind, arr) => {
                            return (                    
                                    <li key={ind}>                                                    
                                        <p>
                                            {val.comment}
                                        </p>
                                        <p>
                                           
                                            --{val.author}, {new Intl.DateTimeFormat('en-us', {year: 'numeric', month:'short', day: '2-digit'}).format(new Date(Date.parse(val.date)))}
                                        </p>                            
                                    </li>   
                                );                        
                            }
                        )}
                    </ul>

                </div>                                     
            );
        }
        else{
            return (<div></div>);
        }
    }

    renderDish(dish){
        if(dish != null){
            return (
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
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
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        {this.renderDish(this.props.selectedDish)}
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        {this.renderComments((null != this.props.selectedDish) ? this.props.selectedDish.comments : null)} 
                    </div>                           
                </div>            
            </div>           
        );
    }
}

export default DishDetail;