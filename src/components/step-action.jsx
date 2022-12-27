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
  let btn = "px-6 py-2  hover:-translate-y-0.5 hover:brightness-125 active:translate-y-0 active:brightness-75 transition-all ease-in duration-300"
  return props.idx > 3 ? null:
      <div className=" w-full bg-white p-4 flex flex-row-reverse justify-between">
        {props.idx < 3 ? <button className={"bg-marine-blue text-white " + btn } type="button"  onClick={props.next}> Next step </button> 
                      :  <button className={"bg-purplish-blue text-white " + btn } type="button" onClick={props.confirm}> Confirm </button>}
        {props.idx > 0 ? <button className={btn} onClick={props.back}  type="button" > Go Back </button> : null}
      </div>
  
}