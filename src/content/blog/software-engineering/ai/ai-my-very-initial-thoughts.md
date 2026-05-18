---
tags:
  - software-engineering
  - ai
title: Beyond the hype, how can I use AI?
description: My very initial thoughts on AI and what parts can be useful for me beyond all the noise and marketing.
pubDate: 2026-05-17
heroImage: ./snake-oil-salesman.jpg
---
AI. The new buzzword, the remedy for all things in the world. We need AI-powered everything, everywhere. That's what the new generation of (dangerously mega rich) snake oil sellers say. Tech bros have poisoned AI with their dirty hands. But can I clean the poison from the blade of this tool, filter through the smoke of marketing and find something valuable that helps me grow as an engineer? This is what I would like to explore further and this post is an attempt to understand where I am in this journey and what I think my next steps are. With all the ranting out of the way (for now), let's get to it.

## What is my experience with AI?

I think I am in an interesting situation where I work as a software engineer but my use in my day to day job has been very limited. We haven't been forced to use AI and getting some licenses has been a slow moving business.

So most of my use of AI has been via browser interactions and only recently have I tried to dig a little bit deeper into using CLI tools that can read the context of a repository (and got a personal Claude subscription for a month to try things out).
### Enhanced search engine

I find myself relying more and more on the small AI overview that you get in different browsers when you search for something. I still find myself going and checking the sources but I would say all the tools I have tried are decent at summarising what can be found on the internet. As with reading articles there is still judgment to be made as not everything that is published is useful (and Copilot got me once there by inventing GitLab variables that didn't exist in their documentation).

The main advantage I see in using the summaries is that AI will read through links faster than me and reduce noise and time I spend searching. The small price to pay is that I might miss useful bits of information that are not properly read by the model but so far I haven't found any instances where doing a manual search was significantly more helpful than letting AI give you a small summary with links.

There is really no argument against having at least a brief look at the summary so I plan to keep doing that.

**Tools and plans**: Copilot on Edge, Gemini on Chrome.
### Write changes in small repositories

I am using this website as a training ground to understand how I can use AI embedded in the context of a repository. I have been sceptical about the ability of AI tools to write code but I have been surprised recently by the potential on this front.

I have used it to make [a simple change](https://github.com/AlvaroAlonsoFlor/alrevolutum-website/commit/fadea399ef43bfc476f5c032c999ca112d959e06#diff-3cf412773eb1beeb42c2152012e67409a21d08db13cc205e58393a327fc52ce3) for this blog. I am not super familiar with [Astro](https://astro.build/) specific syntax and it was fairly low risk for me. I used the [following prompt](https://github.com/AlvaroAlonsoFlor/alrevolutum-website/blob/fadea399ef43bfc476f5c032c999ca112d959e06/tasks.md), which I accidentally committed 🙃 but now is handy for this post, and it did a decent job. I had to trim some of the tests as they were not very valuable. I had less luck with the [second task](https://github.com/AlvaroAlonsoFlor/alrevolutum-website/blob/fadea399ef43bfc476f5c032c999ca112d959e06/tasks.md#task-2) as I think the prompt was too broad and the implementation forgot to actually take into account that this is a static site.

I did a second run of that task with a different prompt. I tried being a bit more specific and using a better model (Claude Opus 4.7). I had better results and Claude was able to generate a decent implementation that I could review and make minor amendments to (see the [PR](https://github.com/AlvaroAlonsoFlor/alrevolutum-website/pull/24)). One thing that surprised me is that it tried to add some functionality that was not needed around special link syntax from [Obsidian](https://obsidian.md/) (I normally write markdown before moving it to the repo and publishing).

I plan to experiment with this more for small tasks keeping an eye on any added complexity.

**Tools and plans**: Claude Pro (Sonnet 4.6, Opus 4.7)

### CVE analysis

I have recently started to triage Common Vulnerabilities and Exposures (CVEs). This is a tedious part of my role, where I need to get through quite a few vulnerabilities and assess the impact that they might have on our applications. Some of them are straightforward and clear but things get trickier when you need to analyse obscure vulnerabilities with very little detail that might/might not affect base images. For example I recently had to look at one vulnerability that exploits colour profiles in a C library that is bundled with all Linux distributions.

I have used this to help me search and understand how CVEs could be exploited and if certain technologies or languages are affected. I would write a prompt pointing to the CVE URL, describe some of the technologies and libraries that I wanted to check for impact, and ask it to provide me with links that act as evidence.

I had mixed results with this approach. Model matters a lot and the results I got from Copilot were significantly worse when compared with Claude. In general, when it worked it was useful to dig deeper into vulnerabilities with very vague descriptions. However, I found 3 things that were particularly concerning:
1. Sometimes I get explanations without references to verify the claims, and follow up questions to list the references take you nowhere useful
2. AI provides references that can't be used as evidence to argue that you are not being affected by a vulnerability
3. The reasons given to dismiss vulnerabilities were plainly incorrect (this was with Copilot)

This meant that I still had to spend significant time trying to understand the problem better so the time savings were more limited (although it helped me to contextualise vulnerabilities better).

The main risk I see here is that the confident tone the AI uses can sometimes give you a false sense of security that disappears when you look at the references it provides you with. I will still be trialling this but I know I need to be extra vigilant.

**Tools and plans**: Copilot (free), Claude Pro (Sonnet 4.6, Opus 4.7)
### Learning

I used it to come up with a plan to help me dig deeper into the [State Machine pattern](https://refactoring.guru/design-patterns/state) and [Webflux](https://docs.spring.io/spring-framework/reference/web/webflux.html) and provide me with sources. I had to iterate a bit and discard a lot of unnecessary context but it helped with the process of brainstorming. It helped me with:
- Getting through decision paralysis giving me a starting point with a plan that I could amend
- Provided me with a limited number of sources that I could work on. When there is so much noise this helps me with focus.
- Produced some code and test examples that I could use to learn/modify

I am planning to keep using this more when I need a more structured learning plan.

**Tools and plans**: Claude on the free plan (It might have Sonnet 4.6 or earlier).

### Rubberducking / bouncing ideas

I am using this blog post to rubberduck ideas, which has been the most thorough use of AI I have made so far. The process I have followed is:
1. Draft my ideas with no AI
2. Ask for specific feedback (Like you would do with a human)
3. Make the changes myself and ask again for feedback
4. Repeat until I am satisfied

This is a sample prompt to illustrate how I was trying to get answers:

```md
You provided with a review for ai-my-very-initial-thoughts.md. I have made some more changes but I've got a couple of thoughts. I want you to:  
  
- Help me with the new sections in line 19, I am unsure about how to structure them. I am unsure of what structure feels more natural  
- Compare your previous analysis with the changes already made  
- Do you think I should wait until I have got a little bit more data and experience with using AI and add that knowledge to the current WIP post?  
- Bear in mind this post is mostly to organise my thoughts and help me processing where I am and where I want to go. External audience is secondary 
- Read what I am interested in exploring, summarise that and tell me if you have got any other ideas on what to explore  
  
With all this produce a rubberducking-answers.md document
```

I had some helpful feedback on how to structure the group of sections you are reading now. That was where I was more specific. Whenever I used a more vague prompt like `Read what I am interested in exploring, summarise that and tell me if you have got any other ideas on what to explore`, what came back was very generic and not very useful.

I think there is potential there if I am able to narrow prompts down. I can also see how this could be good while writing code. For me one thing that is important is not letting AI write for me. The process of writing is important to internalise thoughts, both technically and in blog posts like this. If I take that out I feel I am cutting out the learning and growing that come from doing the thing yourself. And how can I grow as a person if I don't do the thing? Reviewing is a different activity from the act of writing, and I need both to grow. This is what I feel some people overusing AI don't get.

**Tools and plans**: Claude on the free plan (It might have Sonnet 4.6 or earlier).

### Proof reader/text editor (honorable mention outside of software engineering)

I have used this outside of work/engineering to review pieces of text I have written, mostly to get a syntactic analysis and minor corrections. That was generally good although I have noticed some strong opinions on hyphenated words and trying to "correct" stylistic decisions. It saved me some time from having to pull somebody in (normally my wife) to do some corrections and means that my loop for publishing can be slightly faster now.

So this is a flow that I plan on keeping without any significant changes.

**Tools and plans**: Claude (free and paid Sonnet 4.6), ChatGPT free plan.

## What I am interested in exploring

From the tools I have tried, Claude seems to be the one with more potential to yield some results, so this is where I will likely focus over the next few months. Apart from what I am already trying out and plan to keep doing or dig deeper into, I have a few ideas that I would like to explore.

I want to know how well Claude handles navigating larger repositories. I would like to try it at work and see if it can do the following things:
- Understand the codebase and help by writing diagrams. Bonus points if it is able to produce something decent with diagrams as code (e.g. [Mermaid](https://mermaid.ai/open-source/intro/))
- Help me navigate the codebase quicker. Can I get Claude to come up with a plan I can iterate on for a specific piece of work (similar to what I have done to learn concepts)?
- How useful is Claude to help break down significant refactors and apply best software engineering practices? It is kind of related to the above but focused more on its capabilities to reduce tech debt (which is paradoxical, given that many people seem to be using AI to write code and produce insane amounts of tech debt)
- Help me scope tickets. This is one of the things that I don't enjoy much so I wonder if it could take some of the boring parts out of it. What I would like is to get the requirements and a few scattered thoughts and then get some assessment of possible pitfalls or additional ideas

The other main area, which is still a work in progress in my head, is trialling something similar to pair programming sessions with Claude Code. It feels like an iteration of the rubberducking I have been already doing but what I want to find out is:
- Can Claude Code be a decent driver/navigator? I have always felt pair programming is useful to find issues earlier, make decisions quicker and get code in a better state before the first review. Having the chance to do it on demand at any time and in smaller chunks would be great, even if it does not replace (and I don't think it should ever do) pairing with humans
- Can I use Claude to check in after each commit as an early reviewer? What I would be looking to get out of this would be fewer blind spots before a human review
- Can it help me break decision paralysis when I am unsure which way to take?

## What I think I will never use AI for

- Write important documents for me. Writing is part of the thinking process for me, outsourcing that means I am cutting down on what I want to express.
- Write code that reinforces my foundations as an engineer. I prefer to spend a little bit more time writing the code and understanding what I am doing. This provides me with an instinct for how to approach problems via experience and repetition, rather than outsourcing that to AI and "vibing" with the review. The moment you are not writing code, you start to forget problems that come with the implementation. And it echoes an issue that I have perceived in organisations where there is a clear distinction between developers and architects. This leaves a vision of applications "on paper" that does not consider the challenges of the implementation, resulting in unrealistic timelines or a considerable amount of tech debt that makes future change slow and more difficult.

As a final note, I don't think the use of AI should replace reinforcing core concepts and I'm not going to invest all my time in writing prompts across different models. There are other technical areas where I would rather reinforce my knowledge. AI experimentation is one learning thread, not meant to replace reinforcing core concepts like design patterns or deeper tooling expertise (the Java ecosystem, Kubernetes). I don't think there are any shortcuts to learning and I am not intending to take any. Whoever tries to sell me that immediately gives me the vibe of being intoxicated by drinking too much snake oil.