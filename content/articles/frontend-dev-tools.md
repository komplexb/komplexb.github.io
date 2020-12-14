---
title: Front-end Dev Tools
createdAt: 2015-02-01
---

I recently came across a web tools list<sup><a id="fn-ref__webtools" href="#fn__webtools">1</a></sup> and decided to compile a similar list of tools that have been making my life easier as front-end dev.  

## Tools
As far as tools go, there's always new stuff and sites like Product Hunt<sup><a href="#fn__producthunt" id="fn-ref__producthunt">2</a></sup> to ensure folks are in the know for every product under the sun. Nevertheless there are always a few main stays or daily drivers, here are mine.

### Prepros ###
As the name suggests, Prepros is a bundle of drag n' drop preprocessing goodness. I primarily use it for SASS, JS Concat and LiveReload support during solo development; but you can throw LESS, Jade and a bunch of other stuff at it. The latest version adds/refines a slew of features that make it a one stop shop for common dev tasks. <a href="http://prepros.io" target="_blank">Get Prepros</a>.

### Harp ###
Harp is a Node app I came across when I did a web search for "static site builder with simple authentication." Its sell for our team was built-in authentication, LESS, and partial support. Zero config doesn't hurt either. Like Prepros, you can throw a bunch of different languages at it and it'll compile them for you. Being a command line tool, you can easily include Harp functionality in your task runner/build tool of choice<sup><a id="fn-ref__harptip" href="#fn__harptip">3</a></sup>. <a href="http://harpjs.com/" target="_blank">Get Harp</a>.

### SourceTree ###
I still can't figure why the Windows version isn't as attractive as the one for Mac but it remains my Git client of choice. I talk more about it in an <a href="http://blog.byronbuckley.com/sourcetree-a-free-git-client" target="_blank">older post</a>; but basically Atlassian's SourceTree is another productivity tool that helps me to get Git stuff done quickly. <a href="http://sourcetreeapp.com/" target="_blank">Get Sourcetree</a>.

## Editors
I know all the "cool kids" swear by Sublime Text, VIM, EMACS or even Atom<sup><a id="fn-ref__texteditorjoke" href="#fn__texteditorjoke">3</a></sup>, but Brackets is my primary text editor. 
### Brackets ###
I can't remember how I came across Brackets, but I've been using it for sometime and have shared it with a few colleagues who've also made it their default editor. Brackets has a light minimalist feel with an active plugins community. The shortlist of built-in features like Live Preview, SVG Preview, multiple cursors and JSLint are great, but third-party plugins like Emmet, BracketsToIX and Markdown Preview (which I'm using to write this post) are where the tool shines. On the other hand, Brackets could really do with splitview and multiwindow support; once it gets those two I'll have no reason to look back. <a href="http://brackets.io/" target="_blank">Get Brackets</a>. 

###	Aptana ###
This text editor (or IDE) is a little long in the tooth, but Aptana is a sturdy dependable Eclipse based editor. What makes it attractive is the built-in toolset out of the box, like multiple Terminal/Command line windows, GIT, FTP and multiple window and splitview support. On the other hand its rather slow to start-up and has a few functions that are slow as well. Aptana doesn't seem to have an active third-party plugin community and I've oft found the plugin process tedious. Finally it is also no longer updated (as far as I can tell) and as such doesn't benefit from active development like newer text editors. <a href="http://www.aptana.com/" target="_blank">Get Aptana</a>.

###	Atom ###
I use this when I need to refer to another codebase while using Brackets. It's my fast multiwindow + splitview option. I haven't taken the time to learn it, so I can neither deny or claim its greatness. <a href="http://atom.io/" target="_blank">Get Atom</a>.

***

Have a digest of favorite tools? Tweet <a href="http://twitter.com/komplexb" target="_blank">@komplexb</a> and let me know.

## Footnotes
1. <a href="https://moyamiller.wordpress.com/2014/11/05/web-tools-i-love/" target="_blank">Web Tools I Love</a> | <a id="fn__webtools" href="#fn-ref__webtools" title="Continue reading">⇡</a>  
2. <a href="http://producthunt.com" target="_blank">Product Hunt</a> | <a id="fn__producthunt" href="#fn-ref__producthunt" title="Continue reading">⇡</a>
3. <a href="http://ole.michelsen.dk/blog/using-browser-sync-with-harp.html" target="_blank">Harp + BrowserSync</a> <a href="http://pow.cx/" target="_blank" title="Add Pow or similar to use '.dev' friendly URLs with BrowserSync"> [+ Pow]</a> | <a id="fn__harptip" href="#fn-ref__harptip" title="Continue reading">⇡</a>
2. <a href="http://2.bp.blogspot.com/-osQ0QDYcXJ8/VGZqisyHLYI/AAAAAAAAAYQ/MVEWKTfDEHo/s1600/Bhfbnn3CMAA93mg%2B(1).png" target="_blank">VIM guy & EMACS guy bully the Atom guy</a> | <a id="fn__texteditorjoke" href="#fn-ref__texteditorjoke" title="Continue reading">⇡</a>