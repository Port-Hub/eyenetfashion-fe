import * as React from "react";
import contact from "../assets/contactform/contactformsvg.svg";
import { useRef } from "react";
import Email from "../components/smtp";

const Contact = () => {

  const formName = useRef();
  const formEmail = useRef();
  const formNumber = useRef();
  const formInterest = useRef();
  const formDescription = useRef();
  const formAddress = useRef();

  const saveName = () => {
    const name = formName.current.value;
  }

  const saveEmail = () => {
    const email = formName.current.value;
  }

  const saveNumber = () => {
    const number = formName.current.value;
  }

  const saveInterest = () => {
    const interest = formName.current.value;
  }

  const saveDescription = () => {
    const description = formName.current.value;
  }

  const saveAddress = () => {
    const address = formName.current.value;
  }

  const sendEmail = () => {
    Email.send({
      Host: "smtp.gmail.com",
      Username: "srahuljayaraj@gmail.com",
      Password: "",
      To: 'srahuljayaraj@outlook.com',
      From: "srahuljayaraj@gmail.com",
      Subject: "Sending Email using javascript",
      Body: "Well that was easy!!",
    })
  }


  return (
    <div className="flex flex-wrap flex-row -mx-4 justify-center items-center">
      <div className="flexbasis-1/2  items-center justify-center">
        <img src={contact}/>
      </div>
      <div className="basis-1/2  pt-10 pr-15 ">
        <div className="w-96 md:w-96 md:max-w-full  mx-auto shadow-xl">
          <div className="p-6 border border-stone-50 bg-stone-50 sm:rounded-xl ">
            <form>
              <label className="block mb-6">
                <span className="text-primary">Name</span>
                <input
                  ref={formName}
                  onChange={saveName}
                  required
                  name="name"
                  type="text"
                  className="
                    block w-full mt-1 border-gray-300
                    rounded-md shadow-sm focus:border-indigo-300
                    focus:ring focus:ring-indigo-200 
                    focus:ring-opacity-50 text-neutral "
                />
              </label>
              <label className="block mb-6">
                <span className="text-primary">Email address</span>
                <input
                  ref={formEmail}
                  onChange={saveEmail}
                  required
                  name="email"
                  type="email"
                  className="
                    block w-full mt-1 border-gray-300 rounded-md
                    shadow-sm focus:border-indigo-300 focus:ring
                    focus:ring-indigo-200 focus:ring-opacity-50
                    text-neutral "
                />
              </label>
              <label className="block mb-6">
                <span className="text-primary">Phone Number</span>
                <input
                  ref={formNumber}
                  onChange={saveNumber}
                  required
                  name="number"
                  type="number"
                  className="
                    block w-full mt-1 border-gray-300 rounded-md
                    shadow-sm focus:border-indigo-300 focus:ring
                    focus:ring-indigo-200 focus:ring-opacity-50
                    text-neutral "
                />
              </label>
              <label className="block mb-6">
                <span className="text-primary">Course of interest</span>
                <select
                  ref={formInterest}
                  onChange={saveInterest}
                  required
                  name="experience"
                  className="
                    block w-full mt-1 border-gray-300 rounded-md
                    shadow-sm focus:border-indigo-300 focus:ring
                    focus:ring-indigo-200 focus:ring-opacity-50
                    text-neutral "
                >
                  <option>Fashion Designing</option>
                  <option>Computer Education</option>
                  <option>Multimedia</option>
                  <option>Spoken English</option>
                  <option>Photography</option>
                  <option>Beautician</option>
                </select>
              </label>
              <label className="block mb-6">
                <span className="text-primary">Enquiry description </span>
                <textarea
                  ref={formDescription}
                  onChange={saveDescription}
                  name="message"
                  className="
                    block w-full mt-1 border-gray-300 rounded-md
                    shadow-sm focus:border-indigo-300 focus:ring
                    focus:ring-indigo-200 focus:ring-opacity-50
                    text-neutral "
                  rows="3"
                ></textarea>
              </label>
              <label className="block mb-6">
                <span className="text-primary">Address</span>
                <textarea
                  ref={formAddress}
                  onChange={saveAddress}
                  name="message"
                  className="
                    block w-full mt-1 border-gray-300 rounded-md
                    shadow-sm focus:border-indigo-300 focus:ring
                    focus:ring-indigo-200 focus:ring-opacity-50
                    text-neutral "
                  rows="3"
                ></textarea>
              </label>
              <div className="mb-6">
                <button
                  type="submit"
                  onClick={sendEmail}
                  className="
                    h-10 px-5 text-indigo-100 bg-indigo-700
                    rounded-lg transition-colors duration-150
                    focus:shadow-outline hover:bg-indigo-800 "
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
