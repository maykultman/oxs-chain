const MenuStates = ({estados, name, handleChange, _value}) => {
	let list = estados.map(post=>{
		return <option key={post.ESTADO_ID}>{post.ESTADO}</option>
	})
	return <>
		<select name={name} onChange={handleChange} value={_value}>
			<option key={1}>-</option>
			{list}
		</select>
	</>
}
export default MenuStates;