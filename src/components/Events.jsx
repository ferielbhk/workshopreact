import Event from "./Event";
//import events from "../events.json"
import { Alert, Col, Container, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { get } from "../services/eventServices";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Events() {

    const [showWelcome,setShowWelcome] = useState(true)
    //destructuration//comment recuperer de queryparams
    const [searchParams , setSearchParams] = useSearchParams({});
    const [events  , setEvents] = useState([]);
    //tab vide = trunny une seule fois // pas de tableau = trunny a chaque fois a chaque modification // tableau[state]=trunny k nmodify state heka
    useEffect(() => {
        console.log(searchParams.get("name"))
        console.log(searchParams.get("id"))
        fetchEvents();
        setTimeout(() => {
            setShowWelcome(false)
        },3000)
    },[])
    const fetchEvents = async () => {
        /*get().
        then((result)=>{setEvents(result.data); console.log(result)})
        .catch((error)=>console.log(error))
        //const result = get();
        //setEvents(result);*/
        try{
            const result =  await get();
            setEvents(result.data)

        }catch(error){
            console.log(error)
        }
    }

    const [show,setShow] = useState(false)
    const Buy = (event) => {
        setShow(true);
        event.nbTickets--;
        event.nbParticipants++;
        setTimeout(() => {
            setShow(false)
        }, 2000)
    }
    return (
        <Container>
            <Row>
                {showWelcome && <Alert variant="success"> Hey welcome to ESPRIT events</Alert>} 
                {events.map((element, index) => {
                    return (
                        <Col key={index} md={4}>
                            <Event event={element} Buy={Buy} />
                            <Button variant="primary" type="submit">
                                Update
                                </Button>
                            <Button variant="danger" onClick={handleDelete}>
                                Delete
                                </Button>
                        </Col>
                    )
                })}
                {show && <Alert variant="success">You have booked an event</Alert> } 
            </Row>

    </Container>
        
    )
}

export default Events;