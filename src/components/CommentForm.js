import React, { Component } from 'react';
import { Modal, ModalHeader, ModalBody, Label, Button, NavItem, Nav, Row, Col } from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';


const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);

class CommentForm extends Component{

    constructor(props){
        super(props);

        this.state = {
            isNavOpen: false,
            isModalOpen: false
        };
  
        this.toggleModal = this.toggleModal.bind(this);    
        this.handleSubmit = this.handleSubmit.bind(this);         
    }

    toggleModal(){
        this.setState({
            isModalOpen : !this.state.isModalOpen
        });
    }    

    handleSubmit(values){
        console.log("Current State is: " + JSON.stringify(values));
        alert("Current State is: " + JSON.stringify(values));
        this.toggleModal();
    }   

    render(){
        return (
            <div>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <Button outline onClick={this.toggleModal}>
                            <span className="fa fa-comment fa-lg"> Submit Comment</span>
                        </Button>
                    </NavItem>
                </Nav>   

                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                    <ModalBody>

                        <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                            <Row className="form-group">
                                <Label httmlFor="rating" md={5}>Rating</Label>
                                <Col md={10}>
                                    <Control.select model=".rating" name="rating" defaultValue="5"
                                        className = "form-control">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>                                        
                                    </Control.select>
                                </Col>                                
                            </Row>                        
                            <Row className="form-group">
                                <Label httmlFor="yourname" md={5}>Your Name</Label>
                                <Col md={10}>
                                    <Control.text model=".yourname" id="yourname" name="yourname"
                                    placeholder="Your Name"
                                    className="form-control"
                                    validators={{
                                        required, minLength: minLength(3), maxLength: maxLength(15)
                                    }}/>
                                    <Errors className="text-danger"
                                    model=".yourname"
                                    show="touched"
                                    messages={{
                                        required: 'Requried',
                                        minLength: 'Must be greater than 3 charactors',
                                        maxLength: 'Must be 15 characters or less'
                                    }}/>
                                </Col>
                            </Row>   
                            <Row className="form-group">
                                <Label httmlFor="comment" md={5}>Comment</Label>
                                <Col md={10}>
                                    <Control.textarea model=".comment" id="comment" name="comment"
                                    rows="12"
                                    className="form-control"/>
                                </Col>
                            </Row> 
                            <Row className="form-group">
                                <Col md={{size:10, offset:0}}>
                                    <Button type="submit" color="primary">Submit</Button>
                                </Col>
                            </Row> 
                        </LocalForm>

                    </ModalBody>
                </Modal>                
            </div>
        );
    }
}

export default CommentForm;