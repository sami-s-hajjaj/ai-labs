# Lab 3 (Part II): Search Algorithms (Machine Learning Onramp)

# PART II - Uniform-Cost Search (UCS) Algorithm 

## Objective

To create Python script to execute Uniform Cost Search (UCS) algorithm.

## Problem to be solved

We will revisit Nick’s route-finding problem in Romania, starting in Arad to reach Bucharest, and implement uniform-cost search to solve the problem.

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

### Continue work from Part I

Uniform Cost Search (UCS) changes the sorting of the frontier by ordering it with its path cost up to the leaf node and expanding the leaf node with the lowest cost.
  
1. Upcate the code from Part I to be able to sort the frontier following the path cost up to the leaf node.

2. If a latter-found node has the same state as a previous node and the previous node has been expanded, what should be done?

3. What happens when a latter-found node has the same state as a previous node and have a shorter path cost? How do we implement this in our code?

4. Note also, the goal test should be applied during expansion, not generation.

Execute the program and investigate if the program is working correctly.


---

### 1. The updated Node Class definition

```python
class Node:
  def __init__(self, state=None, parent=None, cost=0):
    self.state = state
    self.parent = parent
    self.children = []
    self.cost = cost 	
    
  def addChildren(self, children):
    self.children.extend(children)
```

**Discussion:** take a note of how the cost is now part of the node definition

### 2. The updated ExpandAndReturnChildren function

```python
def expandAndReturnChildren(state_space, node):
  children = []
  for [m,n,c] in state_space:
	# if a match is found, add the other as a child & accumulate costs
    if m == node.state:
      children.append(Node(n, node.state, node.cost+c)) 
    elif n == node.state:
      children.append(Node(m, node.state, node.cost+c))
  return children
```

**Discussion:** What is the difference between cost and c ? 

### 3. The AppendAndSort (Frontier) function (new)

```python
def appendAndSort(frontier, node):
  duplicated = False
  removed = False
  for i, f in enumerate(frontier):
    if f.state == node.state:
      duplicated = True
      if f.cost > node.cost:
        del frontier[i]
        removed = True
        break    
  if (not duplicated) or removed:
    insert_index = len(frontier)
    for i, f in enumerate(frontier):
      if f.cost > node.cost:
        insert_index = i
        break
    frontier.insert(insert_index, node)
  return frontier
```

**Discussion:** similarly to how we did it in BFS, run through the loops and evaluate this function

### 4. The UCS Algorithm (incomplete)

```python
# The UCS Algorithm 
def ucs(state_space, initial_state, goal_state):

  # Step 1 - Initiate variables & conditions
  
  # Step 2 - Search Loops 
  while not found_goal:

    # 2.1 goal test 
     
	# 2.2 Manage the Frontier & Explored Lists 

	# 2.3 Progress Update

  
  # Step 3 Solution & Cost   
  
  return solution, path_cost

```

**Discussion:** Complete & run this based on the work we did in BFS & definitions above


### 5. All together now 

Your complete Program show now look like this

```python
class Node:
  ...

def expandAndReturnChildren(...):
  ...

def appendAndSort(...):
  ...

def ucs(...):
  ...

if __name__ == '__main__':
  state_space = [
  ...
  ]
  
  initial_state = 'Arad'
  goal_state = 'Bucharest'
  
  print('Solution: ' + str(ucs(state_space, initial_state, goal_state)))
```


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


