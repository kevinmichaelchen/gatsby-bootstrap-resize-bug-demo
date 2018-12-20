This repo minimally reproduces the bug detailed 
[here](https://github.com/gatsbyjs/gatsby/issues/5667#issuecomment-448753769).

## Expected
Here's what the footer should look like on initial load.
![](./docs/good.png)

## Actual
Here's what the footer looks like when I initially load Chrome in a non-cached, incognito window.
![](./docs/bad.png)

Resizing the window fixes the style issues.
