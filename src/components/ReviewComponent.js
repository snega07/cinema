import React from "react";
import "../styles/moviedetailstyles.css";


const ReviewComponent = () => {
  const rev=[{username:'Tony',Review:'good film',rating:'4/5',source:'Imbd'},
    {username:'Amy',Review:'average film',rating:'3/5',source:'cenima'},
    {username:'Sadie',Review:'a feel good movie',rating:'4/5',source:'rottentomatoes'}];

    
      const handleDelete = ({onDelete}) => {
        if (onDelete) {
          onDelete();
        }
      };
  return (
    <div style={{textAlign:"left"}}>
      
      {rev.map((rev,index)=>(
        <div className="box" key={index}>
          <div className="row">
            <div className="col"><span>{rev.username}</span></div>
            <div className="col">Rating:{rev.rating}</div>
            <div className="col"><button onClick={handleDelete}>Delete</button></div>
          </div>
          <div className="row">
            <div className="col">{rev.Review}</div>
          </div>
          <div className="row">
            <div className="col"><span>Source: </span> {rev.source}</div>
          </div>
        </div>
        ))}
      


    </div>
  )
}

export default ReviewComponent