# Lab 3 (Part I): Search Algorithms (Machine Learning Onramp)

## Breadth-First Search (BFS) algorithm 

After completing this lab, you will be able to implement the **Breadth-First Search (BFS)** search algorithm in Python.


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

### Elements of Search Algorithm 

As we discussed in the class, in order to execute a Search Algorithm, we need to define the following items: 

- State Representation 
- The State Space 
- The Transition Model 

Furthermore, you will need your program to be more robust to be able to implement other Search Algorithms without drastic changes. More on that later. 

### 1. State Representation 

In this problem, the only state we need to consider is the *location* of Nick. Therefore we can use the names of the cities as the state.

Since Nick is starting in Arad, going to Bucharest, we can define the *initial state* and *goal state* as: 

```python
initial_state = "Arad"
goal_state = "Bucharest"
```

### 2. The State space

The transition model provides the way to identify the child of a node in a search tree given a specific action. In this problem, we need to translate the whole state space from the geographical network into the program together with the step costs between the connected states.

The important information from the state space is the connections between states and the step costs between connected states. Notice that in this problem the connections are reversible. Therefore in our state space the connection from Arad to Zerind and the connection from Zerind to Arad are identical, hence only one instance of that connection is needed.
    
The most straightforward way of defining the state space is by using a nested array, in which each inner array consists of the two connected states and its cost. 

Define a variable `state_space` to store the state space. As seen below, it is a nested list (a list containing inner lists). The following code shows the first three elements in the nested list. 
```python
state_space = [
  ['Arad', 'Zerind', 75],
  ['Arad', 'Timisoara', 118],
  ['Timisoara', 'Lugoj', 111],
  ...
]
```

**Task 1:** Complete the list of cities and distances in the `state_space` variable 


### 3. The Transition model 

In this problem, the transition model is defined by the action of *traveling* between connected cities. To represent this action, we can create a *function* that searches through the state space to find the children of the current node, which effectively represents the available travel options.

This function iterates through the `state_space` variable, checking for connections linked to the current node. Each city connected to the current node becomes a *child* of that node. We define a new function called `expandAndReturnChildren` to handle this process.
 
```python
def expandAndReturnChildren(state_space, node):
  children = []
  for [n,m,c] in state_space:
    if n == node:
      children.append(m)
    elif m == node:
      children.append(n)
  return children
```

This function explores the state_space, and returns a list of all possible children of `node`.

**Discussion:** 
- how does this function actually work? read the code and see if you can understand its inner workings.
- Instead of n,m,c, why not use something more descriptive like City1, City2, Cost ?  

**Task 2:** Implement `expandAndReturnChildren` in your program and test its validity


## Using Python Classes & Objects (Object Oriented Programming) 

Although we can proceed with the current code to implement BFS, it will become increasingly complex as the search deepens. To make the code more manageable and adaptable for future search algorithms, we can adopt an object-oriented approach. By defining a class to represent each "city" in the state space tree and using objects to model each city instance, we simplify the structure. This not only enhances readability but also makes the code more robust and flexible for implementing other search strategies.

To achieve this, we define each city as a *Node*. Each node stores key information,
- state: the name of the city itself
- parent: the name of the preceding city in the search tree. 
- children: a list cites in the branches in the search tree. 

The Class definition also includes a method that adds children cities to the current node (more on that later)

```python
class Node:
  def __init__(self, state=None, parent=None):
    self.state = state
    self.parent = parent
   	self.children = []		
		
  def addChildren(self, children):
	self.children.extend(children)	    
    
```

This structure allows us to trace the path from any node back to the initial state, enabling efficient path reconstruction once the goal is found.

!!! info "Class in Python"
    In Python, to define a class, the class needs to have the function `__init__` with at least one input `self`. This function is called when an object is initiated with this class. The internal variable `self` defines the properties of the object. The input arguments apart from `self` for the function `__init__` are the parameters to be passed when initiating a new object.
    
    In a class, additional functions can also be defined, and these will be the methods for the object of this class. 

