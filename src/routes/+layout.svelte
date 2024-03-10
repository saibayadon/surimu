<script>
  import '../css/app.css';
</script>

<main>
  <div style="display: contents">
    <slot />
  </div>
</main>

<style lang="postcss">
  :global(html) {
    background-color: theme(colors.gray.100);
  }
</style>
