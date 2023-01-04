import { addons, plans} from '../App';
import { priceRate } from '../util';
// There are two component

// The summary-element
// name
// price
// rate
function SummaryElement(props){
  return  <div className="flex justify-between align-center py-2">
    <span className="text-cool-gray"> {props.name} </span>
    <span> {props.price} </span>
  </div>
}

// The sumary itself 
// which consit of the elment and the total
// add-ons: {name,price}[]
// plan: {name,price}
// rate
export function Summary(props){
  const plan = plans[props.selected_plan];
  return <div class="bg-magnolia p-4 rounded-lg">
    <div className="flex justify-between align-center gap-2">
      <div className="flex flex-col">
        {plan.name} ({props.rate ? "Yearly" : "Monthly"})
        <a href="#step2" className="underline text-cool-gray"> change </a>
      </div>
      <div>
        { priceRate(plan.price,props.rate)}
      </div>
    </div>
    <hr className="text-cool-gray"/>
    <ul>
      {
      addons.map((addon,i) => props.selected_addons[i] ? 
        <SummaryElement name={addon.name} price={"+" + priceRate(addon.price,props.rate)}/>:null )
      }
    </ul>
  </div>
}
