import numpy as n
import matplotlib.pyplot as plt
import pandas as pd
from sklearn.metrics import classification_report,confusion_matrix,accuracy_score
from sklearn.preprocessing import StandardScaler
from sklearn.model_selection import  RandomizedSearchCV, train_test_split
import sys
import warnings
warnings.filterwarnings('ignore');

from sklearn.neighbors import KNeighborsClassifier
data = pd.read_csv("/home/denny3010/Desktop/Software_lab/MedCompanion/predict/heart.csv")

categorical_val = []
continous_val = []
for column in data.columns:
    if len(data[column].unique()) <= 10:
        categorical_val.append(column)
    else:
        continous_val.append(column)

categorical_val.remove('target')
dfs = pd.get_dummies(data, columns = categorical_val)
dfs.head()

sc = StandardScaler()
col_to_scale = ['age', 'trestbps', 'chol', 'thalach', 'oldpeak']
dfs[col_to_scale] = sc.fit_transform(dfs[col_to_scale])

X = dfs.drop('target', axis=1)
y = dfs.target

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.3, random_state=1)

knn = KNeighborsClassifier(n_neighbors = 9)
knn.fit(X_train,y_train)

#input vals
#age int,trestbps int,chol int,thalach int,oldpeak float,target int(0/1),{sex_0,sex_1,cp_0,cp_1,cp_2,cp_3,fbs_0,fbs_1,restecg_0,restecg_1,restecg_2,exang_0,exang_1,
#slope_0,slope_1,slope_2,ca_0,ca_1,ca_2,ca_3,ca_4,thal_0,thal_1,thal_2,thal_3}(0/1)
arr = sys.argv[1].split(',')
x = pd.DataFrame((arr))
data = pd.DataFrame.transpose((x))
y_pred = knn.predict(data)
y_pred = int(y_pred)
print(y_pred)
print(sys.stderr)
