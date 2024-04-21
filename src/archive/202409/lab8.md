# Lab 8: Decision Tree

## Objective
  
1. To perform CART decision tree learning algorithm using the `scikit-learn` Python library.


## Datasets
The same iris and diabetes datasets used in Lab 7 are used here. Load the datasets and split them into 80-20 train-test proportion.
  
## Decision tree
  
Decision tree models and algorithms are provided by the `scikit-learn` as the class `sklearn.tree.DecisionTreeClassifier` for classification, and `sklearn.tree.DecisionTreeRegressor` for regression.
  
### Classification
  
1. Import the class for decision tree classifier.
    ```python
    from sklearn.tree import DecisionTreeClassifier
    ```

2. Instantiate an object of `DecisionTreeClassifier` class with gini impurity as the split criterion.
    ```python
    dtc = DecisionTreeClassifier(criterion='gini')
    ```

3. Train the classifier with the training data. We will use all the input attributes.
    ```python
    dtc.fit(iris['train']['attributes'], iris['train']['target'])
    ```

4. `.predict` function is used to predict the species of the testing data.
    ```python
    predicts = dtc.predict(iris['test']['attributes'])
    ```

5. Comparing the predicted value and the target value of the test data.
    ```python
    print(pd.DataFrame(list(zip(iris['test']['target'].species,predicts)), columns=['target', 'predicted']))
    ```

6. Calculate the accuracy of the predicted value.
    ```python
    accuracy = dtc.score(iris['test']['attributes'],iris['test']['target'].species)
    print(f'Accuracy: {accuracy:.4f}')
    ```

7. Decision tree visualisation
    
    1. Import the `matplotlib.pyplot` library and the function to visualise the tree.
        ```python
        import matplotlib.pyplot as plt
        from sklearn.tree import plot_tree
        ```
    
    2. Visualise the decision tree model.
        ```python
        plt.figure(figsize=[10,10])
        tree = plot_tree(dtc, feature_names=iris['attributes'].columns.tolist(), 
                         class_names=iris['targetNames'], filled=True, rounded=True)
        ```
  
The maximum depth of a decision tree can be defined by adding the `max_depth=...` argument to the `DecisionTreeClassifier(...)` object instantiation. To allow unlimited maximum depth, pass `max_depth=None`.
  
**Task**: Create a loop to compare the accuracy of the prediction with different maximum depths. Use 1, 2, 3, 5, 7, and 20 as the maximum depths. In every iteration, you should calculate both the accuracy on the training data and the accuracy on the testing data. The comparison should be shown in a graph with `max_depth` as the horizontal axis and accuracy as the vertical axis. Two lines should be displayed on the graph with one line for training accuracy and the other testing accuracy.
  
#### Visualisation of decision surface
This section explains the method to visualise a decision tree on a graph. To do so we will focus on using two input attributes, sepal length and sepal width, i.e. the first two columns.
  
1. Instantiate the classifier without defining the maximum depth and train the model.
    ```python
    dtc = DecisionTreeClassifier()
    input_cols = iris['train']['attributes'].columns[:2].tolist()
    dtc.fit(iris['train']['attributes'][input_cols], iris['train']['target'].species)
    ```

2. Plot the decision tree.
    ```python
    plt.figure(figsize=[50,50])
    plot_tree(dtc, feature_names=input_cols, 
              class_names=iris['targetNames'], filled=True, rounded=True)
    plt.savefig('classificationDecisionTreeWithNoMaxDepth.png')
    ```

3. Prepare the colormaps.
    ```python
    from matplotlib import cm
    from matplotlib.colors import ListedColormap
    colormap = cm.get_cmap('tab20')
    cm_dark = ListedColormap(colormap.colors[::2])
    cm_light = ListedColormap(colormap.colors[1::2])
    ```

