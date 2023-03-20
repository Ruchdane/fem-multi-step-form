
export function Input(props) {
	let { label, type, placeholder, value, required, onchange, onblur, pattern, error, success } = props;
	return <div>
		<div className="space-x-2.5 mb-2">
			<label className="text-gray-700 font-bold "> {label} </label>
			{error ? <label className="text-red-500  text-xs italic"> {error} </label> : null}
			{success ? <label className="text-green-500  text-xs italic"> {success} </label> : null}
		</div>
		<input className={`block w-full px-3 py-1.5 
			text-base font-normal 
			border border-solid border-primary rounded-lg
			transition ease-in-out m-0 
			focus:border-tertiary focus:bg-gray-100 focus:outline-none 
			placeholder-shown:border-gray-500
			${success ? "border-green-500 bg-green-200 focus:border-green-700"
				: (error ? "border-red-500 bg-red-200 focus:border-red-700"
					: "bg-gray-100"
				)}`}
			type={type} placeholder={placeholder} value={value} onChange={onchange} onBlur={onblur} required={required} pattern={pattern} />
	</div>
}
