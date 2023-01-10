import { useState } from "react";
import { Input } from "../components/input";

function inputValidation(target,setValue){
	if(target.validity.valueMissing){
		setValue({
			error:"This field should not be empty"
		})
	}
	else if(!target.validity.valid){
		setValue({
			value: target.value,
			error: target.validitionMessage
		})
	}
	else {
		setValue({
			value: target.value,
			success: "The field is filed correctly"
		})
	}
}

export function PersonalInfo(){
	const [name,setName]   = useState({value:undefined});
	const [email,setEmail] = useState({value:undefined});
	const [phone,setPhone] = useState({value:undefined});


	return <div class="flex flex-col gap-8">
			<Input value={name.value} 
							error={name.error} 
							success={name.success}
							onchange={(e) =>inputValidation(e.target,setName)}  
							label="Name" 
							type="text" 
							placeholder="e.g. Stephen King"
			/>
			<Input value={email.value} 
							error={email.error} 
							success={email.success}
							onchange={(e) =>inputValidation(e.target,setEmail)} 
							label="Email Address" 
							type="text" 
							placeholder="e.g. stephenking@lorem.com"
			/>
			<Input value={phone.value} 
							error={phone.error} 
							success={phone.success}
							onchange={(e) =>inputValidation(e.target,setPhone)} 
							label="Phone Number" 
							type="text" 
							placeholder="e.g. +1 234 567 890"
			/>
	</div>
}