// Two component

// Step element
// index
// active
// name
function StepElement(props){
  let cursor = props.active ? " cursor-not-allowed" : "cursor-pointer";
  let  className = "p-2 w-8 h-8 self-center rounded-full flex items-center justify-center border border-primary" + (props.active ? " bg-light-gray" : " text-white");
  return <li className={"flex md:gap-3 w-fit " + cursor} onClick={() => props.onchange(props.idx - 1)}>
    <div className={className}> 
      {props.idx} 
    </div> 
    <div className="hidden md:inline-flex md:flex md:gap-0.5 md:flex-col text-white"> 
      <span className="font-light  text-sm text-light-gray"> Step {props.idx}   </span>
      <h2 className="font-bold  text-base">   {props.name}  </h2>
    </div>
    </li>
}

// Step list
// steps
// active_element
// onchange
export function StepList(props){
  return <nav className="bg-mobile h-40  md:bg-desktop bg-cover bg-no-repeat md:m-2 md:max-w-xs md:h-full">
    <ul className="flex gap-4 md:flex-col py-8 md:p-8 place-content-center ">
     {props.steps.map((step,i) => 
      <StepElement key={i} name={step} idx={i + 1} active={ props.active_elt === i} onchange={props.onchange}/> )}
    </ul>
    </nav>
} 