# odin-Etch-a-sketch
A sketchpad/etch-a-sketch project outlined by The Odin Project. 

First iteration Reflection: 
Pretty challenging project, encountered a lot of little bugs that are left unsolved. (Such as grid wrapping too early from imprecise width rounding, eventlisteners persisting when using multiple pens without toggling off, and default colorpicker/grid size not resetting on refresh)
I was able to add a few extra features such as reset and rainbow mode, but I didn't have time to implement shading and highlighting, as well as styling this project further. 

The biggest challenge I encountered was being unable to modify grid background by a % amount as I couldn't figure out a way to parse the rgb values from a string into 3 separate values effectively. (regex documents I saw online were too confusing for me now) Once I figure that out, highlighting and shading features should be easy too implement.

Two other features I wish to add but couldn't figure out was how to apply ink by click and hold/drag rather than using a toggle, for a more intuitive user experience, along with exporting the current board as an image. When I revisit this project in the future I hope I can implement these features.  
