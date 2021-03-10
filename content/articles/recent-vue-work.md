---
title: 'Recent Vue Work'
description: "Overview of Vue Experience"
hidden: true
---

# Koala
## Component Development
### Product Selector
The Product Selector was tasked with 'morphing' to display up to 4 configuration components in order to satisfy selection criteria for different product types based on CMS record config and product SKU details.

![Product Form](/assets/blog/recent-vue-work/Product_Form_Annotated.png)
- Image 1 - In it's simplest form the the component simply displayed the price and a CTA, and perhaps a size selector as seen in image 5.
- Image 2 - A color swatch may be added as well, with optional tags such as **new**.
- Image 3 - Size widget may be replaced with a checkbox that also supports tags such as **new** or **sale**.
- Image 6 - Includes product, size as well as color swatches, and tags in various locations.
- Image 4 - Created to support orientation and icon's in the dropdown, this variation supports up to 4 components. The code (displayed below) was extended from existing components to support product & style variations, icons on style dropdowns, and orientation toggles.
<br> 
<script src="https://gist.github.com/komplexb/7150102de9ae0f79cccbdfc4ac0c0260.js"></script>

### Dynamic Page Generation
Use CMS API to populate Vue template and create routes. For an example of page output click [here](https://au.koala.com/products/koala-modern-sofa).
<script src="https://gist.github.com/komplexb/f1cb95305a424d9550fd1c2cee0cd618.js"></script>

## Working with Vuex 
### Mutation Subscriptions
Whenever discount codes are applied to the app state or removed from the app state, the source of truth (Shopify) to ensure the cart totals are correct. I used mutation subscriptions[^2] to:
- validate discount code via Shopify
- remove invalid discount codes from app state once validated 
- apply the payload response of valid discount codes the app state. 
<script src="https://gist.github.com/komplexb/68df0ab14af5775a1b568d7eeaba5583.js"></script>

### Working with Actions, Getters & Map Getters
In the snippet below:
- Fetch a list of products on sale from Shopify.
- Format list and add contents to the discount state object. 
- Create a getter to easily ascertain if a given product is on sale. 
- Use getter as flag within components.
<script src="https://gist.github.com/komplexb/ec1c8ff2b6814cefd6a8dae108ef8470.js"></script>


## Working with Jest and Vue Test Utils
- Use shallowMount to assist with assertions on color-selector component.
- Mock app state to support shopping cart tests.
<script src="https://gist.github.com/komplexb/017d0eaeb631d7fd3633f51de664cda8.js"></script>


<h1>
  Moovle
  <small>
    (<a href="https://github.com/komplexb/moovle/tree/feature/auth" target="_blank">see repo</a>)
  </small>
</h1>

The aim of this POC is to demonstrate capability in building a secure web app, as well awareness of the various considerations. It leverages:
- nuxt-auth local strategy which is the default, credentials/token based scheme for flows using JWT.
- PassportJS on an Express server implemented at [/api](https://github.com/komplexb/moovle/tree/feature/auth/api)


## Role Based Auth in Nuxt (Client and Server Side)
Configure PassportJS for authenticating users, and authorizing api routes with credentials/token based scheme for JWT flow.
[View Source](https://github.com/komplexb/moovle/tree/feature/auth/api).

<script src="https://gist-it.appspot.com/https://github.com/komplexb/moovle/blob/feature/auth/api/controllers/authentication.controller.js?footer=minimal">
</script>

Create user model in MongoDB 
<script src="https://gist-it.appspot.com/https://github.com/komplexb/moovle/blob/feature/auth/api/models/user.js?footer=minimal">
</script>

Configure Nuxt Auth[^1].
<script src="https://gist-it.appspot.com/https://github.com/komplexb/moovle/blob/feature/auth/nuxt.config.js?footer=minimal&slice=91:137">
</script>

Create routes used above in nuxt.config.js.
<script src="https://gist-it.appspot.com/https://github.com/komplexb/moovle/blob/feature/auth/api/routes/authentication.js?footer=minimal">
</script>

### Authorized users
Prevent component from being loaded by unauthorized users.
<script src="https://gist-it.appspot.com/https://github.com/komplexb/moovle/blob/feature/auth/pages/character/_id.vue?footer=minimal&slice=46:56">
</script>

Use `passport.authenticate` middleware to prevent unauthorized access to api route in the above component.
<script src="https://gist-it.appspot.com/https://github.com/komplexb/moovle/blob/feature/auth/components/Comics.vue?footer=minimal&slice=51:66">
</script>
<script src="https://gist-it.appspot.com/https://github.com/komplexb/moovle/blob/feature/auth/api/routes/marvel.js?footer=minimal&slice=39:52">
</script>

### Authorized users with Favourites scope
Configure scope on the server.
<script src="https://gist-it.appspot.com/https://github.com/komplexb/moovle/blob/feature/auth/api/controllers/authentication.controller.js?footer=minimal&slice=194:209">
</script>

Configure scope within Nuxt.
<script src="https://gist-it.appspot.com/https://github.com/komplexb/moovle/blob/feature/auth/middleware/scope.js?footer=minimal">
</script>

Create route that uses scope. Note access use of access control middlewares `favouritesScope` & `passport.authenticate`.
<script src="https://gist-it.appspot.com/https://github.com/komplexb/moovle/blob/feature/auth/api/routes/favourites.js?footer=minimal">
</script>

Use scope within components.
<script src="https://gist-it.appspot.com/https://github.com/komplexb/moovle/blob/feature/auth/components/layout/Header.vue?footer=minimal&slice=18:21">
</script>

Use scope as middleware to limit page access.
<script src="https://gist-it.appspot.com/https://github.com/komplexb/moovle/blob/feature/auth/nuxt.config.js?footer=minimal&slice=142:149">
</script>
<script src="https://gist-it.appspot.com/https://github.com/komplexb/moovle/blob/feature/auth/pages/favourites.vue?footer=minimal&slice=44:64">
</script>


## E2E Testing with Cypress
<script src="https://gist-it.appspot.com/https://github.com/komplexb/moovle/blob/feature/auth/cypress/e2e/Index.spec.js?footer=minimal">
</script>

[^1]: [auth.nuxtjs.org](https://auth.nuxtjs.org)
[^2]: [Vuex Plugins](https://vuex.vuejs.org/guide/plugins.html#plugins)