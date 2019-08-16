---
circleradius: 10
---

# Lab 2: Uninformed Search

## Objective

To create Python script to execute breadth first search algorithm.

## Problem to be solved

The search problem we will focus on during this lab is Nick’s route-finding problem in Romania, starting in Arad to reach Bucharest. The road map of Romania, which is the state space of the problem is given as follows:

<svg viewBox="0 0 950 500">

<path d="M 75 125 L 100 75" stroke="black" />
<text :x="(75+100)/2" :y="(125+75)/2" text-anchor="end">75</text>
<path d="M 100 75 L 125 25" stroke="black" />
<text :x="(100+125)/2" :y="(75+25)/2" text-anchor="end">71</text>
<path d="M 125 25 L 265 175" stroke="black" />
<text :x="(125+265)/2" :y="(25+175)/2-10" text-anchor="start">151</text>
<path d="M 265 175 L 75 125" stroke="black" />
<text :x="(265+75)/2" :y="(175+125)/2+15" text-anchor="end">140</text>
<path d="M 75 125 L 85 280" stroke="black" />
<text :x="(75+85)/2-5" :y="(125+280)/2" text-anchor="end">118</text>
<path d="M 85 280 L 185 335" stroke="black" />
<text :x="(85+185)/2+5" :y="(280+335)/2-5" text-anchor="start">111</text>
<path d="M 185 335 L 190 390" stroke="black" />
<text :x="(185+190)/2+10" :y="(335+390)/2" text-anchor="start">70</text>
<path d="M 190 390 L 185 450" stroke="black" />
<text :x="(190+185)/2+10" :y="(390+450)/2" text-anchor="start">75</text>
<path d="M 185 450 L 350 465" stroke="black" />
<text :x="(185+350)/2" :y="(450+465)/2-10" text-anchor="end">120</text>
<path d="M 350 465 L 320 230" stroke="black" />
<text :x="(350+320)/2-10" :y="(465+230)/2" text-anchor="end">146</text>
<path d="M 320 230 L 265 175" stroke="black" />
<text :x="(320+265)/2+5" :y="(230+175)/2" text-anchor="start">80</text>
<path d="M 265 175 L 425 175" stroke="black" />
<text :x="(265+425)/2" :y="(175+175)/2-5" text-anchor="middle">99</text>
<path d="M 320 230 L 475 310" stroke="black" />
<text :x="(320+475)/2" :y="(230+310)/2-5" text-anchor="start">97</text>
<path d="M 475 310 L 350 465" stroke="black" />
<text :x="(475+350)/2-5" :y="(310+465)/2-5" text-anchor="end">138</text>
<path d="M 475 310 L 640 390" stroke="black" />
<text :x="(475+640)/2-10" :y="(310+390)/2+10" text-anchor="end">101</text>
<path d="M 425 175 L 640 390" stroke="black" />
<text :x="(425+640)/2+5" :y="(175+390)/2-5" text-anchor="start">211</text>
<path d="M 640 390 L 575 485" stroke="black" />
<text :x="(640+575)/2-5" :y="(390+485)/2" text-anchor="end">90</text>
<path d="M 640 390 L 745 340 " stroke="black" />
<text :x="(640+745)/2-5" :y="(390+340)/2" text-anchor="end">85</text>
<path d="M 745 340 L 875 340" stroke="black" />
<text :x="(745+875)/2" :y="(340+340)/2+15" text-anchor="middle">98</text>
<path d="M 875 340 L 935 440" stroke="black" />
<text :x="(875+935)/2-10" :y="(340+440)/2+5" text-anchor="end">86</text>
<path d="M 745 340 L 850 225" stroke="black" />
<text :x="(745+850)/2-5" :y="(340+225)/2-5" text-anchor="end">142</text>
<path d="M 850 225 L 760 120" stroke="black" />
<text :x="(850+760)/2+5" :y="(225+120)/2" text-anchor="start">92</text>
<path d="M 760 120 L 625 60" stroke="black" />
<text :x="(760+625)/2+5" :y="(120+60)/2-5" text-anchor="start">87</text>

