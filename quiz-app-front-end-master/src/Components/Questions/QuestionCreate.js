import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function QuestionCreate() {

   const [id,idchange] = useState("");
   const [topic_id,topicchange] = useState("");
   const [question,questionchange] = useState("");
   const [answer1,answer1change] = useState("");
   const [answer2,answer2change] = useState("");
   const [answer3,answer3change] = useState("");

   const [correct_answers,correct_answerschange] = useState("");
   const [images,imagechange] = useState("");

   const [points,pointschange] = useState("");
   const [timer_seconds,timechange] = useState("");
   const [is_active,activechange] = useState(false);
   const navigate=useNavigate();


   const handleSubmit = (e)=>{
    e.preventDefault();    

    const data={id,topic_id,question,answer1,answer2,answer3,correct_answers,images,points,timer_seconds,is_active}

    fetch("http://localhost:3005/questions",{
        method:"POST",
        headers:{"content-type":"application/json"},
        body:JSON.stringify(data)
    })
    .then((res) => {
    alert("Saved...")
    navigate("/")
    }).catch((err)=>{
    console.log(err.message);
   })
}


  return (
    <div className='row'>
        <div className='offset-lg-3 col-lg-6'>
            <form className='container' onSubmit={handleSubmit}>
                <div className='card'>
                    <div className='card-title'>
                    </div>
                    <div className='card-body' style={{"textAlign":"left"}}>
                         <div className='row'>
                            <div className='col-lg-12'>
                                <div className='form-control'>
                                    <label>ID</label>
                                    <input value={id} disabled="disabled" className='form-control'></input>
                                </div>
                            </div>

                            <div className='col-lg-12'>
                                <div className='form-control'>
                                    <label>Topic</label>
                                    <input value={topic_id} onChange={e=>topicchange(e.target.value)} className='form-control'></input>
                                </div>
                            </div>

                            <div className='col-lg-12'>
                                <div className='form-control'>
                                    <label>Question</label>
                                    <input value={question} onChange={e=>questionchange(e.target.value)} className='form-control'></input>
                                </div>
                            </div>

                            <div className='col-lg-12'>
                                <div className='form-control'>
                                    <label>Answer 1</label>
                                    <input value={answer1} onChange={e=>answer1change(e.target.value)} className='form-control'></input>
                                </div>
                            </div>

                            <div className='col-lg-12'>
                                <div className='form-control'>
                                    <label>Answer 2</label>
                                    <input value={answer2} onChange={e=>answer2change(e.target.value)} className='form-control'></input>
                                </div>
                            </div>
                            <div className='col-lg-12'>
                                <div className='form-control'>
                                    <label>Answer 3</label>
                                    <input value={answer3} onChange={e=>answer3change(e.target.value)} className='form-control'></input>
                                </div>
                            </div>

                            <div className='col-lg-12'>
                                <div className='form-control'>
                                    <label>Correct Answer</label>
                                    <input value={correct_answers} onChange={e=>correct_answerschange(e.target.value)} className='form-control'></input>
                                </div>
                            </div>

                            <div className='col-lg-12'>
                                <div className='form-control'>
                                    <label>Image</label>
                                    <input  value={images} onChange={e=>imagechange(e.target.value)}  className='form-control'></input>
                                </div>
                            </div>

                            <div className='col-lg-12'>
                                <div className='form-control'>
                                    <label>Points</label>
                                    <input value={points} onChange={e=>pointschange(e.target.value)} className='form-control'></input>
                                </div>
                            </div>

                            <div className='col-lg-12'>
                                <div className='form-check'>
                                    <input checked={is_active} onChange={e=>activechange(e.target.checked)} type="checkbox" className='form-check-input'></input>
                                    <label className='form-check-label'>Is Active</label>
                                </div>
                            </div>

                            <div className='col-lg-12'>
                                <div className='form-control'>
                                    <label>Time</label>
                                    <input value={timer_seconds} onChange={e=>timechange(e.target.value)} className='form-control'></input>
                                </div>
                            </div>

                            <div className='col-lg-12'>
                                <div className='form-group' >
                                    <button  type="submit" className='btnSave btn btn-success'>Save</button>
                                    <Link to="/"className='btnBack btn btn-danger'>Back</Link>
                                </div>
                            </div>
                         </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
  )
}
