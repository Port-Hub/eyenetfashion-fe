import image1 from "../../assets/contactform/Combo-offer-1.jpg";


const Contact = () => {
  return (
    <div className="flex flex-row flex-wrap: wrap gap-4 content-center items-center ">
    <div className="basis-1/2 px-10">
        <img className="shadow-xl" src={image1} alt="combo offer" />
    </div>
     <div className="basis-1/2  pt-10">
      <div className="w-96 md:w-96 md:max-w-full  mx-auto shadow-xl">
      <div className="p-6 border border-gray-300 sm:rounded-md ">
        <form
          method="POST"
          action="https://herotofu.com/start"
          encType="multipart/form-data"
        >
          <label className="block mb-6">
            <span className="text-gray-700">Your name</span>
            <input
              required
              name="name"
              type="text"
              className="
            block
            w-full
            mt-1
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
            //   placeholder="Joe Bloggs"
            />
          </label>
          <label className="block mb-6">
            <span className="text-gray-700">Email address</span>
            <input
              required
              name="email"
              type="email"
              className="
            block
            w-full
            mt-1
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
            //   placeholder="joe.bloggs@example.com"
            />
          </label>
          <label className="block mb-6">
            <span className="text-gray-700">Phone Number</span>
            <input
              required
              name="email"
              type="number"
              className="
            block
            w-full
            mt-1
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
            //   placeholder="0123456789"
            />
          </label>
          <label className="block mb-6">
            <span className="text-gray-700">Course of interest</span>
            <select
              required
              name="experience"
              className="
            block
            w-full
            mt-1
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
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
            <span className="text-gray-700">Enquiry description	</span>
            <textarea
              name="message"
              className="
            block
            w-full
            mt-1
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
              rows="3"
            //   placeholder="What motivates you?"
            ></textarea>
          </label>
          <label className="block mb-6">
            <span className="text-gray-700">Address</span>
            <textarea
              name="message"
              className="
            block
            w-full
            mt-1
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
              rows="3"
            //   placeholder="What motivates you?"
            ></textarea>
          </label>
          <div className="mb-6">
            <button
              type="submit"
              className="
            h-10
            px-5
            text-indigo-100
            bg-indigo-700
            rounded-lg
            transition-colors
            duration-150
            focus:shadow-outline
            hover:bg-indigo-800
          "
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
