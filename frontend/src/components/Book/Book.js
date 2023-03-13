import React from "react";

const Book = () => {
  return (
    <>
      <section className="book">
        <div className="container flex">
          <div className="input grid">
            <div className="box">
              <label>Check-in:</label>
              <input type="date" placeholder="Check-in-Date" />
            </div>
            <div className="box">
              <label>Check-out:</label>
              <input type="date" placeholder="Check-out-Date" />
            </div>
            <div className="box">
              <label>Type OF Rooms:</label> <br />
              <input type="text" />
            </div>

            <div className="box">
              <label>Children:</label> <br />
              <input type="number" placeholder={0} />
            </div>
            <div className="box">
              <label>Name:</label> <br />
              <input type="text" placeholder={"name"} />
            </div>
            <div className="box">
              <label>Email:</label> <br />
              <input type="text" placeholder={"Email"} />
            </div>
            <div className="box">
              <label>Phone Number:</label> <br />
              <input type="text" placeholder={"Phone Number"} />
            </div>
            <div className="btnbox">
              {/* <label>name:</label> <br /> */}
              {/* <button className="" type="submit" defaultValue="submit" /> */}
              <button className="btn12" type="submit" defaultValue="submit">
                submit your reservation
              </button>
            </div>
          </div>
          {/* <div className="search">
            <input type="submit" defaultValue="submit" />
          </div> */}
          {/* <button className="search"> submit</button> */}
        </div>
      </section>
    </>
  );
};

export default Book;
