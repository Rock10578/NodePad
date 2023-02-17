import React from 'react'

function SignUp(props) {
  return (
    <div className={`container d-flex justify-content-center text-${props.mode === 'dark'?'white':'black'}`}>
        <div>
            <h1>Register to NotePad : </h1>
            <form className="my-3">
                <div className="row mb-4">
                    <div className="col">
                    <div className="form-outline border border-dark rounded">
                        <input type="text" id="form3Example1" className="form-control" />
                        <label className="form-label" htmlFor="form3Example1">First name</label>
                    </div>
                    </div>
                    <div className="col">
                    <div className="form-outline border border-dark rounded">
                        <input type="text" id="form3Example2" className="form-control"/>
                        <label className="form-label" htmlFor="form3Example2">Last name</label>
                    </div>
                    </div>
                </div>

                <div className="form-outline mb-4 border border-dark rounded">
                    <input type="email" id="form3Example3" className="form-control"/>
                    <label className="form-label" htmlFor="form3Example3">Email address</label>
                </div>

                <div className="form-outline mb-4 border border-dark rounded">
                    <input type="password" id="form3Example4" className="form-control"/>
                    <label className="form-label" htmlFor="form3Example4">Password</label>
                </div>

                <div className="form-check d-flex justify-content-center mb-4">
                    <input className="form-check-input me-2" type="checkbox" value="" id="form2Example33" />
                    <label className="form-check-label" htmlFor="form2Example33">
                    Subscribe to our newsletter
                    </label>
                </div>

                <button type="submit" className="btn btn-primary btn-block mb-4">Sign up</button>

                <div className="text-center">
                    <p>or sign up with:</p>
                    <button type="button" className="btn btn-secondary btn-floating mx-1">
                    <i className="fab fa-facebook-f"></i>
                    </button>

                    <button type="button" className="btn btn-secondary btn-floating mx-1">
                    <i className="fab fa-google"></i>
                    </button>

                    <button type="button" className="btn btn-secondary btn-floating mx-1">
                    <i className="fab fa-twitter"></i>
                    </button>

                    <button type="button" className="btn btn-secondary btn-floating mx-1">
                    <i className="fab fa-github"></i>
                    </button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default SignUp