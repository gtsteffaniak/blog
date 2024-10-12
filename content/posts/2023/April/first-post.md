---
title: First Post!
date: 2023-04-29
categories:
  - announcement
description: An introduction to the blog
visible: true
---

![](https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Activities/Party%20Popper.png)

Note: This blog is mainly for development purposes.

## Summary

I have created this blogs website to accomplish a few things:

1.  **Information Sharing**
    - I wanted a place to create posts and information for my purposes, but also for public references (sharing with hyperlinks on websites), but have never had somewhere that was both easy to create and also purely my creation.
2.  **Developer Creativity**
    - This website allows me to express my interests in certain technologies by posting about my discoveries, how-tos, and analysis.
3.  **Personal Projects**
    - I also can experiment and create web-framework-related ideas with actual visible usage.

### About the site

This website is a **Github pages** website, meaning its static content is served from my [github blog repo](https://github.com/gtsteffaniak/blog). Since this repo is public you can take a look at how it works and maybe find inspiration yourself.

I think it's the best solution to what I am looking for. I can create posts easily by :

1.  Add a new `md` post, which I have decided to put in a `posts/` directory on GitHub.
2.  Update the `schema.yml` to update the static website to automatically add the page to the html/javascript website (no rebuild needed).
3. That's it! A new post!

Since it's on GitHub, it has history and version control. Another concern I had was putting my blog somewhere that would be forgotten or eventually discontinued. Since GitHub is trustworthy and reliable (it won't suffer outages), this shouldn't be an issue. I am also leveraging a free functionality of GitHub pages for basically zero-touch configuration.

However, to be clear, I don't simply use GitHub pages. I also host my website on https://gportal.link which is a website I have running on [Vultr](vultr.com) for $6 a month which contains an Nginx reverse proxy and a few hosted website components such as a golang authentication server. For my peace of mind, I keep that repo private! Sorry :)

### What about you?

So, perhaps I will allow comments one day, but there's not much interaction yet. Stay tuned!

### Final thoughts

Everything I create is in the spirit of learning the best way to accomplish functionality with the following criteria always in mind:

- Choose the **simplest** option that satisfies your requirements.
- Choose what will be **easiest** to maintaintain.
- Choose what **allows configuration** to meet your changing needs.

This method almost missed the mark on the final bullet point, because solely using markdown can limit my formatting. But if I need more formatting in the future, I can use javascript via Svelte to do so.

However you stumbled across this blog, I hope you learn something new and find it as fun as I do to create.

Here's a snapshot of what the blog looks like right now.. a bit sad. Hopefully better soon:

![](https://i.imgur.com/D6B2xip.png)
