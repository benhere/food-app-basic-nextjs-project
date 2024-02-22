
# Github link - https://github.com/mschwarzmueller/nextjs-complete-guide-course-resources/tree/main

# use of 'layout.js' file - the idea behind 'layout.js' in NextJs is that they act as wrapper around pages.

# If we had a nested layout then that layout would indeed become active for those meals-related pages but it would be itself nested into the root layout.

# In case of `layout` & `page` in Nextjs, we aren't rendering those components ourselves. We're not using them in JSX code ourselves instead NextJs is using them for us. But NextJs will essentially wrap that layout around all pages or nested layouts that are covered by current layout. Therefore, children will give us access to any nested layouts or pages and hence we can output the page content

==> <img src={logoImg.src} alt="" />

# In NextJs projects we should import image using src property because the imported logo will be an object where the path to the image is then stored under `src` property.

# In NextJs, we have special- buit-in image component which exist to help us output images in a more optimized way.
# For example - By lazy loading images under the hood so that they're only displayed if they're really visible on the page.

# In Nextjs, all React's Components are only rendered on the server (as Nextjs is a full stack library) and hence it is also known as React Server Component (RSC).

# By default, all React components (in Nextjs apps) are RSCs.

# With `Image` component we can also use `priority` attribute that will load image on priority.

# An important advantage of Nextjs is, with Server components, we have potentially less client side Javascript code that must be downloaded and hence possibly improving the performance of your website and it's also great for Search Engine Optimization (SEO) because Web Search crawlers now can see pages that contain the complete finished content.

# In case of React apps, there if we take a look at the source code of a page, we'll see that it's essentially an empty page because all the content is created and populated on client side (Browser) by client side code with help of those client side components.

# By default, all React components (in Nextjs apps) are RSCs. We have to explicitly tell Nextjs if we wanna build a client component by using a special directive at the top of the file that holds that component. To be precise, we have to add the use client directive and that then allow us to use client side features in our component.For example - event handlers, useState, useEffect