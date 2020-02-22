import { writable } from 'svelte/store';

const blogTitle = writable('');

export { blogTitle }