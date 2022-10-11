
<script>
	import UserIcon from "../assets/usericon.svg";

	let member = [
		{	
			num: 0,
			icon: UserIcon,
			name: "Corey Curtis",
			status: "from contacts"
		},
		{	
			num: 1,
			icon: UserIcon,
			name: "Allison Culhane",
			status: "mutual friend"
		},
		{	
			num: 2,
			icon: UserIcon,
			name: "Kianna Herwitz",
			status: "from contacts"
		},
		{	
			num: 3,
			icon: UserIcon,
			name: "Jaylon Lipshutz",
			status: "from contacts"
		},
		{
			num: 4,
			icon: UserIcon,
			name: "Ererson Aminoff",
			status: "mutual friend"
		},
		{	
			num: 5,
			icon: UserIcon,
			name: "Terry Brown",
			email: "from contacts"
		},
		{	
			num: 6,
			icon: UserIcon,
			name: "Aisha Saris",
			status: "mutual friend"
		},
	];

	const getMember = () => {
		return member;
	}
</script>

<div>
	{#each getMember() as {icon, name, status, num}, i(num) }
		
		<div class="m-5 bg-white rounded-xl flex hover:shadow-xl">
			<img class="w-15" src={icon} alt={name} width="100"/>
			
			<div class="pt-6">
				<p class="text-lg font-bold">{name}</p>
				<p class="text-sm font-semibold">{status}</p>
			</div>
		</div>

	{/each}
</div>