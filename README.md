## Resizing images

Resizing images through the mac terminal: 

For the example the author attempts to resize his dragon image to be 64x64 pixels in size.

```
convert dragon.gif -resize 64x64 resize_dragon.gif
```

## Pushing to GitHub Pages
 
```
git add . 
git commit -am "message"
git push origin gh-pages
```

## Removing an item from git

Remove an item from the git cache, then add it back. Sometimes this is necessary, such as when you change some part of a file name from UPPERCASE to lowercase, but the name is still the same.

```
# this says
# "git remove recursively cached files"
git rm -r --cached .
# then you add them back
git add .
# and commit
git commit -am 'renamed or whatever'
```