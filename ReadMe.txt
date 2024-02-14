
# use of 'layout.js' file - the idea behind 'layout.js' in NextJs is that they act as wrapper around pages.

# If we had a nested layout then that layout would indeed become active for those meals-related pages but it would be itself nested into the root layout.

# In case of `layout` & `page` in Nextjs, we aren't rendering those components ourselves. We're not using them in JSX code ourselves instead NextJs is using them for us. But NextJs will essentially wrap that layout around all pages or nested layouts that are covered by current layout. Therefore, children will give us access to any nested layouts or pages and hence we can output the page content

==> <img src={logoImg.src} alt="" />

# In NextJs projects we should import image using src property because the imported logo will be an object where the path to the image is then stored under `src` property.
