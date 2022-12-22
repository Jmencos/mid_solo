import React, { useState } from "react";

function Display () {
  const dummyData = ['User1 : Hey check it out, things went smooth at the DMV today. Leanord was super helpful!', 'User2: Went to the town clerk to get a copy of my house deed, their staff member Sheldon was abrupt but very knowledgable...almost annoyingly so ', 'User3: Enter blanket state']
  const header = `Checkout other's reviews`;

  const tags = dummyData.map((el)=>{
    return <div>{el} </div>
  })

  return (
    <div className="display">
      <h2>{header}</h2>
      <div className="window">
        <p>{tags}</p>
      </div>
      <br></br>
      <form>
        <input className="reviewmsg" type='text' placeholder="enter message"></input>
        <br></br>
        <button type="submit">Send review</button>
      </form>
    </div>
  )
}

export default Display