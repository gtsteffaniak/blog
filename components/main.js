import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'world'
	}
});

export function getCookie(name) {
	const cookieName = `${name}=`;
	const cookieArray = document.cookie.split(';');
	for (let i = 0; i < cookieArray.length; i++) {
	  let cookie = cookieArray[i].trim();
	  if (cookie.indexOf(cookieName) === 0) {
		return cookie.substring(cookieName.length, cookie.length);
	  }
	}
	return '';
  }

export default app;