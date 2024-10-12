---
title: "March 2024 Update"
date: 2024-03-14
categories:
  - announcement
visible: true
image: "posts/2024/march_update/banner.png"
---

Hi to anyone lurking.

## Before and after blog change

I don't post that much, but have been working on the blog in a way that I think makes it a lot better.

Most notably, its not using a totally different generator. It uses [hugo](https://gohugo.io/). 

So now, the website currently looks like this:
![image](https://github.com/gtsteffaniak/blog/assets/42989099/a02cae0b-4d73-465a-a501-636c17f69309)

vs the original:
![image](https://github.com/gtsteffaniak/blog/assets/42989099/9fa47b6f-6fb3-439c-a255-2a718e918d3a)

## Quick thoughts on why the change

I think it looks better, but need a few tweaks still. I am enjoying the hugo html templating as well, but a little disappointed to find out the hugo templating cutom functioning everywhere out of necessity. I wish to keep the old site around as well, with maybe /old/ path, because I can't easily do the css art styles like I could before, so for now I have those couple posts hidden. Though I think I will try to find a way to add the custom js and back for certain articles.

Svelte was more enjoyable to develop with when it comes to the svelte files. But the downsides were apparent: updating npm , creating my own javascript that was subpar to actual generated html. I am happy with the switch and I am happy to get more experience with templating.

I actually updated the [gportal](https://gportal.link/) main site to use html templates -- it was easy to do and results in faster load times. Since it includes built in authentication service, it still has to be a hosted site, so I might as well use [go html templates](https://pkg.go.dev/html/template) to make it -- which is just as easy and intuative as svelte.

## Future expectations for the site

Ultimately, I just want this blog to look good, be feature rich, and not take any babysitting to keep it updated. All of these things are now possible thanks to hugo. I may even enable disqus comments soon, not that I think anyone lurking would actually want to post, but it would still be cool.

I plan to post more interesting posts with interactive data -- another reason I am looking into adding custom js to each post. 

I also wanted to post so I would have something here for 2024, now I do :)
