# Lab 1 Python Refresher (MATLAB Onramp)

## Objective

To understand basic syntax of Python programming language.

## Declare a variable

> Python is strongly and dynamically typed.

**Strongly typed** means the type of a variable does not change unexpectedly. When a variable is defined as a string with only numerical digits, it stays string, it doesn’t become an integer or number.

**Dynamically typed** means the type of a variable can change when a value of a different type is assigned to the variable.

As Python is dynamically typed, we do not need to specify a type when we declare a variable. We just assign a value to the variable.

1. Define a variable named `val` and assign the value `'a'` to the variable.

    ```python
    val = 'a'
    ```

    The type of the variable can be viewed in the variable explorer.

2. Continue from the previous code block, assign the value `1` to the same variable. The variable will now be of type `int` instead of type `str`.

    ```python
    val = 1
    ```

## Array manipulation

1. Array in Python can be declared using a set of square brackets (`[...]`).
  
2. To assign a variable with an empty array,

    ```python
    arr = []
    ```
  
3. To define an array with a series of numbers,

    ```python
    arr = [1,2,3,4,5]
    ```
    
4. To define an array with a series of alphabets,

    ```python
    arr = ['a','b','c','d','e']
    ```

5. An array can also be defined with values of mixed types.

    ```python
    arr = [1,'a',2,'b',3,'c']
    ```
  
6. Python arrays (or more commonly known as lists) are zero indexed arrays; it means to access the first element in the array `arr`,

    ```python
    # in IPython console
    arr[0] # gives the output of 1
    arr[1] # gives the output of 'a'
    ```

7. Python arrays also support negative indexing; this means to get the last element in the array `arr`,

    ```python
    # in IPython console
    arr[-1] # gives the output of 'c'
    ```

8. Colon (`:`) can be used to extract multiple elements from an array. Maximum two (2) colons can be used for indexing/slicing an array. `arr[0:5:2]` The value before the first colon is the starting index, the value after the first colon is the ending index (exclusive), the value after the second colon is the number of steps. 

    If the first value is empty, it is assumed as `0`.

    If the second value is empty, it is assumed as the length of the array, i.e. up till the last element in the array.

    If the third value is empty, it is assumed as `1`.

    ```python
    # in IPython console
    arr
    # [1, 'a', 2, 'b', 3, 'c']
    arr[1:5]
    # ['a', 2, 'b', 3]
    arr[1:5:2]
    # ['a', 'b']
    arr[:3]
    # [1, 'a', 2]
    arr[4:]
    # [3, 'c']
    arr[2:-2]
    # [2, 'b']
    arr[4:1]
    # []
    arr[4:1:-1]
    # [3, 'b', 2] --> slice in the reverse order
    ```

### Add an element to the end of an array

```python
# in IPython console
arr.append(4)
arr
# [1, 'a', 2, 'b', 3, 'c', 4]
```

### Add multiple elements to the end of an array

```python
# in IPython console
arr.extend(['d',5,'e'])
arr
# [1, 'a', 2, 'b', 3, 'c', 4, 'd', 5, 'e']
```

### Assign a value to a specific index

```python
# in IPython console
arr[0] = 0
arr
# [0, 'a', 2, 'b', 3, 'c', 4, 'd', 5, 'e']
```

### Insert an element at a specific index

```python
# in IPython console
arr.insert(1,1)
arr
# [0, 1, 'a', 2, 'b', 3, 'c', 4, 'd', 5, 'e']
```

### Remove an element at a specific index
```python
# in IPython console
del arr[0]
arr
# [1, 'a', 2, 'b', 3, 'c', 4, 'd', 5, 'e']
```
  
### Combining arrays
  
`zip` can be used to combine two or more arrays.

```python
# in editor
joint_arr = list(zip([1,2,3], ['a','b','c']))
```

```python
# in IPython console
joint_arr
# [(1,'a'),(2,'b'),(3,'c')]
```

## Loops
  
1. Python supports `for` and `while` loops.
  
2. To loop through every element in the array `arr` and print them to the console,
  
    ```python
    for a in arr:
      print(a)
    # 1
    # a
    # 2
    # ...
    ```
  
    `for a in arr`: loops through all elements in `arr` and in each loop, an element in `arr` is assigned to the variable `a`.
  
3. Note that in most other programming languages, code blocks are separated with delimiters such as the curly brackets (`{}`). This is not the case in Python. Code blocks in Python are defined by their indentation and normally initiated with a colon(`:`). 
  
    For example,
    
    ```python
    for a in arr:
      print(a)
    print(arr)
    ```
  
    `print(a)` is the command to be executed in each loop.
    
    `print(arr)` is only executed after the `for` loop is completed.

    ```python
    for a in arr:
      print(a)
      print(arr)
    ```
    
    In this case, `print(arr)` is executed in each loop.
  
