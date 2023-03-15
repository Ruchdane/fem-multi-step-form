import { useState } from "react";
import { Input } from "../components/input";

function inputValidation(target, setValue) {
	if (target.validity.valueMissing) {
		setValue({
			error: "This field should not be empty",
			success: ""
		})
	}
	else if (!target.validity.valid) {
		setValue({
			value: target.value,
			error: target.validationMessage,
			success: ""
		})
	}
	else {
		setValue({
			value: target.value,
			success: "The field is filed correctly",
			error: "",
		})
	}
}

export function PersonalInfo() {
	const [name, setName] = useState({ value: undefined });
	const [email, setEmail] = useState({ value: undefined });
	const [phone, setPhone] = useState({ value: undefined });


	return <div className="flex flex-col gap-8">
		<Input value={name.value}
			error={name.error}
			success={name.success}
			onchange={(e) => inputValidation(e.target, setName)}
			onblur={(e) => inputValidation(e.target, setName)}
			label="Name"
			type="text"
			required
			placeholder="e.g. Stephen King"
		/>
		<Input value={email.value}
			error={email.error}
			success={email.success}
			onchange={(e) => inputValidation(e.target, setEmail)}
			onblur={(e) => inputValidation(e.target, setEmail)}
			label="Email Address"
			type="email"
			required
			placeholder="e.g. stephenking@lorem.com"
		/>
		<Input value={phone.value}
			error={phone.error}
			success={phone.success}
			onchange={(e) => inputValidation(e.target, setPhone)}
			onblur={(e) => inputValidation(e.target, setPhone)}
			label="Phone Number"
			type="tel"
			pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
			required
			placeholder="e.g. +1 234 567 890"
		/>
	</div>
}