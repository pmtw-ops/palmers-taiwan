
export default function InfoBlock({ title, contents }) {
	return (
		<div className="grid grid-cols-1 md:grid-cols-5 m-4">
			<div className="col-span-1 p-2 content-center md:text-right md:col-span-1">
				<span className="bold">|</span> {title}
			</div>
			<div className="col-span-1 p-2 border-l-2 break-words md:col-span-4">
				{contents}
			</div>
		</div>
	)
}
