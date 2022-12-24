// Price display
// {1,false} $1/mo 
// {1,true} $10/yr 
export function priceRate(value,rate){
	return `$${value}${rate ?  "0/yr": "/mo"}`;
}
