---
title: What I learned when gh-pages wouldn't work
createdAt: 2015-09-23
---

# A story in bullet points

- `gulp deploy` hmm, that was fast, did it update anything?  
- \*checks Sourcetree\*, nope nothing.  
- Maybe it's a fluke, try `gulp deploy` again, checks GitHub still nothing, aargh! whats happening!?!?  
- Checks gh-pages docs, hmm it has a [command line utility][], lets try that.  
- Wait where do I put that string? oooh `package.json`, gee I never knew that.  
- `npm run deploy`, still nothing.  
- \*checks docs again\*, "This module requires Git >=1.7.6".  
- I wonder if the latest version of gh-pages needs a newer Git? `git -v`.  
- `Agreeing to the Xcode/iOS license requires admin privileges, please re-run as root via sudo.`  
- Hmm, The app store did update Xcode yesterday.  
- Run Xcode, accept terms (that I never read).  
- `npm run deploy`  \*yaaay! it works!\*  
- Which means `gulp deploy` should be fine as well, and it is.  


## TLDR
- If gh-pages doesn't work, I should check Xcode, as it seems to be tied to Git.
- I can set up a package script in `package.json`.


[command line utility]: https://www.npmjs.com/package/gh-pages#command-line-utility "gh-pages Command Line Utility"