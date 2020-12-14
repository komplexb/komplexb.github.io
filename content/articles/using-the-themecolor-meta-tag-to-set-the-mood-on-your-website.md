---
title: Using the theme-color meta tag to set the mood on your website
createdAt: 2014-11-19
---

By now many of you might have come across [tutorials](http://updates.html5rocks.com/2014/11/Support-for-theme-color-in-Chrome-39-for-Android) on how to use the `theme-color` meta tag to set the toolbar color in Chrome 39 on Android. The instructions are simple enough, and so far I've come across a few websites utilizing the feature for consistent branding; [Neowin.net](Neowin.net) for example, clothes the toolbar in the same blue color used in their logo and across their website.  

What I haven't seen in action is dynamic toggling of the `theme-color` across various pages or sections of a site, so I decided to try it out.  

[![theme-color.gif](https://svbtleusercontent.com/zyxppxmxnaqqeq.gif)](https://svbtleusercontent.com/zyxppxmxnaqqeq.gif)

My personal website uses a different background color for each section of the page, I wanted to extend this color to the toolbar as well.  The process is pretty simple:  
First I set the default `theme-color` to the body text color.  
`<meta name="theme-color" content="#f2ede3">`  

Then I "cached" some variables for future use.  
````
var $themeColor = $('meta[name="theme-color"]');
var bodyColor = $('body').css("color");`  
````
Next I located the event handler for the section changes and added the following:
````
var bgColor = $section.css('background-color');
$themeColor.attr('content', bgColor);
````

The home and close icons link to the home page so on that event we go back to the body text color we cached earlier. While we could hard code this value, the premise is, should the body text color change, we don't want to have to change it in multiple locations.  
`$themeColor.attr('content', bodyColor);`  

The custom toolbar color also helps to find your page in a sea of off-white windows and tabs.  

[![Screenshot_2014-11-19-23-05-59-1.jpg](https://svbtleusercontent.com/ij9wtkkrnjyhrg.jpg)](https://svbtleusercontent.com/ij9wtkkrnjyhrg.jpg)

And thats it, now I have a slick color toolbar color consistent with the page contents.  

Have fun trying it out!
