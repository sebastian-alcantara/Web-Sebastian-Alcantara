---
layout: post
author: "Sebastián Héctor Alcántara"
title: "Migrating portfolio and blog to GatsbyJS - Part 1"
date: 2021-03-23
icon: "☕️"
categories: blog
keywords:
  - blog
---

Hi there! I have been ausent for a while now.

I would like to document here about migrating my portfolio and blog from vanilla JavaScript and Jekyll to GatsbyJS.

<!-- more -->

At the beginning of 2020, when the Covid-19's pandemic started unfolding, we had our beautiful daughter.
As many people, our family (wife, boy and girl) spent a lot of time together.
Our kid with remote schooling, and the adults taking kare of our baby while working also remotelly.

Today I decided to rebuild my site almost from scratch.

Its present iteration was built in vanilla JavaScript (the portfolio bit), while the blog was built with Jekyll, using the Minima theme (which is awesome).

Since I like React quite a bit, and I have created a simple project with GatsbyJS recently, decided to rebuild my personal site using it.

This is not a mamooth migration in any way, but I thought it would be nice to write about the process and some differences I might find.

So, to the little differences I found today:

## Excerpt separator

In Jekyll, you could declare an excerpt separator directly in your post's header.

As far as I know, you can't do this in GatsbyJS.
Instead, you have to declare the excerpt separator in your **gatsby-confgig.js**, like so:

```javascript
{
  resolve: `gatsby-transformer-remark`,
  options: {
    excerpt_separator: `<!-- more -->`,
  }
}
```

You can the use this excerpt separator like you would with Jekyll:

```markdown
This is a sample excerpt.

<!-- more -->

And here is the rest of the arcticle.
```

## Syntax highlighting

While Jekyll has built in support for syntax highlighting, GatsbyJS does not.

I decided to go with [gatsby-remark-prismjs](https://www.gatsbyjs.com/plugins/gatsby-remark-prismjs/), which is neat:

```language-none
npm install gatsby-transformer-remark gatsby-remark-prismjs prismjs
```

Next, in your **gatsby-config.js**:

```javascript
plugins: [
  {
    resolve: `gatsby-transformer-remark`,
    options: {
      plugins: [
        {
          resolve: `gatsby-remark-prismjs`,
          options: {
            // These are only some default options values, there are tons of options:
            classPrefix: "language-",
            inlineCodeMarker: null,
          }
        }
      ]
    }
  }
]    
```

I reccomend checking out it's [documentation](https://www.gatsbyjs.com/plugins/gatsby-remark-prismjs/), which is great.

It is **required** that you pick a PrismJS [theme](https://github.com/PrismJS/prism/tree/1d5047df37aacc900f8270b1c6215028f6988eb1/themes), or create your own. You can preview these themes [here](http://prismjs.com/).

I'm just repeating the documentation now, but to load a theme, just require its CSS file in your gatsby-browser.js, like so:

```javascript
require("prismjs/themes/prism-okaidia.css")
```
That is the one I'm using here.

Finally, to use this super awesome highlighting in your markdown, do the following:

```markdown
 ```javascript
  // In your gatsby-config.js
  plugins: [
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-prismjs`,
        ]
      }
    }
  ]
 ```
```

This is all for today, now I should continue the migration.

This will continue in Part 2, cheers!