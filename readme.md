# This is a blog

by Graham Steffaniak

### How this blog works

Originally I created my own blog generator which consumed markdown. It was simple and used svelte, I really liked how it looked and how it worked. But, there were 3 things I did not like about it:

1. Using svelte meant slow compile times and updating npm packages for a static site where security should not matter.
2. Each post was loaded by fetching the information after the page loads, which was slower than I liked and meant javascript was essential to viewing the site. This seems small, but it means reader modes features for browsers wouldn't work.
3. It was also more difficult than I wanted to make the generated content from markdown posts look good.

So, I looked into hugo, which is a go based static site generator. Honestly its more complicated that I would like. I am also not a huge fan of breaking every single piece of html down into gotpl chunks like most hugo themes do. But other than that, it solved all of my problems.

Hugo builds in a fraction of a second:

```
Start building sites …

                   | EN
-------------------+-----
  Pages            | 40
  Paginator pages  |  0
  Non-page files   |  0
  Static files     |  1
  Processed images |  0
  Aliases          | 12
  Sitemaps         |  1
  Cleaned          |  0

Total in 256 ms
```

And the `hugo serve` command builds and watches for changes. It's very similar to `npm run dev`, making the process for making changes and viewing them easy. I wish hugo was less complicated to configure. However, once you get everything setup, its just as easy to add posts.

### View the blog

All of this can be seen here, which uses github pages static site hosting for 100% free hosting:

https://gportal.link/blog
