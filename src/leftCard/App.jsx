import { createSignal, onMount } from 'solid-js';
import { setCurrentlyActive, getCurrentPost } from '../selector.js';
import yaml from 'js-yaml';
import { Puff } from 'solid-spinner';
import Gcard from '../shared/Gcard.jsx'; // Assuming the converted Gcard component

export let isLoading = true;
export let isMobile = false;
export let blog_schema;
export let theme = {};

let currentPost = {
  ref: '',
};

async function fetchSchema() {
  const response = await fetch('static/schema.yml');
  const data = await response.text();
  const posts = yaml.loadAll(data)[0].posts;

  if (response.ok) {
    currentPost = getCurrentPost(posts);
    console.log(currentPost);
  }

  isLoading = false;
  blog_schema = posts;
}

onMount(fetchSchema);

function handleClick(post) {
  currentPost = setCurrentlyActive(post);
}

export default function YourComponent() {
  const [hidden, setHidden] = createSignal(isMobile);

  return (
    <Gcard
      hidden={hidden()}
      card-width="35em"
      lightmode={theme.lightmode}
      header="Posts"
      on:click={() => setHidden(!hidden())}
    >
      <div class="schemas_listing">
        {isLoading ? (
          <section class="preloader">
            <Puff color="red" />
          </section>
        ) : (
          Object.entries(blog_schema).map(([year, months]) => (
            <>
              <div classList={{ 'inverted': theme.lightmode, 'darkBackground': !theme.lightmode }} class="list_item ui grey label" style="font-weight:bold">
                {year}
              </div>
              {Object.entries(months).map(([month, posts]) => (
                <div classList={{ 'blackText': theme.lightmode, 'inverted': theme.lightmode, 'darkBackground': !theme.lightmode }} style="font-weight:bold" class="list_item ui grey label">
                  {month}
                  <br />
                  {posts.map(post => (
                    <a
                      onClick={() => handleClick(post)}
                      classList={{ 'bolded': currentPost.ref === post.ref, 'ui': true }}
                      style="padding-top:.5em"
                    >
                      {post.title}
                    </a>
                  ))}
                </div>
              ))}
            </>
          ))
        )}
      </div>
    </Gcard>
  );
}
