// Title 
// Description
// (form) Children

// Ex: 
// <StepCard title="Select your plan" description="You have the option ...">
//    <input>
// </StepCard>
export function StepCard(props){
  return props.active ? <article>
    <h1>{props.title}</h1>
    <p> {props.decription}</p>
    {props.children}
    </article>: null;
}