---
title: Why you should not use Google Optimizer and How to use if you want to?
date: 2020-03-26T20:39:45.381Z
image: 'https://i.imgur.com/RaWmJf3.png'
published: true
tags:
  - blog
  - googleanalytics
  - seo
  - marketing
description: >-
  Using Google optimize to show a different version of my website and why
  shouldn't you use it.
---
![Using Google Optimizer at your own risk](https://i.imgur.com/RaWmJf3.png)

How would you like to show a modified version of the same webpage to diverse users differently?

What we want to achieve in the post is to change the structure of the page dynamically without you making any change to your code( False promise).

## Back Story (You can skip it)

I recently launched another version of [my blog using Gatsby](https://blog.ranvir.xyz/react-blog-using-netlify-cms-and-gatsby/).

So the idea behind creating another version of the blog was to slowly move everything to the new version without really affecting the traffic over my [Jekyll blog](https://ranvir.xyz/blog).

And why I want to move is already there in [my blog using Gatsby post](https://blog.ranvir.xyz/react-blog-using-netlify-cms-and-gatsby/).

Also, I wanted to check which version of the website users like the most.

As the [main blog](https://ranvir.xyz/blog) contains most of the posts and does get a fair amount of traffic, I wanted to move a few users from the old website to the new one and check if the performance was improved even a little.

Before jumping into any conclusion, I wanted to validate my theory with numbers.

## Performance metric I was looking to improve

The key metric that I was looking to improve was the `bounce rate`. One of the pages for which I was getting maximum page views was having a high value of bounce rate( 88%).

I settled on the following strategy.

```bash
Let,
   x = Bounce rate of the page on Jekyll blog
   y = Bounce rate of the page on React blog

If, y < x - 0.25x:
   move this page to React.

Else:
   No need to move.
```

This means if the bounce rate of the new website comes out to somewhere around 65%, I will move the page to the new location with applied redirects.

But still, there was a problem, as I was not running my own `nginx`, I was not able to apply any of the [routes forwarding techniques](https://en.wikipedia.org/wiki/Virtual_routing_and_forwarding) available in `nginx`.

My only option was to choose another service, I searched online and came across [Google optmize](https://optimize.google.com/).

It was fairly easy to understand and you can get started by using your existing Google account.

Once you are in, it will ask simple things to complete the setup.

The first thing that you can do is to `Create an Experience`. Google Optimize provides 4 options to choose from.

![Create Experience with Google optimize](https://i.imgur.com/bPf7DyR.png)

Before heading in to choose which experience you want to add, you will have to add the [Google Optimize chrome extension](https://chrome.google.com/webstore/detail/google-optimize/bhdplaindhdkiflmbfbciehdccfhegci) which will allow you to make changes to the website.

The one that I wanted to use was the `Redirect/ Split URL` test. You can choose the one that suits your situation.

[Read this post for more details](https://support.google.com/optimize/answer/7012154) to choose from all the options.

## A-B Test

![A/B Testing using Google Optimize](https://i.imgur.com/pX1JDYq.png)

[A/B testing](https://ranvir.xyz/blog/read-these-6-tips-to-take-advantage-of-a-b-testing/) is a type of testing where you create two or more versions of a single webpage and show modified versions to each user.

Google Optimize allows you to split traffic.

Splitting the traffic means that each user who lands on the targeted webpage will either one of the versions that you have specified according to the traffic split that you have defined.

If you have selected 50-50 split, nearly half of the users will see one result and another half will see the other.

> If you try to access the targeted web page, you will always see the same version for some time, no matter how hard you try. It takes some time to start triggering the next version and once that is live, you will see that version for some time( Most probably the traffic is split on the basis of time).

Optimize makes it fairly easy to create two or more versions. It loads the targeted webpage inside the given optimize environment so that you can apply CSS and make required changes on the fly.

![Direct code change panel using Google Optimize](https://i.imgur.com/XEojyWu.png)

Optimize will then store all the versions and wait for the users to land on the targeted page.

## Redirect Test

![Redirect testing using Google Optimize](https://i.imgur.com/SfmzDsp.png)

Redirect/Split test was the one that I wanted to choose. As I have already specified what this means, I will skip explaining it in more detail.

You will know when you want to use it when you have two versions of the same webpage on separate URLs.

## Multivariate tests

![Multivariate Testing using Google Optimize](https://i.imgur.com/DEEaTzj.png)

A multivariate test is a type of A/B testing where you makes 2 or more combination of changes deployed together.

I haven't really understood the real use case of this test.

If you have used it before, do let me know.

## Personalize Test

![Personalize test options using Google Optimize](https://i.imgur.com/X1pjqQt.png)

Personalization Test will show different versions of your webpage to different people depending on their personality.

You can create separate versions as we do in A/B testing and target different versions with different demographics, devices and many other options.

## Turning the test ON

You can turn the test `on` by adding the optimize key to your [Google Analytics](https://ranvir.xyz/blog/google-analytics-for-search-engine-optimisation/) string.

```javascript
    ...
    gtag('config', 'UA-*****-*', { 'optimize_id': 'G**-******'});
```

Once you are live with your `optimize_id` change. You will see the traffic being diverted and data available in the Optimize account.

Although it takes some time to compute the real data and come up with proper statistics.

You can keep running a redirect test for 3 months.

And after you get the correct result back you can decide what you want to do with your web page.

## Some numbers that will stop you from using Google Optimize

I am a big fan of checking Google Page Speed statistics after every addition of dependency in my code.

And as `Google Optimize` is an added dependency, you might want to check the changes in the behavior of your site.

The changes that I saw were pretty drastic.

```markdown
**Old website page speed Score without optimize tag**

- Mobile score: 71, web score: 97

**New website page speed scores**

- Mobile score: 86, web score: 99

**Old website Score with optimize tag**

- Mobile score: 55, web score: 95
```

You can already see that there is a whole lot of difference in the page speed before and after the addition of the Google Optimize tag.

I will leave the decision making step to you.

You can make your own judgment whether you want to use Google Optimize or not. For me most of the visitors are Desktop, so I can totally ignore the mobile visitor and keep it that way. Still, after checking those results, it took the optimize tag away and went back to running my dumb blog.

## If not Google Optimizer, what?

I still haven't discovered the solution yet. I will update this when I get a real answer. Also, let me know guys if you get to any.

Anyway if you can afford to have hire a developer and you have the control over your server, you can implement such things with great ease on the server level.

<iframe width="560" height="315" src="https://www.youtube.com/embed/1bkpuvyW_48" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>