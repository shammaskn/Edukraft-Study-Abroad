"use client";
const page = () => {
   

  const service = [
    {
      image: "/assets/images/service1.png",
      title: "Career Counselling",
      para: `Lorem ipsum dolor sit amet, consectetur adipiscing elit
             sed do eiusmod tempor incididunt ut labore et dolore magna
             aliqua. Ut enim ad minim veniam, quis nostrud exercitation
             ullamco laboris nisi ut aliquip ex ea commodo consequat`
    },
    {
      image: "/assets/images/service2.png",
      title: "Test Preparations",
      para: `Lorem ipsum dolor sit amet, consectetur adipiscing elit
             sed do eiusmod tempor incididunt ut labore et dolore magna
             aliqua. Ut enim ad minim veniam, quis nostrud exercitation
             ullamco laboris nisi ut aliquip ex ea commodo consequat`
    },
    {
      image: "/assets/images/service3.png",
      title: "Application Process",
      para: `Lorem ipsum dolor sit amet, consectetur adipiscing elit
             sed do eiusmod tempor incididunt ut labore et dolore magna
             aliqua. Ut enim ad minim veniam, quis nostrud exercitation
             ullamco laboris nisi ut aliquip ex ea commodo consequat`
    },
    {
      image: "/assets/images/service4.png",
      title: "Expert Visa Guidance",
      para: `Lorem ipsum dolor sit amet, consectetur adipiscing elit
             sed do eiusmod tempor incididunt ut labore et dolore magna
             aliqua. Ut enim ad minim veniam, quis nostrud exercitation
             ullamco laboris nisi ut aliquip ex ea commodo consequat`
    },
    {
      image: "/assets/images/service5.png",
      title: "Pre-departure Sessions",
      para: `Lorem ipsum dolor sit amet, consectetur adipiscing elit
             sed do eiusmod tempor incididunt ut labore et dolore magna
             aliqua. Ut enim ad minim veniam, quis nostrud exercitation
             ullamco laboris nisi ut aliquip ex ea commodo consequat`
    },
    {
      image: "/assets/images/service6.png",
      title: "Post Arrival Assistance",
      para: `Lorem ipsum dolor sit amet, consectetur adipiscing elit
             sed do eiusmod tempor incididunt ut labore et dolore magna
             aliqua. Ut enim ad minim veniam, quis nostrud exercitation
             ullamco laboris nisi ut aliquip ex ea commodo consequat`
    },
  ];

  return (
    <div style={{ paddingTop: "100px" }}>
      <div className="container-fluid cmpad ">
        <div className="row">
          <div className="col-sm-12">
            <h1 className="srvchead pb-2">Study Abroad Consultancy Services</h1>
            <ul className="srvc-list">

              {service.map((el)=>(
              <li>
                <div className="service">
                  <div className="srvceimg">
                    <img src={el.image} alt="" />
                  </div>

                  <div className="srvcecontnet">
                    <h3 className="srvcehead">{el.title}</h3>
                    <p className="srvcepara">
                     {el.para}
                    </p>
                  </div>
                </div>
              </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
