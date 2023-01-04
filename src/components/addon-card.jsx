// selected 
// name 
// description
// price
export function AddonCard(props){
  return <div className={"flex justify-between items-center md:w-full gap-2.5 selectable-card" + (props.selected ? " selected" : " not-selected")} onClick={props.onclick}>
      <div className="flex gap-4">
        <input type="checkbox" checked={props.selected}/>
        <div className="flex flex-col">
          <span className="font-bold">{props.name}</span>
          <span className="text-cool-gray">{props.description}</span>
       </div>
     </div>
      <span className="text-blue">+{props.price}</span>
  </div>
}
