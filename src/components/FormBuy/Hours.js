const Hours = ({hours, handleChange}) => {
	return <>
		<ul className="hours-list">
			{hours.map((hour,index)=>(
				<label key={index}>
					<input type="radio" name="hour" onChange={handleChange} value={hour} />
					{hour}
				</label>
			))}
		</ul>
	</>
}
export default Hours;