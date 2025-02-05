<script>import ParamViewer from "./ParamViewer.svelte";
export let value;
export let linkify = [];
export let header = null;
export let anchor_links = false;
</script>

<ParamViewer docs={value} {linkify} {header} {anchor_links} />
