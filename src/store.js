import { writable } from "svelte/store";

export const inputData = writable({
	firstName: 'Vladyslav',
	lastName: 'Manoilo',
	mainRole: 'Frontend developer',
	hardSkills: 'JavaScript TypeScript NodeJS React.js React Native HTML CSS/REST API Sencha ExtJS NextJS Redux Webpack Git SQL/NoSQL Docker CI/CD',
	description: '',
	country: '',
	settings: '',
	about: `<b>Proactivity:</b> I am always ready for new challenges and eager to learn, which allows me to bring innovative ideas and approaches to my work.<br /><br />
	<b>Positive attitude:</b> I am friendly and approachable, making it easy for me to build strong relationships with colleagues and clients.<br /><br />
	<b>Collaboration:</b> I am open to helping others and work well as a team player, contributing to a positive and productive work environment.<br /><br />
	<b>Dedication:</b> I am a perfectionist in my work and do not give up easily, ensuring that projects are completed to the highest standard.<br /><br />
	<b>Flexibility:</b> I am committed to my work and willing to go the extra mile, even if that means working outside of standard hours.`,
	contact: `<b>Germany, Berlin</b> <br />
	(ready to relocate) <br />
	Residence Permit - (Germany, Canada) <br />
	<b>Tel:</b> +4917624233343 DE <br />
	<b>Skype:</b> vlados_x <br />
	<b>GitHub:</b> https://github.com/vlad-jsdev <br />
	<b>LinkedIn:</b> linkedin.com/in/vlad-manoilo/ <br />
	<b>Email:</b> vladyslav0manoilo@gmail.com <br />
	<b>Website:</b> https://vlados.netlify.app/ <br />`
});