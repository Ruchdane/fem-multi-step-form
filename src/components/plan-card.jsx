// icon
// active: boolean
// title
// price
// cildren as icon
// rate: false(monthly) | true(yearly)

// Ex: <PlanCard title="Arcade" price={9} rate={false} selected={true}/>
export function PlanCard(props){
  return <div className={"flex md:flex-col md:justify-between md:w-full gap-2.5 selectable-card" + (props.selected ? " selected" : " not-selected")} onClick={props.onclick}>
    <div> {props.children} </div>
    <div className="flex flex-col">
      <div> {props.title} </div>
      <div className="text-cool-gray"> {props.price} </div>
      <div className="text-sm"> {props.rate ? "2 month free" : null} </div>
    </div>
  </div>
}