
export function Input(props) {
	let { label, type, placeholder, value, required,onchange,onblur,pattern, error, success } = props;
	return <div>
		<div className="space-x-2.5">
			<label> {label} </label>
			{error ? <label className="text-red-500"> {error} </label> : null}
			{success ? <label className="text-green-500"> {success} </label> : null}
		</div>
		<input className="block w-full px-3 py-1.5 
			text-base font-normal 
			bg-white bg-clip-padding 
			border border-solid border-primary rounded 
			transition ease-in-out m-0 
			focus:border-tertiary focus:bg-white focus:outline-none 
			placeholder-shown:border-gray-500
			valid:border-green-500 invalid:border-red-500"
			type={type} placeholder={placeholder} value={value} onChange={onchange} onBlur={onblur} required={required} pattern={pattern}/>
	</div>
}
