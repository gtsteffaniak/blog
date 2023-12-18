import { createSignal } from 'solid-js';
import './logo.css';

export default function Logo(props) {
  const [open, setOpen] = createSignal(false); // Use createSignal to manage open state

  function handleClick() {
    setOpen(!open()); // Update the open state using setOpen function
  }

  return (
    <div classList={{ selected: open() }} onClick={handleClick}>
      <svg
        classList={{ active: open() }}
        class="ham hamRotate180 ham5"
        viewBox="0 0 100 100"
        width="30"
      >
        <path
          class="line top"
          d="m 30,33 h 40 c 0,0 8.5,-0.68551 8.5,10.375 0,8.292653 -6.122707,9.002293 -8.5,6.625 l -11.071429,-11.071429"
        />
        <path class="line middle" d="m 70,50 h -40" />
        <path
          class="line bottom"
          d="m 30,67 h 40 c 0,0 8.5,0.68551 8.5,-10.375 0,-8.292653 -6.122707,-9.002293 -8.5,-6.625 l -11.071429,11.071429"
        />
      </svg>
    </div>
  );
}