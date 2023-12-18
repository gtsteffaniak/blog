import Logo from './Logo.jsx';
import './navbar.css';

export default function Navbar(props) {
  let { theme = {}, open = false } = props;

  const navItems = [
    { content: 'logo', type: 'label', color: '#7d0e9e' },
    { content: 'name', type: 'label', color: '#7d0e9e' },
    { content: 'Item 2', type: 'button', color: '#7d0e9e' },
  ];

  return (
    <div classList={{ navbar: true, 'light-mode': theme.lightmode }}>
      <div class="inner">
        {
          navItems.map(item => (
            <button
              class="ui button"
              style={`background-color:${item.color}`}
            >
              {item.content === 'logo' ? (
                <Logo open={open} active={open} />
              ) : item.content === 'name' ? (
                <a href="/"><div style="width:100px;color:white">gPortal</div></a>
              ) : (
                <a href="/login"><i class="mi mi-user" /></a>
              )}
            </button>
          ))
        }
      </div>
    </div>
  );
}

