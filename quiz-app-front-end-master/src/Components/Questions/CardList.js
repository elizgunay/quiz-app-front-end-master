import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./question.css";
import { MdDelete } from 'react-icons/md';
import {AiFillEdit} from 'react-icons/ai';
import {BsPatchQuestion} from 'react-icons/bs';
import {BiTimeFive} from 'react-icons/bi';


import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export default function CardList({ item }) {
  const navigate = useNavigate();

  const LoadEdit = (id) => {
    navigate("/question/edit/" + id);
  };

  const RemoveFunction = (id) => {
    if (window.confirm("Do you want to remove?")) {
      fetch("http://localhost:3005/questions/" + id, {
        method: "DELETE",
      })
        .then((res) => {
          alert("Delete successfully!");
          window.location.reload();
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  };
  return (
    <Card className="boxx">
      <Card.Img variant="top" style={{borderRadius:"50%",height:"220px",textItems:"center"}} src={item.images} ></Card.Img>
      <Card.Body >
        {/* <Card.Title style={{fontFamily:"italic"}}>Question</Card.Title> */}
        <Card.Text>
          <span style={{fontFamily:"cursive",fontWeight:"bold",letterSpacing:"1px"}}><BsPatchQuestion size={24}/> QUESTION: </span>
          <span className="value" style={{fontFamily:"cursive"}}>{item.question}</span>
        </Card.Text>
        <Card.Text>
           <span style={{fontFamily:"cursive",fontWeight:"bold" ,letterSpacing:"1px"}}>TOPIC:</span>
           <span className="value"style={{fontFamily:"cursive"}}>{item.topic_id}</span>
        </Card.Text>
        <Card.Text>
           <span style={{fontFamily:"cursive",fontWeight:"bold" ,letterSpacing:"1px"}}>Answer 1:</span>
           <span style={{fontFamily:"cursive"}}>{item.answer1}</span>
        </Card.Text>
        <Card.Text>
           <span style={{fontFamily:"cursive",fontWeight:"bold" ,letterSpacing:"1px"}}>Answer 2:</span>
           <span style={{fontFamily:"cursive"}}>{item.answer2}</span>
        </Card.Text>
        <Card.Text>
           <span style={{fontFamily:"cursive" ,fontWeight:"bold",letterSpacing:"1px"}}>Answer 3:</span>
           <span style={{fontFamily:"cursive"}}>{item.answer3}</span>
        </Card.Text>
        <Card.Text>
        <span style={{fontFamily:"cursive" ,fontWeight:"bold",letterSpacing:"1px"}}>Correct Answer:</span>
        <span style={{fontFamily:"cursive"}}>{item.correct_answers}</span>
        </Card.Text>
        <Card.Text>
        <span style={{fontFamily:"cursive" ,fontWeight:"bold",letterSpacing:"1px"}}>Points:</span>
              <span style={{fontFamily:"cursive"}}>{item.points}</span>
        </Card.Text>
        <Card.Text>
        <span style={{fontFamily:"cursive" ,fontWeight:"bold",letterSpacing:"1px"}}><BiTimeFive size={20}/>Time:</span>
         <span style={{fontFamily:"cursive"}}>{item.timer_seconds}</span>
        </Card.Text>
        <Card.Text>
        <span style={{fontFamily:"cursive" ,fontWeight:"bold",letterSpacing:"1px"}}>Active:</span>
         <span style={{fontFamily:"cursive"}}>{item.is_active === true ? "true" : "false"}</span>
        </Card.Text>

         <Button onClick={() => LoadEdit(item.id)} style={{backgroundColor:"#17ead9",margin:"5px",fontFamily:"cursive"}}><AiFillEdit/> Edit</Button>
         <Button onClick={() => RemoveFunction(item.id)} style={{fontFamily:"cursive"}} variant="danger"><MdDelete/> Delete</Button>
       </Card.Body>
     </Card>

    
  );
}
