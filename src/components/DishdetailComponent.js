import React from 'react';
import {Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import CommentForm from './CommentForm';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';
import { FadeTransform, Fade, Stagger } from 'react-animation-components';

    function RenderComments({arrComm, postComment, dishId}){        
        if(null != arrComm)
        {
            return (
                <div>
                    <h4>{"Comments:"}</h4>  
                    <ul className="list-unstyled">
                        <Stagger in>
                            {arrComm.map((val, ind, arr) => {
                                return (
                                    <Fade in>
                                        <li key={ind}>                                                    
                                        <p>{val.comment}</p>
                                        <p>-- {val.author}, {new Intl.DateTimeFormat('en-us', {year: 'numeric', month:'short', day: '2-digit'}).format(new Date(Date.parse(val.date)))}</p>                            
                                        </li>                                      
                                    </Fade>                    
                                    );                        
                                }
                            )}                         
                        </Stagger>                     
                    </ul>
                    <CommentForm dishId = {dishId} postComment={postComment}/>
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
                <FadeTransform in tranformProps={{
                    exitTransform: 'scale(0.5) tanslateY(-50%)'
                }}>
                    <Card>
                    <CardImg width="100%" src={baseUrl + dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                    </Card>                 
                </FadeTransform>                              
            );
        }
        else 
        {
            return(<div></div>);
        }
    }    

    const DishDetail = (props) => {

        // console.log('Dishdetail Compoent render invoked');

        if(props.isLoading){
            return (
                <div className="container">
                    <div className="row">
                        <Loading />
                    </div>
                </div>
            );
        }
        else if(props.errMess){
            return (
                <div className="container">
                    <div className="row">
                        <h4>{props.errMess}</h4>
                    </div>
                </div>
            );
        }
        else if(props.dish != null){
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
                            <RenderComments arrComm = {props.comments} 
                            postComment={props.postComment}
                            dishId={props.dish.id}/>                          
                        </div>                           
                    </div>            
                </div>           
            );
        }
        else{
            return (
                <div></div>
            );
        }
    }

export default DishDetail;