With this implementation of node as a class, the `expandAndReturnChildren` function is updated to be

```python
def expandAndReturnChildren(state_space, node):
  children = []
  for [n,m,c] in state_space:
    if n == node.state:
      childnode = Node(m, node)
      children.append(childnode)
    elif m == node.state:
      childnode = Node(n, node)
      children.append(childnode)
  return children
```

**Discussion:** 

- Discuss the changes to `expandAndReturnChildren` (Specfically: Objects vs. Strings) 
- in this function, we first create a `childenode` object, then in the next line we append it to `Children`, why not do that in one line? 
- what about the cost? we seem to ignore so far, *why?*. can you modify the function to capture the cost as well? (more on that later)  

Think about these issues before you continue. 

!!! tip "A Quick check"
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
	   	self.children = []		
			
	  def addChildren(self, children):
		self.children.extend(children)	            
        
    def expandAndReturnChildren(state_space, node):
      children = []
	  for [n,m,c] in state_space:
	    if n == node.state:
	      childnode = Node(m, node)
	      children.append(childnode)
	    elif m == node.state:
	      childnode = Node(n, node)
	      children.append(childnode)
      return children
    ```


!!! note "Separation of Problem Definition vs. Algorithm Definition."

	By defining the key elements—namely, the initial state, goal state, state space, and transition model—**before implementing the BFS algorithm**, we have effectively separated the problem from the algorithm.

	This separation offers significant advantages in programming, particularly in terms of flexibility and reusability:

	- The initial state represents the starting point of the search—in this case, the city where the journey begins.

	- The goal state defines the destination or target that the algorithm is trying to reach.

	- The state space outlines all the possible connections between cities, including the cost of traveling from one to another. It serves as the map or environment within which the search operates.

	- The transition model defines how one can move from one state (city) to another. It governs the valid moves or actions available and is typically implemented as a function that returns the next possible states (children) from a given current state.

## The Breadth-First Search (BFS) algorithm

Below is the complete code for the BFS Search Algorithm. Please review it first — we’ll then go through it step by step to understand how it works

!!! tip "The BFS Algorithm: The Complete Code"
	```python	
	
	# The BFS Search Algorithm  
	def bfs(state_space, initial_state, goal_state):
		# STEP 1 - Initialization
		frontier 	= []		# the front-line, the CURRENT exploration/test node
		explored 	= []		# list of nodes we already explored  
		found_goal 	= False
		frontier.append(Node(initial_state, None))	# first node in the frontier is the initial_state		
		goal_node 	= Node()
		solution 	= []	
		path_cost = 0
		
		# STEP 2 - Search for Goal Loop  
		while not found_goal:
	
			# 2.1 Manage the Frontier & Explored Lists 
			children = expandAndReturnChildren(state_space, frontier[0])
			frontier[0].addChildren(children)
			explored.append(frontier[0])
			del frontier[0]
	
			# 2.2 Goal Test
			for child in children:
				# first, check if node was alrady expanded or explored
				if not (child.state in [e.state for e in explored]) and not (child.state in [f.state for f in frontier]): 
					# next, check if node is goal
					if child.state == goal_state:
						found_goal = True		# end algorithm 
						print("Goal Found!")
						goal_node = child		# for later processing
					frontier.append(child)		# to search deeper   
			
			# 2.3 Progress output  
			print("Explored:", [e.state for e in explored])
			print("Frontier:", [f.state for f in frontier])
			print("Children:", [c.state for c in children])
			print("")
	
		# STEP 3 Find Solution path	
		solution = [goal_node.state]		# start from goal node
		trace_node = goal_node				# use the trace node to trace the path back to the initial node
		  					
		# 3.1 trace your steps and find the solution path
		while trace_node.parent is not None:				# are you back to the initial_state ?
			solution.insert(0, trace_node.parent.state)		# then find the parent and add it to the solution list
			trace_node = trace_node.parent					# set trace to parent (to go back one level, and repeat)
			
		# 3.2 determine the cose of the solution path. 
		for i in range(len(solution) - 1):
			city1 = solution[i]
			city2 = solution[i + 1]
			
			for [from_city, to_city, cost] in state_space:
				if (from_city == city1 and to_city == city2) or (from_city == city2 and to_city == city1):
					path_cost += cost
					break  # Exit once the matching pair is found
							
		return solution, path_cost
	```

Now, let's go step by step. As discussed in the class, the BFS algorithm revolves around the use of two key lists:

- **frontier**: Nodes (cities) that are discovered but not yet explored

- **explored**: Nodes (cities) that have been fully examined

The algorithm systematically moves nodes from the **frontier** to **explored** as it traverses the `state_space`, continuing until the `goal_state` is found. The major steps of the BFS algorithm include the following key steps:

- `Initialization:` Set up the initial variables, including placing the starting city into the frontier.

- `The Search Loop:` This step repeatedly explores the search space by expanding nodes, testing for the goal, and updating progress.

- `Solution & Cost:` Once the goal is found, this step traces the solution path back to `inital_stat`, then calculates the its cost. 


**Step 0: Function definition and inputs**

We will now implement the BFS algorithm as a Python function that takes the `state_space`, `initial_state`, and `goal_state` as arguments (inputs). 

Additionally, the BFS funtion utilizes the `expandAndReturnChildren` function and the `Node` Class defintion and its methods.

```python
def bfs(state_space, initial_state, goal_state):
```

**Step 1: Initialization**

```python
def bfs(state_space, initial_state, goal_state):

	# STEP 1 - Initialization
	frontier 	= []		
	explored 	= []		 
	found_goal 	= False
	
	frontier.append(Node(initial_state, None))	
	goal_node 	= Node()
	solution 	= []	
	path_cost = 0

