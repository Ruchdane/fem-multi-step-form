
export function Input(props){
	let {label,type,placeholder,value,onchange,error,success} = props;
	return <div>
      <div>
				<label> {label} </label>
				{error ? <label> {error} </label>   : null }
				{success ? <label> {success} </label> : null}
  		</div>
      <input type={type} placeholder={placeholder} value={value} onChange={onchange}/>
    </div>
}