4. Using `zip` we can loop through two arrays at once.

    ```python
    for item in zip(['a','b','c','d'],['artificial','breadth','cost','depth']):
      print(item[0] + ' for ' + item[1])
    ```
  
5. `enumerate` is useful in obtaining the index of the element in the array.

    ```python
    for (index, item) in enumerate(['a','b','c','d']):
      print('Index of ' + item + ' is: ' + str(index))
    ```
  
6. Looping through a dictionary (`dict`) can also be done easily.

    ```python
    x_dict = {
      'd': 'depth',
      'e': 'estimation',
      'f': 'frontier'
    }
    for key,value in x_dict.items():
      print(key + ' for ' + value)
    ```
  
7. `while` loops can be defined similarly.

    ```python
    x = 0
    while x != 10: 
      x += 1
      print(x)
    print('while loop is completed')
    ```

8. The following example introduces nested array and multiple assignments.

    ```python
    arr = [['a',1],['b',2],['c',3],['d',4],['e',5],['f',6]]
    for [a,n] in arr:
      print(str(a) + ' is ' + str(n))
    ```

## Conditions
  
1. The following operators can be used for conditional testing:
  
    |Operator|Definition               |
    |:------:|:-----------------------:|
    |`==`    |Equivalence              |
    |`!=`    |Inequivalence            |
    |`<`     |Less than                |
    |`<=`    |Less than or equal to    |
    |`>`     |Greater than             |
    |`>=`    |Greater than or equal to |

2. Python also supports text operator for conditional testing:
  
    |Operator|Definition   |Example (symbolic)|Example (text)  |
    |:------:|:-----------:|:----------------:|:--------------:|
    |`is`    |Equivalence  |`a == 1`          |`a is 1`        |
    |`not`    |Inequivalence|`a != 1`          |`a is not 1` <br> or `not (a is 1)` <br> or `not a is 1` <br> or `not(a == 1)`|

3. Combining two conditions can also be done with text operators `and` and `or`.
    
    |Symbolic operator|Text operator|
    |:---------------:|:-----------:|
    |`&`              |`and`        |
    |`|`              |`or`         |

## User-defined functions
  
1. To define a custom function with the name of `custom_fcn`,

    ```python
    def custom_fcn():
      print('This is a custom function to display custom message')
    ```
  
2. To call the function,

    ```python
    custom_fcn()
    # This is a custom function to display custom message
    ```
  
### User-defined functions with input arguments
  
1. To define a custom function with input arguments,

    ```python
    def custom_fcn(msg):
      print('This is a custom function to display ' + msg)
    ```
  
2. The function can be called by

    ```python
    custom_fcn('new message')
    # This is a custom function to display new message
    ```
  
### User-defined functions with optional input arguments
  
1. To define a custom function with optional input arguments, we just need to provide the default value to the optional input arguments.

    ```python
    def custom_fcn(msg = 'default message'):
      print('This is a custom function to display ' + msg)
    ```
  
2. The input arguments can also be specified as named inputs.

    ```python
    custom_fcn(msg='new message')
    # This is a custom function to display new message
    ```

## Exercise

1. Create a new file in Spyder. Define a variable named `friends` such that it is a nested array in which contains the name, home country, and home state/province of 10 of your friends (real or virtual). For example,

    ```python
    friends = [["James", "Malaysia", "Malacca"], ["Goh", "Australia", "Brisbane"], ["Don", "Malaysia", "Pahang"]]
    ```

2. Create a function in the same file with three (3) optional input arguments, `name`, `home_country`, `home_state`.

    ```python
    def filterFriend(name="", home_country="", home_state=""):
      ...
      return filtered
    ```

    This function will filter `friends` based on the input arguments provided. The function will ignore the input argument if it has empty string, i.e. `""`. If any of the input arguments is provided, the function will find the friends whose detail(s) matches the input.

    For example, 
    
    `filterFriend(name="James")` will return `[["James", "Malaysia", "Malacca"]]`
    
    `filterFriend(home_country="Malaysia")` will return `[["James", "Malaysia", "Malacca"], ["Don", "Malaysia", "Pahang"]]`.
    
    
# Bonus Opportunity: MATLAB Onramp Certificate

As part of enhancing your professional skills, you are encouraged to complete the **MATLAB Onramp** course provided by MathWorks.

- **Estimated Time:** ~2 hours
- **Platform:** Online (browser-based)
- **Outcome:** Digital Certificate of Completion from MathWorks

**Action Steps:**
1. Access the course here: [MATLAB Onramp - MathWorks Academy](https://matlabacademy.mathworks.com/)
2. Complete all activities and quizzes.
3. Download your Certificate of Completion.
4. Upload your certificate along with your Lab 1 submission on LMS.

**Bonus Recognition:**
- Students who complete and submit the certificate will receive a special recognition later in the semester (details to be explained in class).
- This is entirely **optional** and will not affect your Lab 1 grade.

---
