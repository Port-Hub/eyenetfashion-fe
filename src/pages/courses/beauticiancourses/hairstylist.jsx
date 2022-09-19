import { Link } from "react-router-dom";
import haircut from "../../../assets/beautystylist/haircut1.png"
const Hairstylist = () =>{

    return(<>
     <>

<div className="container mx-auto">
  <div className="flex flex-col">
    <div>
      <h1 className="mb-8 text-4xl text-center font-extrabold leading-none tracking-normal text-gray-900 md:text-6xl md:tracking-tight pt-10">
        <span>Certificate In</span>{" "}
        <span className="block w-full py-2 text-transparent bg-clip-text leading-12 bg-gradient-to-r from-green-400 to-purple-500 lg:inline">
          Hair
        </span>{" "}
        <span>Stylist</span>
      </h1>
      <div class="container flex mx-auto w-full items-center justify-center">
        <ul class="flex flex-col p-4">
          <li class="border-gray-400 flex flex-row mb-2">
            <div class="select-none cursor-pointer bg-gray-200 rounded-md flex flex-1 items-center p-4  transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
                        <div class="flex flex-col rounded-md w-10 h-10 bg-gray-300 justify-center items-center mr-4">
                        <img src={haircut}></img>
                        </div>
              <div class="flex-1 pl-1 mr-16">
                <div class="font-medium">Curls</div>
                <div class="text-gray-600 text-sm"></div>
              </div>
              <div class="text-gray-600 text-xs"></div>
            </div>
          </li>
          <li class="border-gray-400 flex flex-row mb-2">
            <div class="select-none cursor-pointer bg-gray-200 rounded-md flex flex-1 items-center p-4  transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
                        <div class="flex flex-col rounded-md w-10 h-10 bg-gray-300 justify-center items-center mr-4">
                        <img src={haircut}></img>
                        </div>
              <div class="flex-1 pl-1 mr-16">
                <div class="font-medium">Flow dry</div>
                <div class="text-gray-600 text-sm"></div>
              </div>
              <div class="text-gray-600 text-xs"></div>
            </div>
          </li>
          <li class="border-gray-400 flex flex-row mb-2">
            <div class="select-none cursor-pointer bg-gray-200 rounded-md flex flex-1 items-center p-4  transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
                        <div class="flex flex-col rounded-md w-10 h-10 bg-gray-300 justify-center items-center mr-4">
                        <img src={haircut}></img>
                        </div>
              <div class="flex-1 pl-1 mr-16">
                <div class="font-medium">Nayanthara</div>
                <div class="text-gray-600 text-sm"></div>
              </div>
              <div class="text-gray-600 text-xs"></div>
            </div>
          </li>
          <li class="border-gray-400 flex flex-row mb-2">
            <div class="select-none cursor-pointer bg-gray-200 rounded-md flex flex-1 items-center p-4  transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
                        <div class="flex flex-col rounded-md w-10 h-10 bg-gray-300 justify-center items-center mr-4">
                        <img src={haircut}></img>
                        </div>
              <div class="flex-1 pl-1 mr-16">
                <div class="font-medium">Christyani</div>
                <div class="text-gray-600 text-sm"></div>
              </div>
              <div class="text-gray-600 text-xs"></div>
            </div>
          </li>
          <li class="border-gray-400 flex flex-row mb-2">
            <div class="select-none cursor-pointer bg-gray-200 rounded-md flex flex-1 items-center p-4  transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
                        <div class="flex flex-col rounded-md w-10 h-10 bg-gray-300 justify-center items-center mr-4">
                        <img src={haircut}></img>
                        </div>
              <div class="flex-1 pl-1 mr-16">
                <div class="font-medium">Hair attachment</div>
                <div class="text-gray-600 text-sm"></div>
              </div>
              <div class="text-gray-600 text-xs"></div>
            </div>
          </li>
          <li class="border-gray-400 flex flex-row mb-2">
            <div class="select-none cursor-pointer bg-gray-200 rounded-md flex flex-1 items-center p-4  transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
                        <div class="flex flex-col rounded-md w-10 h-10 bg-gray-300 justify-center items-center mr-4">
                        <img src={haircut}></img>
                        </div>
              <div class="flex-1 pl-1 mr-16">
                <div class="font-medium">Bridal Hair style</div>
              </div>
            </div>
          </li>
          <li className="flex flex-row mb-2">
          <div className="items-center justify-center">
        <Link to={"/beautician"}>
        <button>
        <label
          className="btn btn-outline btn-primary drawer-button"
        >
          Back
        </label>
        </button>
        </Link>
      </div>
          </li>
        </ul>
      </div>
      
    </div>
  </div>
</div>
</>
    
    </>)
    
    
    }
    export default Hairstylist