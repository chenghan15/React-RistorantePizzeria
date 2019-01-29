import React, { Component } from 'react'; 
import { Navbar, NavbarBrand, Jumbotron } from 'reactstrap';

class Header extends Component{

    render(){
        return (
            <React.Fragment>
                <Navbar dark color="primary">
                    <div className="container">
                        <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
                    </div>          
                </Navbar>
                <Jumbotron>
                    <div calssName="contrainer">
                        <div className="row row-header">
                            <div classsName="col-12 col-sm-6">
                                <h1>Ristorante Con Funsion</h1>
                                <p>We take inspiration form the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary</p>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
            </React.Fragment>
        );
    }
}

export default Header;