```

In this first step, we set up the key variables that drive the BFS process—defining the `frontier`, `explored`, and placing the initial state as the starting node. While some variables like `goal_node`, `solution`, and `path_cost` are prepared for later use. 

**Discussion:** 
- evaluate each variable definition and explain why it is needed
- why is goal_node is defined as a blank object and not a String? 

!!! info "`Node(initial_state, None)`"
    As the root node has no parent, we use `None` as the value of the parent of root node.

**Step 2: The Search Loop**

After initialization, the algorithm enters the search loop, which is the heart of BFS. In this loop, we systematically explore the nodes in the `frontier` until the goal is found. Each cycle of the loop involves three main parts:

- 2.1 Managing the `frontier` and `explored` lists to track which nodes have been discovered and processed,
- 2.2 Performing a **goal test** to check whether we’ve reached the destination, and
- 2.3 Outputting the current progress to help us observe how the search unfolds step by step.

We’ll now break down each of these subsection in more detail

```python
	# STEP 2 - The Search Loop  
	while not found_goal:
		# 2.1 Manage the Frontier & Explored Lists 
		children = expandAndReturnChildren(state_space, frontier[0])
		frontier[0].addChildren(children)
		explored.append(frontier[0])
		del frontier[0]
```
   
**Discussion:** 
- read each line and understand what is going on 
   
```python
		# 2.2 Goal Test
		for child in children:
			# first, check if node was alrady expanded or explored
			if not (child.state in [e.state for e in explored]) and not (child.state in [f.state for f in frontier]): 
				# next, check if node is goal
				if child.state == goal_state:
					found_goal = True		# end algorithm 
					print("Goal Found!")
					goal_node = child		# for later processing
				frontier.append(child)		# to search deeper   
