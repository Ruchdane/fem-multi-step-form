// Two component

// Step element
// index
// active
// name
function StepElement(props){
  let  className = "p-2 rounded-full border border-primary" + (props.active ? " cursor-not-allowed  bg-light-gray" : " cursor-pointer text-white");
  return <li className="flex md:gap-3" onClick={() => props.onchange(props.idx - 1)}>
    <div className={className}> {props.idx} </div> 
    <div className="hidden md:inline-flex md:flex md:gap-1 md:flex-col text-white"> 
      <span className="font-light"> Step {props.idx}   </span>
      <h2 className="font-bold">   {props.name}  </h2>
    </div>
    </li>
}

// Step list
// steps
// active_element
// onchange
export function StepList(props){
  return <nav className="bg-mobile md:bg-desktop bg-no-repeat">
    <ul className="flex gap-4 md:flex-col py-8 place-content-center ">
     {props.steps.map((step,i) => 
      <StepElement key={i} name={step} idx={i + 1} active={ props.active_elt === i} onchange={props.onchange}/> )}
    </ul>
    </nav>
} 