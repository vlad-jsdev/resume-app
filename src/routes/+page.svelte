<script>
// @ts-nocheck

	import Counter from './Counter.svelte';
	import welcome from '$lib/images/svelte-welcome.webp';
	import welcome_fallback from '$lib/images/svelte-welcome.png';
	import { inputData } from '../store';
	import { onDestroy } from 'svelte';
	import Markdown from '../components/Markdown.svelte';

	
	let newVal = ''
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

	const unsubscribe = inputData.subscribe((value) => (formData = value));

	function handleSubmit() {
		console.log('newVal: ', newVal)
		inputData.set(formData);
	}

	onDestroy(unsubscribe);
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<h1>
		<span class="welcome">
			<picture>
				<source srcset={welcome} type="image/webp" />
				<img src={welcome_fallback} alt="Welcome" />
			</picture>
		</span>
		Form Skills
	</h1>

	<form on:submit|preventDefault={handleSubmit}>
		<div class="space-y-12 w-screen">
			<div class="border-b border-gray-900/10 pb-12 px-80">
				<h2 class="text-base font-semibold leading-7 text-gray-900">Personal Information</h2>
				<p class="mt-1 text-sm leading-6 text-gray-600">
					Use a fields if you want to change info, if not, just let fields empty.
				</p>

				<div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
					<div class="sm:col-span-3">
						<label for="first-name" class="block text-sm font-medium leading-6 text-gray-900"
							>First name</label
						>
						<div class="mt-2">
							<input
								bind:value={formData.firstName}
								type="text"
								name="first-name"
								id="first-name"
								autocomplete="given-name"
								class="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
							/>
						</div>
					</div>

					<div class="sm:col-span-3">
						<label for="last-name" class="block text-sm font-medium leading-6 text-gray-900"
							>Last name</label
						>
						<div class="mt-2">
							<input
								bind:value={formData.lastName}
								type="text"
								name="last-name"
								id="last-name"
								autocomplete="family-name"
								class="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
							/>
						</div>
					</div>

					<div class="sm:col-span-4">
						<label for="role" class="block text-sm font-medium leading-6 text-gray-900"
							>Main Role</label
						>
						<div class="mt-2">
							<input
								bind:value={formData.mainRole}
								id="role"
								name="role"
								type="text"
								class="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
							/>
						</div>
					</div>

					<div class="sm:col-span-4">
						<label for="email" class="block text-sm font-medium leading-6 text-gray-900"
							>Email address</label
						>
						<div class="mt-2">
							<input
								id="email"
								name="email"
								type="email"
								autocomplete="email"
								class="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
							/>
						</div>
					</div>

					<div class="sm:col-span-3">
						<label for="country" class="block text-sm font-medium leading-6 text-gray-900"
							>Country</label
						>
						<div class="mt-2">
							<select
								bind:value={formData.country}
								id="country"
								name="country"
								autocomplete="country-name"
								class="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
							>
								<option>Germany</option>
								<option>Canada</option>
							</select>
						</div>
					</div>
				</div>
			</div>
			<div class="w-screen px-4">
				<h1>About me</h1>
				<Markdown textMD={formData.about}/>
				<h1>Contact Info</h1>
				<Markdown textMD={formData.contact}/>			
			</div>

			
			<!-- <div class="sm:col-span-3">
				<label for="about" class="block text-sm font-medium leading-6 text-gray-900"
					>About me</label
				>
				<div class="mt-2">
					<textarea
						bind:value={formData.about}
						name="about"
						rows="3"
						id="about"
						autocomplete="about"
						class="block h-64 w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-4"
					/>
				</div>
			</div> -->

			<div class="sm:col-span-3 px-80">
				<label for="hard-skills" class="block text-sm font-medium leading-6 text-gray-900"
					>My hard skills (insert skill separate with comma)</label
				>
				<div class="mt-2">
					<textarea
						bind:value={formData.hardSkills}
						name="hard-skills"
						rows="3"
						id="hard-skills"
						autocomplete="hard-skills"
						class="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
					/>
				</div>
			</div>

			<div class="border-b border-gray-900/10 pb-12 px-80">
				<div class="mt-10 space-y-10">
					<fieldset>
						<legend class="text-sm font-semibold leading-6 text-gray-900">Settings</legend>
						<div class="mt-6 space-y-6">
							<div class="relative flex gap-x-3">
								<div class="flex h-6 items-center">
									<input
										bind:value={formData.settings}
										id="projects"
										name="projects"
										type="checkbox"
										class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
									/>
								</div>
								<div class="text-sm leading-6">
									<label for="projects" class="font-medium text-gray-900">Show Projects Page</label>
									<p class="text-gray-500">Show Projects in your CV or Hide them</p>
								</div>
							</div>
						</div>
					</fieldset>
				</div>
			</div>
		</div>

		<div class="mt-6 flex items-center justify-end gap-x-6 px-80">
			<button type="button" class="text-sm font-semibold leading-6 text-gray-900">Clear Form</button
			>
			<button
				type="submit"
				class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
				>Generate</button
			>
		</div>
	</form>

	<Counter />
</section>

<style lang="postcss">
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	h1 {
		width: 100%;
	}

	.welcome {
		display: block;
		position: relative;
		width: 100%;
		height: 0;
		padding: 0 0 calc(100% * 495 / 2048) 0;
	}

	.welcome img {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		display: block;
	}
</style>
