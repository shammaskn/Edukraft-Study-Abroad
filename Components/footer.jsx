

const footer = () => {
  return (
    <>
      <footer>
        <div className="foot-left">
          <img src="assets/logo/logo.svg" alt="" />
        </div>
        <div className="foot-right">
          <div className="foot-list">
            <div className="col">
              <h5>About</h5>
              <ul>
                <li><a href="">About</a></li>
                <li><a href="">Our Services</a></li>
                <li><a href="">Our Offices</a></li>
              </ul>
            </div>
            <div className="col">
              <h5>Countries</h5>
              <ul>
                <li><a href="">United Kingdom</a></li>
                <li><a href="">Ireland</a></li>
                <li><a href="">France</a></li>
                <li><a href="">Germany</a></li>
                <li><a href="">Canada</a></li>
              </ul>
            </div>
            <div className="col">
              <h5>Popular Courses</h5>
              <ul>
                <li><a href="">Engineering courses</a></li>
                <li><a href="">Health and medicine</a></li>
                <li><a href="">Information technology</a></li>
                <li><a href="">Management courses</a></li>
                <li><a href="">Health and medicine</a></li>
                <li><a href="">Information technology</a></li>
                <li><a href="">Management courses</a></li>
              </ul>
            </div>
            <div className="col">
              <h5>Address</h5>
              <p>197-213 Oxford Street Jubilee House   London W1D 2LF<br />
              <a href="">+441223782585</a><br />
              <a href=""> +447828453880</a>


              </p>
              
              <p>Door No 4-8-732/61 2nd floor, Essel Center MG Road, Mangalore 575003 <br />
              <a href="">+91 7411 494 678</a>
              </p>



              <ul className="social-list">
                <li>
                  <a href="">
                    <img src="/assets/icons/you.svg" alt="" />
                  </a>
                </li>
                <li>
                  <a href="">
                    <img src="/assets/icons/insta.svg" alt="" />
                  </a>
                </li>
                <li>
                  <a href="">
                    <img src="/assets/icons/face.svg" alt="" />
                  </a>
                </li>
              </ul>



            </div>
          </div>
        </div>
      </footer>

    </>
  )
}

export default footer