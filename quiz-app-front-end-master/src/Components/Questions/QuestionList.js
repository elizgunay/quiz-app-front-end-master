// import React, { useState } from "react";
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./question.css";
import CardList from "./CardList";
import {IoIosAddCircle} from 'react-icons/io';


export default function QuestionList(props) {
 

  let [questions, setQuestion] = useState(null);
  //let questions = [];
  useEffect(() => {
    fetch("http://localhost:3005/questions")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        return setQuestion(data);
      });
  }, []);

  //console.log(`user = ${user}`);
  return (
     
      <div>
         <Link to="question/create" className="btn" style={{fontFamily:"cursive",alignItems:"center",marginTop:"20px",background:"#8c009e",background: "linear-gradient(to right, #8c009e, #8b36e0)"}}>
          Add New <IoIosAddCircle size={22}/>
            </Link>
      

          <div className="wrapper">
        {questions &&
          questions.map((item) => <CardList key={item.id} item={item}></CardList>)}
      </div>
    </div>
  );
}


