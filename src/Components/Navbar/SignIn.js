import React from "react";

function SignIn() {
  return (
    <div className="signin container-fluid">
      <div className="signin-inner">
        <h1>iugffifef</h1>
        <h1>iugffifef</h1>

        <div className="row justify-content-center g-3 mt-3">
          <div className="col-md-4 w-a ms-3 p-0">
            <input
              type="email"
              className="form-control rounded-pill"
              placeholder="Email"
              aria-label="Email"
            />
          </div>
          <div className="col-md-4 w-a ms-3 p-0">
            <input
              type="password"
              className="form-control rounded-pill"
              placeholder="Password"
              aria-label="Password"
            />
          </div>
        </div>
        <button type="button" className="btn close-btn">
          Close
        </button>
      </div>
    </div>
  );
}

export default SignIn;

/* <SignIn trigger={false}>
</SignIn>

const [signInButton,setButtonPopUp]=useState(false);
onclick{()=>setButtonPopUp(true)}


close btn
onclick{()=>props.setTrigger(false)} */
