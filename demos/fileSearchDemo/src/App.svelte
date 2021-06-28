<script>
	import tagStore from "../../../src/tagStore"
	import Tags from "../../../src/Tags.svelte"
	import Searchbar from "../../../src/Searchbar.svelte"
	import Setup from "../../../src/Setup.svelte"
	import List from "../../../src/List.svelte"

	import {data} from "./data"

	$: suggestions = $data
	let query
	let selected

	$: console.log("All tags", $tagStore)

	const listFilter = (item) => {
		return item.text && (!query || item.title.toLowerCase().includes(query.toLowerCase()))
	}

	const handleSearch = () => {
    query = selected.title
  }
</script>

<Setup --primary="var(--green)">

	<Searchbar --background="var(--red)" {suggestions} bind:query bind:selected on:submit={handleSearch} />

	<List data={$data} let:item filter={listFilter}>
		<div class="text">
			{item.text}
		</div>
		<div class="info">
			<div class="author">{item.author}</div>
			<div class="publishedAt">Published at: {item.created_formated}</div>
		</div>

		<Tags tags={item.tags} />
	</List>

</Setup>