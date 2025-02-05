import { c as create_ssr_component, v as validate_component, a as createEventDispatcher, e as escape, b as add_attribute, f as each, d as add_styles, h as merge_ssr_styles, n as null_to_empty, o as onDestroy } from './ssr-fyTaU2Wq.js';
import { t as tick } from './Component-BeHry4b7.js';
import { B as Block, S as Static, t as MarkdownCode, w as Copy, O as Minimize, P as Maximize } from './2-Cvaib1R4.js';
import { d as dequal } from './index6-sfNUnwRZ.js';
import { U as Upload } from './ModifyUpload-BxBenAx8.js';
export { default as BaseExample } from './Example8-C9bAZQI2.js';
import './index-D2xO-t5a.js';
import 'tty';
import 'path';
import 'url';
import 'fs';
import './DownloadLink-BKK_IWmU.js';

const css$4 = {
  code: 'input.svelte-10bf3cw{position:absolute;top:var(--size-2);right:var(--size-2);bottom:var(--size-2);left:var(--size-2);flex:1 1 0%;transform:translateX(-0.1px);outline:none;border:none;background:transparent;cursor:text}span.svelte-10bf3cw{flex:1 1 0%;position:relative;display:inline-block;outline:none;padding:var(--size-2);-webkit-user-select:text;-moz-user-select:text;-ms-user-select:text;user-select:text;cursor:text;width:100%;height:100%}input.svelte-10bf3cw:where(:not(.header), [data-editable="true"]){width:calc(100% - var(--size-10))}span.expanded.svelte-10bf3cw{height:auto;min-height:100%;white-space:pre-wrap;word-break:break-word;white-space:normal}.multiline.svelte-10bf3cw{white-space:pre-line}.header.svelte-10bf3cw{transform:translateX(0);font-weight:var(--weight-bold);white-space:normal;word-break:break-word}.edit.svelte-10bf3cw{opacity:0;pointer-events:none}',
  map: '{"version":3,"file":"EditableCell.svelte","sources":["EditableCell.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { createEventDispatcher } from \\"svelte\\";\\nimport { MarkdownCode } from \\"@gradio/markdown-code\\";\\nexport let edit;\\nexport let value = \\"\\";\\nexport let display_value = null;\\nexport let styling = \\"\\";\\nexport let header = false;\\nexport let datatype = \\"str\\";\\nexport let latex_delimiters;\\nexport let clear_on_focus = false;\\nexport let line_breaks = true;\\nexport let editable = true;\\nexport let root;\\nexport let max_chars = null;\\nconst dispatch = createEventDispatcher();\\nlet is_expanded = false;\\nexport let el;\\n$: _value = value;\\nfunction truncate_text(text, max_length = null) {\\n    const str = String(text);\\n    if (!max_length || str.length <= max_length)\\n        return str;\\n    return str.slice(0, max_length) + \\"...\\";\\n}\\n$: display_text = is_expanded ? value : truncate_text(display_value || value, max_chars);\\nfunction use_focus(node) {\\n    if (clear_on_focus) {\\n        _value = \\"\\";\\n    }\\n    requestAnimationFrame(() => {\\n        node.focus();\\n    });\\n    return {};\\n}\\nfunction handle_blur({ currentTarget }) {\\n    value = currentTarget.value;\\n    dispatch(\\"blur\\");\\n}\\nfunction handle_keydown(event) {\\n    if (event.key === \\"Enter\\") {\\n        if (edit) {\\n            value = _value;\\n            dispatch(\\"blur\\");\\n        }\\n        else if (!header) {\\n            is_expanded = !is_expanded;\\n        }\\n    }\\n    dispatch(\\"keydown\\", event);\\n}\\nfunction handle_click() {\\n    if (!edit && !header) {\\n        is_expanded = !is_expanded;\\n    }\\n}\\n<\/script>\\n\\n{#if edit}\\n\\t<input\\n\\t\\trole=\\"textbox\\"\\n\\t\\tbind:this={el}\\n\\t\\tbind:value={_value}\\n\\t\\tclass:header\\n\\t\\ttabindex=\\"-1\\"\\n\\t\\ton:blur={handle_blur}\\n\\t\\ton:mousedown|stopPropagation\\n\\t\\ton:mouseup|stopPropagation\\n\\t\\ton:click|stopPropagation\\n\\t\\tuse:use_focus\\n\\t\\ton:keydown={handle_keydown}\\n\\t/>\\n{/if}\\n\\n<span\\n\\ton:click={handle_click}\\n\\ton:keydown={handle_keydown}\\n\\ttabindex=\\"0\\"\\n\\trole=\\"button\\"\\n\\tclass:edit\\n\\tclass:expanded={is_expanded}\\n\\tclass:multiline={header}\\n\\ton:focus|preventDefault\\n\\tstyle={styling}\\n\\tclass=\\"table-cell-text\\"\\n\\tdata-editable={editable}\\n\\tplaceholder=\\" \\"\\n>\\n\\t{#if datatype === \\"html\\"}\\n\\t\\t{@html display_text}\\n\\t{:else if datatype === \\"markdown\\"}\\n\\t\\t<MarkdownCode\\n\\t\\t\\tmessage={display_text.toLocaleString()}\\n\\t\\t\\t{latex_delimiters}\\n\\t\\t\\t{line_breaks}\\n\\t\\t\\tchatbot={false}\\n\\t\\t\\t{root}\\n\\t\\t/>\\n\\t{:else}\\n\\t\\t{editable ? display_text : display_value || display_text}\\n\\t{/if}\\n</span>\\n\\n<style>\\n\\tinput {\\n\\t\\tposition: absolute;\\n\\t\\ttop: var(--size-2);\\n\\t\\tright: var(--size-2);\\n\\t\\tbottom: var(--size-2);\\n\\t\\tleft: var(--size-2);\\n\\t\\tflex: 1 1 0%;\\n\\t\\ttransform: translateX(-0.1px);\\n\\t\\toutline: none;\\n\\t\\tborder: none;\\n\\t\\tbackground: transparent;\\n\\t\\tcursor: text;\\n\\t}\\n\\n\\tspan {\\n\\t\\tflex: 1 1 0%;\\n\\t\\tposition: relative;\\n\\t\\tdisplay: inline-block;\\n\\t\\toutline: none;\\n\\t\\tpadding: var(--size-2);\\n\\t\\t-webkit-user-select: text;\\n\\t\\t-moz-user-select: text;\\n\\t\\t-ms-user-select: text;\\n\\t\\tuser-select: text;\\n\\t\\tcursor: text;\\n\\t\\twidth: 100%;\\n\\t\\theight: 100%;\\n\\t}\\n\\n\\tinput:where(:not(.header), [data-editable=\\"true\\"]) {\\n\\t\\twidth: calc(100% - var(--size-10));\\n\\t}\\n\\n\\tspan.expanded {\\n\\t\\theight: auto;\\n\\t\\tmin-height: 100%;\\n\\t\\twhite-space: pre-wrap;\\n\\t\\tword-break: break-word;\\n\\t\\twhite-space: normal;\\n\\t}\\n\\n\\t.multiline {\\n\\t\\twhite-space: pre-line;\\n\\t}\\n\\n\\t.header {\\n\\t\\ttransform: translateX(0);\\n\\t\\tfont-weight: var(--weight-bold);\\n\\t\\twhite-space: normal;\\n\\t\\tword-break: break-word;\\n\\t}\\n\\n\\t.edit {\\n\\t\\topacity: 0;\\n\\t\\tpointer-events: none;\\n\\t}</style>\\n"],"names":[],"mappings":"AAuGC,oBAAM,CACL,QAAQ,CAAE,QAAQ,CAClB,GAAG,CAAE,IAAI,QAAQ,CAAC,CAClB,KAAK,CAAE,IAAI,QAAQ,CAAC,CACpB,MAAM,CAAE,IAAI,QAAQ,CAAC,CACrB,IAAI,CAAE,IAAI,QAAQ,CAAC,CACnB,IAAI,CAAE,CAAC,CAAC,CAAC,CAAC,EAAE,CACZ,SAAS,CAAE,WAAW,MAAM,CAAC,CAC7B,OAAO,CAAE,IAAI,CACb,MAAM,CAAE,IAAI,CACZ,UAAU,CAAE,WAAW,CACvB,MAAM,CAAE,IACT,CAEA,mBAAK,CACJ,IAAI,CAAE,CAAC,CAAC,CAAC,CAAC,EAAE,CACZ,QAAQ,CAAE,QAAQ,CAClB,OAAO,CAAE,YAAY,CACrB,OAAO,CAAE,IAAI,CACb,OAAO,CAAE,IAAI,QAAQ,CAAC,CACtB,mBAAmB,CAAE,IAAI,CACzB,gBAAgB,CAAE,IAAI,CACtB,eAAe,CAAE,IAAI,CACrB,WAAW,CAAE,IAAI,CACjB,MAAM,CAAE,IAAI,CACZ,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IACT,CAEA,oBAAK,OAAO,KAAK,OAAO,CAAC,EAAE,CAAC,aAAa,CAAC,MAAM,CAAC,CAAE,CAClD,KAAK,CAAE,KAAK,IAAI,CAAC,CAAC,CAAC,IAAI,SAAS,CAAC,CAClC,CAEA,IAAI,wBAAU,CACb,MAAM,CAAE,IAAI,CACZ,UAAU,CAAE,IAAI,CAChB,WAAW,CAAE,QAAQ,CACrB,UAAU,CAAE,UAAU,CACtB,WAAW,CAAE,MACd,CAEA,yBAAW,CACV,WAAW,CAAE,QACd,CAEA,sBAAQ,CACP,SAAS,CAAE,WAAW,CAAC,CAAC,CACxB,WAAW,CAAE,IAAI,aAAa,CAAC,CAC/B,WAAW,CAAE,MAAM,CACnB,UAAU,CAAE,UACb,CAEA,oBAAM,CACL,OAAO,CAAE,CAAC,CACV,cAAc,CAAE,IACjB"}'
};
function truncate_text(text, max_length = null) {
  const str = String(text);
  if (!max_length || str.length <= max_length)
    return str;
  return str.slice(0, max_length) + "...";
}
const EditableCell = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let _value;
  let display_text;
  let { edit } = $$props;
  let { value = "" } = $$props;
  let { display_value = null } = $$props;
  let { styling = "" } = $$props;
  let { header = false } = $$props;
  let { datatype = "str" } = $$props;
  let { latex_delimiters } = $$props;
  let { clear_on_focus = false } = $$props;
  let { line_breaks = true } = $$props;
  let { editable = true } = $$props;
  let { root } = $$props;
  let { max_chars = null } = $$props;
  createEventDispatcher();
  let { el } = $$props;
  if ($$props.edit === void 0 && $$bindings.edit && edit !== void 0)
    $$bindings.edit(edit);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.display_value === void 0 && $$bindings.display_value && display_value !== void 0)
    $$bindings.display_value(display_value);
  if ($$props.styling === void 0 && $$bindings.styling && styling !== void 0)
    $$bindings.styling(styling);
  if ($$props.header === void 0 && $$bindings.header && header !== void 0)
    $$bindings.header(header);
  if ($$props.datatype === void 0 && $$bindings.datatype && datatype !== void 0)
    $$bindings.datatype(datatype);
  if ($$props.latex_delimiters === void 0 && $$bindings.latex_delimiters && latex_delimiters !== void 0)
    $$bindings.latex_delimiters(latex_delimiters);
  if ($$props.clear_on_focus === void 0 && $$bindings.clear_on_focus && clear_on_focus !== void 0)
    $$bindings.clear_on_focus(clear_on_focus);
  if ($$props.line_breaks === void 0 && $$bindings.line_breaks && line_breaks !== void 0)
    $$bindings.line_breaks(line_breaks);
  if ($$props.editable === void 0 && $$bindings.editable && editable !== void 0)
    $$bindings.editable(editable);
  if ($$props.root === void 0 && $$bindings.root && root !== void 0)
    $$bindings.root(root);
  if ($$props.max_chars === void 0 && $$bindings.max_chars && max_chars !== void 0)
    $$bindings.max_chars(max_chars);
  if ($$props.el === void 0 && $$bindings.el && el !== void 0)
    $$bindings.el(el);
  $$result.css.add(css$4);
  _value = value;
  display_text = truncate_text(display_value || value, max_chars);
  return `${edit ? `<input role="textbox" tabindex="-1" class="${["svelte-10bf3cw", header ? "header" : ""].join(" ").trim()}"${add_attribute("this", el, 0)}${add_attribute("value", _value, 0)}>` : ``} <span tabindex="0" role="button"${add_attribute("style", styling, 0)} class="${[
    "table-cell-text svelte-10bf3cw",
    (edit ? "edit" : "") + "  " + (header ? "multiline" : "")
  ].join(" ").trim()}"${add_attribute("data-editable", editable, 0)} placeholder=" ">${datatype === "html" ? `<!-- HTML_TAG_START -->${display_text}<!-- HTML_TAG_END -->` : `${datatype === "markdown" ? `${validate_component(MarkdownCode, "MarkdownCode").$$render(
    $$result,
    {
      message: display_text.toLocaleString(),
      latex_delimiters,
      line_breaks,
      chatbot: false,
      root
    },
    {},
    {}
  )}` : `${escape(editable ? display_text : display_value || display_text)}`}`} </span>`;
});
const css$3 = {
  code: "table.svelte-1xyl3gk.svelte-1xyl3gk{position:relative;overflow-y:scroll;overflow-x:scroll;-webkit-overflow-scrolling:touch;max-height:100vh;box-sizing:border-box;display:block;padding:0;margin:0;color:var(--body-text-color);font-size:var(--input-text-size);line-height:var(--line-md);font-family:var(--font-mono);border-spacing:0;width:100%;scroll-snap-type:x proximity;border-collapse:separate}table.svelte-1xyl3gk .svelte-1xyl3gk:is(thead, tfoot, tbody){display:table;table-layout:fixed;width:100%;box-sizing:border-box}tbody.svelte-1xyl3gk.svelte-1xyl3gk{overflow-x:scroll;overflow-y:hidden}table.svelte-1xyl3gk tbody.svelte-1xyl3gk{padding-top:var(--bw-svt-p-top);padding-bottom:var(--bw-svt-p-bottom)}tbody.svelte-1xyl3gk.svelte-1xyl3gk{position:relative;box-sizing:border-box;border:0px solid currentColor}tbody.svelte-1xyl3gk>tr:last-child{border:none}table.svelte-1xyl3gk td{scroll-snap-align:start}tbody.svelte-1xyl3gk>tr:nth-child(even){background:var(--table-even-background-fill)}thead.svelte-1xyl3gk.svelte-1xyl3gk{position:sticky;top:0;left:0;z-index:var(--layer-1);overflow:hidden}",
  map: '{"version":3,"file":"VirtualTable.svelte","sources":["VirtualTable.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { onMount, tick } from \\"svelte\\";\\nimport { _ } from \\"svelte-i18n\\";\\nexport let items = [];\\nexport let max_height;\\nexport let actual_height;\\nexport let table_scrollbar_width;\\nexport let start = 0;\\nexport let end = 20;\\nexport let selected;\\nlet height = \\"100%\\";\\nlet average_height = 30;\\nlet bottom = 0;\\nlet contents;\\nlet head_height = 0;\\nlet foot_height = 0;\\nlet height_map = [];\\nlet mounted;\\nlet rows;\\nlet top = 0;\\nlet viewport;\\nlet viewport_height = 200;\\nlet visible = [];\\nlet viewport_box;\\n$: viewport_height = viewport_box?.height || 200;\\nconst is_browser = typeof window !== \\"undefined\\";\\nconst raf = is_browser ? window.requestAnimationFrame : (cb) => cb();\\n$: mounted && raf(() => refresh_height_map(sortedItems));\\nlet content_height = 0;\\nasync function refresh_height_map(_items) {\\n    if (viewport_height === 0) {\\n        return;\\n    }\\n    const { scrollTop } = viewport;\\n    table_scrollbar_width = viewport.offsetWidth - viewport.clientWidth;\\n    content_height = top - (scrollTop - head_height);\\n    let i = start;\\n    while (content_height < max_height && i < _items.length) {\\n        let row = rows[i - start];\\n        if (!row) {\\n            end = i + 1;\\n            await tick();\\n            row = rows[i - start];\\n        }\\n        let _h = row?.getBoundingClientRect().height;\\n        if (!_h) {\\n            _h = average_height;\\n        }\\n        const row_height = height_map[i] = _h;\\n        content_height += row_height;\\n        i += 1;\\n    }\\n    end = i;\\n    const remaining = _items.length - end;\\n    const scrollbar_height = viewport.offsetHeight - viewport.clientHeight;\\n    if (scrollbar_height > 0) {\\n        content_height += scrollbar_height;\\n    }\\n    let filtered_height_map = height_map.filter((v) => typeof v === \\"number\\");\\n    average_height = filtered_height_map.reduce((a, b) => a + b, 0) / filtered_height_map.length;\\n    bottom = remaining * average_height;\\n    height_map.length = _items.length;\\n    await tick();\\n    if (!max_height) {\\n        actual_height = content_height + 1;\\n    }\\n    else if (content_height < max_height) {\\n        actual_height = content_height + 2;\\n    }\\n    else {\\n        actual_height = max_height;\\n    }\\n    await tick();\\n}\\n$: scroll_and_render(selected);\\nasync function scroll_and_render(n) {\\n    raf(async () => {\\n        if (typeof n !== \\"number\\")\\n            return;\\n        const direction = typeof n !== \\"number\\" ? false : is_in_view(n);\\n        if (direction === true) {\\n            return;\\n        }\\n        if (direction === \\"back\\") {\\n            await scroll_to_index(n, { behavior: \\"instant\\" });\\n        }\\n        if (direction === \\"forwards\\") {\\n            await scroll_to_index(n, { behavior: \\"instant\\" }, true);\\n        }\\n    });\\n}\\nfunction is_in_view(n) {\\n    const current = rows && rows[n - start];\\n    if (!current && n < start) {\\n        return \\"back\\";\\n    }\\n    if (!current && n >= end - 1) {\\n        return \\"forwards\\";\\n    }\\n    const { top: viewport_top } = viewport.getBoundingClientRect();\\n    const { top: top2, bottom: bottom2 } = current.getBoundingClientRect();\\n    if (top2 - viewport_top < 37) {\\n        return \\"back\\";\\n    }\\n    if (bottom2 - viewport_top > viewport_height) {\\n        return \\"forwards\\";\\n    }\\n    return true;\\n}\\nfunction get_computed_px_amount(elem, property) {\\n    if (!elem) {\\n        return 0;\\n    }\\n    const compStyle = getComputedStyle(elem);\\n    let x = parseInt(compStyle.getPropertyValue(property));\\n    return x;\\n}\\nasync function handle_scroll(e) {\\n    const scroll_top = viewport.scrollTop;\\n    rows = contents.children;\\n    const is_start_overflow = sortedItems.length < start;\\n    const row_top_border = get_computed_px_amount(rows[1], \\"border-top-width\\");\\n    const actual_border_collapsed_width = 0;\\n    if (is_start_overflow) {\\n        await scroll_to_index(sortedItems.length - 1, { behavior: \\"auto\\" });\\n    }\\n    let new_start = 0;\\n    for (let v = 0; v < rows.length; v += 1) {\\n        height_map[start + v] = rows[v].getBoundingClientRect().height;\\n    }\\n    let i = 0;\\n    let y = head_height + row_top_border / 2;\\n    let row_heights = [];\\n    while (i < sortedItems.length) {\\n        const row_height = height_map[i] || average_height;\\n        row_heights[i] = row_height;\\n        if (y + row_height + actual_border_collapsed_width > scroll_top) {\\n            new_start = i;\\n            top = y - (head_height + row_top_border / 2);\\n            break;\\n        }\\n        y += row_height;\\n        i += 1;\\n    }\\n    new_start = Math.max(0, new_start);\\n    while (i < sortedItems.length) {\\n        const row_height = height_map[i] || average_height;\\n        y += row_height;\\n        i += 1;\\n        if (y > scroll_top + viewport_height) {\\n            break;\\n        }\\n    }\\n    start = new_start;\\n    end = i;\\n    const remaining = sortedItems.length - end;\\n    if (end === 0) {\\n        end = 10;\\n    }\\n    average_height = (y - head_height) / end;\\n    let remaining_height = remaining * average_height;\\n    while (i < sortedItems.length) {\\n        i += 1;\\n        height_map[i] = average_height;\\n    }\\n    bottom = remaining_height;\\n    if (!isFinite(bottom)) {\\n        bottom = 2e5;\\n    }\\n}\\nexport async function scroll_to_index(index, opts, align_end = false) {\\n    await tick();\\n    const _itemHeight = average_height;\\n    let distance = index * _itemHeight;\\n    if (align_end) {\\n        distance = distance - viewport_height + _itemHeight + head_height;\\n    }\\n    const scrollbar_height = viewport.offsetHeight - viewport.clientHeight;\\n    if (scrollbar_height > 0) {\\n        distance += scrollbar_height;\\n    }\\n    const _opts = {\\n        top: distance,\\n        behavior: \\"smooth\\",\\n        ...opts\\n    };\\n    viewport.scrollTo(_opts);\\n}\\n$: sortedItems = items;\\n$: visible = is_browser ? sortedItems.slice(start, end).map((data, i) => {\\n    return { index: i + start, data };\\n}) : sortedItems.slice(0, max_height / sortedItems.length * average_height + 1).map((data, i) => {\\n    return { index: i + start, data };\\n});\\nonMount(() => {\\n    rows = contents.children;\\n    mounted = true;\\n    refresh_height_map(items);\\n});\\n<\/script>\\n\\n<svelte-virtual-table-viewport>\\n\\t<table\\n\\t\\tclass=\\"table\\"\\n\\t\\tbind:this={viewport}\\n\\t\\tbind:contentRect={viewport_box}\\n\\t\\ton:scroll={handle_scroll}\\n\\t\\tstyle=\\"height: {height}; --bw-svt-p-top: {top}px; --bw-svt-p-bottom: {bottom}px; --bw-svt-head-height: {head_height}px; --bw-svt-foot-height: {foot_height}px; --bw-svt-avg-row-height: {average_height}px\\"\\n\\t>\\n\\t\\t<thead class=\\"thead\\" bind:offsetHeight={head_height}>\\n\\t\\t\\t<slot name=\\"thead\\" />\\n\\t\\t</thead>\\n\\t\\t<tbody bind:this={contents} class=\\"tbody\\">\\n\\t\\t\\t{#if visible.length && visible[0].data.length}\\n\\t\\t\\t\\t{#each visible as item (item.data[0].id)}\\n\\t\\t\\t\\t\\t<slot name=\\"tbody\\" item={item.data} index={item.index}>\\n\\t\\t\\t\\t\\t\\tMissing Table Row\\n\\t\\t\\t\\t\\t</slot>\\n\\t\\t\\t\\t{/each}\\n\\t\\t\\t{/if}\\n\\t\\t</tbody>\\n\\t\\t<tfoot class=\\"tfoot\\" bind:offsetHeight={foot_height}>\\n\\t\\t\\t<slot name=\\"tfoot\\" />\\n\\t\\t</tfoot>\\n\\t</table>\\n</svelte-virtual-table-viewport>\\n\\n<style type=\\"text/css\\">\\n\\ttable {\\n\\t\\tposition: relative;\\n\\t\\toverflow-y: scroll;\\n\\t\\toverflow-x: scroll;\\n\\t\\t-webkit-overflow-scrolling: touch;\\n\\t\\tmax-height: 100vh;\\n\\t\\tbox-sizing: border-box;\\n\\t\\tdisplay: block;\\n\\t\\tpadding: 0;\\n\\t\\tmargin: 0;\\n\\t\\tcolor: var(--body-text-color);\\n\\t\\tfont-size: var(--input-text-size);\\n\\t\\tline-height: var(--line-md);\\n\\t\\tfont-family: var(--font-mono);\\n\\t\\tborder-spacing: 0;\\n\\t\\twidth: 100%;\\n\\t\\tscroll-snap-type: x proximity;\\n\\t\\tborder-collapse: separate;\\n\\t}\\n\\ttable :is(thead, tfoot, tbody) {\\n\\t\\tdisplay: table;\\n\\t\\ttable-layout: fixed;\\n\\t\\twidth: 100%;\\n\\t\\tbox-sizing: border-box;\\n\\t}\\n\\n\\ttbody {\\n\\t\\toverflow-x: scroll;\\n\\t\\toverflow-y: hidden;\\n\\t}\\n\\n\\ttable tbody {\\n\\t\\tpadding-top: var(--bw-svt-p-top);\\n\\t\\tpadding-bottom: var(--bw-svt-p-bottom);\\n\\t}\\n\\ttbody {\\n\\t\\tposition: relative;\\n\\t\\tbox-sizing: border-box;\\n\\t\\tborder: 0px solid currentColor;\\n\\t}\\n\\n\\ttbody > :global(tr:last-child) {\\n\\t\\tborder: none;\\n\\t}\\n\\n\\ttable :global(td) {\\n\\t\\tscroll-snap-align: start;\\n\\t}\\n\\n\\ttbody > :global(tr:nth-child(even)) {\\n\\t\\tbackground: var(--table-even-background-fill);\\n\\t}\\n\\n\\tthead {\\n\\t\\tposition: sticky;\\n\\t\\ttop: 0;\\n\\t\\tleft: 0;\\n\\t\\tz-index: var(--layer-1);\\n\\t\\toverflow: hidden;\\n\\t}</style>\\n"],"names":[],"mappings":"AAmOC,mCAAM,CACL,QAAQ,CAAE,QAAQ,CAClB,UAAU,CAAE,MAAM,CAClB,UAAU,CAAE,MAAM,CAClB,0BAA0B,CAAE,KAAK,CACjC,UAAU,CAAE,KAAK,CACjB,UAAU,CAAE,UAAU,CACtB,OAAO,CAAE,KAAK,CACd,OAAO,CAAE,CAAC,CACV,MAAM,CAAE,CAAC,CACT,KAAK,CAAE,IAAI,iBAAiB,CAAC,CAC7B,SAAS,CAAE,IAAI,iBAAiB,CAAC,CACjC,WAAW,CAAE,IAAI,SAAS,CAAC,CAC3B,WAAW,CAAE,IAAI,WAAW,CAAC,CAC7B,cAAc,CAAE,CAAC,CACjB,KAAK,CAAE,IAAI,CACX,gBAAgB,CAAE,CAAC,CAAC,SAAS,CAC7B,eAAe,CAAE,QAClB,CACA,oBAAK,gBAAC,IAAI,KAAK,EAAE,KAAK,EAAE,KAAK,CAAE,CAC9B,OAAO,CAAE,KAAK,CACd,YAAY,CAAE,KAAK,CACnB,KAAK,CAAE,IAAI,CACX,UAAU,CAAE,UACb,CAEA,mCAAM,CACL,UAAU,CAAE,MAAM,CAClB,UAAU,CAAE,MACb,CAEA,oBAAK,CAAC,oBAAM,CACX,WAAW,CAAE,IAAI,cAAc,CAAC,CAChC,cAAc,CAAE,IAAI,iBAAiB,CACtC,CACA,mCAAM,CACL,QAAQ,CAAE,QAAQ,CAClB,UAAU,CAAE,UAAU,CACtB,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,YACnB,CAEA,oBAAK,CAAW,aAAe,CAC9B,MAAM,CAAE,IACT,CAEA,oBAAK,CAAS,EAAI,CACjB,iBAAiB,CAAE,KACpB,CAEA,oBAAK,CAAW,kBAAoB,CACnC,UAAU,CAAE,IAAI,4BAA4B,CAC7C,CAEA,mCAAM,CACL,QAAQ,CAAE,MAAM,CAChB,GAAG,CAAE,CAAC,CACN,IAAI,CAAE,CAAC,CACP,OAAO,CAAE,IAAI,SAAS,CAAC,CACvB,QAAQ,CAAE,MACX"}'
};
let height = "100%";
const VirtualTable = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let sortedItems;
  let { items = [] } = $$props;
  let { max_height } = $$props;
  let { actual_height } = $$props;
  let { table_scrollbar_width } = $$props;
  let { start = 0 } = $$props;
  let { end = 20 } = $$props;
  let { selected } = $$props;
  let average_height = 30;
  let bottom = 0;
  let contents;
  let head_height = 0;
  let foot_height = 0;
  let rows;
  let top = 0;
  let viewport;
  let viewport_height = 200;
  let visible = [];
  const is_browser = typeof window !== "undefined";
  const raf = is_browser ? window.requestAnimationFrame : (cb) => cb();
  async function scroll_and_render(n) {
    raf(async () => {
      if (typeof n !== "number")
        return;
      const direction = typeof n !== "number" ? false : is_in_view(n);
      if (direction === true) {
        return;
      }
      if (direction === "back") {
        await scroll_to_index(n, { behavior: "instant" });
      }
      if (direction === "forwards") {
        await scroll_to_index(n, { behavior: "instant" }, true);
      }
    });
  }
  function is_in_view(n) {
    const current = rows ;
    if (n < start) {
      return "back";
    }
    if (n >= end - 1) {
      return "forwards";
    }
    const { top: viewport_top } = viewport.getBoundingClientRect();
    const { top: top2, bottom: bottom2 } = current.getBoundingClientRect();
    if (top2 - viewport_top < 37) {
      return "back";
    }
    if (bottom2 - viewport_top > viewport_height) {
      return "forwards";
    }
    return true;
  }
  async function scroll_to_index(index, opts, align_end = false) {
    await tick();
    const _itemHeight = average_height;
    let distance = index * _itemHeight;
    if (align_end) {
      distance = distance - viewport_height + _itemHeight + head_height;
    }
    viewport.offsetHeight - viewport.clientHeight;
    const _opts = {
      top: distance,
      behavior: "smooth",
      ...opts
    };
    viewport.scrollTo(_opts);
  }
  if ($$props.items === void 0 && $$bindings.items && items !== void 0)
    $$bindings.items(items);
  if ($$props.max_height === void 0 && $$bindings.max_height && max_height !== void 0)
    $$bindings.max_height(max_height);
  if ($$props.actual_height === void 0 && $$bindings.actual_height && actual_height !== void 0)
    $$bindings.actual_height(actual_height);
  if ($$props.table_scrollbar_width === void 0 && $$bindings.table_scrollbar_width && table_scrollbar_width !== void 0)
    $$bindings.table_scrollbar_width(table_scrollbar_width);
  if ($$props.start === void 0 && $$bindings.start && start !== void 0)
    $$bindings.start(start);
  if ($$props.end === void 0 && $$bindings.end && end !== void 0)
    $$bindings.end(end);
  if ($$props.selected === void 0 && $$bindings.selected && selected !== void 0)
    $$bindings.selected(selected);
  if ($$props.scroll_to_index === void 0 && $$bindings.scroll_to_index && scroll_to_index !== void 0)
    $$bindings.scroll_to_index(scroll_to_index);
  $$result.css.add(css$3);
  viewport_height = 200;
  sortedItems = items;
  {
    scroll_and_render(selected);
  }
  visible = is_browser ? sortedItems.slice(start, end).map((data, i) => {
    return { index: i + start, data };
  }) : sortedItems.slice(0, max_height / sortedItems.length * average_height + 1).map((data, i) => {
    return { index: i + start, data };
  });
  return `<svelte-virtual-table-viewport><table class="table svelte-1xyl3gk" style="${"height: " + escape(height, true) + "; --bw-svt-p-top: " + escape(top, true) + "px; --bw-svt-p-bottom: " + escape(bottom, true) + "px; --bw-svt-head-height: " + escape(head_height, true) + "px; --bw-svt-foot-height: " + escape(foot_height, true) + "px; --bw-svt-avg-row-height: " + escape(average_height, true) + "px"}"${add_attribute("this", viewport, 0)}><thead class="thead svelte-1xyl3gk">${slots.thead ? slots.thead({}) : ``}</thead> <tbody class="tbody svelte-1xyl3gk"${add_attribute("this", contents, 0)}>${visible.length && visible[0].data.length ? `${each(visible, (item) => {
    return `${slots.tbody ? slots.tbody({ item: item.data, index: item.index }) : `
						Missing Table Row
					`}`;
  })}` : ``}</tbody> <tfoot class="tfoot svelte-1xyl3gk">${slots.tfoot ? slots.tfoot({}) : ``}</tfoot></table> </svelte-virtual-table-viewport>`;
});
const css$1 = {
  code: ".toolbar.svelte-1v8q0in{display:flex;justify-content:flex-end;gap:var(--size-1)}.toolbar-button.svelte-1v8q0in{display:flex;align-items:center;justify-content:center;width:var(--size-6);height:var(--size-6);padding:var(--size-1);border:none;border-radius:var(--radius-sm);background:transparent;color:var(--body-text-color-subdued);cursor:pointer;transition:all 0.2s}.toolbar-button.svelte-1v8q0in:hover{background:var(--background-fill-secondary);color:var(--body-text-color)}.toolbar-button.svelte-1v8q0in svg{width:var(--size-4);height:var(--size-4)}",
  map: '{"version":3,"file":"Toolbar.svelte","sources":["Toolbar.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { Maximize, Minimize, Copy, Check } from \\"@gradio/icons\\";\\nimport { onDestroy } from \\"svelte\\";\\nexport let show_fullscreen_button = false;\\nexport let show_copy_button = false;\\nexport let is_fullscreen = false;\\nexport let on_copy;\\nlet copied = false;\\nlet timer;\\nfunction copy_feedback() {\\n    copied = true;\\n    if (timer)\\n        clearTimeout(timer);\\n    timer = setTimeout(() => {\\n        copied = false;\\n    }, 2e3);\\n}\\nasync function handle_copy() {\\n    await on_copy();\\n    copy_feedback();\\n}\\nonDestroy(() => {\\n    if (timer)\\n        clearTimeout(timer);\\n});\\n<\/script>\\n\\n<div class=\\"toolbar\\" role=\\"toolbar\\" aria-label=\\"Table actions\\">\\n\\t{#if show_copy_button}\\n\\t\\t<button\\n\\t\\t\\tclass=\\"toolbar-button\\"\\n\\t\\t\\ton:click={handle_copy}\\n\\t\\t\\taria-label={copied ? \\"Copied to clipboard\\" : \\"Copy table data\\"}\\n\\t\\t\\ttitle={copied ? \\"Copied to clipboard\\" : \\"Copy table data\\"}\\n\\t\\t>\\n\\t\\t\\t{#if copied}\\n\\t\\t\\t\\t<Check />\\n\\t\\t\\t{:else}\\n\\t\\t\\t\\t<Copy />\\n\\t\\t\\t{/if}\\n\\t\\t</button>\\n\\t{/if}\\n\\t{#if show_fullscreen_button}\\n\\t\\t<button\\n\\t\\t\\tclass=\\"toolbar-button\\"\\n\\t\\t\\ton:click\\n\\t\\t\\taria-label={is_fullscreen ? \\"Exit fullscreen\\" : \\"Enter fullscreen\\"}\\n\\t\\t\\ttitle={is_fullscreen ? \\"Exit fullscreen\\" : \\"Enter fullscreen\\"}\\n\\t\\t>\\n\\t\\t\\t{#if is_fullscreen}\\n\\t\\t\\t\\t<Minimize />\\n\\t\\t\\t{:else}\\n\\t\\t\\t\\t<Maximize />\\n\\t\\t\\t{/if}\\n\\t\\t</button>\\n\\t{/if}\\n</div>\\n\\n<style>\\n\\t.toolbar {\\n\\t\\tdisplay: flex;\\n\\t\\tjustify-content: flex-end;\\n\\t\\tgap: var(--size-1);\\n\\t}\\n\\n\\t.toolbar-button {\\n\\t\\tdisplay: flex;\\n\\t\\talign-items: center;\\n\\t\\tjustify-content: center;\\n\\t\\twidth: var(--size-6);\\n\\t\\theight: var(--size-6);\\n\\t\\tpadding: var(--size-1);\\n\\t\\tborder: none;\\n\\t\\tborder-radius: var(--radius-sm);\\n\\t\\tbackground: transparent;\\n\\t\\tcolor: var(--body-text-color-subdued);\\n\\t\\tcursor: pointer;\\n\\t\\ttransition: all 0.2s;\\n\\t}\\n\\n\\t.toolbar-button:hover {\\n\\t\\tbackground: var(--background-fill-secondary);\\n\\t\\tcolor: var(--body-text-color);\\n\\t}\\n\\n\\t.toolbar-button :global(svg) {\\n\\t\\twidth: var(--size-4);\\n\\t\\theight: var(--size-4);\\n\\t}</style>\\n"],"names":[],"mappings":"AA0DC,uBAAS,CACR,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,QAAQ,CACzB,GAAG,CAAE,IAAI,QAAQ,CAClB,CAEA,8BAAgB,CACf,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MAAM,CACnB,eAAe,CAAE,MAAM,CACvB,KAAK,CAAE,IAAI,QAAQ,CAAC,CACpB,MAAM,CAAE,IAAI,QAAQ,CAAC,CACrB,OAAO,CAAE,IAAI,QAAQ,CAAC,CACtB,MAAM,CAAE,IAAI,CACZ,aAAa,CAAE,IAAI,WAAW,CAAC,CAC/B,UAAU,CAAE,WAAW,CACvB,KAAK,CAAE,IAAI,yBAAyB,CAAC,CACrC,MAAM,CAAE,OAAO,CACf,UAAU,CAAE,GAAG,CAAC,IACjB,CAEA,8BAAe,MAAO,CACrB,UAAU,CAAE,IAAI,2BAA2B,CAAC,CAC5C,KAAK,CAAE,IAAI,iBAAiB,CAC7B,CAEA,8BAAe,CAAS,GAAK,CAC5B,KAAK,CAAE,IAAI,QAAQ,CAAC,CACpB,MAAM,CAAE,IAAI,QAAQ,CACrB"}'
};
const Toolbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { show_fullscreen_button = false } = $$props;
  let { show_copy_button = false } = $$props;
  let { is_fullscreen = false } = $$props;
  let { on_copy } = $$props;
  onDestroy(() => {
  });
  if ($$props.show_fullscreen_button === void 0 && $$bindings.show_fullscreen_button && show_fullscreen_button !== void 0)
    $$bindings.show_fullscreen_button(show_fullscreen_button);
  if ($$props.show_copy_button === void 0 && $$bindings.show_copy_button && show_copy_button !== void 0)
    $$bindings.show_copy_button(show_copy_button);
  if ($$props.is_fullscreen === void 0 && $$bindings.is_fullscreen && is_fullscreen !== void 0)
    $$bindings.is_fullscreen(is_fullscreen);
  if ($$props.on_copy === void 0 && $$bindings.on_copy && on_copy !== void 0)
    $$bindings.on_copy(on_copy);
  $$result.css.add(css$1);
  return `<div class="toolbar svelte-1v8q0in" role="toolbar" aria-label="Table actions">${show_copy_button ? `<button class="toolbar-button svelte-1v8q0in"${add_attribute("aria-label", "Copy table data", 0)}${add_attribute("title", "Copy table data", 0)}>${`${validate_component(Copy, "Copy").$$render($$result, {}, {}, {})}`}</button>` : ``} ${show_fullscreen_button ? `<button class="toolbar-button svelte-1v8q0in"${add_attribute("aria-label", is_fullscreen ? "Exit fullscreen" : "Enter fullscreen", 0)}${add_attribute("title", is_fullscreen ? "Exit fullscreen" : "Enter fullscreen", 0)}>${is_fullscreen ? `${validate_component(Minimize, "Minimize").$$render($$result, {}, {}, {})}` : `${validate_component(Maximize, "Maximize").$$render($$result, {}, {}, {})}`}</button>` : ``} </div>`;
});
function is_cell_selected(cell, selected_cells) {
  const [row, col] = cell;
  if (!selected_cells.some(([r, c]) => r === row && c === col))
    return "";
  const up = selected_cells.some(([r, c]) => r === row - 1 && c === col);
  const down = selected_cells.some(([r, c]) => r === row + 1 && c === col);
  const left = selected_cells.some(([r, c]) => r === row && c === col - 1);
  const right = selected_cells.some(([r, c]) => r === row && c === col + 1);
  return `cell-selected${up ? " no-top" : ""}${down ? " no-bottom" : ""}${left ? " no-left" : ""}${right ? " no-right" : ""}`;
}
function should_show_cell_menu(cell, selected_cells, editable) {
  const [row, col] = cell;
  return editable && selected_cells.length === 1 && selected_cells[0][0] === row && selected_cells[0][1] === col;
}
function get_max(_d) {
  if (!_d || _d.length === 0 || !_d[0])
    return [];
  let max = _d[0].slice();
  for (let i = 0; i < _d.length; i++) {
    for (let j = 0; j < _d[i].length; j++) {
      if (`${max[j].value}`.length < `${_d[i][j].value}`.length) {
        max[j] = _d[i][j];
      }
    }
  }
  return max;
}
async function copy_table_data(data, headers, selected_cells) {
  if (!selected_cells || selected_cells.length === 0) {
    const header_row = headers ? headers.map((h) => String(h.value)).join(",") : "";
    const table_data = data.map((row) => row.map((cell) => String(cell.value)).join(",")).join("\n");
    const all_data = header_row ? `${header_row}
${table_data}` : table_data;
    await write_to_clipboard(all_data);
    return;
  }
  const min_row = Math.min(...selected_cells.map(([r]) => r));
  const max_row = Math.max(...selected_cells.map(([r]) => r));
  const min_col = Math.min(...selected_cells.map(([_, c]) => c));
  const max_col = Math.max(...selected_cells.map(([_, c]) => c));
  const selected_data = [];
  for (let i = min_row; i <= max_row; i++) {
    const row = [];
    for (let j = min_col; j <= max_col; j++) {
      const is_selected = selected_cells.some(([r, c]) => r === i && c === j);
      row.push(is_selected ? String(data[i][j].value) : "");
    }
    selected_data.push(row.join(","));
  }
  await write_to_clipboard(selected_data.join("\n"));
}
async function write_to_clipboard(csv_data) {
  try {
    if ("clipboard" in navigator) {
      await navigator.clipboard.writeText(csv_data);
    } else {
      const textArea = document.createElement("textarea");
      textArea.value = csv_data;
      textArea.style.position = "absolute";
      textArea.style.left = "-999999px";
      document.body.prepend(textArea);
      textArea.select();
      document.execCommand("copy");
      textArea.remove();
    }
  } catch (error) {
    console.error("Failed to copy table data:", error);
  }
}
const css = {
  code: ".table-container.svelte-ikzfwo.svelte-ikzfwo.svelte-ikzfwo{display:flex;flex-direction:column;gap:var(--size-2)}.table-wrap.svelte-ikzfwo.svelte-ikzfwo.svelte-ikzfwo{position:relative;transition:150ms;border:1px solid var(--border-color-primary);border-radius:var(--table-radius);overflow:hidden}.table-wrap.svelte-ikzfwo.svelte-ikzfwo.svelte-ikzfwo:focus-within{outline:none}.dragging.svelte-ikzfwo.svelte-ikzfwo.svelte-ikzfwo{border-color:var(--color-accent)}.no-wrap.svelte-ikzfwo.svelte-ikzfwo.svelte-ikzfwo{white-space:nowrap}table.svelte-ikzfwo.svelte-ikzfwo.svelte-ikzfwo{position:absolute;opacity:0;transition:150ms;width:var(--size-full);table-layout:auto;color:var(--body-text-color);font-size:var(--input-text-size);line-height:var(--line-md);font-family:var(--font-mono);border-spacing:0;border-collapse:separate}div.svelte-ikzfwo:not(.no-wrap) td.svelte-ikzfwo.svelte-ikzfwo{overflow-wrap:anywhere}div.no-wrap.svelte-ikzfwo td.svelte-ikzfwo.svelte-ikzfwo{overflow-x:hidden}table.fixed-layout.svelte-ikzfwo.svelte-ikzfwo.svelte-ikzfwo{table-layout:fixed}thead.svelte-ikzfwo.svelte-ikzfwo.svelte-ikzfwo{position:sticky;top:0;left:0;z-index:var(--layer-1);box-shadow:var(--shadow-drop)}tr.svelte-ikzfwo.svelte-ikzfwo.svelte-ikzfwo{border-bottom:1px solid var(--border-color-primary);text-align:left}tr.svelte-ikzfwo>.svelte-ikzfwo+.svelte-ikzfwo{border-right-width:0px;border-left-width:1px;border-style:solid;border-color:var(--border-color-primary)}th.svelte-ikzfwo.svelte-ikzfwo.svelte-ikzfwo,td.svelte-ikzfwo.svelte-ikzfwo.svelte-ikzfwo{--ring-color:transparent;position:relative;outline:none;box-shadow:inset 0 0 0 1px var(--ring-color);padding:0}th.svelte-ikzfwo.svelte-ikzfwo.svelte-ikzfwo:first-child{border-top-left-radius:var(--table-radius)}th.svelte-ikzfwo.svelte-ikzfwo.svelte-ikzfwo:last-child{border-top-right-radius:var(--table-radius)}th.focus.svelte-ikzfwo.svelte-ikzfwo.svelte-ikzfwo,td.focus.svelte-ikzfwo.svelte-ikzfwo.svelte-ikzfwo{--ring-color:var(--color-accent);box-shadow:inset 0 0 0 2px var(--ring-color);z-index:var(--layer-1)}th.focus.svelte-ikzfwo.svelte-ikzfwo.svelte-ikzfwo{z-index:var(--layer-2)}tr.svelte-ikzfwo:last-child td.svelte-ikzfwo.svelte-ikzfwo:first-child{border-bottom-left-radius:var(--table-radius)}tr.svelte-ikzfwo:last-child td.svelte-ikzfwo.svelte-ikzfwo:last-child{border-bottom-right-radius:var(--table-radius)}tr.svelte-ikzfwo th.svelte-ikzfwo.svelte-ikzfwo{background:var(--table-even-background-fill)}th.svelte-ikzfwo svg.svelte-ikzfwo.svelte-ikzfwo{fill:currentColor;font-size:10px}.sort-button.svelte-ikzfwo.svelte-ikzfwo.svelte-ikzfwo{display:flex;flex:none;justify-content:center;align-items:center;transition:150ms;cursor:pointer;padding:var(--size-2);color:var(--body-text-color-subdued)}.sort-button.svelte-ikzfwo.svelte-ikzfwo.svelte-ikzfwo:hover{color:var(--body-text-color)}.des.svelte-ikzfwo.svelte-ikzfwo.svelte-ikzfwo{transform:scaleY(-1)}.sort-button.sorted.svelte-ikzfwo.svelte-ikzfwo.svelte-ikzfwo{color:var(--color-accent)}.editing.svelte-ikzfwo.svelte-ikzfwo.svelte-ikzfwo{background:var(--table-editing)}.cell-wrap.svelte-ikzfwo.svelte-ikzfwo.svelte-ikzfwo{display:flex;align-items:flex-start;outline:none;min-height:var(--size-9);position:relative;height:auto}.header-content.svelte-ikzfwo.svelte-ikzfwo.svelte-ikzfwo{display:flex;align-items:center;overflow:hidden;flex-grow:1;min-width:0;white-space:normal;overflow-wrap:break-word;word-break:break-word}.row_odd.svelte-ikzfwo.svelte-ikzfwo.svelte-ikzfwo{background:var(--table-odd-background-fill)}.row_odd.focus.svelte-ikzfwo.svelte-ikzfwo.svelte-ikzfwo{background:var(--background-fill-primary)}.cell-menu-button.svelte-ikzfwo.svelte-ikzfwo.svelte-ikzfwo{flex-shrink:0;display:none;background-color:var(--block-background-fill);border:1px solid var(--border-color-primary);border-radius:var(--block-radius);width:var(--size-5);height:var(--size-5);min-width:var(--size-5);padding:0;margin-right:var(--spacing-sm);z-index:var(--layer-1);position:absolute;right:var(--size-1);top:50%;transform:translateY(-50%)}.cell-selected.svelte-ikzfwo .cell-menu-button.svelte-ikzfwo.svelte-ikzfwo{display:flex;align-items:center;justify-content:center}.header-row.svelte-ikzfwo.svelte-ikzfwo.svelte-ikzfwo{display:flex;justify-content:space-between;align-items:center;gap:var(--size-2);height:var(--size-6);min-height:var(--size-6)}.label.svelte-ikzfwo.svelte-ikzfwo.svelte-ikzfwo{flex:1}.label.svelte-ikzfwo p.svelte-ikzfwo.svelte-ikzfwo{margin:0;color:var(--block-label-text-color);font-size:var(--block-label-text-size)}.row-number.svelte-ikzfwo.svelte-ikzfwo.svelte-ikzfwo,.row-number-header.svelte-ikzfwo.svelte-ikzfwo.svelte-ikzfwo{width:var(--size-7);min-width:var(--size-7);text-align:center;background:var(--table-even-background-fill);position:sticky;left:0;font-size:var(--input-text-size);color:var(--body-text-color);padding:var(--size-1) var(--size-2);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-weight:var(--weight-semibold)}.row-number-header.svelte-ikzfwo.svelte-ikzfwo.svelte-ikzfwo{z-index:var(--layer-2)}.row-number.svelte-ikzfwo.svelte-ikzfwo.svelte-ikzfwo{z-index:var(--layer-1)}tbody > tr:nth-child(odd) .row-number.svelte-ikzfwo.svelte-ikzfwo.svelte-ikzfwo{background:var(--table-odd-background-fill)}.cell-selected.svelte-ikzfwo.svelte-ikzfwo.svelte-ikzfwo{--ring-color:var(--color-accent);box-shadow:inset 0 0 0 2px var(--ring-color);z-index:var(--layer-1);position:relative}.cell-selected.no-top.svelte-ikzfwo.svelte-ikzfwo.svelte-ikzfwo{box-shadow:inset 2px 0 0 var(--ring-color),\n			inset -2px 0 0 var(--ring-color),\n			inset 0 -2px 0 var(--ring-color)}.cell-selected.no-bottom.svelte-ikzfwo.svelte-ikzfwo.svelte-ikzfwo{box-shadow:inset 2px 0 0 var(--ring-color),\n			inset -2px 0 0 var(--ring-color),\n			inset 0 2px 0 var(--ring-color)}.cell-selected.no-left.svelte-ikzfwo.svelte-ikzfwo.svelte-ikzfwo{box-shadow:inset 0 2px 0 var(--ring-color),\n			inset -2px 0 0 var(--ring-color),\n			inset 0 -2px 0 var(--ring-color)}.cell-selected.no-right.svelte-ikzfwo.svelte-ikzfwo.svelte-ikzfwo{box-shadow:inset 0 2px 0 var(--ring-color),\n			inset 2px 0 0 var(--ring-color),\n			inset 0 -2px 0 var(--ring-color)}.cell-selected.no-top.no-left.svelte-ikzfwo.svelte-ikzfwo.svelte-ikzfwo{box-shadow:inset -2px 0 0 var(--ring-color),\n			inset 0 -2px 0 var(--ring-color)}.cell-selected.no-top.no-right.svelte-ikzfwo.svelte-ikzfwo.svelte-ikzfwo{box-shadow:inset 2px 0 0 var(--ring-color),\n			inset 0 -2px 0 var(--ring-color)}.cell-selected.no-bottom.no-left.svelte-ikzfwo.svelte-ikzfwo.svelte-ikzfwo{box-shadow:inset -2px 0 0 var(--ring-color),\n			inset 0 2px 0 var(--ring-color)}.cell-selected.no-bottom.no-right.svelte-ikzfwo.svelte-ikzfwo.svelte-ikzfwo{box-shadow:inset 2px 0 0 var(--ring-color),\n			inset 0 2px 0 var(--ring-color)}.cell-selected.no-top.no-bottom.svelte-ikzfwo.svelte-ikzfwo.svelte-ikzfwo{box-shadow:inset 2px 0 0 var(--ring-color),\n			inset -2px 0 0 var(--ring-color)}.cell-selected.no-left.no-right.svelte-ikzfwo.svelte-ikzfwo.svelte-ikzfwo{box-shadow:inset 0 2px 0 var(--ring-color),\n			inset 0 -2px 0 var(--ring-color)}.cell-selected.no-top.no-left.no-right.svelte-ikzfwo.svelte-ikzfwo.svelte-ikzfwo{box-shadow:inset 0 -2px 0 var(--ring-color)}.cell-selected.no-bottom.no-left.no-right.svelte-ikzfwo.svelte-ikzfwo.svelte-ikzfwo{box-shadow:inset 0 2px 0 var(--ring-color)}.cell-selected.no-left.no-top.no-bottom.svelte-ikzfwo.svelte-ikzfwo.svelte-ikzfwo{box-shadow:inset -2px 0 0 var(--ring-color)}.cell-selected.no-right.no-top.no-bottom.svelte-ikzfwo.svelte-ikzfwo.svelte-ikzfwo{box-shadow:inset 2px 0 0 var(--ring-color)}.cell-selected.no-top.no-bottom.no-left.no-right.svelte-ikzfwo.svelte-ikzfwo.svelte-ikzfwo{box-shadow:none}",
  map: '{"version":3,"file":"Table.svelte","sources":["Table.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { afterUpdate, createEventDispatcher, tick, onMount } from \\"svelte\\";\\nimport { dequal } from \\"dequal/lite\\";\\nimport { Upload } from \\"@gradio/upload\\";\\nimport EditableCell from \\"./EditableCell.svelte\\";\\nimport {} from \\"@gradio/client\\";\\nimport VirtualTable from \\"./VirtualTable.svelte\\";\\nimport CellMenu from \\"./CellMenu.svelte\\";\\nimport Toolbar from \\"./Toolbar.svelte\\";\\nimport { is_cell_selected, handle_selection, handle_delete_key, should_show_cell_menu, get_next_cell_coordinates, get_range_selection, move_cursor, get_current_indices, handle_click_outside as handle_click_outside_util } from \\"./selection_utils\\";\\nimport { copy_table_data, get_max, handle_file_upload } from \\"./table_utils\\";\\nexport let datatype;\\nexport let label = null;\\nexport let show_label = true;\\nexport let headers = [];\\nexport let values = [];\\nexport let col_count;\\nexport let row_count;\\nexport let latex_delimiters;\\nexport let editable = true;\\nexport let wrap = false;\\nexport let root;\\nexport let i18n;\\nexport let max_height = 500;\\nexport let line_breaks = true;\\nexport let column_widths = [];\\nexport let show_row_numbers = false;\\nexport let upload;\\nexport let stream_handler;\\nexport let show_fullscreen_button = false;\\nexport let show_copy_button = false;\\nexport let value_is_output = false;\\nexport let max_chars = void 0;\\nlet selected_cells = [];\\n$: selected_cells = [...selected_cells];\\nlet selected = false;\\n$: selected = selected_cells.length > 0 ? selected_cells[selected_cells.length - 1] : false;\\nexport let display_value = null;\\nexport let styling = null;\\nlet t_rect;\\nlet els = {};\\nlet data_binding = {};\\nconst dispatch = createEventDispatcher();\\nlet editing = false;\\nlet clear_on_focus = false;\\nlet header_edit = false;\\nlet selected_header = false;\\nlet active_cell_menu = null;\\nlet active_header_menu = null;\\nlet is_fullscreen = false;\\nlet dragging = false;\\nconst get_data_at = (row, col) => data?.[row]?.[col]?.value;\\nfunction make_id() {\\n    return Math.random().toString(36).substring(2, 15);\\n}\\nfunction make_headers(_head) {\\n    let _h = _head || [];\\n    if (col_count[1] === \\"fixed\\" && _h.length < col_count[0]) {\\n        const fill = Array(col_count[0] - _h.length).fill(\\"\\").map((_, i) => `${i + _h.length}`);\\n        _h = _h.concat(fill);\\n    }\\n    if (!_h || _h.length === 0) {\\n        return Array(col_count[0]).fill(0).map((_, i) => {\\n            const _id = make_id();\\n            els[_id] = { cell: null, input: null };\\n            return { id: _id, value: JSON.stringify(i + 1) };\\n        });\\n    }\\n    return _h.map((h, i) => {\\n        const _id = make_id();\\n        els[_id] = { cell: null, input: null };\\n        return { id: _id, value: h ?? \\"\\" };\\n    });\\n}\\nfunction process_data(_values) {\\n    const data_row_length = _values.length;\\n    return Array(row_count[1] === \\"fixed\\" ? row_count[0] : data_row_length).fill(0).map((_, i) => Array(col_count[1] === \\"fixed\\" ? col_count[0] : data_row_length > 0 ? _values[0].length : headers.length).fill(0).map((_2, j) => {\\n        const id = make_id();\\n        els[id] = els[id] || { input: null, cell: null };\\n        const obj = { value: _values?.[i]?.[j] ?? \\"\\", id };\\n        data_binding[id] = obj;\\n        return obj;\\n    }));\\n}\\nlet _headers = make_headers(headers);\\nlet old_headers = headers;\\n$: {\\n    if (!dequal(headers, old_headers)) {\\n        _headers = make_headers(headers);\\n        old_headers = JSON.parse(JSON.stringify(headers));\\n    }\\n}\\nlet data = [[]];\\nlet old_val = void 0;\\n$: if (!dequal(values, old_val)) {\\n    data = process_data(values);\\n    old_val = JSON.parse(JSON.stringify(values));\\n}\\nlet previous_headers = _headers.map((h) => h.value);\\nlet previous_data = data.map((row) => row.map((cell) => String(cell.value)));\\nasync function trigger_change() {\\n    const current_headers = _headers.map((h) => h.value);\\n    const current_data = data.map((row) => row.map((cell) => String(cell.value)));\\n    if (!dequal(current_data, previous_data) || !dequal(current_headers, previous_headers)) {\\n        dispatch(\\"change\\", {\\n            data: data.map((row) => row.map((cell) => cell.value)),\\n            headers: _headers.map((h) => h.value),\\n            metadata: null\\n        });\\n        if (!value_is_output) {\\n            dispatch(\\"input\\");\\n        }\\n        previous_data = current_data;\\n        previous_headers = current_headers;\\n    }\\n}\\nfunction get_sort_status(name, _sort, direction) {\\n    if (!_sort)\\n        return \\"none\\";\\n    if (headers[_sort] === name) {\\n        if (direction === \\"asc\\")\\n            return \\"ascending\\";\\n        if (direction === \\"des\\")\\n            return \\"descending\\";\\n    }\\n    return \\"none\\";\\n}\\nasync function handle_keydown(event) {\\n    if (selected_header !== false && header_edit === false) {\\n        switch (event.key) {\\n            case \\"ArrowDown\\":\\n                selected = [0, selected_header];\\n                selected_header = false;\\n                return;\\n            case \\"ArrowLeft\\":\\n                selected_header = selected_header > 0 ? selected_header - 1 : selected_header;\\n                return;\\n            case \\"ArrowRight\\":\\n                selected_header = selected_header < _headers.length - 1 ? selected_header + 1 : selected_header;\\n                return;\\n            case \\"Escape\\":\\n                event.preventDefault();\\n                selected_header = false;\\n                break;\\n            case \\"Enter\\":\\n                event.preventDefault();\\n                break;\\n        }\\n    }\\n    if (event.key === \\"Delete\\" || event.key === \\"Backspace\\") {\\n        if (!editable)\\n            return;\\n        if (editing) {\\n            const [row, col] = editing;\\n            const input_el = els[data[row][col].id].input;\\n            if (input_el && input_el.selectionStart !== input_el.selectionEnd) {\\n                return;\\n            }\\n            if (event.key === \\"Delete\\" && input_el?.selectionStart !== input_el?.value.length) {\\n                return;\\n            }\\n            if (event.key === \\"Backspace\\" && input_el?.selectionStart !== 0) {\\n                return;\\n            }\\n        }\\n        event.preventDefault();\\n        if (selected_cells.length > 0) {\\n            data = handle_delete_key(data, selected_cells);\\n            dispatch(\\"change\\", {\\n                data: data.map((row) => row.map((cell) => cell.value)),\\n                headers: _headers.map((h) => h.value),\\n                metadata: null\\n            });\\n            if (!value_is_output) {\\n                dispatch(\\"input\\");\\n            }\\n        }\\n        return;\\n    }\\n    if (event.key === \\"c\\" && (event.metaKey || event.ctrlKey)) {\\n        event.preventDefault();\\n        if (selected_cells.length > 0) {\\n            await handle_copy();\\n        }\\n        return;\\n    }\\n    if (!selected) {\\n        return;\\n    }\\n    const [i, j] = selected;\\n    switch (event.key) {\\n        case \\"ArrowRight\\":\\n        case \\"ArrowLeft\\":\\n        case \\"ArrowDown\\":\\n        case \\"ArrowUp\\":\\n            if (editing)\\n                break;\\n            event.preventDefault();\\n            const next_coords = move_cursor(event.key, [i, j], data);\\n            if (next_coords) {\\n                if (event.shiftKey) {\\n                    selected_cells = get_range_selection(selected_cells.length > 0 ? selected_cells[0] : [i, j], next_coords);\\n                    editing = false;\\n                }\\n                else {\\n                    selected_cells = [next_coords];\\n                    editing = next_coords;\\n                    clear_on_focus = false;\\n                }\\n                selected = next_coords;\\n            }\\n            else if (next_coords === false && event.key === \\"ArrowUp\\" && i === 0) {\\n                selected_header = j;\\n                selected = false;\\n                editing = false;\\n            }\\n            break;\\n        case \\"Escape\\":\\n            if (!editable)\\n                break;\\n            event.preventDefault();\\n            editing = false;\\n            break;\\n        case \\"Enter\\":\\n            if (!editable)\\n                break;\\n            event.preventDefault();\\n            if (event.shiftKey) {\\n                add_row(i);\\n                await tick();\\n                selected = [i + 1, j];\\n            }\\n            else {\\n                if (dequal(editing, [i, j])) {\\n                    const cell_id = data[i][j].id;\\n                    const input_el = els[cell_id].input;\\n                    if (input_el) {\\n                        data[i][j].value = input_el.value;\\n                    }\\n                    editing = false;\\n                    await tick();\\n                    selected = [i, j];\\n                }\\n                else {\\n                    editing = [i, j];\\n                    clear_on_focus = false;\\n                }\\n            }\\n            break;\\n        case \\"Tab\\":\\n            event.preventDefault();\\n            editing = false;\\n            const next_cell = get_next_cell_coordinates([i, j], data, event.shiftKey);\\n            if (next_cell) {\\n                selected_cells = [next_cell];\\n                selected = next_cell;\\n                if (editable) {\\n                    editing = next_cell;\\n                    clear_on_focus = false;\\n                }\\n            }\\n            break;\\n        default:\\n            if (!editable)\\n                break;\\n            if ((!editing || editing && dequal(editing, [i, j])) && event.key.length === 1) {\\n                clear_on_focus = true;\\n                editing = [i, j];\\n            }\\n    }\\n}\\nlet sort_direction;\\nlet sort_by;\\nfunction handle_sort(col) {\\n    if (typeof sort_by !== \\"number\\" || sort_by !== col) {\\n        sort_direction = \\"asc\\";\\n        sort_by = col;\\n    }\\n    else {\\n        if (sort_direction === \\"asc\\") {\\n            sort_direction = \\"des\\";\\n        }\\n        else if (sort_direction === \\"des\\") {\\n            sort_direction = \\"asc\\";\\n        }\\n    }\\n}\\nasync function edit_header(i, _select = false) {\\n    if (!editable || col_count[1] !== \\"dynamic\\" || header_edit === i)\\n        return;\\n    selected = false;\\n    selected_cells = [];\\n    selected_header = i;\\n    header_edit = i;\\n}\\nfunction end_header_edit(event) {\\n    if (!editable)\\n        return;\\n    switch (event.detail.key) {\\n        case \\"Escape\\":\\n        case \\"Enter\\":\\n        case \\"Tab\\":\\n            event.preventDefault();\\n            selected = false;\\n            selected_header = header_edit;\\n            header_edit = false;\\n            parent.focus();\\n            break;\\n    }\\n}\\nasync function add_row(index) {\\n    parent.focus();\\n    if (row_count[1] !== \\"dynamic\\")\\n        return;\\n    if (data.length === 0) {\\n        values = [Array(headers.length).fill(\\"\\")];\\n        return;\\n    }\\n    const new_row = Array(data[0].length).fill(0).map((_, i) => {\\n        const _id = make_id();\\n        els[_id] = { cell: null, input: null };\\n        return { id: _id, value: \\"\\" };\\n    });\\n    if (index !== void 0 && index >= 0 && index <= data.length) {\\n        data.splice(index, 0, new_row);\\n    }\\n    else {\\n        data.push(new_row);\\n    }\\n    data = data;\\n    selected = [index !== void 0 ? index : data.length - 1, 0];\\n}\\n$: (data || _headers) && trigger_change();\\nasync function add_col(index) {\\n    parent.focus();\\n    if (col_count[1] !== \\"dynamic\\")\\n        return;\\n    const insert_index = index !== void 0 ? index : data[0].length;\\n    for (let i = 0; i < data.length; i++) {\\n        const _id = make_id();\\n        els[_id] = { cell: null, input: null };\\n        data[i].splice(insert_index, 0, { id: _id, value: \\"\\" });\\n    }\\n    headers.splice(insert_index, 0, `Header ${headers.length + 1}`);\\n    data = data;\\n    headers = headers;\\n    await tick();\\n    requestAnimationFrame(() => {\\n        edit_header(insert_index, true);\\n        const new_w = parent.querySelectorAll(\\"tbody\\")[1].offsetWidth;\\n        parent.querySelectorAll(\\"table\\")[1].scrollTo({ left: new_w });\\n    });\\n}\\nfunction handle_click_outside(event) {\\n    if (handle_click_outside_util(event, parent)) {\\n        editing = false;\\n        selected_cells = [];\\n        header_edit = false;\\n        selected_header = false;\\n        active_cell_menu = null;\\n        active_header_menu = null;\\n    }\\n}\\n$: max = get_max(data);\\n$: cells[0] && set_cell_widths();\\nlet cells = [];\\nlet parent;\\nlet table;\\nfunction set_cell_widths() {\\n    const widths = cells.map((el, i) => {\\n        return el?.clientWidth || 0;\\n    });\\n    if (widths.length === 0)\\n        return;\\n    for (let i = 0; i < widths.length; i++) {\\n        parent.style.setProperty(`--cell-width-${i}`, `${widths[i] - scrollbar_width / widths.length}px`);\\n    }\\n}\\nlet table_height = values.slice(0, max_height / values.length * 37).length * 37 + 37;\\nlet scrollbar_width = 0;\\nfunction sort_data(_data, _display_value, _styling, col, dir) {\\n    let id = null;\\n    if (selected && selected[0] in data && selected[1] in data[selected[0]]) {\\n        id = data[selected[0]][selected[1]].id;\\n    }\\n    if (typeof col !== \\"number\\" || !dir) {\\n        return;\\n    }\\n    const indices = [...Array(_data.length).keys()];\\n    if (dir === \\"asc\\") {\\n        indices.sort((i, j) => _data[i][col].value < _data[j][col].value ? -1 : 1);\\n    }\\n    else if (dir === \\"des\\") {\\n        indices.sort((i, j) => _data[i][col].value > _data[j][col].value ? -1 : 1);\\n    }\\n    else {\\n        return;\\n    }\\n    const temp_data = [..._data];\\n    const temp_display_value = _display_value ? [..._display_value] : null;\\n    const temp_styling = _styling ? [..._styling] : null;\\n    indices.forEach((originalIndex, sortedIndex) => {\\n        _data[sortedIndex] = temp_data[originalIndex];\\n        if (_display_value && temp_display_value)\\n            _display_value[sortedIndex] = temp_display_value[originalIndex];\\n        if (_styling && temp_styling)\\n            _styling[sortedIndex] = temp_styling[originalIndex];\\n    });\\n    data = data;\\n    if (id) {\\n        const [i, j] = get_current_indices(id, data);\\n        selected = [i, j];\\n    }\\n}\\n$: sort_data(data, display_value, styling, sort_by, sort_direction);\\n$: selected_index = !!selected && selected[0];\\nlet is_visible = false;\\nonMount(() => {\\n    const observer = new IntersectionObserver((entries) => {\\n        entries.forEach((entry) => {\\n            if (entry.isIntersecting && !is_visible) {\\n                set_cell_widths();\\n                data = data;\\n            }\\n            is_visible = entry.isIntersecting;\\n        });\\n    });\\n    observer.observe(parent);\\n    document.addEventListener(\\"click\\", handle_click_outside);\\n    window.addEventListener(\\"resize\\", handle_resize);\\n    document.addEventListener(\\"fullscreenchange\\", handle_fullscreen_change);\\n    return () => {\\n        observer.disconnect();\\n        document.removeEventListener(\\"click\\", handle_click_outside);\\n        window.removeEventListener(\\"resize\\", handle_resize);\\n        document.removeEventListener(\\"fullscreenchange\\", handle_fullscreen_change);\\n    };\\n});\\nfunction handle_cell_click(event, row, col) {\\n    event.preventDefault();\\n    event.stopPropagation();\\n    clear_on_focus = false;\\n    active_cell_menu = null;\\n    active_header_menu = null;\\n    selected_header = false;\\n    header_edit = false;\\n    selected_cells = handle_selection([row, col], selected_cells, event);\\n    if (selected_cells.length === 1 && editable) {\\n        editing = [row, col];\\n        tick().then(() => {\\n            const input_el = els[data[row][col].id].input;\\n            if (input_el) {\\n                input_el.focus();\\n                input_el.selectionStart = input_el.selectionEnd = input_el.value.length;\\n            }\\n        });\\n    }\\n    else {\\n        editing = false;\\n    }\\n    toggle_cell_button(row, col);\\n    dispatch(\\"select\\", {\\n        index: [row, col],\\n        value: get_data_at(row, col),\\n        row_value: data[row].map((d) => d.value)\\n    });\\n}\\nfunction toggle_cell_menu(event, row, col) {\\n    event.stopPropagation();\\n    if (active_cell_menu && active_cell_menu.row === row && active_cell_menu.col === col) {\\n        active_cell_menu = null;\\n    }\\n    else {\\n        const cell = event.target.closest(\\"td\\");\\n        if (cell) {\\n            const rect = cell.getBoundingClientRect();\\n            active_cell_menu = { row, col, x: rect.right, y: rect.bottom };\\n        }\\n    }\\n}\\nfunction add_row_at(index, position) {\\n    const row_index = position === \\"above\\" ? index : index + 1;\\n    add_row(row_index);\\n    active_cell_menu = null;\\n    active_header_menu = null;\\n}\\nfunction add_col_at(index, position) {\\n    const col_index = position === \\"left\\" ? index : index + 1;\\n    add_col(col_index);\\n    active_cell_menu = null;\\n    active_header_menu = null;\\n}\\nfunction handle_resize() {\\n    active_cell_menu = null;\\n    active_header_menu = null;\\n    set_cell_widths();\\n}\\nlet active_button = null;\\nfunction toggle_header_button(col) {\\n    active_button = active_button?.type === \\"header\\" && active_button.col === col ? null : { type: \\"header\\", col };\\n}\\nfunction toggle_cell_button(row, col) {\\n    active_button = active_button?.type === \\"cell\\" && active_button.row === row && active_button.col === col ? null : { type: \\"cell\\", row, col };\\n}\\nfunction toggle_fullscreen() {\\n    if (!document.fullscreenElement) {\\n        parent.requestFullscreen();\\n        is_fullscreen = true;\\n    }\\n    else {\\n        document.exitFullscreen();\\n        is_fullscreen = false;\\n    }\\n}\\nfunction handle_fullscreen_change() {\\n    is_fullscreen = !!document.fullscreenElement;\\n}\\nasync function handle_copy() {\\n    await copy_table_data(data, _headers, selected_cells);\\n}\\nfunction toggle_header_menu(event, col) {\\n    event.stopPropagation();\\n    if (active_header_menu && active_header_menu.col === col) {\\n        active_header_menu = null;\\n    }\\n    else {\\n        const header = event.target.closest(\\"th\\");\\n        if (header) {\\n            const rect = header.getBoundingClientRect();\\n            active_header_menu = { col, x: rect.right, y: rect.bottom };\\n        }\\n    }\\n}\\nafterUpdate(() => {\\n    value_is_output = false;\\n});\\nasync function delete_row(index) {\\n    parent.focus();\\n    if (row_count[1] !== \\"dynamic\\")\\n        return;\\n    if (data.length <= 1)\\n        return;\\n    data.splice(index, 1);\\n    data = data;\\n    selected = false;\\n}\\nasync function delete_col(index) {\\n    parent.focus();\\n    if (col_count[1] !== \\"dynamic\\")\\n        return;\\n    if (data[0].length <= 1)\\n        return;\\n    _headers.splice(index, 1);\\n    _headers = _headers;\\n    data.forEach((row) => {\\n        row.splice(index, 1);\\n    });\\n    data = data;\\n    selected = false;\\n}\\nfunction delete_row_at(index) {\\n    delete_row(index);\\n    active_cell_menu = null;\\n    active_header_menu = null;\\n}\\nfunction delete_col_at(index) {\\n    delete_col(index);\\n    active_cell_menu = null;\\n    active_header_menu = null;\\n}\\n<\/script>\\n\\n<svelte:window on:resize={() => set_cell_widths()} />\\n\\n<div class=\\"table-container\\">\\n\\t<div class=\\"header-row\\">\\n\\t\\t{#if label && label.length !== 0 && show_label}\\n\\t\\t\\t<div class=\\"label\\">\\n\\t\\t\\t\\t<p>{label}</p>\\n\\t\\t\\t</div>\\n\\t\\t{/if}\\n\\t\\t<Toolbar\\n\\t\\t\\t{show_fullscreen_button}\\n\\t\\t\\t{is_fullscreen}\\n\\t\\t\\ton:click={toggle_fullscreen}\\n\\t\\t\\ton_copy={handle_copy}\\n\\t\\t\\t{show_copy_button}\\n\\t\\t/>\\n\\t</div>\\n\\t<div\\n\\t\\tbind:this={parent}\\n\\t\\tclass=\\"table-wrap\\"\\n\\t\\tclass:dragging\\n\\t\\tclass:no-wrap={!wrap}\\n\\t\\tstyle=\\"height:{table_height}px\\"\\n\\t\\ton:keydown={(e) => handle_keydown(e)}\\n\\t\\trole=\\"grid\\"\\n\\t\\ttabindex=\\"0\\"\\n\\t>\\n\\t\\t<table\\n\\t\\t\\tbind:contentRect={t_rect}\\n\\t\\t\\tbind:this={table}\\n\\t\\t\\tclass:fixed-layout={column_widths.length != 0}\\n\\t\\t>\\n\\t\\t\\t{#if label && label.length !== 0}\\n\\t\\t\\t\\t<caption class=\\"sr-only\\">{label}</caption>\\n\\t\\t\\t{/if}\\n\\t\\t\\t<thead>\\n\\t\\t\\t\\t<tr>\\n\\t\\t\\t\\t\\t{#if show_row_numbers}\\n\\t\\t\\t\\t\\t\\t<th class=\\"row-number-header\\"></th>\\n\\t\\t\\t\\t\\t{/if}\\n\\t\\t\\t\\t\\t{#each _headers as { value, id }, i (id)}\\n\\t\\t\\t\\t\\t\\t<th\\n\\t\\t\\t\\t\\t\\t\\tclass:editing={header_edit === i}\\n\\t\\t\\t\\t\\t\\t\\taria-sort={get_sort_status(value, sort_by, sort_direction)}\\n\\t\\t\\t\\t\\t\\t\\tstyle:width={column_widths.length ? column_widths[i] : undefined}\\n\\t\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\t\\t<div class=\\"cell-wrap\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t<EditableCell\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t{value}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t{latex_delimiters}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t{line_breaks}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\theader\\n\\t\\t\\t\\t\\t\\t\\t\\t\\tedit={false}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\tel={null}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t{root}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t{editable}\\n\\t\\t\\t\\t\\t\\t\\t\\t/>\\n\\n\\t\\t\\t\\t\\t\\t\\t\\t<div\\n\\t\\t\\t\\t\\t\\t\\t\\t\\tclass:sorted={sort_by === i}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\tclass:des={sort_by === i && sort_direction === \\"des\\"}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\tclass=\\"sort-button {sort_direction} \\"\\n\\t\\t\\t\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t<svg\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\twidth=\\"1em\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\theight=\\"1em\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tviewBox=\\"0 0 9 7\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tfill=\\"none\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\txmlns=\\"http://www.w3.org/2000/svg\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<path d=\\"M4.49999 0L8.3971 6.75H0.602875L4.49999 0Z\\" />\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t</svg>\\n\\t\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t</th>\\n\\t\\t\\t\\t\\t{/each}\\n\\t\\t\\t\\t</tr>\\n\\t\\t\\t</thead>\\n\\t\\t\\t<tbody>\\n\\t\\t\\t\\t<tr>\\n\\t\\t\\t\\t\\t{#each max as { value, id }, j (id)}\\n\\t\\t\\t\\t\\t\\t<td tabindex=\\"-1\\" bind:this={cells[j]}>\\n\\t\\t\\t\\t\\t\\t\\t<div class=\\"cell-wrap\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t<EditableCell\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t{value}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t{latex_delimiters}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t{line_breaks}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\tdatatype={Array.isArray(datatype) ? datatype[j] : datatype}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\tedit={false}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\tel={null}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t{root}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t{editable}\\n\\t\\t\\t\\t\\t\\t\\t\\t/>\\n\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t</td>\\n\\t\\t\\t\\t\\t{/each}\\n\\t\\t\\t\\t</tr>\\n\\t\\t\\t</tbody>\\n\\t\\t</table>\\n\\t\\t<Upload\\n\\t\\t\\t{upload}\\n\\t\\t\\t{stream_handler}\\n\\t\\t\\tflex={false}\\n\\t\\t\\tcenter={false}\\n\\t\\t\\tboundedheight={false}\\n\\t\\t\\tdisable_click={true}\\n\\t\\t\\t{root}\\n\\t\\t\\ton:load={({ detail }) =>\\n\\t\\t\\t\\thandle_file_upload(\\n\\t\\t\\t\\t\\tdetail.data,\\n\\t\\t\\t\\t\\tcol_count,\\n\\t\\t\\t\\t\\t(head) => {\\n\\t\\t\\t\\t\\t\\t_headers = make_headers(head);\\n\\t\\t\\t\\t\\t\\treturn _headers;\\n\\t\\t\\t\\t\\t},\\n\\t\\t\\t\\t\\t(vals) => {\\n\\t\\t\\t\\t\\t\\tvalues = vals;\\n\\t\\t\\t\\t\\t}\\n\\t\\t\\t\\t)}\\n\\t\\t\\tbind:dragging\\n\\t\\t\\taria_label={i18n(\\"dataframe.drop_to_upload\\")}\\n\\t\\t>\\n\\t\\t\\t<VirtualTable\\n\\t\\t\\t\\tbind:items={data}\\n\\t\\t\\t\\t{max_height}\\n\\t\\t\\t\\tbind:actual_height={table_height}\\n\\t\\t\\t\\tbind:table_scrollbar_width={scrollbar_width}\\n\\t\\t\\t\\tselected={selected_index}\\n\\t\\t\\t>\\n\\t\\t\\t\\t{#if label && label.length !== 0}\\n\\t\\t\\t\\t\\t<caption class=\\"sr-only\\">{label}</caption>\\n\\t\\t\\t\\t{/if}\\n\\t\\t\\t\\t<tr slot=\\"thead\\">\\n\\t\\t\\t\\t\\t{#if show_row_numbers}\\n\\t\\t\\t\\t\\t\\t<th class=\\"row-number-header\\"></th>\\n\\t\\t\\t\\t\\t{/if}\\n\\t\\t\\t\\t\\t{#each _headers as { value, id }, i (id)}\\n\\t\\t\\t\\t\\t\\t<th\\n\\t\\t\\t\\t\\t\\t\\tclass:focus={header_edit === i || selected_header === i}\\n\\t\\t\\t\\t\\t\\t\\taria-sort={get_sort_status(value, sort_by, sort_direction)}\\n\\t\\t\\t\\t\\t\\t\\tstyle=\\"width: var(--cell-width-{i});\\"\\n\\t\\t\\t\\t\\t\\t\\ton:click={() => {\\n\\t\\t\\t\\t\\t\\t\\t\\ttoggle_header_button(i);\\n\\t\\t\\t\\t\\t\\t\\t}}\\n\\t\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\t\\t<div class=\\"cell-wrap\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t<div class=\\"header-content\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t<EditableCell\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t{max_chars}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tbind:value={_headers[i].value}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tbind:el={els[id].input}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t{latex_delimiters}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t{line_breaks}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tedit={header_edit === i}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\ton:keydown={end_header_edit}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\ton:dblclick={() => edit_header(i)}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\theader\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t{root}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t{editable}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t/>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t<button\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tclass:sorted={sort_by === i}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tclass:des={sort_by === i && sort_direction === \\"des\\"}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tclass=\\"sort-button {sort_direction}\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\ttabindex=\\"0\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\ton:click={(event) => {\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tevent.stopPropagation();\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\thandle_sort(i);\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t}}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<svg\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\twidth=\\"1em\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\theight=\\"1em\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tviewBox=\\"0 0 9 7\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tfill=\\"none\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\txmlns=\\"http://www.w3.org/2000/svg\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<path d=\\"M4.49999 0L8.3971 6.75H0.602875L4.49999 0Z\\" />\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t</svg>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t</button>\\n\\t\\t\\t\\t\\t\\t\\t\\t</div>\\n\\n\\t\\t\\t\\t\\t\\t\\t\\t{#if editable}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t<button\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tclass=\\"cell-menu-button\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\ton:click={(event) => toggle_header_menu(event, i)}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t&#8942;\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t</button>\\n\\t\\t\\t\\t\\t\\t\\t\\t{/if}\\n\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t</th>\\n\\t\\t\\t\\t\\t{/each}\\n\\t\\t\\t\\t</tr>\\n\\n\\t\\t\\t\\t<tr slot=\\"tbody\\" let:item let:index class:row_odd={index % 2 === 0}>\\n\\t\\t\\t\\t\\t{#if show_row_numbers}\\n\\t\\t\\t\\t\\t\\t<td class=\\"row-number\\" title={`Row ${index + 1}`}>{index + 1}</td>\\n\\t\\t\\t\\t\\t{/if}\\n\\t\\t\\t\\t\\t{#each item as { value, id }, j (id)}\\n\\t\\t\\t\\t\\t\\t<td\\n\\t\\t\\t\\t\\t\\t\\ttabindex=\\"0\\"\\n\\t\\t\\t\\t\\t\\t\\ton:touchstart={(event) => {\\n\\t\\t\\t\\t\\t\\t\\t\\tconst touch = event.touches[0];\\n\\t\\t\\t\\t\\t\\t\\t\\tconst mouseEvent = new MouseEvent(\\"click\\", {\\n\\t\\t\\t\\t\\t\\t\\t\\t\\tclientX: touch.clientX,\\n\\t\\t\\t\\t\\t\\t\\t\\t\\tclientY: touch.clientY,\\n\\t\\t\\t\\t\\t\\t\\t\\t\\tbubbles: true,\\n\\t\\t\\t\\t\\t\\t\\t\\t\\tcancelable: true,\\n\\t\\t\\t\\t\\t\\t\\t\\t\\tview: window\\n\\t\\t\\t\\t\\t\\t\\t\\t});\\n\\t\\t\\t\\t\\t\\t\\t\\thandle_cell_click(mouseEvent, index, j);\\n\\t\\t\\t\\t\\t\\t\\t}}\\n\\t\\t\\t\\t\\t\\t\\ton:mousedown={(event) => {\\n\\t\\t\\t\\t\\t\\t\\t\\tevent.preventDefault();\\n\\t\\t\\t\\t\\t\\t\\t\\tevent.stopPropagation();\\n\\t\\t\\t\\t\\t\\t\\t}}\\n\\t\\t\\t\\t\\t\\t\\ton:click={(event) => handle_cell_click(event, index, j)}\\n\\t\\t\\t\\t\\t\\t\\tstyle:width=\\"var(--cell-width-{j})\\"\\n\\t\\t\\t\\t\\t\\t\\tstyle={styling?.[index]?.[j] || \\"\\"}\\n\\t\\t\\t\\t\\t\\t\\tclass={is_cell_selected([index, j], selected_cells)}\\n\\t\\t\\t\\t\\t\\t\\tclass:menu-active={active_cell_menu &&\\n\\t\\t\\t\\t\\t\\t\\t\\tactive_cell_menu.row === index &&\\n\\t\\t\\t\\t\\t\\t\\t\\tactive_cell_menu.col === j}\\n\\t\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\t\\t<div class=\\"cell-wrap\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t<EditableCell\\n\\t\\t\\t\\t\\t\\t\\t\\t\\tbind:value={data[index][j].value}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\tbind:el={els[id].input}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\tdisplay_value={display_value?.[index]?.[j]}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t{latex_delimiters}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t{line_breaks}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t{editable}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\tedit={dequal(editing, [index, j])}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\tdatatype={Array.isArray(datatype) ? datatype[j] : datatype}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\ton:blur={() => {\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tclear_on_focus = false;\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tparent.focus();\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t}}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\ton:focus={() => {\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tconst row = index;\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tconst col = j;\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tif (\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t!selected_cells.some(([r, c]) => r === row && c === col)\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t) {\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tselected_cells = [[row, col]];\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t}}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t{clear_on_focus}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t{root}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t{max_chars}\\n\\t\\t\\t\\t\\t\\t\\t\\t/>\\n\\t\\t\\t\\t\\t\\t\\t\\t{#if editable && should_show_cell_menu([index, j], selected_cells, editable)}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t<button\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tclass=\\"cell-menu-button\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\ton:click={(event) => toggle_cell_menu(event, index, j)}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t&#8942;\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t</button>\\n\\t\\t\\t\\t\\t\\t\\t\\t{/if}\\n\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t</td>\\n\\t\\t\\t\\t\\t{/each}\\n\\t\\t\\t\\t</tr>\\n\\t\\t\\t</VirtualTable>\\n\\t\\t</Upload>\\n\\t</div>\\n</div>\\n\\n{#if active_cell_menu}\\n\\t<CellMenu\\n\\t\\tx={active_cell_menu.x}\\n\\t\\ty={active_cell_menu.y}\\n\\t\\trow={active_cell_menu.row}\\n\\t\\t{col_count}\\n\\t\\t{row_count}\\n\\t\\ton_add_row_above={() => add_row_at(active_cell_menu?.row || 0, \\"above\\")}\\n\\t\\ton_add_row_below={() => add_row_at(active_cell_menu?.row || 0, \\"below\\")}\\n\\t\\ton_add_column_left={() => add_col_at(active_cell_menu?.col || 0, \\"left\\")}\\n\\t\\ton_add_column_right={() => add_col_at(active_cell_menu?.col || 0, \\"right\\")}\\n\\t\\ton_delete_row={() => delete_row_at(active_cell_menu?.row || 0)}\\n\\t\\ton_delete_col={() => delete_col_at(active_cell_menu?.col || 0)}\\n\\t\\tcan_delete_rows={data.length > 1}\\n\\t\\tcan_delete_cols={data[0].length > 1}\\n\\t\\t{i18n}\\n\\t/>\\n{/if}\\n\\n{#if active_header_menu !== null}\\n\\t<CellMenu\\n\\t\\t{i18n}\\n\\t\\tx={active_header_menu.x}\\n\\t\\ty={active_header_menu.y}\\n\\t\\trow={-1}\\n\\t\\t{col_count}\\n\\t\\t{row_count}\\n\\t\\ton_add_row_above={() => add_row_at(active_cell_menu?.row ?? -1, \\"above\\")}\\n\\t\\ton_add_row_below={() => add_row_at(active_cell_menu?.row ?? -1, \\"below\\")}\\n\\t\\ton_add_column_left={() => add_col_at(active_header_menu?.col ?? -1, \\"left\\")}\\n\\t\\ton_add_column_right={() =>\\n\\t\\t\\tadd_col_at(active_header_menu?.col ?? -1, \\"right\\")}\\n\\t\\ton_delete_row={() => delete_row_at(active_cell_menu?.row ?? -1)}\\n\\t\\ton_delete_col={() => delete_col_at(active_header_menu?.col ?? -1)}\\n\\t\\tcan_delete_rows={false}\\n\\t\\tcan_delete_cols={data[0].length > 1}\\n\\t/>\\n{/if}\\n\\n<style>\\n\\t.table-container {\\n\\t\\tdisplay: flex;\\n\\t\\tflex-direction: column;\\n\\t\\tgap: var(--size-2);\\n\\t}\\n\\n\\t.table-wrap {\\n\\t\\tposition: relative;\\n\\t\\ttransition: 150ms;\\n\\t\\tborder: 1px solid var(--border-color-primary);\\n\\t\\tborder-radius: var(--table-radius);\\n\\t\\toverflow: hidden;\\n\\t}\\n\\n\\t.table-wrap:focus-within {\\n\\t\\toutline: none;\\n\\t}\\n\\n\\t.dragging {\\n\\t\\tborder-color: var(--color-accent);\\n\\t}\\n\\n\\t.no-wrap {\\n\\t\\twhite-space: nowrap;\\n\\t}\\n\\n\\ttable {\\n\\t\\tposition: absolute;\\n\\t\\topacity: 0;\\n\\t\\ttransition: 150ms;\\n\\t\\twidth: var(--size-full);\\n\\t\\ttable-layout: auto;\\n\\t\\tcolor: var(--body-text-color);\\n\\t\\tfont-size: var(--input-text-size);\\n\\t\\tline-height: var(--line-md);\\n\\t\\tfont-family: var(--font-mono);\\n\\t\\tborder-spacing: 0;\\n\\t\\tborder-collapse: separate;\\n\\t}\\n\\n\\tdiv:not(.no-wrap) td {\\n\\t\\toverflow-wrap: anywhere;\\n\\t}\\n\\n\\tdiv.no-wrap td {\\n\\t\\toverflow-x: hidden;\\n\\t}\\n\\n\\ttable.fixed-layout {\\n\\t\\ttable-layout: fixed;\\n\\t}\\n\\n\\tthead {\\n\\t\\tposition: sticky;\\n\\t\\ttop: 0;\\n\\t\\tleft: 0;\\n\\t\\tz-index: var(--layer-1);\\n\\t\\tbox-shadow: var(--shadow-drop);\\n\\t}\\n\\n\\ttr {\\n\\t\\tborder-bottom: 1px solid var(--border-color-primary);\\n\\t\\ttext-align: left;\\n\\t}\\n\\n\\ttr > * + * {\\n\\t\\tborder-right-width: 0px;\\n\\t\\tborder-left-width: 1px;\\n\\t\\tborder-style: solid;\\n\\t\\tborder-color: var(--border-color-primary);\\n\\t}\\n\\n\\tth,\\n\\ttd {\\n\\t\\t--ring-color: transparent;\\n\\t\\tposition: relative;\\n\\t\\toutline: none;\\n\\t\\tbox-shadow: inset 0 0 0 1px var(--ring-color);\\n\\t\\tpadding: 0;\\n\\t}\\n\\n\\tth:first-child {\\n\\t\\tborder-top-left-radius: var(--table-radius);\\n\\t}\\n\\n\\tth:last-child {\\n\\t\\tborder-top-right-radius: var(--table-radius);\\n\\t}\\n\\n\\tth.focus,\\n\\ttd.focus {\\n\\t\\t--ring-color: var(--color-accent);\\n\\t\\tbox-shadow: inset 0 0 0 2px var(--ring-color);\\n\\t\\tz-index: var(--layer-1);\\n\\t}\\n\\n\\tth.focus {\\n\\t\\tz-index: var(--layer-2);\\n\\t}\\n\\n\\ttr:last-child td:first-child {\\n\\t\\tborder-bottom-left-radius: var(--table-radius);\\n\\t}\\n\\n\\ttr:last-child td:last-child {\\n\\t\\tborder-bottom-right-radius: var(--table-radius);\\n\\t}\\n\\n\\ttr th {\\n\\t\\tbackground: var(--table-even-background-fill);\\n\\t}\\n\\n\\tth svg {\\n\\t\\tfill: currentColor;\\n\\t\\tfont-size: 10px;\\n\\t}\\n\\n\\t.sort-button {\\n\\t\\tdisplay: flex;\\n\\t\\tflex: none;\\n\\t\\tjustify-content: center;\\n\\t\\talign-items: center;\\n\\t\\ttransition: 150ms;\\n\\t\\tcursor: pointer;\\n\\t\\tpadding: var(--size-2);\\n\\t\\tcolor: var(--body-text-color-subdued);\\n\\t}\\n\\n\\t.sort-button:hover {\\n\\t\\tcolor: var(--body-text-color);\\n\\t}\\n\\n\\t.des {\\n\\t\\ttransform: scaleY(-1);\\n\\t}\\n\\n\\t.sort-button.sorted {\\n\\t\\tcolor: var(--color-accent);\\n\\t}\\n\\n\\t.editing {\\n\\t\\tbackground: var(--table-editing);\\n\\t}\\n\\n\\t.cell-wrap {\\n\\t\\tdisplay: flex;\\n\\t\\talign-items: flex-start;\\n\\t\\toutline: none;\\n\\t\\tmin-height: var(--size-9);\\n\\t\\tposition: relative;\\n\\t\\theight: auto;\\n\\t}\\n\\n\\t.header-content {\\n\\t\\tdisplay: flex;\\n\\t\\talign-items: center;\\n\\t\\toverflow: hidden;\\n\\t\\tflex-grow: 1;\\n\\t\\tmin-width: 0;\\n\\t\\twhite-space: normal;\\n\\t\\toverflow-wrap: break-word;\\n\\t\\tword-break: break-word;\\n\\t}\\n\\n\\t.row_odd {\\n\\t\\tbackground: var(--table-odd-background-fill);\\n\\t}\\n\\n\\t.row_odd.focus {\\n\\t\\tbackground: var(--background-fill-primary);\\n\\t}\\n\\n\\t.cell-menu-button {\\n\\t\\tflex-shrink: 0;\\n\\t\\tdisplay: none;\\n\\t\\tbackground-color: var(--block-background-fill);\\n\\t\\tborder: 1px solid var(--border-color-primary);\\n\\t\\tborder-radius: var(--block-radius);\\n\\t\\twidth: var(--size-5);\\n\\t\\theight: var(--size-5);\\n\\t\\tmin-width: var(--size-5);\\n\\t\\tpadding: 0;\\n\\t\\tmargin-right: var(--spacing-sm);\\n\\t\\tz-index: var(--layer-1);\\n\\t\\tposition: absolute;\\n\\t\\tright: var(--size-1);\\n\\t\\ttop: 50%;\\n\\t\\ttransform: translateY(-50%);\\n\\t}\\n\\n\\t.cell-selected .cell-menu-button {\\n\\t\\tdisplay: flex;\\n\\t\\talign-items: center;\\n\\t\\tjustify-content: center;\\n\\t}\\n\\n\\t.header-row {\\n\\t\\tdisplay: flex;\\n\\t\\tjustify-content: space-between;\\n\\t\\talign-items: center;\\n\\t\\tgap: var(--size-2);\\n\\t\\theight: var(--size-6);\\n\\t\\tmin-height: var(--size-6);\\n\\t}\\n\\n\\t.label {\\n\\t\\tflex: 1;\\n\\t}\\n\\n\\t.label p {\\n\\t\\tmargin: 0;\\n\\t\\tcolor: var(--block-label-text-color);\\n\\t\\tfont-size: var(--block-label-text-size);\\n\\t}\\n\\n\\t.row-number,\\n\\t.row-number-header {\\n\\t\\twidth: var(--size-7);\\n\\t\\tmin-width: var(--size-7);\\n\\t\\ttext-align: center;\\n\\t\\tbackground: var(--table-even-background-fill);\\n\\t\\tposition: sticky;\\n\\t\\tleft: 0;\\n\\t\\tfont-size: var(--input-text-size);\\n\\t\\tcolor: var(--body-text-color);\\n\\t\\tpadding: var(--size-1) var(--size-2);\\n\\t\\toverflow: hidden;\\n\\t\\ttext-overflow: ellipsis;\\n\\t\\twhite-space: nowrap;\\n\\t\\tfont-weight: var(--weight-semibold);\\n\\t}\\n\\n\\t.row-number-header {\\n\\t\\tz-index: var(--layer-2);\\n\\t}\\n\\n\\t.row-number {\\n\\t\\tz-index: var(--layer-1);\\n\\t}\\n\\n\\t:global(tbody > tr:nth-child(odd)) .row-number {\\n\\t\\tbackground: var(--table-odd-background-fill);\\n\\t}\\n\\n\\t.cell-selected {\\n\\t\\t--ring-color: var(--color-accent);\\n\\t\\tbox-shadow: inset 0 0 0 2px var(--ring-color);\\n\\t\\tz-index: var(--layer-1);\\n\\t\\tposition: relative;\\n\\t}\\n\\n\\t.cell-selected.no-top {\\n\\t\\tbox-shadow:\\n\\t\\t\\tinset 2px 0 0 var(--ring-color),\\n\\t\\t\\tinset -2px 0 0 var(--ring-color),\\n\\t\\t\\tinset 0 -2px 0 var(--ring-color);\\n\\t}\\n\\n\\t.cell-selected.no-bottom {\\n\\t\\tbox-shadow:\\n\\t\\t\\tinset 2px 0 0 var(--ring-color),\\n\\t\\t\\tinset -2px 0 0 var(--ring-color),\\n\\t\\t\\tinset 0 2px 0 var(--ring-color);\\n\\t}\\n\\n\\t.cell-selected.no-left {\\n\\t\\tbox-shadow:\\n\\t\\t\\tinset 0 2px 0 var(--ring-color),\\n\\t\\t\\tinset -2px 0 0 var(--ring-color),\\n\\t\\t\\tinset 0 -2px 0 var(--ring-color);\\n\\t}\\n\\n\\t.cell-selected.no-right {\\n\\t\\tbox-shadow:\\n\\t\\t\\tinset 0 2px 0 var(--ring-color),\\n\\t\\t\\tinset 2px 0 0 var(--ring-color),\\n\\t\\t\\tinset 0 -2px 0 var(--ring-color);\\n\\t}\\n\\n\\t.cell-selected.no-top.no-left {\\n\\t\\tbox-shadow:\\n\\t\\t\\tinset -2px 0 0 var(--ring-color),\\n\\t\\t\\tinset 0 -2px 0 var(--ring-color);\\n\\t}\\n\\n\\t.cell-selected.no-top.no-right {\\n\\t\\tbox-shadow:\\n\\t\\t\\tinset 2px 0 0 var(--ring-color),\\n\\t\\t\\tinset 0 -2px 0 var(--ring-color);\\n\\t}\\n\\n\\t.cell-selected.no-bottom.no-left {\\n\\t\\tbox-shadow:\\n\\t\\t\\tinset -2px 0 0 var(--ring-color),\\n\\t\\t\\tinset 0 2px 0 var(--ring-color);\\n\\t}\\n\\n\\t.cell-selected.no-bottom.no-right {\\n\\t\\tbox-shadow:\\n\\t\\t\\tinset 2px 0 0 var(--ring-color),\\n\\t\\t\\tinset 0 2px 0 var(--ring-color);\\n\\t}\\n\\n\\t.cell-selected.no-top.no-bottom {\\n\\t\\tbox-shadow:\\n\\t\\t\\tinset 2px 0 0 var(--ring-color),\\n\\t\\t\\tinset -2px 0 0 var(--ring-color);\\n\\t}\\n\\n\\t.cell-selected.no-left.no-right {\\n\\t\\tbox-shadow:\\n\\t\\t\\tinset 0 2px 0 var(--ring-color),\\n\\t\\t\\tinset 0 -2px 0 var(--ring-color);\\n\\t}\\n\\n\\t.cell-selected.no-top.no-left.no-right {\\n\\t\\tbox-shadow: inset 0 -2px 0 var(--ring-color);\\n\\t}\\n\\n\\t.cell-selected.no-bottom.no-left.no-right {\\n\\t\\tbox-shadow: inset 0 2px 0 var(--ring-color);\\n\\t}\\n\\n\\t.cell-selected.no-left.no-top.no-bottom {\\n\\t\\tbox-shadow: inset -2px 0 0 var(--ring-color);\\n\\t}\\n\\n\\t.cell-selected.no-right.no-top.no-bottom {\\n\\t\\tbox-shadow: inset 2px 0 0 var(--ring-color);\\n\\t}\\n\\n\\t.cell-selected.no-top.no-bottom.no-left.no-right {\\n\\t\\tbox-shadow: none;\\n\\t}</style>\\n"],"names":[],"mappings":"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"}'
};
function make_id() {
  return Math.random().toString(36).substring(2, 15);
}
const Table = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let max;
  let selected_index;
  let { datatype } = $$props;
  let { label = null } = $$props;
  let { show_label = true } = $$props;
  let { headers = [] } = $$props;
  let { values = [] } = $$props;
  let { col_count } = $$props;
  let { row_count } = $$props;
  let { latex_delimiters } = $$props;
  let { editable = true } = $$props;
  let { wrap = false } = $$props;
  let { root } = $$props;
  let { i18n } = $$props;
  let { max_height = 500 } = $$props;
  let { line_breaks = true } = $$props;
  let { column_widths = [] } = $$props;
  let { show_row_numbers = false } = $$props;
  let { upload } = $$props;
  let { stream_handler } = $$props;
  let { show_fullscreen_button = false } = $$props;
  let { show_copy_button = false } = $$props;
  let { value_is_output = false } = $$props;
  let { max_chars = void 0 } = $$props;
  let selected_cells = [];
  let selected = false;
  let { display_value = null } = $$props;
  let { styling = null } = $$props;
  let els = {};
  const dispatch = createEventDispatcher();
  let editing = false;
  let clear_on_focus = false;
  let header_edit = false;
  let selected_header = false;
  let is_fullscreen = false;
  let dragging = false;
  function make_headers(_head) {
    let _h = _head || [];
    if (col_count[1] === "fixed" && _h.length < col_count[0]) {
      const fill = Array(col_count[0] - _h.length).fill("").map((_, i) => `${i + _h.length}`);
      _h = _h.concat(fill);
    }
    if (!_h || _h.length === 0) {
      return Array(col_count[0]).fill(0).map((_, i) => {
        const _id = make_id();
        els[_id] = { cell: null, input: null };
        return { id: _id, value: JSON.stringify(i + 1) };
      });
    }
    return _h.map((h, i) => {
      const _id = make_id();
      els[_id] = { cell: null, input: null };
      return { id: _id, value: h ?? "" };
    });
  }
  function process_data(_values) {
    const data_row_length = _values.length;
    return Array(row_count[1] === "fixed" ? row_count[0] : data_row_length).fill(0).map((_, i) => Array(col_count[1] === "fixed" ? col_count[0] : data_row_length > 0 ? _values[0].length : headers.length).fill(0).map((_2, j) => {
      const id = make_id();
      els[id] = els[id] || { input: null, cell: null };
      const obj = { value: _values?.[i]?.[j] ?? "", id };
      return obj;
    }));
  }
  let _headers = make_headers(headers);
  let old_headers = headers;
  let data = [[]];
  let old_val = void 0;
  let previous_headers = _headers.map((h) => h.value);
  let previous_data = data.map((row) => row.map((cell) => String(cell.value)));
  async function trigger_change() {
    const current_headers = _headers.map((h) => h.value);
    const current_data = data.map((row) => row.map((cell) => String(cell.value)));
    if (!dequal(current_data, previous_data) || !dequal(current_headers, previous_headers)) {
      dispatch("change", {
        data: data.map((row) => row.map((cell) => cell.value)),
        headers: _headers.map((h) => h.value),
        metadata: null
      });
      if (!value_is_output) {
        dispatch("input");
      }
      previous_data = current_data;
      previous_headers = current_headers;
    }
  }
  function get_sort_status(name, _sort, direction) {
    return "none";
  }
  let sort_direction;
  let sort_by;
  let cells = [];
  let parent;
  let table;
  let table_height = values.slice(0, max_height / values.length * 37).length * 37 + 37;
  let scrollbar_width = 0;
  function sort_data(_data, _display_value, _styling, col, dir) {
    if (selected && selected[0] in data && selected[1] in data[selected[0]]) {
      data[selected[0]][selected[1]].id;
    }
    {
      return;
    }
  }
  async function handle_copy() {
    await copy_table_data(data, _headers, selected_cells);
  }
  if ($$props.datatype === void 0 && $$bindings.datatype && datatype !== void 0)
    $$bindings.datatype(datatype);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.show_label === void 0 && $$bindings.show_label && show_label !== void 0)
    $$bindings.show_label(show_label);
  if ($$props.headers === void 0 && $$bindings.headers && headers !== void 0)
    $$bindings.headers(headers);
  if ($$props.values === void 0 && $$bindings.values && values !== void 0)
    $$bindings.values(values);
  if ($$props.col_count === void 0 && $$bindings.col_count && col_count !== void 0)
    $$bindings.col_count(col_count);
  if ($$props.row_count === void 0 && $$bindings.row_count && row_count !== void 0)
    $$bindings.row_count(row_count);
  if ($$props.latex_delimiters === void 0 && $$bindings.latex_delimiters && latex_delimiters !== void 0)
    $$bindings.latex_delimiters(latex_delimiters);
  if ($$props.editable === void 0 && $$bindings.editable && editable !== void 0)
    $$bindings.editable(editable);
  if ($$props.wrap === void 0 && $$bindings.wrap && wrap !== void 0)
    $$bindings.wrap(wrap);
  if ($$props.root === void 0 && $$bindings.root && root !== void 0)
    $$bindings.root(root);
  if ($$props.i18n === void 0 && $$bindings.i18n && i18n !== void 0)
    $$bindings.i18n(i18n);
  if ($$props.max_height === void 0 && $$bindings.max_height && max_height !== void 0)
    $$bindings.max_height(max_height);
  if ($$props.line_breaks === void 0 && $$bindings.line_breaks && line_breaks !== void 0)
    $$bindings.line_breaks(line_breaks);
  if ($$props.column_widths === void 0 && $$bindings.column_widths && column_widths !== void 0)
    $$bindings.column_widths(column_widths);
  if ($$props.show_row_numbers === void 0 && $$bindings.show_row_numbers && show_row_numbers !== void 0)
    $$bindings.show_row_numbers(show_row_numbers);
  if ($$props.upload === void 0 && $$bindings.upload && upload !== void 0)
    $$bindings.upload(upload);
  if ($$props.stream_handler === void 0 && $$bindings.stream_handler && stream_handler !== void 0)
    $$bindings.stream_handler(stream_handler);
  if ($$props.show_fullscreen_button === void 0 && $$bindings.show_fullscreen_button && show_fullscreen_button !== void 0)
    $$bindings.show_fullscreen_button(show_fullscreen_button);
  if ($$props.show_copy_button === void 0 && $$bindings.show_copy_button && show_copy_button !== void 0)
    $$bindings.show_copy_button(show_copy_button);
  if ($$props.value_is_output === void 0 && $$bindings.value_is_output && value_is_output !== void 0)
    $$bindings.value_is_output(value_is_output);
  if ($$props.max_chars === void 0 && $$bindings.max_chars && max_chars !== void 0)
    $$bindings.max_chars(max_chars);
  if ($$props.display_value === void 0 && $$bindings.display_value && display_value !== void 0)
    $$bindings.display_value(display_value);
  if ($$props.styling === void 0 && $$bindings.styling && styling !== void 0)
    $$bindings.styling(styling);
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    selected_cells = [...selected_cells];
    selected = selected_cells.length > 0 ? selected_cells[selected_cells.length - 1] : false;
    {
      {
        if (!dequal(headers, old_headers)) {
          _headers = make_headers(headers);
          old_headers = JSON.parse(JSON.stringify(headers));
        }
      }
    }
    {
      if (!dequal(values, old_val)) {
        data = process_data(values);
        old_val = JSON.parse(JSON.stringify(values));
      }
    }
    (data || _headers) && trigger_change();
    max = get_max(data);
    {
      sort_data();
    }
    selected_index = !!selected && selected[0];
    $$rendered = ` <div class="table-container svelte-ikzfwo"><div class="header-row svelte-ikzfwo">${label && label.length !== 0 && show_label ? `<div class="label svelte-ikzfwo"><p class="svelte-ikzfwo">${escape(label)}</p></div>` : ``} ${validate_component(Toolbar, "Toolbar").$$render(
      $$result,
      {
        show_fullscreen_button,
        is_fullscreen,
        on_copy: handle_copy,
        show_copy_button
      },
      {},
      {}
    )}</div> <div class="${[
      "table-wrap svelte-ikzfwo",
      (dragging ? "dragging" : "") + " " + (!wrap ? "no-wrap" : "")
    ].join(" ").trim()}" style="${"height:" + escape(table_height, true) + "px"}" role="grid" tabindex="0"${add_attribute("this", parent, 0)}><table class="${["svelte-ikzfwo", column_widths.length != 0 ? "fixed-layout" : ""].join(" ").trim()}"${add_attribute("this", table, 0)}>${label && label.length !== 0 ? `<caption class="sr-only">${escape(label)}</caption>` : ``} <thead class="svelte-ikzfwo"><tr class="svelte-ikzfwo">${show_row_numbers ? `<th class="row-number-header svelte-ikzfwo"></th>` : ``} ${each(_headers, ({ value, id }, i) => {
      return `<th${add_attribute("aria-sort", get_sort_status(), 0)} class="${["svelte-ikzfwo", header_edit === i ? "editing" : ""].join(" ").trim()}"${add_styles({
        "width": column_widths.length ? column_widths[i] : void 0
      })}><div class="cell-wrap svelte-ikzfwo">${validate_component(EditableCell, "EditableCell").$$render(
        $$result,
        {
          value,
          latex_delimiters,
          line_breaks,
          header: true,
          edit: false,
          el: null,
          root,
          editable
        },
        {},
        {}
      )} <div class="${[
        "sort-button " + escape(sort_direction, true) + " svelte-ikzfwo",
        (sort_by === i ? "sorted" : "") + " " + (sort_by === i && sort_direction === "des" ? "des" : "")
      ].join(" ").trim()}"><svg width="1em" height="1em" viewBox="0 0 9 7" fill="none" xmlns="http://www.w3.org/2000/svg" class="svelte-ikzfwo"><path d="M4.49999 0L8.3971 6.75H0.602875L4.49999 0Z"></path></svg> </div></div> </th>`;
    })}</tr></thead> <tbody><tr class="svelte-ikzfwo">${each(max, ({ value, id }, j) => {
      return `<td tabindex="-1" class="svelte-ikzfwo"${add_attribute("this", cells[j], 0)}><div class="cell-wrap svelte-ikzfwo">${validate_component(EditableCell, "EditableCell").$$render(
        $$result,
        {
          value,
          latex_delimiters,
          line_breaks,
          datatype: Array.isArray(datatype) ? datatype[j] : datatype,
          edit: false,
          el: null,
          root,
          editable
        },
        {},
        {}
      )}</div> </td>`;
    })}</tr></tbody></table> ${validate_component(Upload, "Upload").$$render(
      $$result,
      {
        upload,
        stream_handler,
        flex: false,
        center: false,
        boundedheight: false,
        disable_click: true,
        root,
        aria_label: i18n("dataframe.drop_to_upload"),
        dragging
      },
      {
        dragging: ($$value) => {
          dragging = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(VirtualTable, "VirtualTable").$$render(
            $$result,
            {
              max_height,
              selected: selected_index,
              items: data,
              actual_height: table_height,
              table_scrollbar_width: scrollbar_width
            },
            {
              items: ($$value) => {
                data = $$value;
                $$settled = false;
              },
              actual_height: ($$value) => {
                table_height = $$value;
                $$settled = false;
              },
              table_scrollbar_width: ($$value) => {
                scrollbar_width = $$value;
                $$settled = false;
              }
            },
            {
              tbody: ({ index, item }) => {
                return `<tr slot="tbody" class="${["svelte-ikzfwo", index % 2 === 0 ? "row_odd" : ""].join(" ").trim()}">${show_row_numbers ? `<td class="row-number svelte-ikzfwo"${add_attribute("title", `Row ${index + 1}`, 0)}>${escape(index + 1)}</td>` : ``} ${each(item, ({ value, id }, j) => {
                  return `<td tabindex="0"${add_styles(merge_ssr_styles(escape(styling?.[index]?.[j] || "", true), { "width": `var(--cell-width-${j})` }))} class="${[
                    escape(null_to_empty(is_cell_selected([index, j], selected_cells)), true) + " svelte-ikzfwo",
                    ""
                  ].join(" ").trim()}"><div class="cell-wrap svelte-ikzfwo">${validate_component(EditableCell, "EditableCell").$$render(
                    $$result,
                    {
                      display_value: display_value?.[index]?.[j],
                      latex_delimiters,
                      line_breaks,
                      editable,
                      edit: dequal(editing, [index, j]),
                      datatype: Array.isArray(datatype) ? datatype[j] : datatype,
                      clear_on_focus,
                      root,
                      max_chars,
                      value: data[index][j].value,
                      el: els[id].input
                    },
                    {
                      value: ($$value) => {
                        data[index][j].value = $$value;
                        $$settled = false;
                      },
                      el: ($$value) => {
                        els[id].input = $$value;
                        $$settled = false;
                      }
                    },
                    {}
                  )} ${editable && should_show_cell_menu([index, j], selected_cells, editable) ? `<button class="cell-menu-button svelte-ikzfwo" data-svelte-h="svelte-15lbpst">⋮
									</button>` : ``}</div> </td>`;
                })}</tr>`;
              },
              thead: () => {
                return `<tr slot="thead" class="svelte-ikzfwo">${show_row_numbers ? `<th class="row-number-header svelte-ikzfwo"></th>` : ``} ${each(_headers, ({ value, id }, i) => {
                  return `<th${add_attribute("aria-sort", get_sort_status(), 0)} style="${"width: var(--cell-width-" + escape(i, true) + ");"}" class="${[
                    "svelte-ikzfwo",
                    header_edit === i || selected_header === i ? "focus" : ""
                  ].join(" ").trim()}"><div class="cell-wrap svelte-ikzfwo"><div class="header-content svelte-ikzfwo">${validate_component(EditableCell, "EditableCell").$$render(
                    $$result,
                    {
                      max_chars,
                      latex_delimiters,
                      line_breaks,
                      edit: header_edit === i,
                      header: true,
                      root,
                      editable,
                      value: _headers[i].value,
                      el: els[id].input
                    },
                    {
                      value: ($$value) => {
                        _headers[i].value = $$value;
                        $$settled = false;
                      },
                      el: ($$value) => {
                        els[id].input = $$value;
                        $$settled = false;
                      }
                    },
                    {}
                  )} <button class="${[
                    "sort-button " + escape(sort_direction, true) + " svelte-ikzfwo",
                    (sort_by === i ? "sorted" : "") + " " + (sort_by === i && sort_direction === "des" ? "des" : "")
                  ].join(" ").trim()}" tabindex="0"><svg width="1em" height="1em" viewBox="0 0 9 7" fill="none" xmlns="http://www.w3.org/2000/svg" class="svelte-ikzfwo"><path d="M4.49999 0L8.3971 6.75H0.602875L4.49999 0Z"></path></svg> </button></div> ${editable ? `<button class="cell-menu-button svelte-ikzfwo" data-svelte-h="svelte-3v1qhb">⋮
									</button>` : ``}</div> </th>`;
                })}</tr>`;
              },
              default: () => {
                return `${label && label.length !== 0 ? `<caption class="sr-only">${escape(label)}</caption>` : ``}`;
              }
            }
          )}`;
        }
      }
    )}</div></div> ${``} ${``}`;
  } while (!$$settled);
  return $$rendered;
});
const Table$1 = Table;
const Index = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let _headers;
  let cell_values;
  let display_value;
  let styling;
  let { headers = [] } = $$props;
  let { elem_id = "" } = $$props;
  let { elem_classes = [] } = $$props;
  let { visible = true } = $$props;
  let { value = {
    data: [["", "", ""]],
    headers: ["1", "2", "3"],
    metadata: null
  } } = $$props;
  let { value_is_output = false } = $$props;
  let { col_count } = $$props;
  let { row_count } = $$props;
  let { label = null } = $$props;
  let { show_label = true } = $$props;
  let { wrap } = $$props;
  let { datatype } = $$props;
  let { scale = null } = $$props;
  let { min_width = void 0 } = $$props;
  let { root } = $$props;
  let { line_breaks = true } = $$props;
  let { column_widths = [] } = $$props;
  let { gradio } = $$props;
  let { latex_delimiters } = $$props;
  let { max_height = void 0 } = $$props;
  let { loading_status } = $$props;
  let { interactive } = $$props;
  let { show_fullscreen_button = false } = $$props;
  let { max_chars = void 0 } = $$props;
  let { show_copy_button = false } = $$props;
  if ($$props.headers === void 0 && $$bindings.headers && headers !== void 0)
    $$bindings.headers(headers);
  if ($$props.elem_id === void 0 && $$bindings.elem_id && elem_id !== void 0)
    $$bindings.elem_id(elem_id);
  if ($$props.elem_classes === void 0 && $$bindings.elem_classes && elem_classes !== void 0)
    $$bindings.elem_classes(elem_classes);
  if ($$props.visible === void 0 && $$bindings.visible && visible !== void 0)
    $$bindings.visible(visible);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.value_is_output === void 0 && $$bindings.value_is_output && value_is_output !== void 0)
    $$bindings.value_is_output(value_is_output);
  if ($$props.col_count === void 0 && $$bindings.col_count && col_count !== void 0)
    $$bindings.col_count(col_count);
  if ($$props.row_count === void 0 && $$bindings.row_count && row_count !== void 0)
    $$bindings.row_count(row_count);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.show_label === void 0 && $$bindings.show_label && show_label !== void 0)
    $$bindings.show_label(show_label);
  if ($$props.wrap === void 0 && $$bindings.wrap && wrap !== void 0)
    $$bindings.wrap(wrap);
  if ($$props.datatype === void 0 && $$bindings.datatype && datatype !== void 0)
    $$bindings.datatype(datatype);
  if ($$props.scale === void 0 && $$bindings.scale && scale !== void 0)
    $$bindings.scale(scale);
  if ($$props.min_width === void 0 && $$bindings.min_width && min_width !== void 0)
    $$bindings.min_width(min_width);
  if ($$props.root === void 0 && $$bindings.root && root !== void 0)
    $$bindings.root(root);
  if ($$props.line_breaks === void 0 && $$bindings.line_breaks && line_breaks !== void 0)
    $$bindings.line_breaks(line_breaks);
  if ($$props.column_widths === void 0 && $$bindings.column_widths && column_widths !== void 0)
    $$bindings.column_widths(column_widths);
  if ($$props.gradio === void 0 && $$bindings.gradio && gradio !== void 0)
    $$bindings.gradio(gradio);
  if ($$props.latex_delimiters === void 0 && $$bindings.latex_delimiters && latex_delimiters !== void 0)
    $$bindings.latex_delimiters(latex_delimiters);
  if ($$props.max_height === void 0 && $$bindings.max_height && max_height !== void 0)
    $$bindings.max_height(max_height);
  if ($$props.loading_status === void 0 && $$bindings.loading_status && loading_status !== void 0)
    $$bindings.loading_status(loading_status);
  if ($$props.interactive === void 0 && $$bindings.interactive && interactive !== void 0)
    $$bindings.interactive(interactive);
  if ($$props.show_fullscreen_button === void 0 && $$bindings.show_fullscreen_button && show_fullscreen_button !== void 0)
    $$bindings.show_fullscreen_button(show_fullscreen_button);
  if ($$props.max_chars === void 0 && $$bindings.max_chars && max_chars !== void 0)
    $$bindings.max_chars(max_chars);
  if ($$props.show_copy_button === void 0 && $$bindings.show_copy_button && show_copy_button !== void 0)
    $$bindings.show_copy_button(show_copy_button);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    _headers = [...value.headers || headers];
    cell_values = value.data ? [...value.data] : [];
    display_value = value?.metadata?.display_value ? [...value?.metadata?.display_value] : null;
    styling = !interactive && value?.metadata?.styling ? [...value?.metadata?.styling] : null;
    $$rendered = `   ${validate_component(Block, "Block").$$render(
      $$result,
      {
        visible,
        padding: false,
        elem_id,
        elem_classes,
        container: false,
        scale,
        min_width,
        allow_overflow: false
      },
      {},
      {
        default: () => {
          return `${validate_component(Static, "StatusTracker").$$render($$result, Object.assign({}, { autoscroll: gradio.autoscroll }, { i18n: gradio.i18n }, loading_status), {}, {})} ${validate_component(Table$1, "Table").$$render(
            $$result,
            {
              root,
              label,
              show_label,
              row_count,
              col_count,
              values: cell_values,
              display_value,
              styling,
              headers: _headers,
              wrap,
              datatype,
              latex_delimiters,
              editable: interactive,
              max_height,
              i18n: gradio.i18n,
              line_breaks,
              column_widths,
              upload: (...args) => gradio.client.upload(...args),
              stream_handler: (...args) => gradio.client.stream(...args),
              show_fullscreen_button,
              max_chars,
              show_copy_button,
              value_is_output
            },
            {
              value_is_output: ($$value) => {
                value_is_output = $$value;
                $$settled = false;
              }
            },
            {}
          )}`;
        }
      }
    )}`;
  } while (!$$settled);
  return $$rendered;
});

export { Table$1 as BaseDataFrame, Index as default };
//# sourceMappingURL=Index56-CBL797JU.js.map
