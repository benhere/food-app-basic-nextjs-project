
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

# Nextjs loads the pages fast as it performs some pretty aggressive caching under the hood. To be precise, it caches any page we visited including the data of that page and then if we go to another page and come back it loads that existing page from the cache so that it can show it to us as quickly as possible.

# Note - Nextjs caches even more aggressively when running the website in production mode.

# Adding loading indicator on page

# 'loading.js' is also a reserved file name similar to that of 'page.js' & 'layout.js'

# This 'loading.js' file will become active if the page next to it or any nested page or layout is loading data and in such case that loading.js content is shown as fallback until the data is there.

# Nextjs embraces 'Suspense' component (to show fallback UI on loading) from React and make sure whenever we have a component which performs some data fetching and return Promise object then such components will trigger Suspense to show the fallback until they're done.

# error.js file only handle errors that occur in the page that sits in the same folder as this 'error.js' file or any nested page or layout. Hence we can also add 'error.js' file on the root level of our application within app folder to catch any errors in any page.

# The error component file 'error.js' must be a client component because Nextjs besically ensures that we can catch any errors with this component including errors that happen on the client side so after the pages were rendered on the server. Hence we need to 'use client' directive in error.js file.