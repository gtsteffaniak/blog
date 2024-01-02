# This is a blog

by Graham Steffaniak

### How this blog works

I believe I have come up with a unique approach to building this blog. My approach is very simple, you can read about it here: `https://gportal.link/blog/?posts/2023/April/first-post.md#about-the-site`

Take a look at the url above and you can see a bit how this is unique. Lets break apart that URL, there are 3 main part:

`https://gportal.link/blog/`+`?posts/2023/April/first-post.md`+`#about-the-site`

1. The base URL `gportal.link/blog/` is actually a nginx redirect for the static github pages site `https://github.com/gtsteffaniak/blog/`.
2. The second part `?<route_path>` is my static site magic for routing, requiring zero backend routing. This allows me to have url paths without querying the backend for the specific paths. These routes instead query javascript to fetch the path based static data. You can actually navigate these filesystem paths on github right here -- all content is available to the website.
3. The last part `#about-the-site` showcases the site is fully anchor link compatible -- You can link to specific parts of each post using hash links. 

All of this can be seen here, which uses github pages static site hosting for 100% free hosting: 

https://gportal.link/blog
 
