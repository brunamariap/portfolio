const skills = [
	{
		name: "Git",
		icon: '<img src="./assets/icons/git.svg" alt="Git">',
	},
	{
		name: "HTML",
		icon: '<img src="./assets/icons/html.svg" alt="HTML">',
	},
	{
		name: "CSS",
		icon: '<img src="./assets/icons/css.svg" alt="CSS">',
	},
	{
		name: "JavaScript",
		icon: '<img src="./assets/icons/javascript.svg" alt="JavaScript">',
	},
	{
		name: "Python",
		icon: '<img src="./assets/icons/python.svg" alt="Python">',
	},
	{
		name: "Django",
		icon: '<img src="./assets/icons/django.svg" alt="Django">',
	},
	{
		name: "Tailwind CSS",
		icon: '<img src="./assets/icons/tailwind.svg" alt="Tailwind CSS">',
	},
	{
		name: "PostgreSQL",
		icon: '<img src="./assets/icons/postgresql.svg" alt="PostgreSQL">',
	},
	{
		name: "Docker",
		icon: '<img src="./assets/icons/docker.svg" alt="Docker">',
	},
];

const skillsContainer = document.getElementById("skills-container");

skills.forEach((skill) => {
	const card = document.createElement("div");
	card.classList.add("skill-card");

	card.innerHTML = `
			<div class="icon">${skill.icon}</div>
			<div class="skill-name">${skill.name}</div>
	`;

	skillsContainer.appendChild(card);
});
