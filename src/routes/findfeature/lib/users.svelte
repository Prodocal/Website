
<script>
	import UserIcon from "../../components/img/usericon.svg";

	let member = [
		{	
			num: 0,
			icon: UserIcon,
			name: "Corey Curtis"
		},
		{	
			num: 1,
			icon: UserIcon,
			name: "Allison Culhane"
		},
		{	
			num: 2,
			icon: UserIcon,
			name: "Kianna Herwitz"
		},
		{	
			num: 3,
			icon: UserIcon,
			name: "Jaylon Lipshutz"
		},
		{
			num: 4,
			icon: UserIcon,
			name: "Ererson Aminoff"
		},
		{	
			num: 5,
			icon: UserIcon,
			name: "Terry Brown"
		},
		{	
			num: 6,
			icon: UserIcon,
			name: "Aisha Saris"
		},
	];

	const getMember = () => {
		return member;
	}
</script>

<div>
	{#each getMember() as {icon, name, status, num}, i(num) }
		
		<div class="card card-side m-5 bg-white hover:shadow-xl">
			<img class="ml-4 w-15" src={icon} alt={name} width="130"/>
			
			<div class="card card-center"> 
				<div class="card-body items-center text-2xl pt-14">{name}</div>
			</div>
			
			<div class="card-body justify-end">
				<button class="btn btn-info">View Organizations</button>
				<button class="btn btn-outline btn-error">Remove Friend</button>
			</div>

		</div>

	{/each}
</div>