4. Calculating the decision surface.
    ```python
    import numpy as np
    x_min = iris['attributes'][input_cols[0]].min()
    x_max = iris['attributes'][input_cols[0]].max()
    x_range = x_max - x_min
    x_min = x_min - 0.1 * x_range
    x_max = x_max + 0.1 * x_range
    y_min = iris['attributes'][input_cols[1]].min()
    y_max = iris['attributes'][input_cols[1]].max()
    y_range = y_max - y_min
    y_min = y_min - 0.1 * y_range
    y_max = y_max + 0.1 * y_range
    xx, yy = np.meshgrid(np.arange(x_min, x_max, .01*x_range), 
                        np.arange(y_min, y_max, .01*y_range))
    z = dtc.predict(list(zip(xx.ravel(), yy.ravel())))
    z = z.reshape(xx.shape)
    ```

5. Plot the decision surface.
    ```python
    plt.figure()
    plt.pcolormesh(xx, yy, z, cmap=cm_light)
    ```

6. Plot the training and testing data.
    ```python
    plt.scatter(iris['train']['attributes'][input_cols[0]],   
                iris['train']['attributes'][input_cols[1]], 
                c=iris['train']['target'].species, cmap=cm_dark, s=200,
                label='Training data', edgecolor='black', linewidth=1)
    plt.scatter(iris['test']['attributes'][input_cols[0]], 
                iris['test']['attributes'][input_cols[1]], 
                c=iris['test']['target'].species, cmap=cm_dark, s=200,
                label='Testing data', edgecolor='black', linewidth=1,
                marker='*')
    train_acc = dtc.score(iris['train']['attributes'][input_cols], 
                          iris['train']['target'].species)
    test_acc = dtc.score(iris['test']['attributes'][input_cols], 
                        iris['test']['target'].species)
    plt.title(f'training: {train_acc:.3f}, testing: {test_acc:.3f}')
    plt.xlabel(input_cols[0])
    plt.ylabel(input_cols[1])
    plt.legend()
    ```

You may not be able to see anything on one of the graph of the decision tree because the figure size is set to be larger than the screen size. However, the tree is saved to a png file in the same folder as your code.
  
#### Overfitting
  
Now, instantiate a decision tree classifier of `max_depth=3` and train it with the two input attributes used in the previous section, sepal length and sepal width.
  
Plot the decision surface for this classifier after the training. Compare the decision surface, training accuracy, and testing accuracy between this model and the model in the previous section. 
  
The previous model shows a situation of overfitting. Though the training accuracy of this model is lower than that of the previous one, the testing accuracy is higher than the previous one. That shows a higher level of generalisation.
  
### Regression
  
1. Import the class for decision tree regressor.
    ```python
    from sklearn.tree import DecisionTreeRegressor
    ```

2. Instantiate an object of `DecisionTreeRegressor` class.
    ```python
    dtr = DecisionTreeRegressor()
    ```

3. Train the classifier with the training data. We will use all the input attributes.
    ```python
    dtr.fit(diabetes['train']['attributes'], diabetes['train']['target'])
    ```

4. `.predict` function is used to predict the disease progression of the testing data.
    ```python
    predicts = dtr.predict(diabetes['test']['attributes'])
    ```

5. Comparing the predicted value and the target value of the test data.
    ```python
    print(pd.DataFrame(list(zip(diabetes['test']['target'].diseaseProgression,predicts)), 
                      columns=['target', 'predicted']))
    ```

6. Calculate the accuracy of the predicted value.
    ```python
    accuracy = dtr.score(diabetes['test']['attributes'],
                        diabetes['test']['target'].diseaseProgression)
    print(f'Accuracy: {accuracy:.4f}')
    ```

7. Decision tree visualisation
    1. Import the `matplotlib.pyplot` library and the function to visualise the tree.
        ```python
        import matplotlib.pyplot as plt
        from sklearn.tree import plot_tree
        ```

    2. Visualise the decision tree model.
        ```python
        plt.figure(figsize=[10,10])
        tree = plot_tree(dtr, feature_names=diabetes['attributes'].columns.tolist(), 
                        filled=True, rounded=True)
        ```
  