```

**Discussion:** 
- what happens if we dont check for redundancies?
 
!!! info "List comprehension"
	In step 2.2, we use a special Syntax; `[e.state for e in explored]` which is referred to as List Comprehension. List comprehension provides a shorter syntax to create a new list. 

    This example loops through the list variable `explored` and create a list with the values of `.state` for each element (node) in the `explored` list.

    This one-liner is equivalent to

    ```python
    explored_nodes = []
    for e in explored:
      explored_nodes.append(e.state)
    ```

```python		
		# 2.3 Progress output  
		print("Explored:", [e.state for e in explored])
		print("Frontier:", [f.state for f in frontier])
		print("Children:", [c.state for c in children])
		print("")
```
   
**Discussion:** 
- Is this step really necessary? what value does it add to your code? 
       
**Step 3: Solution & Cost**

Now that the algorithm has identified the `goal_node`, we can trace the solution through the parent of the goal node all the way back to the root node (node with no parent). Then the function should return the solution of BFS.

```python
	# STEP 3 Find Solution path	
	solution = [goal_node.state]		
	trace_node = goal_node				
	  					
	# 3.1 trace your steps and find the solution path
	while trace_node.parent is not None:				
		solution.insert(0, trace_node.parent.state)		
		trace_node = trace_node.parent					
```

**Discussion:** 
- Read the code of each step and understand its inner workings 
- try to understand how the solution path is created in the end
- Question: what is the difference between the Solution List, and the other lists we defined earlier (such as Frontier or Explored)? 

Next, the final step, is the determine the cost of this solution path. At this point, we finally utilize the cost element that is part of the `state_space` as we discussed early on. 

```python
	# 3.2 determine the cose of the solution path. 
	for i in range(len(solution) - 1):
		city1 = solution[i]
		city2 = solution[i + 1]
		
		for [from_city, to_city, cost] in state_space:
			if (from_city == city1 and to_city == city2) or (from_city == city2 and to_city == city1):
				path_cost += cost
				break  	
```

**Discussion:** 
- Read the code of each step and understand its inner workings 
- what is += and why is it used here ? 
- In your opinion, is this an efficient way to calculate path cost? is there a better way?

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
    
**Discussion:** 
- what if we want to run this code to test two other cities ? 
- for example, what if Nick was in **Oradea** and wanted to go to **Vaslui**
- how would you modify the code (without redefining inital and goal we set above) to do that? 

**Task 3: Run and test your BFS Search Algorithm**

## Preparation for next week (Part II)
    
Reusing code is one of the most valuable skills a programmer can develop.

A great way to reuse the code for other search algorithms is to encapsulate it into a library or module, which you can then import and call in future Python programs.

In fact, any `.py` file can be used to define a Python library or module. However, to prevent code outside the functions from executing when the file is imported as a library (instead of being run as a script), we can add an extra condition check.

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

**Prep work for Part II**

1. Fully understand the code as you will have to modify the code for other problem/search algorithms in future labs.

2. How would you modify the code to run other uninformed search algorithms such as uniform-cost search, depth-first search, etc.? Which part(s) of the code do you need to modify? Think about it before you work on that in next part of this lab

---

# Bonus Opportunity: Machine Learning Onramp Certificate

To complement your learning in this lab and explore applied machine learning techniques, you are encouraged to complete the **Machine Learning Onramp** course by MathWorks.

- **Estimated Time:** ~2 hours  
- **Platform:** Online (browser-based)  
- **Outcome:** Digital Certificate of Completion from MathWorks

**Action Steps:**
1. Access the course here: [Machine Learning Onramp – MathWorks Academy](https://matlabacademy.mathworks.com/details/machine-learning-onramp/machinelearning)
2. Go through all the lessons and complete the interactive activities.
3. Download your Certificate of Completion.
4. Upload your certificate along with your Lab X submission on LMS.

**Bonus Recognition:**
- Students who complete and submit this certificate will be acknowledged later in the semester.
- This is **optional** and will **not** impact your Lab X grade.

---


