import React from 'react';

import {Card, CardImg, CardImgOverlayer, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem} from 'reactstrap';
import { Link } from 'react-router-dom';

    function RenderComments({arrComm}){        
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

    function RenderDish({dish}){
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

    const DishDetail = (props) => {

        console.log('Dishdetail Compoent render invoked');

        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem>
                            <Link to="/menu">Menu</Link> 
                        </BreadcrumbItem>                        
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>
                </div>

                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <RenderDish dish = {props.dish} />
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <RenderComments arrComm = {props.comments} /> 
                    </div>                           
                </div>            
            </div>           
        );
    }


export default DishDetail;