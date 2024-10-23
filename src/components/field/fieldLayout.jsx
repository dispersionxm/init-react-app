export const FieldLayout = ({ gameFeatures }) => {
	return (
		<div className="grid grid-cols-3 gap-5">
			{gameFeatures.field.map((s, i) => (
				<div key={i}>{s}</div>
			))}
		</div>
	)
}
