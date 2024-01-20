# Blog
Interview test, volume 4 (2023)

![Image of the blog page](https://github.com/ndemia/demia.me-react/blob/main/public/images/blog_2x.png)


## Context
One more of my interview tests. The first time I did it, I didn't even know React! It was on my list of things to learn, and I hadn't arrived to it yet. Despite of this, they sent it to me and I decided to give it a shot. It took me several days of 'crash-coursing' React at the same time I was building it, which was not the best approach. It was stressful and I made a ton of mistakes. Nonetheless, and despite a lot of shortcomings, I managed to build most of it but it was not enough. So after a while and having learned a bit more about React, I had a need to tackle this project again.

## Design
Initial designs were provided, but they weren't consistent or accessible, so I redesigned it while still maintaining the original layout to align with the original requirements.

## Tech Stack
React, TypeScript, Tailwind CSS.

## Purpose and goal
After several months of studying and learning more about React, I was feeling comfortable enough to give this test another try. I aimed to build it completely this time around. I felt like I owed it to myself because I knew I could do it. And it would be a good experience too.

## Requirements
- Blogposts should be able to be created in the form on the left side of the Home page. An API endpoint was provided. All inputs should be required. This form should provide a user-friendly experience.
- On the right side there should be a preview of the latest 4 posts. There should also be a button to load the next 4 posts. Those posts should be appended to the current posts, not replaced.
- On the Blog page, there should be an archive of all the blogposts. These posts should be able to be paginated, so that the user can navigate to next or previous pages.
- The user should be able to navigate to the different pages.

## Spotlight
Without a doubt, the feature that took the most time (and perhaps coolest too) was the custom useFetch hook that could work with GET and POST requests. This includes the ability to use it from any place on the page targeting different API endpoints, and handling different types of responses.

## Obstacles
Creating the custom useFetch felt like a monumental task. From the start, my goal was to build it so that it could handle both types of fetch requests, but since I've never done it like this before, I started small just with GET requests. And from there, I built up. I enjoyed the flexibility of setting the fetch properties in an object that I could then change or update according to the type of request. It was also cool to see how the state could change, in different parts of the page, depending on the state of the fetch request.

Another due I had, at this point, was incorporating TypeScript to React. I was already used to working with plain TypeScript (as in my other projects), but after adding it to React it felt like a different thing for a while, with a complexity of its own. For the most part, TypeScript inferred everything amazingly well, but there were moments where dedicated extra steps were needed or new ways in which to cast types, to narrow them. Some new errors also came up, especially when working with specific objects' keys, but those were solvable with just a quick online search.

Building the form was the easy part, and handling the data and error validation was the most complex part. I learned that I could manage both the inputs' values and form errors with objects, which was an approach I had never done. It was pretty cool and straightforward. Originally, I was not aware of certain limitations that the API demanded for each of the input's values. The documentation didn't say anything about them, so it was a matter of trying each one to get an error response. That's how I found out about the 255-character limit for text inputs, the category input can't be empty, and the maximum file size was 3MB. I like the result, and the errors show appropriately.

Lastly, not having had enough with React and TypeScript, I decided to throw Tailwind into the mix. I was very curious about it, after having tried Styled Components. Since it was my first time with it, the learning curve was steep, and it took a lot of time to get the hang of it. For every property, I was reading the documentation about how to write it. That made progress slower. For this small project, I'm not sure of the benefits of Tailwind, as I found myself several times using arbitrary values. It's certainly interesting, so I'll continue to explore it.

## What I learned
A ton of things! Ok, perhaps not THAT much, but it certainly feels like it. After finishing, I checked the original code I sent for this test, and I could see a lot of things I had done wrong. Which makes sense because, back then, I hadn't had any experience with it. In addition, I'm already seeing things I can improve in my website which I also built with React, so that means I made progress, yay! I'm intrigued about the idea of custom hooks, so I'll be sure to try that more in the future, if possible. I'm still trying to understand some of the concepts behind React, but I got more comfortable with it, for sure.
