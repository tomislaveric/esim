<script lang="ts">
  import SearchBar from "../components/searchBar.svelte"

  let { data } = $props();

</script>

<div class="container">
  <SearchBar/>
  {#each data.providers as provider }
  <div>
    {provider.name}
    {#each provider.products as product}
    <div>
      {product.name}
      {product.price}
    </div>
    {/each}
  </div>
  {/each}
</div>
