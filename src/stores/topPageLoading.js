import { writable } from 'svelte/store';

function loading() {
  const { subscribe, set } = writable('start');

  return {
		subscribe,
		loading: () => set('loading'),
		done: () => set('done')
	};
}

export const topPageLoading = loading();