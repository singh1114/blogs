---
title: Create react based blazingly fast blog using Netlify CMS and Gatsby
date: 2020-03-20T22:29:04.190Z
image: 'https://i.imgur.com/Dq9owl5.png'
published: true
tags:
  - blogging
  - seo
  - netlifycms
  - gatsby
description: >-
  Create awesome react based blog using Gatsby and netlify CMS easily by
  following this post.
---
![Create a React blog using Gatsby and netlify CMS](https://i.imgur.com/Dq9owl5.png)

I have been writing posts on a [Jekyll and GitHub pages blog](https://ranvir.xyz/blog) since a long time. Some weeks ago, my colleague shared the Gatsby blog that he created for his personal blog.

He has also written a good post on [JavaScript Proxies](https://www.arbazsiddiqui.me/javascript-proxies-real-world-use-cases/) that you will enjoy reading.

Whenever I see a new website, I immediately head over to Google's pagespeed insight to find out the speed of the page. I was astonished by the speed that the page was able to achieve.

![PageSpeed numbers for a React based Gatsby blog](https://i.imgur.com/UsKCfsh.png)

Honestly speaking I was never able to reach to those numbers on the Jekyll blog.

So, I started working on my personal Gatsby blog. This post will contain all the details which I happen to do to make this blog to the stage it is currently at.

Also, currently I don't have the concept of private posts on this blog, I am unable to keep it private when it is clearly not finished. You have to bear with for this.

## Final result

The final blog after this series is going to be [present on this URL](https://peaceful-mayer-ecb11a.netlify.com/).

## Prerequisites

I don't think there are any prerequisites required to start a blog using Gatsby and Netlify CMS, It is fairly easy to set up if you know how to make changes and use basic GitHub.

The basic things required for this specific version of post are:

### Domain Name

I already had a domain name which I was already using. It will still work if you don't have it though. 🙏

### GitHub Account

To follow this tutorial, you will need to have a GitHub account where the code for the blog can reside. There are other ways to keep the code, but I think GH provides the easiest way to maintain your code.

### Netlify Account

You will also need account on Netlify so that you can deploy and 

The rest of the stuff we are going to figure out during the course of the post.

Let's begin

## Choose a theme

You can choose from a list of themes that are available. Most of them has `deploy on Netlify` button which will deploy it directly on Netlify and can save the code to your Netlify Account. Next time you make any change to your code, netlify will automatically detect the change and deploy the change.

I choose the basic [gatsby-theme-blog](https://www.netlify.com/with/gatsby/). Just click on the deploy button and choose `Connect to GitHub` the code and it will host the code on GitHub. Finally, choose the name of the Repository that you want to contain the code in.

## Making the changes

Once your site is deployed on `something.netlify.com`, you can clone the code locally and start making the changes.

```shell
git clone https://github.com/your_repo/repo_name
```

For more information on various [git commands check this post](https://ranvir.xyz/blog/basic-commands-in-github/).

