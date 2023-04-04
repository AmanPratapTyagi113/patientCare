import Footer from "../Footer";
import name from "../../assets/img/dashboard/admin-user.png";
import aman from "../../assets/img/dashboard/aman1.png"
import chetan from "../../assets/img/dashboard/chetan.png"
import tushar from "../../assets/img/dashboard/tushar.png"
import email from "../../assets/img/dashboard/admin-email.png";
import admin_git from "../../assets/img/dashboard/admin-git.png";
import admin_insta from "../../assets/img/dashboard/admin-insta-2.png";
import admin_linkedin from "../../assets/img/dashboard/admin-linkedin.png";
// import admin_card_profile from "../../assets/img/dashboard/admin-card-profile.png";
import Nav from "./Nav";

const AboutHome = () => {

  return (
    <div className="body w-full ">
      <Nav></Nav>

      <div className=" bg-secoundry font-poppins over ">
        <div className="  flex justify-center">
          <h1 className=" p-4 px-8 font-bold  text-3xl ">About us</h1>
        </div>
        <div className="">
          <div>
            <h1 className="flex justify-center font-bold text-xl">
              -- Developers --
            </h1>
            <div className=" lg:grid grid-cols-3 ml-20 mt-12">
              <div className="shadow-sm border-2 mt-6 p-4 rounded-md w-9/12 hover:shadow-xl">
                <div className="flex justify-center">
                  <img
                    src={tushar}
                    alt="admin_profile"
                    className="h-40 w-40 rounded-full border-2"
                  ></img>
                </div>
                <div className="p-6  ">
                  <div className="flex justify-center ">
                    <img src={name} className="h-4 w-4 mt-1 " alt="name"></img>
                    <h1 className="ml-2">Tushar Sharma</h1>
                  </div>
                  <div className="flex justify-center mt-2">
                    <img src={email} className="h-4 w-4 mt-1" alt="email"></img>
                    <h4 className="ml-2">tushar9837shr@gmail.com</h4>
                  </div>
                  <div className="flex justify-center gap-10 mt-6 ">
                    <a href="https://www.instagram.com/tush_sharma_">
                      <img
                        src={admin_insta}
                        className="h-5 w-5"
                        alt="insta"
                      ></img>
                    </a>
                    <a href="https://github.com/Tushar-2021">
                      <img src={admin_git} className="h-5 w-5" alt="git"></img>
                    </a>
                    <a href="https://www.linkedin.com/in/tushar-sharma-25d/">
                      <img
                        src={admin_linkedin}
                        className="h-5 w-5 "
                        alt="linkedin"
                      ></img>
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="shadow-sm border-2 mt-6 p-4 rounded-md w-9/12 hover:shadow-xl">
                <div className="flex justify-center">
                  <img
                    src={aman}
                    alt="admin_profile"
                    className="h-40 w-40 rounded-full border-2"
                  ></img>
                </div>
                <div className="p-6  ">
                  <div className="flex justify-center ">
                    <img src={name} className="h-4 w-4 mt-1 " alt="name"></img>
                    <h1 className="ml-2">Aman Pratap Tyagi</h1>
                  </div>
                  <div className="flex justify-center mt-2">
                    <img src={email} className="h-4 w-4 mt-1" alt="email"></img>
                    <h4 className="ml-2">tyagiaman113114@gmail.com</h4>
                  </div>
                  <div className="flex justify-center gap-10 mt-6 ">
                    <a href="https://www.instagram.com/__.aman.tyagi.__/">
                      <img
                        src={admin_insta}
                        className="h-5 w-5"
                        alt="insta"
                      ></img>
                    </a>
                    <a href="https://github.com/AmanPratapTyagi113/">
                      <img src={admin_git} className="h-5 w-5" alt="git"></img>
                    </a>
                    <a href="https://www.linkedin.com/in/amantyagi113/">
                      <img
                        src={admin_linkedin}
                        className="h-5 w-5 "
                        alt="linkedin"
                      ></img>
                    </a>
                  </div>
                </div>
              </div>
              <div className="shadow-sm border-2 mt-6 p-4 rounded-md w-9/12 hover:shadow-xl">
                <div className="flex justify-center">
                  <img
                    src={chetan}
                    alt="admin_profile"
                    className="h-40 w-40 rounded-full border-2"
                  ></img>
                </div>
                <div className="p-6  ">
                  <div className="flex justify-center ">
                    <img src={name} className="h-4 w-4 mt-1 " alt="name"></img>
                    <h1 className="ml-2">Chetan Sharma</h1>
                  </div>
                  <div className="flex justify-center mt-2 ">
                    <img src={email} className="h-4 w-4 mt-1" alt="email"></img>
                    <h4 className="ml-2">sharmachetan1212@gmail.com</h4>
                  </div>
                  <div className="flex justify-center gap-10 mt-6 ">
                    <a href="https://www.instagram.com/chetansharmx/">
                      <img
                        src={admin_insta}
                        className="h-5 w-5"
                        alt="insta"
                      ></img>
                    </a>
                    <a href="https://github.com/sharmachetan1212/">
                      <img src={admin_git} className="h-5 w-5" alt="git"></img>
                    </a>
                    <a href="https://www.linkedin.com/in/chetansharmx/">
                      <img
                        src={admin_linkedin}
                        className="h-5 w-5 "
                        alt="linkedin"
                      ></img>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div >
      <div className="mt-[150px] relative bottom 0">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default AboutHome;
