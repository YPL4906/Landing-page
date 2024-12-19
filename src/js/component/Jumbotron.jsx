import React from "react";
//style={{marginRight: spacing + 'em'}}
function Jumbotron() {
  return (
    <div className="container mb-4 bg-body-secondary rounded-3 mt-4">
      <div className="container-fluid py-5 text-start">
        <h1 className="card-title">A Warm Welcome</h1>
        <p className="card-text col-md-8 fs-4">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore facere distinctio voluptates quia officiis unde nobis neque veniam hic. Sequi totam laudantium, velit a quaerat deleniti blanditiis facere reiciendis cumque!</p>
        <a href="#" className="btn btn-primary btn-lg">Call to Action!</a>
      </div>
    </div>
  );
};

export default Jumbotron;