The maximum depth of a decision tree can be defined by adding the `max_depth=...` argument to the `DecisionTreeRegressor(...)` object instantiation. To allow unlimited maximum depth, pass `max_depth=None`.
  
**Task**: Create a loop to compare the accuracy of the prediction with different maximum depths. Use 1, 2, 3, 5, 7, and 20 as the maximum depths. In every iteration, you should calculate both the accuracy on the training data and the accuracy on the testing data. The comparison should be shown in a graph with `max_depth` as the horizontal axis and accuracy as the vertical axis. Two lines should be displayed on the graph with one line for training accuracy and the other testing accuracy.
  
#### Visualisation of decision surface
This section explains the method to visualise a decision tree on a graph. To do so we will focus on using two input attributes, `age` and `bmi`.
  
1. Instantiate the classifier without defining the maximum depth and train the model.
    ```python
    dtr = DecisionTreeRegressor()
    input_cols = ['age', 'bmi']
    dtr.fit(diabetes['train']['attributes'][input_cols], 
            diabetes['train']['target'].diseaseProgression)
    ```

2. Plot the decision tree.
    ```python
    plt.figure(figsize=[50,50])
    plot_tree(dtr, feature_names=input_cols, filled=True, rounded=True)
    plt.savefig('regressionDecisionTreeWithNoMaxDepth.png')
    ```

3. Prepare the colormaps.
    ```python
    from matplotlib import cm
    dia_cm = cm.get_cmap('Reds')
    ```

4. Create the decision surface.
    ```python
    import numpy as np
    x_min = diabetes['attributes'][input_cols[0]].min()
    x_max = diabetes['attributes'][input_cols[0]].max()
    x_range = x_max - x_min
    x_min = x_min - 0.1 * x_range
    x_max = x_max + 0.1 * x_range
    y_min = diabetes['attributes'][input_cols[1]].min()
    y_max = diabetes['attributes'][input_cols[1]].max()
    y_range = y_max - y_min
    y_min = y_min - 0.1 * y_range
    y_max = y_max + 0.1 * y_range
    xx, yy = np.meshgrid(np.arange(x_min, x_max, .01*x_range), 
                        np.arange(y_min, y_max, .01*y_range))
    z = dtr.predict(list(zip(xx.ravel(), yy.ravel())))
    z = z.reshape(xx.shape)
    ```

5. Plot the decision surface
    ```python
    plt.figure()
    plt.pcolormesh(xx, yy, z, cmap=dia_cm)
    ```

6. Plot the training and testing data.
    ```python
    plt.scatter(diabetes['train']['attributes'][input_cols[0]],          
                diabetes['train']['attributes'][input_cols[1]], 
                c=diabetes['train']['target'].diseaseProgression, 
                label='Training data', cmap=dia_cm, 
                edgecolor='black', linewidth=1, s=150)
    plt.scatter(diabetes['test']['attributes'][input_cols[0]],   
                diabetes['test']['attributes'][input_cols[1]], 
                c=diabetes['test']['target'].diseaseProgression, marker='*', 
                label='Testing data', cmap=dia_cm, 
                edgecolor='black', linewidth=1, s=150)
    plt.xlabel(input_cols[0])
    plt.ylabel(input_cols[1])
    plt.legend()
    plt.colorbar()
    ```
  
#### Overfitting
  
Now, instantiate a decision tree regressor of `max_depth=3` and train it with the two input attributes used in the previous section, `age` and `bmi`.
  
Plot the decision surface for this regressor after the training. Compare the decision surface, training accuracy, and testing accuracy between this model and the model in the previous section. 
  
The previous model shows a situation of overfitting. Though the training accuracy of this model is lower than that of the previous one, the testing accuracy is higher than the previous one. That shows a higher level of generalisation.
  