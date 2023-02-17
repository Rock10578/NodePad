import React from 'react';
import '../App.css';

function About(props) {
  return (
    <div className={`bg-${props.mode === 'dark'?'#090f1f':'light'} text-${props.mode === 'dark'?'light':'black'}`}>
      <div id="carouselMaterialStyle" className="carousel slide carousel-fade m-2 mb-5" data-mdb-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-mdb-target="#carouselMaterialStyle" data-mdb-slide-to="0" className="active" aria-current="true"
            aria-label="Slide 1"></button>
          <button type="button" data-mdb-target="#carouselMaterialStyle" data-mdb-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-mdb-target="#carouselMaterialStyle" data-mdb-slide-to="2" aria-label="Slide 3"></button>
        </div>

        <div className="carousel-inner rounded-5 shadow-4-strong">
          <div className="carousel-item active">
            <img src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(15).webp" className="d-block w-100"
              alt="Sunset Over the City" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Write As You Thought</h5>
              <p>Don't need to Keep a notebook with you, for jotting down article ideas, facts to investigate, or colorful phrases to use in your own fiction writing.</p>
              <p>Use NotePad anytime anwhere</p>
            </div>
          </div>

          <div className="carousel-item">
            <img src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(22).webp" className="d-block w-100"
              alt="Canyon at Nigh" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Beauty is the state or quality of being beautiful</h5>
              <p>Write down your thoughts about beauty and nature while travelling and enjoying scenios</p>
            </div>
          </div>

          <div className="carousel-item">
            <img src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(23).webp" className="d-block w-100"
              alt="Cliff Above a Stormy Sea" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Wild and free, just like the sea</h5>
              <p>Love sea write down few words for sea. <strong>Life is simple: just add water.</strong></p>
              <p>Add your thought about Sea.</p>
            </div>
          </div>
        </div>

        <button className="carousel-control-prev" type="button" data-mdb-target="#carouselMaterialStyle" data-mdb-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-mdb-target="#carouselMaterialStyle" data-mdb-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div className='container'>
        
        <section className="row mt-3">
          <div className="col-md-6 gx-5 mb-4">
            <div className="bg-image hover-overlay ripple shadow-2-strong rounded-5" data-mdb-ripple-color="light">
              <img src="https://images.squarespace-cdn.com/content/v1/5aa4151e3917ee07d2f3d6fd/1593989073434-4T6MAHWHE2KBDAB5X3NU/ACS_2069.JPG" alt="NoteBook" className="img-fluid" />
              <a href="/">
                <div className="mask" style={{"background-color": "rgba(251, 251, 251, 0.15)"}}></div>
              </a>
            </div>
          </div>

          <div className="col-md-6 gx-5 mb-4">
            <h4><strong>About NoteBook</strong></h4>
            <p className={`text-${props.mode === 'dark'?'white':'muted'}`}>
            A notebook (also known as a notepad, writing pad, drawing pad, or legal pad) is a book or stack of paper pages that are often ruled and used for purposes such as note-taking, journaling or other writing, drawing, or scrapbooking.
            </p>
            <p><strong>Features</strong></p>
            <ul className={`text-${props.mode === 'dark'?'white':'muted'}`}>
              <li>Line Spacing</li>
              <li>Spacing of the lines</li>
              <li>Binding</li>
              <li>Paper Weight</li>
              <li>Number Of Sheets</li>
              <li>Design and Cover Material</li>
              <li>Perforations</li>
            </ul>
          </div>
        </section>

        <hr className="my-5" />

        <section className="mb-5">
          <h2 className="mb-4 text-center"><strong>NotePad</strong></h2>

          <div className="row d-flex justify-content-center">
            <div className="col-md-6">
              <form>
                <div className="row mb-4">
                  <div className="col">
                    <div className="form-outline bg-info bg-opacity-10 border border-info rounded">
                      <input type="text" id="form3Example1" className="form-control" />
                      <label className={`form-label text-${props.mode === 'dark'?'light':'grey'}`} for="form3Example1">First name</label>
                    </div>
                  </div>
                  <div className="col">
                    <div className="form-outline bg-info bg-opacity-10 border border-info rounded">
                      <input type="text" id="form3Example2" className="form-control" />
                      <label className={`form-label text-${props.mode === 'dark'?'light':'grey'}`} for="form3Example2">Last name</label>
                    </div>
                  </div>
                </div>

                <div className="form-outline mb-4 bg-info bg-opacity-10 border border-info rounded">
                  <input type="email" id="form3Example3" className="form-control" />
                  <label className={`form-label text-${props.mode === 'dark'?'light':'grey'}`} for="form3Example3">Email address</label>
                </div>

                <div className="form-outline mb-4 bg-info bg-opacity-10 border border-info rounded">
                  <input type="password" id="form3Example4" className="form-control" />
                  <label className={`form-label text-${props.mode === 'dark'?'light':'grey'}`} for="form3Example4">Password</label>
                </div>

                <div className="form-check d-flex justify-content-center mb-4">
                  <input
                    className="form-check-input me-2"
                    type="checkbox"
                    value=""
                    id="form2Example3"
                  />
                  <label className="form-check-label" for="form2Example3">
                    Subscribe to our newsletter
                  </label>
                </div>

                <button type="submit" className="btn btn-primary btn-block mb-4">
                  Sign up
                </button>

                <div className="text-center">
                  <p>or sign up with:</p>
                  <button type="button" className="btn btn-primary btn-floating mx-1">
                    <i className="fab fa-facebook-f"></i>
                  </button>

                  <button type="button" className="btn btn-primary btn-floating mx-1">
                    <i className="fab fa-google"></i>
                  </button>

                  <button type="button" className="btn btn-primary btn-floating mx-1">
                    <i className="fab fa-twitter"></i>
                  </button>

                  <button type="button" className="btn btn-primary btn-floating mx-1">
                    <i className="fab fa-github"></i>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>

      </div>

      <hr class="m-0" />

      <footer className={`bg-${props.mode} text-lg-start text-${props.mode === 'dark'?'light':'black'}`}>
        <div class="text-center py-4 align-items-center">
          <p>Follow NotePad on Social Media</p>
          <a
            href="https://www.youtube.com"
            className="btn btn-primary m-1"
            role="button"
          >
            <i className="fab fa-youtube"></i>
          </a>
          <a
            href="https://www.facebook.com"
            className="btn btn-primary m-1"
            role="button"
          >
            <i className="fab fa-facebook-f"></i>
          </a>
          <a
            href="https://twitter.com"
            className="btn btn-primary m-1"
            role="button"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            href="https://github.com"
            className="btn btn-primary m-1"
            role="button"
          >
            <i className="fab fa-github"></i>
          </a>
        </div>

        <div className="text-center p-3" style={{"background-color": "rgba(0, 0, 0, 0.2)"}}>
          © 2023 Rock10578:
          <a className={`text-${props.mode === 'dark'?'light':'black'}`} href="/">Notepad.com</a>
        </div>
      </footer>
    </div>
  );
};

export default About;