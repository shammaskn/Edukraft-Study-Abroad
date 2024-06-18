"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import '@fortawesome/fontawesome-free/css/all.css';

const page = () => {
  return (
    <div style={{ paddingTop: "100px" }}>
      <div className="container-fluid " style={{ minHeight: "20rem" }}>
        <div className="row cmpad">
          <div className="col-sm-12">
            <h1 className="srvchead pb-2">Upcoming Events</h1>
            <div>
              <div
                className="row mb-4"
                style={{ backgroundColor: "rgba(233, 234, 240, 1)" ,borderRadius:"10px" }}
              >
                <div className="col-md-12 col-lg-4 p-0 eventscol1">
                  <img src="/assets/images/eventsimage.png" alt="" />
                </div>
                <div className="col-md-12 col-lg-8 eventscol2">
                  <div className="eventscard">
                    <div className="eventscard1">
                      <h4>Study Nursing in Uk Admission Day 2024</h4>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Etiam eu turpis molestie, dictum est a, mattis tellus.
                        Sed dignissim, metus nec fringilla accumsan, risus sem
                        sollicitudin lacus, ut interdum tellus elit sed risus.
                        Maecenas eget condimentum velit, sit amet feugiat
                        lectus. Class aptent taciti
                      </p>
                    </div>
                    <div className="eventdate">
                      <h4>21 Mar</h4>
                    </div>
                  </div>
                  <ul className="eventscardbtm">
                    <li>
                    <i className="fas fa-location-dot"></i> Mangalore, India
                    </li>
                    <li>
                    <i class="fa-regular fa-clock"></i> 04:00 pm - 05:00 pm
                    </li>
                    <li className="dateflex">
                    <i class="fa-regular fa-clock"></i> 04:00 pm - 05:00 pm
                    </li>
                    <li className="eventbtn">
                      <button className="eventsubmit">Join Event</button>
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className="row mb-4"
                style={{ backgroundColor: "rgba(233, 234, 240, 1)" ,borderRadius:"10px" }}
              >
                <div className="col-md-12 col-lg-4 p-0 eventscol1">
                  <img src="/assets/images/eventsimage2.png" alt="" />
                </div>
                <div className="col-md-12 col-lg-8 eventscol2">
                  <div className="eventscard">
                    <div className="eventscard1">
                      <h4>Study Nursing in Uk Admission Day 2024</h4>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Etiam eu turpis molestie, dictum est a, mattis tellus.
                        Sed dignissim, metus nec fringilla accumsan, risus sem
                        sollicitudin lacus, ut interdum tellus elit sed risus.
                        Maecenas eget condimentum velit, sit amet feugiat
                        lectus. Class aptent taciti
                      </p>
                    </div>
                    <div className="eventdate">
                      <h4>21 Mar</h4>
                    </div>
                  </div>
                  <ul className="eventscardbtm">
                    <li>
                    <i className="fas fa-location-dot"></i> Mangalore, India
                    </li>
                    <li>
                    <i class="fa-regular fa-clock"></i> 04:00 pm - 05:00 pm
                    </li>
                    <li className="dateflex">
                    <i class="fa-regular fa-clock"></i> 04:00 pm - 05:00 pm
                    </li>
                    <li className="eventbtn">
                      <button className="eventsubmit">Join Event</button>
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className="row mb-4"
                style={{ backgroundColor: "rgba(233, 234, 240, 1)" ,borderRadius:"10px" }}
              >
                <div className="col-md-12 col-lg-4 p-0 eventscol1">
                  <img src="/assets/images/eventsimage3.png" alt="" />
                </div>
                <div className="col-md-12 col-lg-8 eventscol2">
                  <div className="eventscard">
                    <div className="eventscard1">
                      <h4>Study Nursing in Uk Admission Day 2024</h4>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Etiam eu turpis molestie, dictum est a, mattis tellus.
                        Sed dignissim, metus nec fringilla accumsan, risus sem
                        sollicitudin lacus, ut interdum tellus elit sed risus.
                        Maecenas eget condimentum velit, sit amet feugiat
                        lectus. Class aptent taciti
                      </p>
                    </div>
                    <div className="eventdate">
                      <h4>21 Mar</h4>
                    </div>
                  </div>
                  <ul className="eventscardbtm">
                    <li>
                    <i className="fas fa-location-dot"></i> Mangalore, India
                    </li>
                    <li>
                    <i class="fa-regular fa-clock"></i> 04:00 pm - 05:00 pm
                    </li>
                    <li className="dateflex">
                    <i class="fa-regular fa-clock"></i> 04:00 pm - 05:00 pm
                    </li>
                    <li className="eventbtn">
                      <button className="eventsubmit">Join Event</button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
