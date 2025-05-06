# Lab 5: *k* Nearest Neighbours (KNN) (Classification Methods with ML)
 
## Objective

1. To perform *k* nearest neighbours algorithm with `scikit-learn` Python library for classification and regression.

## Datasets
1. The iris dataset will be used for classification, and the diabetes dataset for regression.

    ```python
    from sklearn import datasets
    import pandas as pd
    iris = datasets.load_iris()
    iris = {
      'attributes': pd.DataFrame(iris.data, columns=iris.feature_names),
      'target': pd.DataFrame(iris.target, columns=['species']),
      'targetNames': iris.target_names
    }
    diabetes = datasets.load_diabetes()
    diabetes = {
      'attributes': pd.DataFrame(diabetes.data, columns=diabetes.feature_names),
      'target': pd.DataFrame(diabetes.target, columns=['diseaseProgression'])
    }
    ```
  
2. Split the datasets into 80-20 for train-test proportion.

    ```python
    from sklearn.model_selection import train_test_split
    for dt in [iris, diabetes]:
      x_train, x_test, y_train, y_test = train_test_split(dt['attributes'], dt['target'], test_size=0.2, random_state=1)
      dt['train'] = {
        'attributes': x_train,
        'target': y_train
      }
      dt['test'] = {
      'attributes': x_test,
      'target': y_test
      }
    ```
  
    *Note*: Be reminded that `random_state` is used to reproduce the same "random" split of the data whenever the function is called. To produce randomly splitted data every time the function is called, remove the `random_state` argument.
  
**Task**: How do we access the training input data for the iris dataset?
  
## KNN
  
KNN algorithms are provided by the `scikit-learn` Python library as the class `sklearn.neighbors.KNeighborsClassifier` for classification, and `sklearn.neighbors.KNeighborsRegressor` for regression.
  
### Classification
  
1. Import the class for KNN classifier.

    ```python
    from sklearn.neighbors import KNeighborsClassifier
    ```

2. Instantiate an object of `KNeighborsClassifier` class with k = 5.

    ```python
    knc = KNeighborsClassifier(5)
    ```

3. Train the classifier with the training data. We will use the `sepal length (cm)` and `sepal width (cm)` (the first and second columns) as the attributes for now.

    ```python
    input_columns = iris['attributes'].columns[:2].tolist()
    x_train = iris['train']['attributes'][input_columns]
    y_train = iris['train']['target'].species
    knc.fit(x_train, y_train)
    ```

4. `.predict` function is used to predict the species of the testing data.

    ```python
    x_test = iris['test']['attributes'][input_columns]
    y_test = iris['test']['target'].species
    y_predict = knc.predict(x_test)
    ```

5. Comparing the predicted value and the target value of the test data.

    ```python
    print(pd.DataFrame(list(zip(y_test,y_predict)), columns=['target', 'predicted']))
    ```

6. Calculate the accuracy of the predicted value.

    ```python
    print(f'Accuracy: {knc.score(x_test,y_test):.4f}')
    ```

7. Visualisation
    
    1. Import the `matplotlib.pyplot` library and the colormaps from the `matplotlib` library.
        ```python   
        import matplotlib.pyplot as plt
        from matplotlib import cm
        from matplotlib.colors import ListedColormap
        ```

    2. Prepare the colormaps.
        ```python
        colormap = cm.get_cmap('tab20')
        cm_dark = ListedColormap(colormap.colors[::2])
        cm_light = ListedColormap(colormap.colors[1::2])
        ```
    
    3. Calculate the decision boundaries.
        ```python
        import numpy as np
        x_min = iris['attributes'][input_columns[0]].min()
        x_max = iris['attributes'][input_columns[0]].max()
        x_range = x_max - x_min
        x_min = x_min - 0.1 * x_range
        x_max = x_max + 0.1 * x_range
        y_min = iris['attributes'][input_columns[1]].min()
        y_max = iris['attributes'][input_columns[1]].max()
        y_range = y_max - y_min
        y_min = y_min - 0.1 * y_range
        y_max = y_max + 0.1 * y_range
        xx, yy = np.meshgrid(np.arange(x_min, x_max, .01*x_range), 
                            np.arange(y_min, y_max, .01*y_range))
        z = knc.predict(list(zip(xx.ravel(), yy.ravel())))
        z = z.reshape(xx.shape)
        ```
    
    4. Plot the decision boundary.
        ```python
        plt.figure(figsize=[12,8])
        plt.pcolormesh(xx, yy, z, cmap=cm_light)
        ```
    
    5. Plot the training and testing data.
        ```python
        plt.scatter(x_train[input_columns[0]], x_train[input_columns[1]], 
                    c=y_train, label='Training data', cmap=cm_dark, 
                    edgecolor='black', linewidth=1, s=150)
        plt.scatter(x_test[input_columns[0]], x_test[input_columns[1]], 
                    c=y_test, marker='*', label='Testing data', cmap=cm_dark, 
                    edgecolor='black', linewidth=1, s=150)
        plt.xlabel(input_columns[0])
        plt.ylabel(input_columns[1])
        plt.legend()
        ```
  
