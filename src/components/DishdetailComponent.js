import React, {Component} from 'react';
import {media} from 'reactstrap';
import {Card, CardImg, CardImgOverlayer, CardText, CardBody, CardTitle} from 'reactstrap';

class DishDetail extends Component{

    renderComments(arrComm){        
        if(null != arrComm)
        {
            return (
                <div className="col-12 col-md-5 m-1">
                    <h4>{"Comments:"}</h4>  
                    {arrComm.map((val, ind, arr) => {
                        return (                    
                                <div key={ind} >                                                    
                                    <div>
                                        <div>
                                            {val.comment}
                                        </div>
                                        <div>
                                            --{val.author}, {val.date}
                                        </div>                            
                                    </div>
                                </div>   
                            );                        
                        }
                    )}
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
                <div className="col-12 col-md-5 m-1">
                    <Card>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>               
                </div>
            );
        }
        else 
        {
            return(<div></div>);
        }
    }    

    render(){
        return (
            <div className="row">
                {this.renderDish(this.props.selectedDish)}
                {this.renderComments((null != this.props.selectedDish) ? this.props.selectedDish.comments : null)}            
            </div>            
        );
    }
}

export default DishDetail;