---
title: Deciding how to Prototype
createdAt: 2014-2-16
---

In my last post, I shared my process for [Designing for Persons with Down Syndrome](http://blog.byronbuckley.com/designing-for-down-syndrome). I was tasked with researching and designing a budgeting application for an under-served user group. The findings of this research would fuel a prototype to be presented to my graduate class. Having completed my research I had to decide how to prototype the project; should I utilize applications like Axure RP, InVision etc, or should I go straight to HTML? There are arguments and specific contexts where either approach excels. There are also countless articles outlining the wastefulness of static mockups and the ineffectiveness of wireframes, contrasted against designing in the browser where opportunities for code reuse and easy iteration are touted as advantages. So how did I choose?  

My initial instinct was to use Axure RP a rapid protyping tool that I had used on [previous projects](http://byronbuckley.com/portfolio/notifyer/). But Axure had its hangups, there were a few things I wanted to do that were tedious to configure in Axure, things I know I could easily do in markup. In addition, without styled templates out-of-the-box, Axure prototypes tend to be plain, it would take some extra effort to make something low fidelity yet aesthetically appealling. It would take time I didn't have.  
Previously when I heard the phrase "design in the browser", I found it ludicrous and counterproductive. In the post "[Why we skip Photoshop](http://signalvnoise.com/posts/1061-why-we-skip-photoshop)", Jason Fried stated that Photoshop forces you to focus on the details of design. 
>
Photoshop gives you too many tools to focus on the details. When you use Photoshop you can’t help but pay attention to the details. The alignment, the specific colors, the exact shapes, the little details that may matter eventually but they certainly don’t matter now. The start is about the substance, not about the details. Details are for later. - [Jason Fried](http://signalvnoise.com/posts/1061-why-we-skip-photoshop)  

This is exactly how I felt about designing in the browser. I thought I was going to be slowed down by the details of aesthetics, fiddling with alignment, margins, padding and other miscellaneous things. I felt I'd be thinking more about implementation rather than user goals, flows and interactions. So what changed? The proliferation of front-end frameworks. Having already sketched concepts for my UI, I selected [Zurb's Foundation 5 front-end framework](http://foundation.zurb.com/) to produce a functional prototype. With Foundation's library of components I could leverage my Front-end experience to quickly piece the prototype together like a puzzle.  

**View Sketches**
[![easy-budget-sketch_thumb.png](https://svbtleusercontent.com/n4juplvex7shqg_small.png)](https://svbtleusercontent.com/fxbsceydhmaxsa.png "View Sketch")

Does that mean you should never use rapid prototyping applications? The answer to that is "it depends".  
Will the prototype be utilized by external stakeholders or developers in your absence? If so, then the annotation and collaborative features of these applications may serve you better. InVision for example, allows you to add comments to any part of the interface. Axure on the other hand allows you to produce a static document from your interactive prototype that may serve well for easy referencing.  
If you are both the designer and developer of this application then you may find it advantageous to prototype in HTML from your sketches. Your sketches and notes may serve as annotations as you iterate. If you are competent in Front-end development, then this may also be an advantage, as you may be able to create production ready markup that the development team can iterate on.   

**View Application Demo** 
[![easy-budget_thumb.png](https://svbtleusercontent.com/l4jfv1kv1o3yaa_small.png)](http://byronbuckley.com/easy-budget/ "View Application Demo")

So how did my prototype fair? Here is some feedback from the class via GoToMeeting:  
- Professor: word prediction is a nice feature
- L.S.: simple and direct questions
- Professor: i'm impressed with how functional your prototype is :)
- L.S.: Yes - very nice prototype.
- A.W.: i'm still really impressed with how well the questions are worded for the audience
- Professor: i like the "put it back feature"--really a good safety net  
<hr>
Ultimately I wanted my prototype to be so polished that the focus would be on functionality and not on appearance. I believe I successfully achieved this by prototyping/designing in the browser.