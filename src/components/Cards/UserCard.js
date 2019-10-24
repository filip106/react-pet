import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';

class UserCard extends Component{

    state ={
        //kako povuci ceo json a ne samo dve stvari
        username:String,
        city:String
    }
    componentDidMount() {
        fetch('http://localhost:8080/api/users/1')
            .then(res => res.json())
            .then((data)=> {
                this.setState({
                    city:data.city,
                    user: data.username})
                console.log(this.state.user)

            })

    }

    render() {
        return(
            <Card>
                <Card.Header>{this.state.user}</Card.Header>
                <Card.Img variant={"top"} src={""} />
                <Card.Body>
                    <Card.Title>{this.state.city}</Card.Title>
                    <Card.Text>Description</Card.Text>
                    <Card.Link href="#">Pets</Card.Link>
                    <Card.Link href="#">View Profile</Card.Link>
                </Card.Body>
            </Card>
        );
    }
}

export default  UserCard;