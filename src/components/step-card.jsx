// Title 
// Description
// (form) Children

// Ex: 
// <StepCard title="Select your plan" description="You have the option ...">
//    <input>
// </StepCard>
export function StepCard(props){
  return props.active ? 
    <article className="drop-shadow-lg rounded-lg flex flex-col gap-3 bg-white -mt-12  m-6 p-6 md:mx-12 md:mt-6 md:drop-shadow-none">
      <h1 className="text-2xl md:text-5xl font-bold">{props.title}</h1>
      <p className="text-cool-gray"> {props.description}</p>
      <div>
        {props.children}
      </div>
    </article>: null;
}