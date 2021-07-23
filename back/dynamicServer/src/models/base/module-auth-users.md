# Table: development.module_auth_users

## Database Structure

| PK  | FK  | Name      | Type                        | NN  | Index |
| :-: | :-: | --------- | --------------------------- | :-: | :---: |
| 🔑  |     | id        | integer                     |  ●  |   1   |
|     | FK  | uid       | integer                     |  ●  |   1   |
|     | FK  | role      | integer                     |  ●  |   1   |
|     |     | createdAt | timestamp with time zone(6) |  ●  |       |
|     |     | updatedAt | timestamp with time zone(6) |  ●  |       |
|     |     | deletedAt | timestamp with time zone(6) |  ○  |       |

### One to Many & Many to One Relations

![](https://mermaid.ink/svg/eyJjb2RlIjoiZXJEaWFncmFtXG4gIGRldmVsb3BtZW50X21vZHVsZV9hdXRoX3VzZXJzIH1vLS18fCBkZXZlbG9wbWVudF9tb2R1bGVfYXV0aF9yb2xlcyA6IG1vZHVsZV9hdXRoX3VzZXJzX3JvbGVfZmtleVxuICBkZXZlbG9wbWVudF9tb2R1bGVfYXV0aF91c2VycyB9by0tfHwgZGV2ZWxvcG1lbnRfbW9kdWxlX3VzZXIgOiBtb2R1bGVfYXV0aF91c2Vyc191aWRfZmtleVxuIiwibWVybWFpZCI6eyJ0aGVtZSI6ImRlZmF1bHQifX0)

### Many to Many Relations

### Class Diagram

![](https://mermaid.ink/svg/eyJjb2RlIjoiY2xhc3NEaWFncmFtXG4gIFxuICBjbGFzcyBNb2R1bGVBdXRoVXNlciB7XG4gICAgTnVtYmVyICtpZFxuICAgIE51bWJlciArdWlkXG4gICAgTnVtYmVyICtyb2xlXG4gICAgRGF0ZSArY3JlYXRlZEF0XG4gICAgRGF0ZSArdXBkYXRlZEF0XG4gICAgRGF0ZSArZGVsZXRlZEF0XG4gICAgTW9kdWxlQXV0aFJvbGUgK21vZHVsZV9hdXRoX3VzZXJzLT5tb2R1bGVfYXV0aF9yb2xlc183NjYxXG4gICAgTW9kdWxlVXNlciArbW9kdWxlX2F1dGhfdXNlcnMtPm1vZHVsZV91c2VyXzIwODlcbiAgfVxuXG4gIFxuICBjbGFzcyBNb2R1bGVBdXRoUm9sZSB7XG4gICAgTnVtYmVyICtpZFxuICAgIFN0cmluZyArbmFtZVxuICAgIERhdGUgK2NyZWF0ZWRBdFxuICAgIERhdGUgK3VwZGF0ZWRBdFxuICAgIERhdGUgK2RlbGV0ZWRBdFxuICAgIE1vZHVsZUF1dGhVc2VyW10gK21vZHVsZV9hdXRoX3JvbGVzLT5tb2R1bGVfYXV0aF91c2Vyc18yNzU5XG4gICAgTW9kdWxlVXNlcltdICttb2R1bGVfYXV0aF9yb2xlcyhtb2R1bGVfYXV0aF9yb2xlc19wa2V5KS0-bW9kdWxlX3VzZXIobW9kdWxlX3VzZXJfcGtleSlfOTIxOVxuICB9XG5cbiAgTW9kdWxlQXV0aFVzZXIgLS0-IE1vZHVsZUF1dGhSb2xlIDogbW9kdWxlX2F1dGhfdXNlcnMtPm1vZHVsZV9hdXRoX3JvbGVzXzc2NjFcbiAgXG4gIGNsYXNzIE1vZHVsZVVzZXIge1xuICAgIE51bWJlciAraWRcbiAgICBTdHJpbmcgK3VzZXJuYW1lXG4gICAgU3RyaW5nICtmaXJzdF9uYW1lXG4gICAgU3RyaW5nICtsYXN0X25hbWVcbiAgICBTdHJpbmcgK2F1dGhfa2V5XG4gICAgU3RyaW5nICtwYXNzd29yZF9oYXNoXG4gICAgTnVtYmVyICtzdGF0dXNcbiAgICBTdHJpbmcgK3NzblxuICAgIFN0cmluZyArZW1haWxcbiAgICBEYXRlICtkYXRlX29mX2JpcnRoXG4gICAgU3RyaW5nICttb2JpbGVcbiAgICBTdHJpbmcgK2dlbmRlclxuICAgIERhdGUgK2NyZWF0ZWRBdFxuICAgIERhdGUgK3VwZGF0ZWRBdFxuICAgIERhdGUgK2RlbGV0ZWRBdFxuICAgIE1vZHVsZUF1dGhVc2VyW10gK21vZHVsZV91c2VyLT5tb2R1bGVfYXV0aF91c2Vyc180MjcyXG4gICAgTW9kdWxlU2Nob29sU3R1ZGVudFtdICttb2R1bGVfdXNlci0-bW9kdWxlX3NjaG9vbF9zdHVkZW50XzQwODJcbiAgICBNb2R1bGVTY2hvb2xTdXBlcnZpc29yW10gK21vZHVsZV91c2VyLT5tb2R1bGVfc2Nob29sX3N1cGVydmlzb3JfNjExNFxuICAgIE1vZHVsZVNjaG9vbFRlYWNoZXJbXSArbW9kdWxlX3VzZXItPm1vZHVsZV9zY2hvb2xfdGVhY2hlcl81NzExXG4gICAgTW9kdWxlQXV0aFJvbGVbXSArbW9kdWxlX3VzZXIobW9kdWxlX3VzZXJfcGtleSktPm1vZHVsZV9hdXRoX3JvbGVzKG1vZHVsZV9hdXRoX3JvbGVzX3BrZXkpXzM1ODJcbiAgICBNb2R1bGVTY2hvb2xDbGFzc1tdICttb2R1bGVfdXNlcihtb2R1bGVfdXNlcl9wa2V5KS0-bW9kdWxlX3NjaG9vbF9jbGFzcyhfY29weV8yMylfNTY2XG4gICAgTW9kdWxlU2Nob29sU3VwZXJ2aXNvcltdICttb2R1bGVfdXNlcihtb2R1bGVfdXNlcl9wa2V5KS0-bW9kdWxlX3NjaG9vbF9zdXBlcnZpc29yKHBrX21vZHVsZV9zY2hvb2xfc3VwZXJ2aXNvcjYpXzMwODFcbiAgfVxuXG4gIE1vZHVsZUF1dGhVc2VyIC0tPiBNb2R1bGVVc2VyIDogbW9kdWxlX2F1dGhfdXNlcnMtPm1vZHVsZV91c2VyXzIwODlcbiIsIm1lcm1haWQiOnsidGhlbWUiOiJkZWZhdWx0In19)
