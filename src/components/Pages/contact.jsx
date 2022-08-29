import image1 from "../../assets/contactform/Combo-offer-1.jpg";


const Contact = () => {
  return (
    <div className="flex flex-row flex-wrap: wrap;">
    <div class="basis-1/2">
        <img src={image1} alt="combo offer" />
    </div>
     <div class="basis-1/2">
    <div class="w-full md:w-96 md:max-w-full mx-auto">
      <div class="p-6 border border-gray-300 sm:rounded-md">
        <form
          method="POST"
          action="https://herotofu.com/start"
          enctype="multipart/form-data"
        >
          <label class="block mb-6">
            <span class="text-gray-700">Your name</span>
            <input
              required
              name="name"
              type="text"
              class="
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
          <label class="block mb-6">
            <span class="text-gray-700">Email address</span>
            <input
              required
              name="email"
              type="email"
              class="
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
          <label class="block mb-6">
            <span class="text-gray-700">Phone Number</span>
            <input
              required
              name="email"
              type="number"
              class="
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
          <label class="block mb-6">
            <span class="text-gray-700">Course of interest</span>
            <select
              required
              name="experience"
              class="
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
          <label class="block mb-6">
            <span class="text-gray-700">Enquiry description	</span>
            <textarea
              name="message"
              class="
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
          <label class="block mb-6">
            <span class="text-gray-700">Address</span>
            <textarea
              name="message"
              class="
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
          <div class="mb-6">
            <button
              type="submit"
              class="
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
