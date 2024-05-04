# Lab 2: Breadth-First Search

## Lab learning outcomes
After completing this lab, the students are able to 

- create Python script to execute breadth-first search algorithm to solve a search problem.

## Nick's route-finding problem in Romania

The first search problem we are focusing on is Nick’s route-finding problem in Romania, starting in Arad to reach Bucharest. The road map of Romania, which is the state space of the problem is given as follows:

<div>
<div id="romania">
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

<circle cx="75" cy="125" :r="circleradius" fill="green" />
<text x="60" y="130" text-anchor="end">Arad</text>
<circle cx="100" cy="75" :r="circleradius" fill="gray" />
<text x="85" y="75" text-anchor="end">Zerind</text>
<circle cx="125" cy="25" :r="circleradius" fill="gray" />
<text x="110" y="20" text-anchor="end">Oradea</text>
<circle cx="265" cy="175" :r="circleradius" fill="gray" />
<text x="265" y="160" text-anchor="start">Sibiu</text>
<circle cx="425" cy="175" :r="circleradius" fill="gray" />
<text x="440" y="180" text-anchor="start">Fagaras</text>
<circle cx="320" cy="230" :r="circleradius" fill="gray" />
<text x="305" y="235" text-anchor="end">Rimnicu Vilcea</text>
<circle cx="475" cy="310" :r="circleradius" fill="gray" />
<text x="460" y="320" text-anchor="end">Pitesti</text>
<circle cx="350" cy="465" :r="circleradius" fill="gray" />
<text x="340" y="480" text-anchor="end">Craiova</text>
<circle cx="185" cy="450" :r="circleradius" fill="gray" />
<text x="170" y="455" text-anchor="end">Drobeta</text>
<circle cx="190" cy="390" :r="circleradius" fill="gray" />
<text x="175" y="395" text-anchor="end">Mehadia</text>
<circle cx="185" cy="335" :r="circleradius" fill="gray" />
<text x="170" y="345" text-anchor="end">Lugoj</text>
<circle cx="85" cy="280" :r="circleradius" fill="gray" />
<text x="70" y="285" text-anchor="end">Timisoara</text>
<circle cx="640" cy="390" :r="circleradius" fill="red" />
<text x="625" y="400" text-anchor="end">Bucharest</text>
<circle cx="575" cy="485" :r="circleradius" fill="gray" />
<text x="560" y="490" text-anchor="end">Giurgiu</text>
<circle cx="745" cy="340" :r="circleradius" fill="gray" />
<text x="730" y="335" text-anchor="end">Urziceni</text>
<circle cx="875" cy="340" :r="circleradius" fill="gray" />
<text x="875" y="325" text-anchor="end">Hirsova</text>
<circle cx="935" cy="440" :r="circleradius" fill="gray" />
<text x="920" y="445" text-anchor="end">Eforie</text>
<circle cx="850" cy="225" :r="circleradius" fill="gray" />
<text x="835" y="230" text-anchor="end">Vaslui</text>
<circle cx="760" cy="120" :r="circleradius" fill="gray" />
<text x="745" y="135" text-anchor="end">Iasi</text>
<circle cx="625" cy="60" :r="circleradius" fill="gray" />
<text x="610" y="65" text-anchor="end">Neamt</text>

</svg>
</div>
<script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
<script>new Vue({ el: "#romania", data: { circleradius: 10 } });</script>
</div>

To solve the problem, we need to define the representation of the state, determine the transition model, and the execution of the search algorithm.

### State representation

In this problem the only state we need to consider is the location of Nick. Therefore we can use the names of the cities as the state.

Since Nick is starting in Arad, going to Bucharest, we can define the initial state and goal state as

```python
initial_state = "Arad"
goal_state = "Bucharest"
```

### Transition model and state space

The transition model provides the way to identify the child of a node in a search tree given a specific action. In this problem, we need to translate the whole state space from the geographical network into the program together with the step costs between the connected states.

