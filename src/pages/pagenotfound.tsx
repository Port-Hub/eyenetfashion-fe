import pgsvg from "../assets/pagenotfound/page404.svg";

const Pagenotfound: (arg: any) => JSX.Element = () =>{
  return(
    <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
    <img
      src={pgsvg}
      alt=""
      className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
    />
  </div>
  )
}
export default Pagenotfound;