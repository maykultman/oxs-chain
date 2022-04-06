export const getId = () => Math.random().toString().substr(2);
export const formatMoney = (NumberFormat, total) => {
	return <NumberFormat
		value={total}
		className="foo"
		displayType={'text'}
		thousandSeparator={true}
		prefix={'$'}
		renderText={(value, props) => <div {...props}>{value}</div>}
	/>
}
export const Diverror = (error) =>( error ? null:<div className="error">*</div>)