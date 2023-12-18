/* @refresh reload */
import { render } from 'solid-js/web';
import { createSignal } from 'solid-js';
import './app.css';
import Navbar from './navbarTop/App.jsx';
import SidebarLeft from "./leftCard/App.jsx";
import Sidebar from "./slideOutControls/App.jsx";

let theme = {};
let blog_schema;
theme.lightmode = false;
theme.color = "#7d0e9e";
let isLoading = createSignal(true);
let currentPost = {};
let showLogin = false;
let isMobile = window.innerWidth < 850;
import { getCookie } from "./shared/cookie.js";

window.addEventListener("resize", reportWindowSize);
theme.lightmode = false;
if (getCookie("lightmode") === "true") {
  theme.lightmode = true;
} else {
  theme.lightmode = false;
}

function reportWindowSize() {
  isMobile = window.innerWidth < 850;
}

let open = false;

function App() {
  return (
    <>
      <Sidebar open={open} theme={theme} />
      <Navbar open={open} showLogin={showLogin} theme={theme} />
      <main classList={{ lightmode: theme.lightmode }}>
        <SidebarLeft
          isLoading={isLoading}
          blog_schema={blog_schema}
          currentPost={currentPost}
          isMobile={isMobile}
          theme={theme}
        />
     </main>
    </>
  );
}

const root = document.body;
render(() => <App />, root);
