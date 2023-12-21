
export let about = {"title":"About Me","ref":"about"}
export function getCurrentPost(blog_schema) {
  let url = window.location.href.split("#")[0];
  let path = "";
  if (url.length > 1) {
    path = url.split("/?")[1];
    const result = getPost(path, blog_schema);
    return result;
  }
  return about;
}

export function setCurrentlyActive(p) {
  const hash = window.location.hash; // Retrieve the current hash
  const nextURL = "?" + p.ref + hash; // Append the hash to the URL
  const nextTitle = p.title;
  const nextState = { additionalInformation: "Updated the URL with JS" };
  window.history.pushState(nextState, nextTitle, nextURL);
  window.history.replaceState(nextState, nextTitle, nextURL);
  return p;
}

export function getPost(ref, blog_schema) {
for (const months of Object.values(blog_schema)) {
    const post = Object.values(months).flat().find(e => e.ref === ref);
    if (post) {
      return setCurrentlyActive(post);
    }
}
return setCurrentlyActive(about);
}