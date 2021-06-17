<script>
	import Container from "../../../src/Container.svelte"

	import {data} from "./data"
</script>

{#each $data as item}
	<Container size="m" header={item.title}>
		<div class="text">
			{item.text}
		</div>
		<div class="info">
			<div class="author">{item.author}</div>
			<div class="publishedAt">Published at: {item.created_formated}</div>
		</div>
	</Container>
{/each}