// selected 
// name 
// description
// price
export function AddonCard(props){
  return <div classNames={props.selected ? "selected" : ""} onClick={props.onclick}>
    <input type="checkbox" checked={props.selected}/>
    {props.name}
    {props.description}
    +{props.price}
  </div>
}
