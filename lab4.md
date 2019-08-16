# Lab 4: State representation

## Objective

1. To represent the state of a vacuum world.

2. To solve the vacuum world problem using breadth-first search.

## Problem

The following image represents one of the possible states of a two-square vacuum world.

<svg viewBox="0 0 800 400">
<path d="M 0 0 h 400 v 400 h -400 v -400" fill='transparent' stroke='black'/>
<path d="M 400 0 h 400 v 400 h -400" fill='transparent' stroke='black'/>

<circle cx="165" cy="165" r="15" stroke="black" fill='transparent'/>
<circle cx="165" cy="165" r="30" stroke="black" fill='transparent'/>
<path d="M 142.5 187.5 h -30 v -60 q 127.5 0 127.5 60 h -52.5" stroke="black" fill='transparent'/>
<path d="M 202.5 140.5 v -17.5 h -37.5 v 7.5" stroke="black" fill='transparent'/>
<path d="M 183.75 123 q 0 -100 40 -100 q 40 0 40 30" stroke="black" fill='transparent'/>
<path d="M 263.75 53 h 5 v 120 q 30 0 30 22 h -44 q 0 -22 2 -22 q 2 0 2 -5 v -115 h 5" stroke="black" fill='transparent'/>
<!-- \draw (0,0) circle (.2);
      \draw[thick] (0,0) circle (.4);
      \draw[thick] (-.3,-.3) -- (-.7,-.3) -- (-.7,.5) .. controls (1,.5) .. (1,-.3) -- (.3,-.3);
      \draw[thick] (.5,.5) -- ++(0,.1) -- ++(-.5,0) -- ++(0,-.1);
      \draw[thick] (.25,.6) -- ++(0,1) arc (180:0:.55);
      \draw[thick,rounded corners=1pt] (1.35,1.6) -- ++(.1,0) -- ++(0,-1.6) .. controls +(.3,0) .. ++(.4,-.3) -- ++(-.75,0) -- ++(0,.3) -- ++(.15,0) -- ++(0,1.6) -- ++(.1,0); -->


</svg>