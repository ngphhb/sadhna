import React from "react";

export default function Home() {
    return (
        <div>
            <h1>Home</h1>
            <div className='main' >
                <form>


                    <div className="container">
                        <h4><b>Chanting</b></h4>
                        {/* <p>Please update today's chanting </p> */}
                        <label htmlFor="chanting-input">Please update today's chanting </label>
                        <input type="number" id="chanting-input" min="1" max="100" />
                    </div>

                    <div className="container">
                        <h4><b>Managala Aarati</b></h4>
                        {/* <p>Architect & Engineer</p> */}
                        <label htmlFor="mg-attendance">Did you Attend Mangala Aarati</label>
                        <input type="checkbox" id="mg-attendance" name="mangala-aarati" value="Yes" /> Attended
                    </div>

                    {/* <br></br> */}
                    <div className="container">
                        <h4><b>Book reading</b></h4>
                        {/* <p>Architect & Engineer</p> */}
                        <label htmlFor="appt-br">Enter amt of time </label>
                        <input type="time" id="appt-br" name="appt"></input>
                    </div>

                    {/* <br></br> */}

                    <div className="container">
                        <h4><b>Service</b></h4>
                        <label htmlFor="appt-s">Enter amt of time </label>
                        <input type="time" id="appt-s" name="appt"></input>
                        {/* <p>Architect & Engineer</p> */}
                    </div>
                </form>
                <div className="container">

                    {/* <select>
          <option value="GFG">GFG</option>
          <option value="OS">OS</option>
          <option value="DBMS">DBMS</option>
          <option value="Data Structure">
            Data Structure
          </option>
        </select> */}

                </div>


            </div>
        </div>
    )
}