**Task**: Create a loop to compare the accuracy of the prediction at different value of k. The comparison should be shown in a graph with k as the horizontal axis and accuracy as the vertical axis.
  
### Regression
  
1. Import the class for KNN regressor.
    ```python
    from sklearn.neighbors import KNeighborsRegressor
    ```

2. Instantiate an object of `KNeighborsRegressor` class with k = 5.
    ```python
    knr = KNeighborsRegressor(5)
    ```

3. Train the regressor with the training data. We will use the `age` and `bmi` as the attributes for now.
    ```python
    input_columns = ['age', 'bmi']
    x_train = diabetes['train']['attributes'][input_columns]
    y_train = diabetes['train']['target'].diseaseProgression
    knr.fit(x_train, y_train)
    ```

4. `.predict` function is used to predict the disease progression of the testing data.
    ```python
    x_test = diabetes['test']['attributes'][input_columns]
    y_test = diabetes['test']['target'].diseaseProgression
    y_predict = knr.predict(x_test)
    ```
    
5. Comparing the predicted value and the target value of the test data.
    ```python
    print(pd.DataFrame(list(zip(y_test,y_predict)), columns=['target', 'predicted']))
    ```

6. Calculate the accuracy of the predicted value.
    ```python
    print(f'Accuracy: {knr.score(x_test,y_test):.4f}')
    ```

7. Visualisation
    
    1. Import the `matplotlib.pyplot` library and the colormaps from the `matplotlib` library.
        ```python
        import matplotlib.pyplot as plt
        from matplotlib import cm
        ```

    2. Prepare the colormaps.
        ```python
        dia_cm = cm.get_cmap('Reds')
        ```

    3. Calculate the decision boundaries.
        ```python
        import numpy as np
        x_min = diabetes['attributes'][input_columns[0]].min()
        x_max = diabetes['attributes'][input_columns[0]].max()
        x_range = x_max - x_min
        x_min = x_min - 0.1 * x_range
        x_max = x_max + 0.1 * x_range
        y_min = diabetes['attributes'][input_columns[1]].min()
        y_max = diabetes['attributes'][input_columns[1]].max()
        y_range = y_max - y_min
        y_min = y_min - 0.1 * y_range
        y_max = y_max + 0.1 * y_range
        xx, yy = np.meshgrid(np.arange(x_min, x_max, .01*x_range), 
                            np.arange(y_min, y_max, .01*y_range))
        z = knr.predict(list(zip(xx.ravel(), yy.ravel())))
        z = z.reshape(xx.shape)
        ```
    
    4. Plot the decision boundary.
        ```python
        plt.figure()
        plt.pcolormesh(xx, yy, z, cmap=dia_cm)
        ```

    5. Plot the training and testing data.
        ```python
        plt.scatter(x_train[input_columns[0]], x_train[input_columns[1]], 
                    c=y_train, label='Training data', cmap=dia_cm, 
                    edgecolor='black', linewidth=1, s=150)
        plt.scatter(x_test[input_columns[0]], x_test[input_columns[1]], 
                    c=y_test, marker='*', label='Testing data', cmap=dia_cm,
                    edgecolor='black', linewidth=1, s=150)
        plt.xlabel(input_columns[0])
        plt.ylabel(input_columns[1])
        plt.legend()
        plt.colorbar()
        ```

**Task**: Create a loop to compare the accuracy of the prediction at different value of k. The comparison should be shown in a graph with k as the horizontal axis and accuracy as the vertical axis.

---

# Bonus Opportunity: Classification Methods with Machine Learning

To deepen your understanding of classification tasks in machine learning, you are encouraged to complete the **Classification Methods with Machine Learning** course offered by MathWorks.

- **Estimated Time:** ~4 hours  
- **Platform:** Online (browser-based)  
- **Outcome:** Digital Certificate of Completion from MathWorks

**Action Steps:**
1. Access the course here: [Classification Methods with Machine Learning – MathWorks Academy](https://matlabacademy.mathworks.com/details/classification-methods-with-machine-learning/otmlcmml)
2. Complete all course modules and activities.
3. Download your Certificate of Completion.
4. Submit the certificate along with your Lab X submission on LMS.

**Bonus Recognition:**
- Completing and submitting this course will earn bonus recognition later in the semester.
- This activity is **optional** and has **no impact** on your Lab X grade.

---