The important information from the state space is the connections between states and the step costs between connected states. Notice that in this problem the connections are reversible. Therefore in our state space the connection from Arad to Zerind and the connection from Zerind to Arad are identical, hence only one instance of that connection is needed.
    
The most straightforward way of defining the state space is by using a nested array, in which each inner array consists of the two connected states and its cost. 

Define a variable `state_space` to store the state space. The following code shows the first three elements in the nested array. Complete the definition of the variable by referring to the state space provided.

```python
state_space = [
  ['Arad', 'Zerind', 75],
  ['Arad', 'Timisoara', 118],
  ['Timisoara', 'Lugoj', 111],
  ...
]
```

In this problem, the actions are to travel to connected cities from the current city Nick is in. The transition model is directly defined by the action. Therefore, create a function to search through the state space to find the children of a node, which would suffice as actions and transition model.

This function loops through the `state_space` variable to check for connections linked to the current node. The state on the connection becomes the child of the node in the search tree. We define a new function called `expandAndReturnChildren`.

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

The function will provide a list of the children of the `node`.

### Node in the search tree

We can use a class to represent each node in the search tree. The important information for each node includes the state and the parent of the node.

```python
class Node:
  def __init__(self, state=None, parent=None):
    self.state = state
    self.parent = parent
```

!!! info "Class in Python"
    In Python, to define a class, the class needs to have the function `__init__` with at least one input `self`. This function is called when an object is initiated with this class. The internal variable `self` defines the properties of the object. The input arguments apart from `self` for the function `__init__` are the parameters to be passed when initiating a new object.
    
    In a class, additional functions can also be defined, and these will be the methods for the object of this class. 

With this implementation of node as a class, the `expandAndReturnChildren` function is updated to be

```python
def expandAndReturnChildren(state_space, node):
  children = []
  for [m,n,c] in state_space:
    if m == node.state:
      childnode = Node(n, node)
      children.append(childnode)
    elif n == node.state:
      childnode = Node(m, node)
      children.append(childnode)
  return children
```

!!! tip "Quick check"
    Your current code should look like

    ```python
    initial_state = "Arad"
    goal_state = "Bucharest"

    state_space = [
      ['Arad', 'Zerind', 75],
      ['Arad', 'Timisoara', 118],
      ['Timisoara', 'Lugoj', 111],
      ...
    ]

    class Node:
      def __init__(self, state=None, parent=None):
        self.state = state
        self.parent = parent
        
    def expandAndReturnChildren(state_space, node):
      children = []
      for [m,n,c] in state_space:
        if m == node.state:
          childnode = Node(n, node)
          children.append(childnode)
        elif n == node.state:
          childnode = Node(m, node)
          children.append(childnode)
      return children
    ```

### Breadth-first search algorithm

Next we will create a function to execute the search algorithm. The first algorithm we will use is the breadth-first search (BFS).
    
We will separate the problem definition from the algorithm definition, the algorithm function will have the inputs of the state space, initial state and goal state. 

```python
def bfs(state_space, initial_state, goal_state):
```

!!! note "Separation of definitions for problem and algorithm"
    The separation of problem definition and the algorithm definition allows us to re-use the algorithm easily for other problems and also re-use the problem definition with other algorithms
    
In this function, we need two empty arrays to store the frontier and the explored states.

```python
def bfs(state_space, initial_state, goal_state):
  frontier = []
  explored = []
```
    
In BFS, we will use the initial state as our root node.

```python
def bfs(state_space, initial_state, goal_state):
  frontier = []
  explored = []
  frontier.append(Node(initial_state, None))
```

!!! info "`Node(initial_state, None)`"
    As the root node has no parent, we use `None` as the value of the parent of root node.
    
When we are generating the search tree, we will continually expanding the first node (FIFO) in the frontier until we generate a node with goal state. Therefore we need to have a loop to repeatedly expanding the first node in the frontier until the goal node is generated.

