<script lang="ts">
	import { Carta, CartaEditor } from 'carta-md';
	// Component default theme
	import 'carta-md/default-theme.css';
	// Markdown input theme (Speed Highlight)
	import 'carta-md/light.css';
  //@ts-ignore
  export let textMD

	const carta = new Carta({
		// Remember to use a sanitizer to prevent XSS attacks
		// sanitizer: mySanitizer
	});
  console.log('Carta: ', carta)
</script>

<CartaEditor {carta} mode={'split'} disableToolbar={false} value={textMD} />
<style>
	/* Or in global stylesheet */
	/* Set your custom monospace font */
	:global(.carta-font-code) {
		font-family: '...', monospace;
	}
</style>