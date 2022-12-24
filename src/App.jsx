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
// import IconThankYou from "./assets/icons/con-thank-you.svg";

const steps = ["Your info","Select plan","Add-ons","Summary"]
const plans = [
  {name: "Arcade",  price: 9 ,icon: IconArcade},
  {name: "Advanced",price: 12,icon: IconAdvanced},
  {name: "Pro",     price: 15, icon: IconPro}
]
function App() {

  const [active_step, set_active_step] = useState(0);
  function go_back(){
    set_active_step(active_step - 1);
  }
  function next_step(){
    set_active_step(active_step + 1);
  }
  function confirm(){
    set_active_step(active_step + 1);
  }
  // rate: false(monthly) | true(yearly)
  const [rate, set_rate] = useState(false);
  const [selected_plan, set_selected_plan] = useState(0);
  return (
    <>  
      <StepList steps={steps} active_elt={active_step} onchange={step => set_active_step(step)}/> 
      <StepCard
        active={active_step == 0}
        title="Personal info"
        description="Please provide your name, email address, and phone number.">
        Name
        e.g. Stephen King

        Email Address
        e.g. stephenking@lorem.com

        Phone Number
        e.g. +1 234 567 890
      </ StepCard> 

    <StepCard
      active={active_step == 1}
      title="Select your plan"
      description="You have the option of monthly or yearly billing.">
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
      Monthly
      Yearly
    </StepCard>


    <StepCard
      active={active_step == 2}
      title="Pick add-ons"
      description="Add-ons help enhance your gaming experience."
    >
      Online service
      Access to multiplayer games
      +{priceRate(1,rate)}

      Larger storage
      Extra 1TB of cloud save
      +{priceRate(2,rate)}

      Customizable Profile
      Custom theme on your profile
      +{priceRate(2,rate)}

    </StepCard>


    <StepCard
        active={active_step == 3}
    title="Finishing up"
    description="Double-check everything looks OK before confirming."
    >

    // -- Dynamically add subscription and add-on selections here --

    Total (per month/year)

    </StepCard>

  { active_step === 4 ?  <div>
    Thank you!

    Thanks for confirming your subscription! We hope you have fun 
    using our platform. If you ever need support, please feel free 
    to email us at support@loremgaming.com.
    </div> : null}
    <StepAction idx={active_step} back={go_back} next={next_step} confirm={confirm}/>
      </>
  )
}

export default App
