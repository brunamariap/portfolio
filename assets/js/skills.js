const skills = [
	{
		name: "Git",
		description: "Sistema de controle de versão.",
		icon: '<img src="./assets/icons/git.svg" alt="Git">',
	},
	{
		name: "HTML",
		description: "Estruturação de páginas web.",
		icon: '<img src="./assets/icons/html.svg" alt="HTML">',
	},
	{
		name: "CSS",
		description: "Estilização e design web.",
		icon: '<img src="./assets/icons/css.svg" alt="CSS">',
	},
	{
		name: "JavaScript",
		description: "Interatividade para a web.",
		icon: '<img src="./assets/icons/javascript.svg" alt="JavaScript">',
	},
	{
		name: "Python",
		description: "Linguagem poderosa e versátil.",
		icon: '<img src="./assets/icons/python.svg" alt="Python">',
	},
	{
		name: "Django",
		description: "Framework web para Python.",
		icon: '<img src="./assets/icons/django.svg" alt="Django">',
	},
	{
		name: "Tailwind CSS",
		description: "Framework CSS utilitário.",
		icon: '<img src="./assets/icons/tailwind.svg" alt="Tailwind CSS">',
	},
	{
		name: "PostgreSQL",
		description: "Banco de dados escalável.",
		icon: '<img src="./assets/icons/postgresql.svg" alt="PostgreSQL">',
	},
	{
		name: "Docker",
		description: "Gerenciamento de containers.",
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
			<div class="skill-description">${skill.description}</div>
	`;

	skillsContainer.appendChild(card);
});
