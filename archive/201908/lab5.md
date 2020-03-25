# Lab 5: pandas

## Objective
1. To learn the basic of the pandas Python library.

## Data structures
In pandas, there are two types of data structures:

|Structure    | Description         |
|-------------|---------------------|
|*Series*     | 1D labeled homogeneously-typed array |
|*DataFrame*  | General 2D labeled, size-mutable tabular structure with potentially heterogeneously-typed column |

## Instruction

For all sections in this lab other than the last section, use the IPython console (located normally at the right bottom corner) to run the codes.

## Imports

1. To import the `pandas` library,
    ```python
    import pandas as pd
    ```

2. `NumPy` is a dependency of `pandas` and also a powerful Python library for scientific data processing. We may need to use `NumPy` from time to time. To import `Numpy`,
    ```python
    import numpy as np
    ```

3. It's common practice to import `pandas` as `pd` and `numpy` as `np`. You would see this a lot if you tried to search for tutorials or solutions online. However, it's just a convention, it is fine to use other names.

## Series

1. Creation 

    - from list,

      ```python
      s1 = pd.Series([1, 3, 5, np.nan, 6, 8])
      s2 = pd.Series([1, 3, 5, np.nan, 6, 8], index=[1, 2, 3, 4, 5, 'f'])
      ```

      What is the difference between `s1` and `s2`?

    - from dict,

      ```python
      d = {'a': 1, 'b': 2, 'c': 3}
      s3 = pd.Series(d)
      ```

    - from scalar value,

      ```python 
      s4 = pd.Series(5, index=['a', 'b', 'c', 'd', 'e'])
      ```

2. Indexing of `Series`

    - try the following code to understand the getting and setting of a series with default indexing.

      ```python
      s = pd.Series(np.random.randn(5))
      s[0]
      s[0] = 1.5
      s
      ```

    - if the labels for the indices are specified,

      ```python
      s = pd.Series(np.random.randn(5), index=['a', 'b', 'c', 'd', 'e'])
      s['a']
      s[0]
      s['b'] = 1.8
      s
      s[2] = 2
      s
      ```

## DataFrame

1. Creation
    - from NumPy array

      ```python
      df = pd.DataFrame(np.random.randn(6,4))
      ```
    
      Indices and column names can be provided at creation.

      ```python
      df = pd.DataFrame(np.random.randn(6,4), index=list('abcdef'), columns=list('ABCD'))
      ```

      - from a dict

      run the following code and understand the functions used.

      ```python
      df2 = pd.DataFrame({
        'A': 1,
        'B': pd.Timestamp('20190930'),
        'C': pd.date_range('20190930', periods=4),
        'D': pd.Series(1, index=list(range(4)), dtype='float32'),
        'E': np.array([3]*4, dtype='int32'),
        'F': pd.Categorical(['test', 'train', 'test', 'train']),
        'G': 'foo'
      })
      ```

      `dtypes` of a `DataFrame` can be viewed using `df2.dtypes`. In IPython, tab completion is enabled for column names and public attributes.

2. Data display
    - What do `df.head(0)` and `df.tail()` do? What happens if I use `df.head(3)` and `df.tail(2)`?

    - `df.index` displays the indices of a data frame.

    - `df.columns` displays the columns of a data frame.

    - `df.describe()` shows a quick statistical summary of each column of the data.

3. Direct indexing
    - to get a column,
      ```python
      df['A']
      df.A
      ```

      `df[0]` would not work.

    - to select multiple columns,
      ```python
      df[['A', 'B']]
      ```

    - to get a slice of rows
      ```python
      df[0:4]
      df['a':'d']
      ```

      Is the indexing inclusive or exclusive?

4. Selection by label
    With the following lines, identify how the function `.loc[...]` works

    ```python
    df.loc['a']
    df.loc['a':'c']
    df.loc[['a', 'c']]
    df.loc[:, 'A']
    df.loc[:, ['A', 'B']]
    df.loc[:, 'A':'C']
    df.loc['a':'c', ['A', 'B']]
    df.loc[['a', 'c'], ['A', 'B']]
    df.loc[['a', 'c'], 'A':'C']
    df.loc['a':'c', 'A':'C']
    df.loc['a', 'A']
    df.loc['a', 'A':'C']
    ```

    `df.at['a','A']` is equivalent to `df.loc['a','A']` (only to get a scalar value)

    The object returned by a `.loc` is either a series (1-D), data frame (2-D), or scalar (single value).

5. Selection by position
    `.iloc` and `.iat` work similarly as `.loc` and `.at`. The only difference is that, instead of the label of the row/column, we will use the position of the row/column.

    Find the equivalent usage of `.iloc` that provides the same outputs as the previous lines for `.loc`.

6. Boolean indexing
    Investigate the differences in the outputs of the following lines:
    ```python
    df[df.A > 0]
    df[df > 0]
    ```

    Filtering of a column can be done with `.isin`.
    ```python
    df2 = df.copy()
    df2['E'] = ['one', 'one', 'two', 'three', 'four', 'three']
    df2[df2['E'].isini(['two', 'four'])]
    ```

## Data manipulation
`pandas` library provides a lot of functions to manipulate data.

Go to [UCI datasets](https://archive.ics.uci.edu/ml/datasets/Iris) to download `iris.data` and `iris.names` from the `Data Folder`.

1. Load `iris.data` as a data frame (Hint: `iris.data` is a CSV file)

2. Update the column names based on `iris.names`.

3. Calculate the mean, min, max, and standard deviation of each column.

4. Create a new column called `class value` using the following code:
    ```python
    df['class value'] = pd.factorize(df['class'])[0]
    ```
    Investigate the output of `pd.factorize`.

5. Group the data according to the class. (Hint: `.groupby`)

6. Identify the function to extract each group using the name of the class.

7. Calculate the mean, min, max, and standard deviation of each column in each group.

8. Produce a scatter plot for any two columns using `matplotlib` library.

9. Identify the methods (at least 2) to loop through a data frame row by row.