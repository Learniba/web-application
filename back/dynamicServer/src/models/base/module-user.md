# Table: development.module_user

## Database Structure

| PK  | FK  | Name          | Type                     | NN  | Index |
| :-: | :-: | ------------- | ------------------------ | :-: | :---: |
| 🔑  |     | id            | integer                  |  ●  |   1   |
|     |     | username      | character varying(255)   |  ●  |       |
|     |     | first_name    | character varying(255)   |  ○  |       |
|     |     | last_name     | character varying(255)   |  ○  |       |
|     |     | auth_key      | character varying(60)    |  ○  |       |
|     |     | password_hash | character varying(60)    |  ○  |       |
|     |     | status        | integer                  |  ●  |       |
|     |     | ssn           | character varying(50)    |  ○  |       |
|     |     | email         | character varying(255)   |  ○  |       |
|     |     | date_of_birth | date                     |  ○  |       |
|     |     | mobile        | character varying(50)    |  ●  |       |
|     |     | gender        | character varying(50)    |  ○  |       |
|     |     | createdAt     | timestamp with time zone |  ●  |       |
|     |     | updatedAt     | timestamp with time zone |  ●  |       |

### One to Many & Many to One Relations

### Many to Many Relations

### Class Diagram

![](https://mermaid.ink/svg/eyJjb2RlIjoiY2xhc3NEaWFncmFtXG4gIFxuICBjbGFzcyBNb2R1bGVVc2VyIHtcbiAgICBOdW1iZXIgK2lkXG4gICAgU3RyaW5nICt1c2VybmFtZVxuICAgIFN0cmluZyArZmlyc3RfbmFtZVxuICAgIFN0cmluZyArbGFzdF9uYW1lXG4gICAgU3RyaW5nICthdXRoX2tleVxuICAgIFN0cmluZyArcGFzc3dvcmRfaGFzaFxuICAgIE51bWJlciArc3RhdHVzXG4gICAgU3RyaW5nICtzc25cbiAgICBTdHJpbmcgK2VtYWlsXG4gICAgRGF0ZSArZGF0ZV9vZl9iaXJ0aFxuICAgIFN0cmluZyArbW9iaWxlXG4gICAgU3RyaW5nICtnZW5kZXJcbiAgICBEYXRlICtjcmVhdGVkQXRcbiAgICBEYXRlICt1cGRhdGVkQXRcbiAgfVxuXG4iLCJtZXJtYWlkIjp7InRoZW1lIjoiZGVmYXVsdCJ9fQ)
