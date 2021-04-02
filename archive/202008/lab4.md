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
<path d="M 142.5 187.5 h -30 v -60 q 127.5 -10 127.5 60 h -52.5" stroke="black" fill='transparent'/>
<path d="M 202.5 135.5 v -12.5 h -37.5 v 3.5" stroke="black" fill='transparent'/>
<path d="M 183.75 123 c 0 -100 65 -100 80 -70" stroke="black" fill='transparent'/>
<path d="M 263.75 53 h 5 v 120 q 30 0 30 22 h -44 q 0 -22 2 -22 q 2 0 2 -5 v -115 h 5" stroke="black" fill='transparent'/>

<!-- left dirt -->
<path d="M 150 250 a 20 10 0 1 0 5 0"/>
<path d="M 200 250 a 20 10 50 1 0 0 5"/>
<path d="M 240 250 a 20 10 -30 1 0 0 5"/>
<path d="M 140 300 a 20 10 70 1 0 0 5"/>
<path d="M 190 280 a 20 10 -10 1 0 0 5"/>
<path d="M 250 280 a 20 10 0 1 0 0 5"/>
<path d="M 230 300 a 20 10 -50 1 0 0 5"/>
<path d="M 190 310 a 20 10 0 1 0 0 5"/>

<!-- right dirt -->
<path d="M 550 250 a 20 10 0 1 0 5 0"/>
<path d="M 600 250 a 20 10 50 1 0 0 5"/>
<path d="M 640 250 a 20 10 -30 1 0 0 5"/>
<path d="M 540 300 a 20 10 70 1 0 0 5"/>
<path d="M 590 280 a 20 10 -10 1 0 0 5"/>
<path d="M 650 280 a 20 10 0 1 0 0 5"/>
<path d="M 630 300 a 20 10 -50 1 0 0 5"/>
<path d="M 590 310 a 20 10 0 1 0 0 5"/>
</svg>

The aim of this section is to create a code to search for solution for the vacuum world given an initial state. Consider the actions <kbd>left</kbd>, <kbd>right</kbd>, <kbd>suck</kbd>, and every action contributes the same cost.

1. How could we represent the state?

2. Do we need to define the whole state space statically?

3. How do we define the transition model? The transition model should be a function that takes the `state` and `action` as inputs and returns the result `state`.

Create the code to solve a vacuum world problem using the breadth-first search. Execute it and investigate if it's working correctly.