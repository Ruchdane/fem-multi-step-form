// icon
// active: boolean
// title
// price
// cildren as icon
// rate: false(monthly) | true(yearly)

// Ex: <PlanCard title="Arcade" price={9} rate={false} selected={true}/>
export function PlanCard(props){
  return <div classNames={props.selected ? "selected" : ""} onClick={props.onclick}>
    {props.children}
    {props.title}
    {props.price}
    {props.rate ? "2 month free" : null}
  </div>
}