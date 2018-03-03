export const InformationList = ({infoList}) => (
	{infoList.map((infoEntry, i) => 
		<InfoEntry key=>{i}
					{..infoEntry}/>
		)}
)