<circle cx="75" cy="125" :r="$page.frontmatter.circleradius" fill="gray" />
<text x="60" y="130" text-anchor="end">Arad</text>
<circle cx="100" cy="75" :r="$page.frontmatter.circleradius" fill="gray" />
<text x="85" y="75" text-anchor="end">Zerind</text>
<circle cx="125" cy="25" :r="$page.frontmatter.circleradius" fill="gray" />
<text x="110" y="20" text-anchor="end">Oradea</text>
<circle cx="265" cy="175" :r="$page.frontmatter.circleradius" fill="gray" />
<text x="265" y="160" text-anchor="start">Sibiu</text>
<circle cx="425" cy="175" :r="$page.frontmatter.circleradius" fill="gray" />
<text x="440" y="180" text-anchor="start">Fagaras</text>
<circle cx="320" cy="230" :r="$page.frontmatter.circleradius" fill="gray" />
<text x="305" y="235" text-anchor="end">Rimnicu Vilcea</text>
<circle cx="475" cy="310" :r="$page.frontmatter.circleradius" fill="gray" />
<text x="460" y="320" text-anchor="end">Pitesti</text>
<circle cx="350" cy="465" :r="$page.frontmatter.circleradius" fill="gray" />
<text x="340" y="480" text-anchor="end">Craiova</text>
<circle cx="185" cy="450" :r="$page.frontmatter.circleradius" fill="gray" />
<text x="170" y="455" text-anchor="end">Drobeta</text>
<circle cx="190" cy="390" :r="$page.frontmatter.circleradius" fill="gray" />
<text x="175" y="395" text-anchor="end">Mehadia</text>
<circle cx="185" cy="335" :r="$page.frontmatter.circleradius" fill="gray" />
<text x="170" y="345" text-anchor="end">Lugoj</text>
<circle cx="85" cy="280" :r="$page.frontmatter.circleradius" fill="gray" />
<text x="70" y="285" text-anchor="end">Timisoara</text>
<circle cx="640" cy="390" :r="$page.frontmatter.circleradius" fill="gray" />
<text x="625" y="400" text-anchor="end">Bucharest</text>
<circle cx="575" cy="485" :r="$page.frontmatter.circleradius" fill="gray" />
<text x="560" y="490" text-anchor="end">Giurgiu</text>
<circle cx="745" cy="340" :r="$page.frontmatter.circleradius" fill="gray" />
<text x="730" y="335" text-anchor="end">Urziceni</text>
<circle cx="875" cy="340" :r="$page.frontmatter.circleradius" fill="gray" />
<text x="875" y="325" text-anchor="end">Hirsova</text>
<circle cx="935" cy="440" :r="$page.frontmatter.circleradius" fill="gray" />
<text x="920" y="445" text-anchor="end">Eforie</text>
<circle cx="850" cy="225" :r="$page.frontmatter.circleradius" fill="gray" />
<text x="835" y="230" text-anchor="end">Vaslui</text>
<circle cx="760" cy="120" :r="$page.frontmatter.circleradius" fill="gray" />
<text x="745" y="135" text-anchor="end">Iasi</text>
<circle cx="625" cy="60" :r="$page.frontmatter.circleradius" fill="gray" />
<text x="610" y="65" text-anchor="end">Neamt</text>

</svg>

## Translating the state space

1. First we need to define the state space in our problem.
    
2. The important information from the state space is the connections between states and the step costs between connected states.
    
3. Notice that in this problem the connections are reversible. Therefore in our state space the connection from Arad to Zerind and the connection from Zerind to Arad are identical, hence only one instance of that connection is needed.
    
4. The most straightforward way of defining the state space is by using a nested array, in which each inner array consists of the two connected states and its cost. Open a script file and define the variable `state_space`. The following code shows the first three elements in the nested array. Complete the definition of the variable by referring to the state space provided.

    ```python
    state_space = [
      ['Arad', 'Zerind', 75],
      ['Arad', 'Timisoara', 118],
      ['Timisoara', 'Lugoj', 111],
      ...
    ]
    ```

5. Define two variables `initial_state` and `goal_state` to hold the information from the problem.

    ```python
    initial_state = 'Arad'
    goal_state = 'Bucharest'
    ```

## Actions and transition model

1. Actions and transition model provide us the way to identify the children of a node in a search tree.
    
2. In this problem, the actions and transition model are straightforward. The actions are limited by the states connected to node and the transition model is directly defined by the action. Therefore we can create a function to search through the state space to find the children of a node, which would be suffice as actions and transition model.
    
3. To achieve this, we will loop through the `state_space` to check for any connection linked to the node, the other state on the connection will be the child of the node in the search tree. In the same script file, define the following function:

    ```python
    def expandAndReturnChildren(state_space, node):
      children = []
      for [m,n,c] in state_space:
        if m == node:
          children.append(n)
        elif n == node:
          children.append(m)
      return children
    ```

4. This function provides the `children` of a `node` given the `state_space` of the problem.

## Breadth-first search algorithm

1. Next we will create a function to execute the search algorithm. The first algorithm we will use is the breadth-first search (BFS).
    
2. As we want to separate the problem definition from the algorithm definition, the algorithm function will have the inputs of the state space, initial state and goal state.

    ```python
    def bfs(state_space, initial_state, goal_state):
    ```
    
3. In this function, we need two empty arrays to store the frontier and the explored states.

    ```python
    def bfs(state_space, initial_state, goal_state):
      frontier = []
      explored = []
    ```
    
4. At initial stage, the initial state is our frontier.

    ```python
    def bfs(state_space, initial_state, goal_state):
      frontier = []
      explored = []
      frontier.append(initial_state)
    ```
    
5. When we are generating the search tree, we will continually expanding the first node (FIFO) in the frontier until we generate a node with goal state. Therefore we need to have a loop to repeatedly expanding the first node in the frontier until the goal node is generated.

    ```python
    def bfs(state_space, initial_state, goal_state):
      frontier = []
      explored = []
      found_goal = False
      frontier.append(initial_state)
      
      while not found_goal:
        ...
    ```
    
6. In the loop we will first expand the first node in the frontier to obtain the children, and move the expanded node from frontier to the explored set.

    ```python
      while not found_goal:
        # expand the first in the frontier
        children = expandAndReturnChildren(state_space, frontier[0])
        # copy the node to the explored set
        explored.append(frontier[0])
        # remove the expanded node from the frontier
        del frontier[0]
    ```
    
7. Check if the children generated should be added to the frontier or discarded. If any child is expanded previously, i.e. in the explored set, or if it is generated previously but not expanded yet, i.e. in the frontier, then it should be discarded. Else, it should be added to the frontier.
    
    ```python
        del frontier[0]
        # loop through the children
        for child in children:
          # check if a node was expanded or generated previously
          if not (child in explored) and not (child in frontier):
            # add child to the frontier
            frontier.append(child)
    ```
    
8. Before a child is added to the frontier, it should be tested for goal. If it has the goal state, the BFS algorithm should in fact be terminated and return the solution.

    ```python
          if not(child in explored) and not (child in frontier):
            # goal test
            if child == goal_state:
              found_goal = True
              break
            # add child to the frontiers
            frontier.append(child)
    ```