// switch toggle
// label_on: (Monthly)
// label_off: (yearly)
export function Switch(props){
  return <>
      Monthly
    <input type="checkbox" checked={props.checked} onChange={props.toggle}/>
      Yearly 
    </>
}