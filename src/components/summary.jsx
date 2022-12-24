import { addons, plans } from '../App';
import { priceRate } from '../util';
// There are two component

// The summary-element
// name
// price
// rate
function SummaryElement(props){
  return <div>
    {props.name}
    +{props.price}
  </div>
}

// The sumary itself 
// which consit of the elment and the total
// add-ons: {name,price}[]
// plan: {name,price}
// rate
export function Summary(props){
  const plan = plans[props.selected_plan];
  return <div>
    {plan.name}{props.rate ? "Yearly" : "Monthly"}
    <a href="#step2"> change </a>
    { priceRate(plan.price,props.rate)}
    <hr/>
    <ul>
      {
      addons.map((addon,i) => props.selected_addons[i] ? 
        <SummaryElement name={addon.name} price={priceRate(addon.price,props.rate)}/>:null )
      }
    </ul>
  </div>
}
