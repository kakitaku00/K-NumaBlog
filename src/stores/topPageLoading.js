import { writable } from 'svelte/store';

const topPageLoading = writable(true);

export { topPageLoading }