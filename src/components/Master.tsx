
import {useState} from "react";
import {Button, Card, Col, Container, ListGroup, Row } from "react-bootstrap";
import {IUser} from "../models/IUser";
import Detail from "./Detail";

const Master = (props: any) => {
    const [currentUser, setCurrentUser] = useState<IUser | undefined>(undefined);

    const handleDetails = (e: any) =>{
        setCurrentUser(props.userData[parseInt(e.target.id)]);
    };
    return(
        <Container>
            <Row>
                <Col xs={6}>
                    {props.userData.map((user: IUser, index: string) => { return(
                        <Card style={{width: '18rem'}}>
                            <ListGroup variant="flush">
                                <ListGroup.Item>
                                    <Card.Body>
                                        <Card.Title>{user.fullName}</Card.Title>
                                        <Card.Text>{user.username}</Card.Text>
                                        <Button variant="primary" id={""+index} onClick={handleDetails}>Details</Button>
                                    </Card.Body>

                                </ListGroup.Item>

                            </ListGroup>
                        </Card>
                    )})}
                </Col>
                <Col xs={6}>
                    <Detail currentUser={currentUser}/>
                </Col>

            </Row>
        </Container>
    );
};

export default Master