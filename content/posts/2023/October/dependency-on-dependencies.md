---
title: The doubled edge sword of modules when developing
date: 2023-10-19
categories:
  - technology
  - development
visible: true
---

> Note: In this post, I will use the term "external module" to refer to an
external package dependency that is imported into a program when developing.

## Introduction

When designing and creating projects in any language and framework there is a
choice that every developer has to make. What modules should you use? This
choice has implications for many different things. *Personally*, I find it is
best to exercise judicial usage of external models when developing for several
reasons.

No matter what language or framework you choose to make your world-changing
program in, the choice is constantly presenting itself. There are always going
to be corners that you would rather import an external module that already has
everything figured out - do you want to reinvent the wheel everywhere? Here are
a few examples where it might be obvious to use an external module:

1. For security-oriented features... using reputable external modules could
   ensure security.
2. Using "frameworks" to accomplish complicated plumbing. If something would be
   an entire project on its own, you obviously wouldn't want to double or triple
   the work you have cut out for yourself.
3. For API functions and interoperability with other programs. If an SDK or API
   framework is provided in the target language that you need to use, it doesn't
   make any sense to code it yourself.

The above scenarios are undisputed reasons to import external modules in my
opinion. As long as the authors of the external modules are reputable and the
modules are in active development themselves, I don't see any reason not to use
external modules.

The problem comes from every other scenario.

**My main point:**
> If you are considering importing modules for functions you could accomplish
yourself in a reasonably short time, it would be well worth the effort to do it
yourself instead of relying on external modules.

## Advantages of using external modules

Let's take a look at all the reasons you might want to use external modules.

External modules...

1. Initially save you time! Sometimes a significant amount of time.
2. Can do things very well. Sometimes much better than you could do something
   yourself in a short amount of time.
3. May add features over time without any effort needed from you.
4. Allow you to focus on the code in your program rather than being distracted
   by solving challenges unrelated to your project.

These are all massive benefits that mostly revolve around saving developer's
time. That is a very important factor in decision-making. However, there is a
lurking issue with this. It's like investing, the upfront cost and appearance of
implementing your solutions instead of using external modules may appear higher,
but I believe it is much lower over time.

So let's talk about the downsides.

# Disadvantages of using external modules

Let's identify some concerns I have with external modules.

External modules...

1. Introduce risk for dependencies versioning conflicts. As dependency
   requirements drift over time, your program may find itself in a state of
   dependency conflict because two external modules depend on different versions
   of a shared indirect dependency.
2. Introduce security risks that are out of your control. If a module has a
   vulnerability or other security-related issues, you must wait for your module
   to fix the vulnerability before your entire program can be fixed.
3. Limit your ability to tailor the functions to your needs. If you use
   dependencies to accomplish something, you are often limited to the features
   of the third-party external module.
4. Can introduce performance/stability challenges. You may not have control over
   how a function is accomplished in an external module. It's common that issues
   such as memory leak or performance degradations exists or is introduced in
   new versions, and as the user of a module, you may be powerless to control
   it.
5. Introduces more complicated compiling and install operations. Using external
   modules means downloading and installing them, which may not be a huge deal
   depending on the module's size. However liberal usage of modules adds up and
   can cause this to be a challenge. It may also quickly balloon your program's
   size (looking at you `Python`).

Finally, I can vent my frustrations with external modules. I find it frustrating
how common the pattern is: a developer introduces an external module to do a
simple task that they could easily accomplish themselves. Then, because of this,
the program is bigger and more bloated. However, the primary issue is over time,
as the additional complexities make the program more difficult to maintain.

I think the biggest offender to version conflicts and vulnerabilities is`NPM`.
When someone creates a project, they often use npm packages to accomplish the
most basic and mundane tasks: button styles, formatting strings like date/time,
loading bars/spinners, HTML formatting, etc. These are things that would
literally take 5 minutes to implement without installing additional packages. It
quickly brings a project to life -- it works and looks great for a MOMENT. Then,
in the weeks or months, it drifts into version conflict, accumulates
vulnerabilities, and receives updates that cause functions to not work the same
as they originally did. This requires extra time from the developer to identify,
refactor, and attempt to resolve each issue... constantly for the remaining time
the program exists. Eventually, the developer loses interest and the program is
no longer maintained... stuck with older versions that have vulnerabilities and
conflicts that prevent it from being renewed.

**sigh** ok, give me a moment.

Ok - so you get the picture? I mentioned `NPM`, but the truth is that every
language and program has this. NPM is just the most likely to fall victim for
several reasons. However, `Python` can have complicated PIP requirements, `Go`
can have a long list of modules to download for compile-time, `Java` can get
caught up on maven conflicts or broken builds from updates. Javascript
Frameworks like `React`, `Svelte`, and `Vue.js` can all be complicated to
upgrade from version to version. It's a challenge everywhere.

## Bottom line

Here's the point, using external modules saves you time as a developer up front.
You must consider and weigh the time savings with the possible time requirements
in the future to maintain the codebase. It may be hard to calculate the costs
for future maintenance, but I understand that. However, if you care for the
program that you are investing in to exist over time, these future time
investment costs must be considered.

My rule that I have come to is pretty simple: If I can mostly accomplish
something within 30 minutes on my own, don't even bother looking for an external
module. If It would take more than 30 minutes but is still something I *could*
accomplish fairly easily. In that case, use a module for now, but track it for
replacement with your implementation eventually. For everything else, I suck it
up and deal with the challenges and necessary evil of dependencies.

### Further reading

I hope you found this informative. I would love to give examples of these types
of issues I have run into. I plan to update with another post showing these
examples and how I fixed them quickly without external modules.

I didn't mention this, but it's often much easier to make your program without
modules. So, it's not always time-saving to use modules. I plan to give examples
on this and I will link it here in the future.
