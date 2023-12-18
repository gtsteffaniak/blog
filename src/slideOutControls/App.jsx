import { setCookie } from '../shared/cookie.js';
import { createSignal } from 'solid-js';
import './slideOut.css'

export default function Sidebar(props) {
  let { open = false, theme = {} } = props;

  const toggleTheme = () => {
    theme.lightmode = !theme.lightmode;
    open = !open;
    setCookie('lightmode', theme.lightmode);
  };

  function isLightMode() {
    return createSignal(theme.lightmode);
  } 

  return (
    <aside
      classList={{open: open,'light-mode': isLightMode()}}
    >
      <div class="sidelinks">
        <a style="text-align:center" href="?about">
          About
        </a>
      </div>
      <button
        class="ui button"
        onClick={toggleTheme}
      >
        Toggle Theme
      </button>
    </aside>
  );
}
