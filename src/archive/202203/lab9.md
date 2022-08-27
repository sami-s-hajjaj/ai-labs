# Lab 9: Clustering

## Objective

1. To implement *k*-means clustering algorithm using basic Python.

2. To perform *k*-means clustering algorithm with `scikit-learn` Python library.

## Note
1. Suggestion: use `numpy` library to simplify the operation.

## *k*-means clustering using basic Python

1. The following code structure will be used for this section:

    ```python
    # import libraries
    ...

    # functions
    ## function to take input of data and number of clusters, return centroids and other data
    def get_random_centroids(data_points, n_centroids=2):
      pass

    ## function to group data according to centroids
    def group_to_centroids(data_points, centroids):
      pass

    ## function to calculate centroids from grouped data
    def find_centroids(data_points, groups):
      pass

    # generate dataset
    ...

    # identify initial centroids
    ...

    # repeat until centroids stabilise
    while ...:
      ## group data to centroids
      ...
      ## update centroids
      ...

    print('terminated')
    ```

### Dataset
1. The code in this subsection will populate
    ```python
    # generate dataset
    ...
    ```

2. We will create a dataset of 200 with 2 input features and 4 clusters.

    ```python
    from sklearn.datasets import make_blobs
    data = make_blobs(n_samples=200, n_features=2, centers=4, cluster_std=1.6, random_state=50)
    ```

3. `data` is an array of two elements. First element contains the data points, and second element contains the index of the cluster.

    ```python
    points = data[0]
    ```

4. Plot the data on a scatter graph with colour representing the cluster of the points.

    ```python
    import matplotlib.pyplot as plt
    plt.scatter(data[0][:,0], data[0][:,1], c=data[1])
    ```

### Initialisation
1. The initialisation for *k*-means clustering algorithm involves the identification of *k* random points from the dataset.

2. In the `get_random_centroids` function, pass the dataset and the number of centroids to be identified as the input arguments. 

3. In the body of the function, randomly identify the centroids from the dataset.

4. The function should return two outputs, the randomly identified centroids and the dataset without the centroids.

5. Update your code with the following snippet:
    ```python
    # identify initial centroids
    centroids, others = get_random_centroids(points, 4)
    ```

### Cluster the points
1. The `group_to_centroids` function takes two inputs, the data points to be clustered and the centroids to cluster to.

2. In the `group_to_centroids` function, calculate the distance of every point from each centroid.

3. Then identify the centroid each point should be clustered to.

4. The function should return the index of the centroid each point is clustered to. 

5. Update your code with the following snippet:
    ```python
    ## group data to centroids
    groups = group_to_centroids(others, centroids)
    ```

### Update the centroids
1. The `find_centroids` function takes two inputs, the data points and the index of the centroid each point is clustered to (i.e. output of `group_to_centroids`)

2. The `find_centroids` function calculates and returns the new set of centroids based on the clustered data points.

3. Update your code with the following snippet:
    ```python
    ## update centroids
    centroids = find_centroids(others, groups)
    ```

### Termination condition
1. The clustering algorithm should terminate when the centroids stabilise, i.e. do not change much.

### Visualisation
1. Update your code according to the following sample to visualise the centroids and clusters at every iteration.
    ```python
    fig = plt.figure()
    ax = fig.add_subplot(111)
    # repeat until centroids stabilise
    while ...:
      ## group data to centroids
      groups = group_to_centroids(others, centroids)

      ## update centroids
      centroids = find_centroids(others, groups)

      ## visualise current clusters and centroids
      ax.clear()
      ax.scatter(others[:,0], others[:,1], c=groups)
      ax.scatter(centroids[:,0], centroids[:,1], marker='*', c='k')

      ## pause for one second
      plt.pause(1)
    ```

2. Are Figure 1 (originally generated clusters) and Figure 2 (calculated clusters) identical?

## *k*-means clustering using `scikit-learn` Python library

1. The following code structure will be used for this section:

    ```python
    # import libraries
    ...

    # generate dataset
    ...

    # initialise the k-means model
    ...

    # train the k-means model
    ...

    # identify the cluster of each point
    ...

    # visualise the result
    ...
    ```

### Dataset
1. We will use the exact same data generation as the previous section.

### k-means model
1. The *k*-means model is provided by `sklearn.cluster.KMeans`.
    ```python
    from sklearn.cluster import KMeans
    ```

2. Initialise the *k*-means model with 4 clusters using `KMeans`. (Check the documentation to identify the usage of `KMeans`)

### Training
1. The *k*-means model initialised need to be trained with the data.

2. The training is executed using `sklearn.cluster.KMeans.fit`. (Identify the input argument(s))
    ```python
    kmeans.fit(...)
    ```

### Cluster the points
1. The trained model can be used to cluster the points to their respective cluster using `sklearn.cluster.KMeans.fit_predict`. (Identify the input argument(s))
    ```python
    y_km = kmeans.fit_predict(...)
    ```

### Visualisation
1. The visualisation of the result can be achieved with the following code:
    ```python
    plt.figure()
    plt.scatter(points[:,0], points[:,1], c=y_km)
    plt.scatter(kmeans.cluster_centers_[:,0], kmeans.cluster_centers_[:,1], c='k')
    ```

**Task**: Compare the results of the two methods, are they similar?