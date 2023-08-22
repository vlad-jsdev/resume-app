<script>
	import './styles.css';
	import mypic from '$lib/images/mypic.jpg';
	import {inputData} from '../../store'
	import { onDestroy } from 'svelte'
	import {marked} from 'marked'
	
 	let formData = {
		firstName: '',
		lastName: '',
		mainRole: '',
		hardSkills: '',
		description: '',
		contact: '',
		country: '',
		settings: '',
		about: ''
	};
	const unsubscribe = inputData.subscribe(val => formData = val)
	onDestroy(unsubscribe)
</script>

<svelte:head>
	<title>Resume</title>
	<meta name="description" content="Resume" />
</svelte:head>

<div class="wrap-resume">
	<div class="resume-1">
		<div class="columns">
			<div class="left-column">
				<div class="wrap-img">
					<div class="circle-img" />
					<div class="name-wrap">
						<div class="first-name">{formData.firstName}</div>
						<div class="last-name">{formData.lastName}</div>
					</div>
					<div class="main-role">{formData.mainRole}</div>
				</div>
				<div class="info-me">
					<p class="top">
						{@html marked(formData.about)}						
					</p>
					<p class="bottom">
						{@html marked(formData.contact)}
					</p>
				</div>
			</div>
			<div class="right-column">
				<div class="experinece">
					<div class="title">
						<div class="icon"></div>
						<h2>experinece</h2>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
