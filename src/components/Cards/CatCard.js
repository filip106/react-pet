import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import {ListGroup, ListGroupItem} from "react-bootstrap";

class CatCard extends Component{

    state ={
        //kako povuci ceo json a ne samo dve stvari
        name:String,
        gender:String,
        breed:String,
        age:0,
        price:String,
        pedigre:Boolean,
    }
    componentDidMount() {
        fetch('http://localhost:8080/api/cats/2')
            .then(res => res.json())
            .then((data)=> {
                this.setState({
                    name:data.name,
                    gender:data.gender,
                    breed:data.breed,
                    age:data.age,
                    price:data.price,
                    pedigre:data.pedigre
                })
                console.log(this.state.user)

            })

    }
    pedigre(){if(this.state.city)
    return <ListGroupItem>pedigre checked</ListGroupItem>
    }

    render(){
        return(
            <Card>
                <Card.Header>{this.state.name},({this.state.age})</Card.Header>
                <Card.Img variant={"top"} src={""} />
                <Card.Body>
                    <Card.Title>{this.state.price}</Card.Title>
                    <ListGroup>
                        <ListGroupItem>{this.state.gender}</ListGroupItem>
                        <ListGroupItem>{this.state.breed}</ListGroupItem>
                        {this.pedigre()}
                    </ListGroup>
                    <Card.Text>Description</Card.Text>
                    <Card.Link href="#">Pets</Card.Link>
                    <Card.Link href="#">View Profile</Card.Link>
                </Card.Body>
            </Card>
        );
    }
}

export default  CatCard;