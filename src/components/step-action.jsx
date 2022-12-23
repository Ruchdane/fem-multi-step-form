// step index
// on return
// on next
// on confirm
// ps: Dont render after confirm

// Ex:
// <StepActions idx="2" onreturn={() => console.log()}>
    // <StepAction idx={active_step} back={go_back} next={next_step} confirm={confirm}/>
export function StepAction(props){
  // idx          first_button second button
  // 0   : Step 1 null            Next Step
  // 1   : Step 2 Go back         Next Step
  // 2   : Step 3 Go back         Next Step
  // 3   : Step 4 Go bacj         Confirm
  // 4   : Thanks: null
  return props.idx > 3 ? null:
      <div>
        {props.idx > 0 ? <button onClick={props.back}> Go Back </button> : null}
        {props.idx < 3 ? <button onClick={props.next}> Next step </button> :  <button onClick={props.confirm}> Confirm </button>}
      </div>
  
}