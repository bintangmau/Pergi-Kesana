import React from "react";

const FooterPage = () => {
  return (
      <footer style={{backgroundColor: "black"}}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6" style={{padding: "50px"}}>
              <h3 style={{textAlign: "center", marginTop: "50px", color: "white"}}>Footer</h3>
            </div>
            <div className="col-md-6" style={{padding: "50px"}}>
              <h3 style={{textAlign: "center", marginTop: "50px", color: "white"}}>Jangan lupa Bahagia</h3>
            </div>
          </div>
        </div>
      </footer>
  );
}

export default FooterPage;