```python
def bfs(state_space, initial_state, goal_state):
  frontier = []
  explored = []
  found_goal = False
  frontier.append(Node(initial_state, None))
  
  while not found_goal:
    ...
```
    
In the loop we will first expand the first node in the frontier to obtain the children, and move the expanded node from frontier to the explored set.

```python
  while not found_goal:
    # expand the first in the frontier
    children = expandAndReturnChildren(state_space, frontier[0])
    # copy the node to the explored set
    explored.append(frontier[0])
    # remove the expanded node from the frontier
    del frontier[0]
```

Check if the children generated should be added to the frontier or discarded. If any child is expanded previously, i.e. in the explored set, or if it is generated previously but not expanded yet, i.e. in the frontier, then it should be discarded. Else, it should be added to the frontier.

```python
    del frontier[0]
    # loop through the children
    for child in children:
      # check if a node was expanded or generated previously
      if not (child.state in [e.state for e in explored]) and not (child.state in [f.state for f in frontier]):
        # add child to the frontier
        frontier.append(child)
```

!!! info "List comprehension"
    `[e.state for e in explored]` is using the syntax of list comprehension. List comprehension provides a shorter syntax to create a new list. 

    This example loops through the variable `explored` and create a list with the values of `.state` for each element (node) in the `explored` list.

    This one-liner is equivalent to

    ```python
    explored_nodes = []
    for e in explored:
      explored_nodes.append(e.state)
    ```
    
Before a child is added to the frontier, it should be tested for goal. If it has the goal state, the BFS algorithm should be terminated.

```python
      if not (child.state in [e.state for e in explored]) and not (child.state in [f.state for f in frontier]):
        # goal test
        if child.state == goal_state:
          found_goal = True
          goal_node = child
          break
        # add child to the frontiers
        frontier.append(child)
```

Now that the algorithm has identified the goal_node, we can trace the solution through the parent of the goal node all the way back to the root node (node with no parent). Then the function should return the solution of BFS.

```python
  solution = [goal_node.state]
  trace_node = goal_node
  while trace_node.parent is not None:
    solution.insert(0, trace_node.parent.state)
    trace_node = trace_node.parent
  return solution
```

### Running the algorithm
Now we have two functions `expandAndReturnChildren` and `bfs`, alongside with the variables `state_space`, `initial_state`, and `goal_state`.
    
To run a script to execute the `bfs` function, we can have the script file structured as such:

    ```python
    initial_state = 'Arad'
    goal_state = 'Bucharest'
    
    state_space = [
      ...
    ]

    class Node:
      ...

    def expandAndReturnChildren(...):
      ...
      
    def bfs(...):
      ...

    print('Solution: ' + str(bfs(state_space, initial_state, goal_state)))
    ```
    
Beware that in Python, a `.py` file can also be used to define a Python library/module. To prevent the commands outside the function to be executed when the file is used as a library instead of a script, we can implement an extra condition check.

```python
class Node:
  ...

def expandAndReturnChildren(...):
  ...

def bfs(...):
  ...

if __name__ == '__main__':
  state_space = [
  ...
  ]
  
  initial_state = 'Arad'
  goal_state = 'Bucharest'
  
  print('Solution: ' + str(bfs(state_space, initial_state, goal_state)))
```
    
`__name__` is a special variable in Python that evaluates to the name of the current module. This variable has the value of `'__main__'` if it's called as the main program rather than a module or library.
    
This part is essentially the `main` function in other programming languages like C++ and Java.
    
Execute the script and resolve any error.

## Preparation for next week
1. Fully understand the code as you will have to modify the code for other problem/search algorithms in next labs.

2. How would you modify the code to run other uninformed search algorithms such as uniform-cost search, depth-first search, etc.? Which part(s) of the code do you need to modify? Think about it before you work on that in [Lab 3](lab3.md) next week.