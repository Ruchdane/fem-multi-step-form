import { useState } from 'react'
import './App.css'
import { StepList } from './components/step';
import { StepCard } from './components/step-card';


const steps = ["Your info","Select plan","Add-ons","Summary"]
function App() {

  const [active_step, set_active_step] = useState(0);
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
      Arcade
      $9/mo

      Advanced
      $12/mo

      Pro
      $15/mo

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
      +$1/mo

      Larger storage
      Extra 1TB of cloud save
      +$2/mo

      Customizable Profile
      Custom theme on your profile
      +$2/mo

    </StepCard>
    Go Back
    Next Step


    <StepCard
        active={active_step == 3}
    title="Finishing up"
    description="Double-check everything looks OK before confirming."
    >

    // -- Dynamically add subscription and add-on selections here --

    Total (per month/year)

    </StepCard>
    Go Back
    Confirm

    // -- Step 4 end --

    // -- Step 5 start --

    Thank you!

    Thanks for confirming your subscription! We hope you have fun 
    using our platform. If you ever need support, please feel free 
    to email us at support@loremgaming.com.

    // -- Step 5 end --
      </>
  )
}

export default App
