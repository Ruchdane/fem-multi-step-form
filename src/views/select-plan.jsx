import { Switch } from '../components/switch';
import { PlanCard } from '../components/plan-card';
import { priceRate } from '../util';

export function SelectPlan(props) {
	let { plans,rate,set_rate,selected_plan, set_selected_plan } = props
	return <>
		<div className="flex flex-col w-full h-full md:flex-row gap-2">
			{
				plans.map((plan, i) =>
					<PlanCard
						key={i}
						title={plan.name}
						price={priceRate(plan.price, rate)}
						rate={rate}
						selected={selected_plan === i}
						onclick={() => set_selected_plan(i)}
					>
						<img src={plan.icon} alt={plan.icon.split("/")[-1]} />
					</PlanCard>
				)}
		</div>
		<Switch checked={rate} toggle={() => set_rate(!rate)} />
	</>

}
