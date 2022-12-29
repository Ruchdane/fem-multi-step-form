// switch toggle
// label_on: (Monthly)
// label_off: (yearly)
export function Switch(props){
  return <div className="flex justify-center items-center gap-4 p-4 m-4 bg-magnolia">
      Monthly
      <svg onClick={props.toggle} className="cursor-pointer w-10 h-5">
       <rect   className="fill-marine-blue" width="100%" height="100%" fill="black" rx="25%" ry="50%"/>
       <circle className="transition-all ease-in-out duration-300 fill-white" cx={props.checked ? "75%" : "25%"} cy="50%" r="25%" fill="white" />
      </svg> 
    <span className="text-cool-gray ">Yearly</span>
    </div>
}