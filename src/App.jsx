import { useState } from 'react'
import './App.css'
import { PlanCard } from './components/plan-card';
import { StepList } from './components/step';
import { StepAction } from './components/step-action';
import { StepCard } from './components/step-card';
import { priceRate } from './util';
import IconArcade  from "./assets/icons/icon-arcade.svg";
import IconAdvanced from "./assets/icons/icon-advanced.svg";
import IconPro from "./assets/icons/icon-pro.svg";
// import IconCheckmark from "./assets/icons/con-checkmark.svg";
import IconThankYou from "./assets/icons/icon-thank-you.svg";
import { AddonCard } from './components/addon-card';
import { Summary } from './components/summary';
import { Switch } from './components/switch';

const steps = ["Your info","Select plan","Add-ons","Summary"]
export const plans = [
  {name: "Arcade",  price: 9 ,icon: IconArcade},
  {name: "Advanced",price: 12,icon: IconAdvanced},
  {name: "Pro",     price: 15, icon: IconPro}
]
export const addons = [
  {name: "Online service",       description:"Access to multiplayer games", price:1},
  {name: "Larger storage",       description:"Extra 1TB of cloud save",     price:2},
  {name: "Customizable Profile", description:"Custom theme on your profile",price:2},
]
function App() {

  const [active_step, set_active_step] = useState(0);
  function go_back(){
    set_active_step(active_step - 1);
  }
  function next_step(){
    set_active_step(active_step + 1);
  }
  // rate: false(monthly) | true(yearly)
  const [rate, set_rate] = useState(false);
  const [selected_plan, set_selected_plan] = useState(0);
  const [selected_addons,set_selected_addon] = useState([false,false,false])
  function toggle_addon(i){
    let tmp = [...selected_addons];
    tmp[i] = !tmp[i];
    console.log(tmp);
    set_selected_addon(tmp);
  }

  function total(){
    let total = plans[selected_plan].price;
    for(let i = 0; i < selected_addons.length; i++)
      total += selected_addons[i] ? addons[i].price : 0;
    return total;
  }
  // TODO add input binding to name,email and phone
  return (
    <>  
      <StepList steps={steps} active_elt={active_step} onchange={step => set_active_step(step)}/> 
      <form className="flex flex-col justify-between min-h-[70%] md:w-full">
      <StepCard
        active={active_step == 0}
        title="Personal info"
        description="Please provide your name, email address, and phone number.">
        Name
        <input placeholder="e.g. Stephen King"/>

        Email Address
        <input placeholder="e.g. stephenking@lorem.com"/>

        Phone Number
        <input placeholder="e.g. +1 234 567 890"/>
      </ StepCard> 

    <StepCard
      active={active_step == 1}
      title="Select your plan"
      description="You have the option of monthly or yearly billing.">
      <div className="flex flex-col w-full h-full md:flex-row gap-2">
          {
         plans.map((plan,i) =>
          <PlanCard  
            title={plan.name} 
            price={priceRate(plan.price,rate)} 
            rate={rate} 
            selected={selected_plan === i} 
            onclick={() => set_selected_plan(i)}
          >
          <img src={plan.icon} alt={plan.icon.split("/")[-1]}/>
      </PlanCard>
        )}
      </div>
      <Switch checked={rate} toggle={() => set_rate(!rate)}/>
    </StepCard>
    <StepCard
      active={active_step == 2}
      title="Pick add-ons"
      description="Add-ons help enhance your gaming experience."
    >
      <div className="flex flex-col w-full h-full gap-2">
        {
        addons.map((addon,i) => 
          <AddonCard 
            selected={selected_addons[i]}
            onclick={() => toggle_addon(i)}
            name={addon.name} 
            description={addon.description} 
            price={priceRate(addon.price,rate)}/>)
      }
    </div>
    </StepCard>


    <StepCard
        active={active_step == 3}
    title="Finishing up"
    description="Double-check everything looks OK before confirming."
    >
    <Summary selected_plan={selected_plan} selected_addons={selected_addons} rate={rate}/>
    <div className="flex justify-between px-2 py-6">
      <span> Total (per {rate ? "year"  :"month"})</span> 
      <span class="text-blue"> {rate ? null  :"+"} {priceRate(total(),rate)}</span>
     </div>

    </StepCard>

  { active_step === 4 ?  <div>
        <img src={IconThankYou} alt='Thanks'/>
    Thank you!

    Thanks for confirming your subscription! We hope you have fun 
    using our platform. If you ever need support, please feel free 
    to email us at support@loremgaming.com.
    </div> : null}
    <StepAction idx={active_step} back={go_back} next={next_step} confirm={next_step}/>
    </form>
      </>
  )
}

export default App
