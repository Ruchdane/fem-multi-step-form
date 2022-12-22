// Two component

// Step element
// index
// active
// name
function StepElement(props){
  let  classNames = props.active ? "active" : "";
  return <li classNames={classNames}>
    {props.idx}
    Step {props.idx}
    {props.name}
    </li>
}

// Step list
// steps
// active_element
// onchange
export function StepList(props){
  return props.steps.map((step,i) => <StepElement name={step} idx={i + 1} active={ props.active_elt === i} /> )
} 