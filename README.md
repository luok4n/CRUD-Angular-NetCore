# CRUD Students (Angular - NetCore)

## Problem to solve

Create a simple web application with the next requirements:
* Build a WebApp that performs the maintenance of the table Student within the SQLite database attached.
* The back-end part of the WebApp must be made an API in .Net Core/Java SDK
* The front-end part can be made in Angular or React.
* The WebApp must contain Create, Read, Update and Delete.
* Authentication is not required.  

## requirements

* [Node](https://nodejs.org/es/download/)
* [Visual Studio Code](https://code.visualstudio.com/)
* [Angular CLI](https://angular.io/cli)
* [Visual Studio](https://visualstudio.microsoft.com/es/vs/older-downloads/)

    
## API

#### Students

```http
  GET api/students
```
Return

| Parameter            | Type     |
| :------------------- | :------- |
|   `List Students`    | `json`   |

```http
  GET api/students/{id}
```
Return

| Parameter            | Type     |
| :------------------- | :------- |
|      `Student`       | `json`   |


```http
  DELETE api/students/{id}
```
Return

| Parameter            | Type     |
| :------------------- | :------- |
|      `Student`       | `json`   |


```http
  PUT api/students/{id}
```

|      Body            | Type     |
| :------------------- | :------- |
|      `Student`       | `json`   |

Return

| Parameter            | Type     |
| :------------------- | :------- |
|      `Student`       | `json`   |

```http
  POST api/students
```

|      Body            | Type     |
| :------------------- | :------- |
|      `Student`       | `json`   |

Return

| Parameter            | Type     |
| :------------------- | :------- |
|      `Student`       | `json`   |


