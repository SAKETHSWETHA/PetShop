import React from "react"
const Head = () => {
    const signoutHandler = () => {

        console.log("logout")

        console.log(window.location);

        document.cookie = "accessToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

        window.location.href = '/';

    }
    return(
        <>
        <section className="head">
         <div className="container d_flex">
            <div className="left row"> 
        <i className="fa fa-phone"></i>
        <label>+91 8309001852</label>
        <i className="fa fa-envelope"></i>
        <label>kadimisettisaketh@gmail.com</label>
       </div> 
       <div className="right row Rtext">
       <label>Theme FAQ's</label>
       <label>Need Help</label>
       <span>🐶</span>
       <label htmlFor="">EN</label>
       <span>₹</span>
       <label htmlFor="">INR</label>
      <a href="login"><button class="btn btn-sm" onClick={signoutHandler}>Logout</button></a> 


       </div>
        </div> 
        </section>
        </>
    )
}
export default Head;