# Lab 6: Linear Regression

## Objectives

1. To develop the script to perform gradient descent on linear regression model with least squares method using Python.

2. To train a linear regression model with least squares method using the `scikit-learn` Python library.

## Dataset

Throughout this lab we will be using the data for 442 diabetes patients. The data can be import from the `sklearn` library.

```python
from sklearn import datasets
diabetes = datasets.load_diabetes()
```

`diabetes` contains the keys of `data`, `target`, `DESCR`, `feature_names`, `data_filename`, and `target_filename`. The description of the diabetes dataset is given by

```python
print(diabetes.DESCR)
```

**Task**: What are the keys for the input data and the output/target data?

## Gradient descent on linear regression model with least squares method

1. Load the dataset as described in the [Dataset](#dataset) Section.

    ```python
    from sklearn import datasets
    diabetes = datasets.load_diabetes()
    ```
  	
2. Convert the dataset into a pandas DataFrame.

    ```python     
    import pandas as pd
    dt = pd.DataFrame(diabetes.data, columns=diabetes.feature_names)
    y = pd.DataFrame(diabetes.target, columns=['target'])
    ```
  	
3. In machine learning, the common practice is to split the dataset into training data and testing data (some also include the validation data). The testing data is not used during the training phase, but only after training to evaluate the model.
  	

  	The split is normally done such that the training data has a larger portion than the testing data. In this case, let's use a 80-20 split for the training data and testing data.
  	
  	`sklearn` provides a function to split the train-test data given a percentage.
  	
    ```python
    from sklearn.model_selection import train_test_split
  	```
  	
    **Task**: How do you use `train_test_split` to split the data and target into 80-20 proportion? (Define the training features as `X_train`, training target as `y_train`, testing features as `X_test`, testing target as `y_test`.)
    
4. Before we train the data, a few functions need to be defined. We will start with defining the model of a simple regression line, i.e. $y = mx + c$. Define the function name as `model` with 3 inputs `x`, `m`, and `c`. The function should return the value of `y`.
  	
5. The next function to define is the cost function, i.e. 

    $$J = \frac{1}{n}\sum_{i=1}^{n} (y_i - \hat{y}_i)^2$$ 
    
    Name the function as `cost` with 2 inputs `y` as the array of target values and `yh` as the array of predicted target values. The function returns a scalar value of the cost. Assume the arrays are pandas Series.
  	
6. We also need to define the function to calculate the derivatives of the cost with respect to each parameter. Name the function as `derivatives` with 3 inputs `x` as the array of input values, `y` as the array of of target values, and `yh` as the array of predicted target values. The function returns a dict object with keys `m` to hold the value of $\frac{\partial J}{\partial m}$ and `c` the value of $\frac{\partial J}{\partial c}$. Assume the arrays are pandas Series.

    $$\frac{\partial J}{\partial m} = -\frac{2}{n} \sum_{i=1}^{n} x_i (y_i - \hat{y}_i)$$

    $$\frac{\partial J}{\partial c} = -\frac{2}{n} \sum_{i=1}^{n} (y_i - \hat{y}_i)$$
  	
7. We will use `bmi` as our input feature. 
  	
8. Define the initial values for the parameters.

    ```python
    learningrate = 0.1
    m = []
    c = []
    J = []
    m.append(0)
    c.append(0)
    J.append(cost(y_train['target'], X_train['bmi'].apply(lambda x: model(x, m[-1], c[-1]))))
    ```

9. Define the termination conditions.

    ```python
    J_min = 0.01
    del_J_min = 0.0001
    max_iter = 10000
    ```

    | Variable    | Termination condition    |
  	|-----:|:------|
    |`J_min`|The algorithm terminates when the cost is less than this value.|
    |`del_J_min`|The algorithm terminates when the proportion of change in cost to the current cost is less than this value.|
    |`max_iter`|The algorithm terminates when the number of iteration exceeds this value.|
  
10. Now develop the code to perform gradient descent. 
  	
    1. Check termination conditions, if any condition fulfilled, the algorithm is terminated.
  	2. Calculate derivatives.
  	3. Update $m$ and $c$; append the new values to the arrays `m` and `c`.
  	4. Calculate $J$; append the value to the array `J`. Repeat from the beginning.
  
11. To provide feedback during each iteration, `import sys`, and add the following lines as the last lines in the loop.

    ```python
    print('.', end='')
    sys.stdout.flush()
  	```
  	
12. To provide visual display for each iteration, `import matplotlib.pyplot as plt`. Add these lines before the loop.
  	
    ```python
    plt.scatter(X_train['bmi'], y_train['target'], color='red')
    plt.title('Training data')
    plt.xlabel('BMI')
    line = None
    ```
  	
    Add the following lines as the last lines in the loop.

    ```python
    if line:
      line[0].remove()
    line = plt.plot(X_train['bmi'], X_train['bmi'].apply(lambda x: model(x, m[-1], c[-1])), '-', color='green')
    plt.pause(0.001)
    ```
		
13. Outside of the loop, add the following lines to display the results.

    ```python
    y_train_pred = X_train['bmi'].apply(lambda x: model(x, m[-1], c[-1]))
    y_test_pred = X_test['bmi'].apply(lambda x: model(x, m[-1], c[-1]))
    print('\nAlgorithm terminated with')
    print(f'  {len(J)} iterations,')
    print(f'  m {m[-1]}')
    print(f'  c {c[-1]}')
    print(f'  training cost {J[-1]}')
    testcost = cost(y_test['target'], y_test_pred)
    print(f'  testing cost {testcost}')
    ```
		
14. Test the result on the testing data.

    ```python
    plt.figure()
    plt.scatter(X_test['bmi'], y_test['target'], color='red')
    plt.plot(X_test['bmi'], \
             X_test['bmi'].apply(lambda x: model(x, m[-1], c[-1])), \
             '-', color='green')
    plt.title('Testing data')
    ```

## Learning on linear regression model using scikit-learn
1. `scikit-learn` provides model and functions to perform linear regression easily.
    
    ```python
    from sklearn import linear_model
    ```
    
2. Create a linear regression model.
    
    ```python
    regrmodel = linear_model.LinearRegression()
    ```
    
3. Train the model with the training data.
    
    ```python
    regrmodel.fit(X_train[['bmi']], y_train['target'])
    ```
    
4. `regrmodel` is now a trained model. To get the predicted $y$ given a set of $x$ values,
    
    ```python
    y_train_pred = regrmodel.predict(X_train[['bmi']])
    y_test_pred = regrmodel.predict(X_test[['bmi']])
    ```
    
5. As we are using pandas data structures, we need to convert the predicted value to Series and align the indices with the target Series.
    
    ```python
    y_train_pred = pd.Series(y_train_pred)
    y_train_pred.index = y_train.index

    y_test_pred = pd.Series(y_test_pred)
    y_test_pred.index = y_test.index
    ```
    
6. Display the information of the fitted model.
    
    ```python
    print('sklearn')
    print(f'  m {regrmodel.coef_}')
    print(f'  c {regrmodel.intercept_}')
    traincost = cost(y_train['target'], y_train_pred)
    testcost = cost(y_test['target'], y_test_pred)
    print(f'  training cost: {traincost}')
    print(f'  testing cost: {testcost}')
    ```
    
7. Display the result of prediction together with the target values.
    ```python
    plt.figure()
    plt.scatter(X_train['bmi'], y_train['target'], color='red')
    plt.plot(X_train['bmi'], y_train_pred, '-', color='green')
    plt.title('Training data (sklearn)')
    plt.xlabel('BMI')

    plt.figure()
    plt.scatter(X_test['bmi'], y_test['target'], color='red')
    plt.plot(X_test['bmi'], y_test_pred, '-', color='green')
    plt.title('Testing data (sklearn)')
    plt.xlabel('BMI')
    ```

## Multivariate linear regression
1. Linear regression can also be applied with multiple inputs. With $k$ inputs, the linear regression equation is given as
    
    $$\hat{y} = \beta + m_1x_1 + m_2x_2 + \cdots + m_kx_k$$
    
2. With one input, the resultant function is a line; with two inputs, the resultant function is a plane; with more inputs, it's a hyperplane.
    
3. Gradient descent for multivariate linear regression is performed with the same approach. 
    1. Check termination conditions, if any condition fulfilled, the algorithm is terminated.
    2. Calculate derivatives.
    3. Update $m_1$, $m_2$, ..., $m_k$ and $\beta$.
    4. Calculate $J$. Repeat from the beginning.
  
4. For multivariate linear regression, the least squares cost is given by
    $$J = \frac{1}{n} \sum_{i=1}^{n} (y_i - \hat{y}_i)^2$$
    
    The derivative with respect to $\beta$ 
    $$\frac{\partial J}{\partial \beta} = -\frac{2}{n} \sum_{i=1}^{n} (y_i - \hat{y}_i)$$
    
    The derivatives with respect to $m_j$
    $$\frac{\partial J}{\partial m_j} = -\frac{2}{n} \sum_{i=1}^{n} x_{ji}(y_i - \hat{y}_i)$$
    
5. Using `scikit-learn` functions, multivariate linear regression can be achieved by providing the input features to the function.
    
6. We will now use the `bmi` and blood pressure `bp` as the input features to predict the target. Copy the code block from the previous section and change `X_...[['bmi']]` to `X_...[['bmi','bp']]` except for the plotting part.
    
7. For the graphical visualisation (plotting) part, use the following code to plot 3d graphs:
    
    ```python
    from mpl_toolkits.mplot3d import Axes3D

    fig = plt.figure()
    ax = fig.add_subplot(111, projection='3d')
    ax.scatter(X_train['bmi'], X_train['bp'], y_train['target'], color='red')
    ax.scatter(X_train['bmi'], X_train['bp'], y_train_pred, color='green')
    ax.set_xlabel('BMI')
    ax.set_ylabel('Blood pressure')
    ax.set_title('Training data (sklearn multivariate)')

    fig = plt.figure()
    ax = fig.add_subplot(111, projection='3d')
    ax.scatter(X_test['bmi'], X_test['bp'], y_test['target'], color='red')
    ax.scatter(X_test['bmi'], X_test['bp'], y_test_pred, color='green')
    ax.set_xlabel('BMI')
    ax.set_ylabel('Blood pressure')
    ax.set_title('Testing data (sklearn multivariate)')
    ```
