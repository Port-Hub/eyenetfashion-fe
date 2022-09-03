import Pg1img1 from "../../../assets/beautician/Beautician_1.jpg";
import Pg1img2 from "../../../assets/beautician/Parlour_Infra_1.jpg";
import Pg1img3 from "../../../assets/beautician/Parlour_Infra.jpg";
import Pg1img4 from "../../../assets/beautician/Parlour_Infra_2.jpg";
import Pg1img5 from "../../../assets/beautician/Parlour_Infra_3.jpg";
import Pg2img1 from "../../../assets/beautician/Beauty_Therapy.jpg";
import Pg3img1 from "../../../assets/beautician/Aroma_Therapy.jpg";
import Pg4img1 from "../../../assets/beautician/Beautician.jpg";
import Pg5img1 from "../../../assets/beautician/Beautician_2.jpg";
import Pg6img1 from "../../../assets/beautician/Beautician_3.jpg";
import Pg7img1 from "../../../assets/beautician/Makeup_Style.jpg";
import Pg8img1 from "../../../assets/beautician/Mehandi_Style.jpg";

const Beautician = () => {
  return (
    <div>
      <aside>
      <div
        className="w-60 h-full shadow-md bg-white bg-opacity-75 px-1 absolute"
        id="sidenavExample"
      >
        <ul className="relative">
          <li className="relative" id="sidenavEx1">
            <a
              className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out cursor-pointer"
              data-mdb-ripple="true"
              data-mdb-ripple-color="dark"
              data-bs-toggle="collapse"
              data-bs-target="#collapseSidenavEx1"
              aria-expanded="true"
              aria-controls="collapseSidenavEx1"
            >
              <span className="disabled">Click here 1</span>
            </a>
            <ul
              className="menu relative accordion-collapse collapse"
              id="collapseSidenavEx1"
              aria-labelledby="sidenavEx1"
              data-bs-parent="#sidenavExample"
            >
              <li className="relative">
                <a
                  href="#!"
                  className="flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="dark"
                >
                  Link 1
                </a>
              </li>
              <li className="relative">
                <a
                  href="#!"
                  className="flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="dark"
                >
                  Link 2
                </a>
              </li>
            </ul>
          </li>
          <li className="relative" id="sidenavEx2">
            <a
              className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out cursor-pointer"
              data-mdb-ripple="true"
              data-mdb-ripple-color="dark"
              data-bs-toggle="collapse"
              data-bs-target="#collapseSidenavEx2"
              aria-expanded="false"
              aria-controls="collapseSidenavEx2"
            >
              
              <span>Click here 2</span>
            </a>
            <ul
              className="relative accordion-collapse collapse"
              id="collapseSidenavEx2"
              aria-labelledby="sidenavEx2"
              data-bs-parent="#sidenavExample"
            >
              <li className="relative">
                <a
                  href="#!"
                  className="flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="dark"
                >
                  Link 3
                </a>
              </li>
              <li className="relative">
                <a
                  href="#!"
                  className="flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="dark"
                >
                  Link 4
                </a>
              </li>
            </ul>
          </li>
          <li className="relative" id="sidenavEx3">
            <a
              className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out cursor-pointer"
              data-mdb-ripple="true"
              data-mdb-ripple-color="dark"
              data-bs-toggle="collapse"
              data-bs-target="#collapseSidenavEx3"
              aria-expanded="false"
              aria-controls="collapseSidenavEx3"
            >
              <span>Click here 3</span>
            </a>
            <ul
              className="relative accordion-collapse collapse"
              id="collapseSidenavEx3"
              aria-labelledby="sidenavEx3"
              data-bs-parent="#sidenavExample"
            >
              <li className="relative">
                <a
                  href="#!"
                  className="flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="dark"
                >
                  Link 5
                </a>
              </li>
              <li className="relative">
                <a
                  href="#!"
                  className="flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="dark"
                >
                  Link 6
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      </aside>
    </div>
    
  );
};

export default Beautician;
