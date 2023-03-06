---
title: Designing a centralized site for writers, on community
date: "December 7, 2021"
---

I recently read through visakanv’s [masterlist](https://www.visakanv.com/blog/communities/) about online communities, and it’s given me a lot to think about in regards to the hypothetical writing site that I outlined in a [previous post](https://unoptimal.com/essays/site).

The main takeaways I got are that I probably wouldn’t want an open site, and that I would need moderators.

The [evaporative-cooling effect](https://web.archive.org/web/20101012105003/http://blog.bumblebeelabs.com/social-software-sundays-2-the-evaporative-cooling-effect/) stands out as a big reason for this. It states:

>*“If anyone can join your community, then the people most likely to join are those who are below the average quality of your community because they have the most to gain. Once they’re in, unless contained, they end up harming the health of the community over the long term.”*

To put it more bluntly, this Reddit user says:

>*“If you don’t decide who you want in your community, and enforce it, the bottom-feeding fuckers will decide it for you – by driving away the golden geese.”*

>*“I’ve come to believe that it might never be solved, and that the only way is to keep starting new close-knit groups with the highest quality people you know, and have very strict rules about who gets to come in. Sounds elitist? Fuck you, you have to have standards if you want to have something better than what everyone else has.”*

The solutions or workarounds to the evaporate cooling effect seem to manifest in gatekeeping — [censorship and moderation](https://www.lesswrong.com/posts/tscc3e5eujrsEeFN4/well-kept-gardens-die-by-pacifism) as explicit forms of this.

But what I find far more interesting is social gating, which are, as the author of the evaporate-cooling effect article writes, “mechanisms that allow participants to self-select out of the group.”

Think about the epistemic rigor needed to write on [LessWrong](https://www.lesswrong.com/). Think about the 4000+ word blog posts on [Wait But Why](https://waitbutwhy.com/). You need to care enough about those topics to engage with the content, which makes for a better audience of people.

Paul Graham echoes a similar sentiment in an [essay about Hacker News](http://www.paulgraham.com/hackernews.html):

>*“So the most important thing a community site can do is attract the kind of people it wants…a site aiming at a particular subset of users has to attract just those—and just as importantly, repel everyone else. I’ve made a conscious effort to do this on HN. The graphic design is as plain as possible, and the site rules discourage dramatic link titles. The goal is that the only thing to interest someone arriving at HN for the first time should be the ideas expressed there.”*

So dealing with the evaporative cooling effect is priority number one. But there are a few other things to consider. In the same essay, Paul Graham shines light into how comments, submissions, and arguments can affect online communities — which seems particularly relevant to a writing site.

On comments:

>*The most dangerous form of stupid comment is not the long but mistaken argument, but the dumb joke.*

>*And since it’s hard to write a short comment that’s distinguished for the amount of information it conveys, people try to distinguish them instead by being funny. The most tempting format for stupid comments is the supposedly witty put-down, probably because put-downs are the easiest form of humor.*

>*Comments have much more effect on new comments than submissions have on new submissions. If someone submits a lame article, the other submissions don’t all become lame. But if someone posts a stupid comment on a thread, that sets the tone for the region around it. People reply to dumb jokes with dumb jokes.*

On submissions:

>*The most dangerous thing for the frontpage is stuff that’s too easy to upvote. If someone proves a new theorem, it takes some work by the reader to decide whether or not to upvote it. An amusing cartoon takes less. A rant with a rallying cry as the title takes zero, because people vote it up without even reading it.*

>*Hence what I call the Fluff Principle: on a user-voted news site, the links that are easiest to judge will take over unless you take specific measures to prevent it.*

On arguing:

>*Agreeing tends to motivate people less than disagreeing. And when you agree there’s less to say. You could expand on something the author said, but he has probably already explored the most interesting implications. When you disagree you’re entering territory he may not have explored.*

>*But though it’s not anger that’s driving the increase in disagreement, there’s a danger that the increase in disagreement will make people angrier.*

--

There’s a lot to take in here; more than I initially thought. But that’s a good thing. These are important problems and design choices that I would have to address sooner than later.*

Like I said earlier, minimizing the evaporative cooling effect seems like priority number one.

So: who am I trying to attract? What niche am I trying to fill? How can I gear the site and its features towards those people specifically? What Social Gating mechanisms would I use?

I think I’m trying to build a (tight) community of writers, particularly younger writers who lack a platform and feel like their writing is all over the place. I think implementing better editing and collaboration features would be welcome. As for Social Gating mechanisms, I wonder how effective a quota of giving feedback before publishing posts would be. These ideas are coming off the top of my head; there’s definitely more to think about here.

Moderating comments, submissions, and arguments is also an important issue. Paul Graham outlines a [disagreement hierarchy](http://www.paulgraham.com/disagree.html), summarized as the following (from least convincing to most convincing):

>0. Name-calling
1. Ad Hominem
2. Responding to Tone
3. Contradiction
4. Counterargument
5. Refutation
6. Refuting the Central Point

I wonder what a comment thread where users have to explicitly state what level of disagreement they’re using would look like. In practice, I can see how this can seem extremely annoying and obnoxious. But I also imagine that we’d see way less name-calling, ad hominem, and responding to tone comments.

I’m also interested in thinking about better ways to format comments. Reddit’s tree-type comment format seems to be the best for now, but I find that oftentimes, popular comments get more popular (often if they’re commented earlier), and quality comments can be lost at the bottom of threads. I don’t have a better proposal, as of yet.

(A related idea is limiting the amount of upvotes a user has per week, to give each upvote more weight when used.)

I think fluff is less of a problem for the type of site I’m envisioning, because it’s not a news-based, Reddit-esque site. In any case, Paul Graham lists two techniques for minimizing fluff: banning obviously off-topic content, and making clickbait-y or sensationalized post titles more matter-of-fact. Graham also advocates for a way for users to see changes to their submissions, to keep editors honest. This could be a useful thought for the future, so I’ll leave it in.

The last idea I wanted to brush up on is community size. As [this article](https://hunterwalk.com/2018/07/14/communities-can-grow-too-quickly/) put it, “figuring out the carrying capacity of your current community, how to onboard new users and manage growth is a set of fascinating design decisions.”

One cool idea that came up in the [comments](https://news.ycombinator.com/item?id=495053) of one of Graham’s essays is “to break the community down into neighborhoods of ~150 people.” This way, interactions are more personal, and the overall site doesn’t feel as diluted.

This got me thinking: what if you broke people into small circles, where they can share writing and discuss amongst each other, and then shuffle them into new circles every few weeks (or months, or whatever time period you desire)? Of course, this idea opens up a whole bag of worms, but it might be worth mentioning.

At the end of the day, I think the conclusion I’ve come to is that it’s a bit naive to think I can start a community alone and hope it naturally grows.

If I want — to quote myself — a “safe and encouraging environment…filled with the highest class of people who selflessly and genuinely encourage others in their creative endeavors”, then it seems that I’d have to first start out with some of those people in the [highest class](https://twitter.com/paulg/status/1424325492811960322), and then selectively go from there.