import { useRouter } from "next/router";

function DetailPage(props) {

    console.log(props);

    // const [isLoading, ]
    const router = useRouter();
    const championName = props.name;

	return (
		<>
			<img src={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${championName}_0.jpg`} />
            <h1>{championName}</h1>
            <p>{props.lore}</p>
		</>
	);
}

export async function getServerSideProps(context) {
	return await fetch(`http://ddragon.leagueoflegends.com/cdn/12.3.1/data/pl_PL/champion/${context.params.championName}.json`)
		.then((res) => res.json())
		.then((result) => {
			return {
				props: result.data[context.params.championName],
			};
		});
}

export default DetailPage;
