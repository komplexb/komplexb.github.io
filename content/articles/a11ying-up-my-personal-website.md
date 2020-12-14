---
title: '#a11y-ing up byronbuckley.com'
description: Making byronbuckley.com a little more accessible with WAI-ARIA and progressive enhancement.
createdAt: 2015-08-06
---

From [textbooks][] to [#a11y][], accessibility is a topic I was aware of but never tried to learn. Recently, I decided to change that by reading [Apps for All][], an informative introduction to coding accessible web applications.
I was already rebuilding my website around the [@DevTipsShow][] [Artists Theme][], so I decided to put this new accessibility knowledge to use.  

This involved two broad steps:  
1. Fix the issues identified by [WAVE][].  
2. Fix the voice over issues identified when using a screen reader like [ChromeVox][].  

## Stage 1: Make changes to static areas
Resolving WAVE's structural findings was fairly easy; all it took was using the requisite HTML tags, ARIA roles and attributes as advised by the book and [relevant documentation][].
[![WAVE Findings.png](https://svbtleusercontent.com/dvp6hl6wrpt9w.png)](https://svbtleusercontent.com/dvp6hl6wrpt9w.png "WAVE Findings including corrections")

  
Getting ChromeVox to narrate nicely typically involves strategic placement of `aria-hidden` and `aria-label` attributes to resolve faulty dictation. For example: narrated footnote labels seem out of place when listening to a sentence. We can help the sentence flow more naturally by adding `aria-hidden=true` to the tags.
[![Fixing Footnotes.png](https://svbtleusercontent.com/lt0fl7hpkinchq.png)](https://svbtleusercontent.com/lt0fl7hpkinchq.png)  
```html
<a href="#fn:1" aria-hidden="true" class="footnote">1</a>
```

Screen readers utilize headings within `<section>` tags as identifiers for that area, however I had a few sections that didn't contain a `<h1...h6>` tag; in those situations `aria-labelledby` ensured the section was properly identified.  
```html
<section class="alt-section" aria-labelledby="contact">
	<h3 id="contact" aria-level="2" class="visuallyhidden">Contact</h3>
```
## Stage 2: Make changes to dynamic areas
So far I've added attributes and roles directly to HTML, but for the [work section][] I required some JavaScript assistance. 
[![Work Items.png](https://svbtleusercontent.com/yvkcaxzkf8e6w.png)](http://byronbuckley.com/#work "Works on byronbuckley.com")  
Each work item consists of three visible parts; an image, a date, and label text that becomes visible on hover. The work item is wrapped in a `<a>` tag that makes an AJAX call to show the work item details. For this area I had a few goals:  
1. Provide an informative announcement for the work item that has focus.  
2. Accurately communicate the behavior of the work item `<a>` tag since it changes based on JavaScript availability.  
3. Allow users to obtain work item details in the absence of JavaScript (i.e. no AJAX).  
4. Maintain keyboard navigation while navigating expanded and contracted work item states.  

[![_Work_Items_Code.png](https://svbtleusercontent.com/xo0lixwuefzz9g.png)](https://gist.github.com/komplexb/4f5c54f6a659b33c83e6#file-work-item-html "View Gist")

## Goal 1
Set an `aria-label` on the `<a>` tag and disable voiceover for its children. This prevents the screen reader from blurting out a jumbled mess of words according to their DOM position. The `aria-label` is populated with a sentence built with the available data variables. Here's an example: *"Company: RealDecoy; Tenure: 2011 to 2014"*. 
```html
aria-label="{{ project.engagement-type }}: {{ project.name }}; Tenure: {{ project.tenure | replace: '-','to' }} 
```

## Goal 2
By default clicking an `<a>` element will direct the browser to its `href` value; however in this section, it performs similar to a button. To communicate this change, I've added the requisite attributes to the `<a>` element on page load. This sort of behavior is typically referred to as [progressive enhancement], whereby the aim is to prioritize functionality before bells and whistles. In this case, clicking the work item `<a>` tag will still provide the sought information by either following the `href` value as usual or by using JavaScript to asynchronously load the information within the page.
```js
  var linkAttr = {
    role: "button",
    "aria-expanded": "false",
    "aria-controls": "work-item-details"
  };
  $(".thumb-unit-wrap").attr(linkAttr);
```
**The JavaScript above produces the HTML below.**
```html
<a aria-controls="work-item-details" aria-expanded="false" role="button" ...> ... </a>
```

## Goal 3
Create two versions of each detail page; the AJAX version as a "headless" HTML fragment, and a full page version that wraps the former fragment with the requisite template layout. 
```md
---
layout: work-detail
title: Notifyer
---
{% include_relative index.md %}
```
[Jekyll][] helps to keep things [DRY][] by generating both pages from one fragment; which of course provides two URLs.
```
Page: /work/notifyer/page/
AJAX: /work/notifyer/
```

## Goal 4
Clicking a work item sets a couple things in motion, the event handler adds/modifies a bunch of attributes to represent the state change. Specifically:  
- Set the clicked link button as expanded.  
- Set focus to the top of the newly loaded content to ensure the reader starts at the right place.  
[![Screen Shot 2015-08-19 at 11.38.34 AM.png](https://svbtleusercontent.com/lnkf7sxut9zb1a.png)](https://gist.github.com/komplexb/4f5c54f6a659b33c83e6#file-workload-js "View Gist")

- When the user clicks the back link button hide the area and reset focus to the original work item trigger. 
[![Screen Shot 2015-08-19 at 11.38.52 AM.png](https://svbtleusercontent.com/fycs4dbb4ieua.png)](https://gist.github.com/komplexb/4f5c54f6a659b33c83e6#file-workload-js "View Gist")

---
## Conclusion
I think the key behavior or mindset here is empathy. Frequently I found my self trying to experience the site as a keyboard user, or as a screen reader user, which helped me to think of ways to improve the experience beyond arbitrary tag additions. While this page is fairly small, it is also clear that making accessible web pages/apps involves a little bit more cognitive activity for folks accustomed to being focussed on "pixel perfection". That being said there is still much to learn and apply.

>
It’s worth remembering that accessibility is often about __*empathy*__, and computers are not inclined to be empathetic: only the humans instructing those machines are capable of that. - [Apps for All]

----  
**Many thanks to [@alex_dennis] and #a11y advocate [@svinkle] for proofreading and technical feedback.**

[textbooks]: http://www.amazon.com/Digital-Outcasts-Technology-Forward-without-ebook/dp/B00CLC3VW4/ref=dp_kinw_strp_1 "Digital Outcasts by Kel Smith"
[#a11y]: http://twitter.com/hashtag/a11y "#a11y on Twitter"
[Apps for All]: https://shop.smashingmagazine.com/products/apps-for-all "Apps For All: Coding Accessible Web Applications by Heydon Pickering"
[Jekyll]: http://jekyllrb.com/ "Static Site Builder"
[WAVE]: http://wave.webaim.org/ "WAVE Web Accessibility Evaluation Tool by WebAIM.org"
[ChromeVox]: https://chrome.google.com/webstore/detail/chromevox/kgejglhpjiefppelpmljglcjbhoiplfn/related "ChromeVox"
[Work Item Gist]: https://gist.github.com/komplexb/4f5c54f6a659b33c83e6#file-work-item-html "View Gist"
[work section]: http://byronbuckley.com/#work "Works on byronbuckley.com"
[@svinkle]: http://twitter.com/svinkle "Scott on Twitter" 
[@alex_dennis]: https://twitter.com/alex_dennis "Alex on Twitter"
[relevant documentation]: http://www.w3.org/TR/wai-aria/ "Accessible Rich Internet Applications (WAI-ARIA) 1.0"
[progressive enhancement]: https://en.wikipedia.org/wiki/Progressive_enhancement "Progressive Enhancement"
[DRY]: https://en.wikipedia.org/wiki/Don%27t_repeat_yourself "Don't repeat yourself"
[@DevTipsShow]: https://twitter.com/DevTipsShow "@DevTipsShow on Twitter"
[Artists Theme]: https://www.youtube.com/playlist?list=PLqGj3iMvMa4KQZUkRjfwMmTq_f1fbxerI "Building a Professional Website from Start to Finish with Jekyll"