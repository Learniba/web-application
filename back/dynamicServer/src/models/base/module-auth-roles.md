# Table: development.module_auth_roles

## Database Structure

| PK  | FK  | Name      | Type                        | NN  | Index |
| :-: | :-: | --------- | --------------------------- | :-: | :---: |
| 🔑  |     | id        | integer                     |  ●  |   1   |
|     |     | name      | character varying(255)      |  ●  |       |
|     |     | createdAt | timestamp with time zone(6) |  ●  |       |
|     |     | updatedAt | timestamp with time zone(6) |  ●  |       |
|     |     | deletedAt | timestamp with time zone(6) |  ○  |       |

### One to Many & Many to One Relations

![](https://mermaid.ink/svg/eyJjb2RlIjoiZXJEaWFncmFtXG4gIGRldmVsb3BtZW50X21vZHVsZV9hdXRoX3JvbGVzIHx8LS1veyBkZXZlbG9wbWVudF9tb2R1bGVfYXV0aF91c2VycyA6IG1vZHVsZV9hdXRoX3VzZXJzX3JvbGVfZmtleVxuICBkZXZlbG9wbWVudF9tb2R1bGVfYXV0aF9yb2xlc1xuIiwibWVybWFpZCI6eyJ0aGVtZSI6ImRlZmF1bHQifX0)

### Many to Many Relations

![](https://mermaid.ink/svg/eyJjb2RlIjoiZXJEaWFncmFtXG4gIGRldmVsb3BtZW50X21vZHVsZV9hdXRoX3JvbGVzIH1vLS1veyBkZXZlbG9wbWVudF9tb2R1bGVfdXNlciA6IG1vZHVsZV9hdXRoX3JvbGVzKG1vZHVsZV9hdXRoX3JvbGVzX3BrZXkpLT5tb2R1bGVfdXNlcihtb2R1bGVfdXNlcl9wa2V5KV85MjE5XG4iLCJtZXJtYWlkIjp7InRoZW1lIjoiZGVmYXVsdCJ9fQ)

### Class Diagram

![](https://mermaid.ink/svg/eyJjb2RlIjoiY2xhc3NEaWFncmFtXG4gIFxuICBjbGFzcyBNb2R1bGVBdXRoUm9sZSB7XG4gICAgTnVtYmVyICtpZFxuICAgIFN0cmluZyArbmFtZVxuICAgIERhdGUgK2NyZWF0ZWRBdFxuICAgIERhdGUgK3VwZGF0ZWRBdFxuICAgIERhdGUgK2RlbGV0ZWRBdFxuICAgIE1vZHVsZUF1dGhVc2VyW10gK21vZHVsZV9hdXRoX3JvbGVzLT5tb2R1bGVfYXV0aF91c2Vyc18yNzU5XG4gICAgTW9kdWxlVXNlcltdICttb2R1bGVfYXV0aF9yb2xlcyhtb2R1bGVfYXV0aF9yb2xlc19wa2V5KS0-bW9kdWxlX3VzZXIobW9kdWxlX3VzZXJfcGtleSlfOTIxOVxuICB9XG5cbiAgXG4gIGNsYXNzIE1vZHVsZUF1dGhVc2VyIHtcbiAgICBOdW1iZXIgK2lkXG4gICAgTnVtYmVyICt1aWRcbiAgICBOdW1iZXIgK3JvbGVcbiAgICBEYXRlICtjcmVhdGVkQXRcbiAgICBEYXRlICt1cGRhdGVkQXRcbiAgICBEYXRlICtkZWxldGVkQXRcbiAgICBNb2R1bGVBdXRoUm9sZSArbW9kdWxlX2F1dGhfdXNlcnMtPm1vZHVsZV9hdXRoX3JvbGVzXzc2NjFcbiAgICBNb2R1bGVVc2VyICttb2R1bGVfYXV0aF91c2Vycy0-bW9kdWxlX3VzZXJfMjA4OVxuICB9XG5cbiAgTW9kdWxlQXV0aFJvbGUgLS0-IE1vZHVsZUF1dGhVc2VyIDogbW9kdWxlX2F1dGhfcm9sZXMtPm1vZHVsZV9hdXRoX3VzZXJzXzI3NTlcbiAgXG4gIGNsYXNzIE1vZHVsZVVzZXIge1xuICAgIE51bWJlciAraWRcbiAgICBTdHJpbmcgK3VzZXJuYW1lXG4gICAgU3RyaW5nICtmaXJzdF9uYW1lXG4gICAgU3RyaW5nICtsYXN0X25hbWVcbiAgICBTdHJpbmcgK2F1dGhfa2V5XG4gICAgU3RyaW5nICtwYXNzd29yZF9oYXNoXG4gICAgTnVtYmVyICtzdGF0dXNcbiAgICBTdHJpbmcgK3NzblxuICAgIFN0cmluZyArZW1haWxcbiAgICBEYXRlICtkYXRlX29mX2JpcnRoXG4gICAgU3RyaW5nICttb2JpbGVcbiAgICBTdHJpbmcgK2dlbmRlclxuICAgIERhdGUgK2NyZWF0ZWRBdFxuICAgIERhdGUgK3VwZGF0ZWRBdFxuICAgIERhdGUgK2RlbGV0ZWRBdFxuICAgIE1vZHVsZUF1dGhVc2VyW10gK21vZHVsZV91c2VyLT5tb2R1bGVfYXV0aF91c2Vyc180MjcyXG4gICAgTW9kdWxlU2Nob29sU3R1ZGVudFtdICttb2R1bGVfdXNlci0-bW9kdWxlX3NjaG9vbF9zdHVkZW50XzQwODJcbiAgICBNb2R1bGVTY2hvb2xTdXBlcnZpc29yW10gK21vZHVsZV91c2VyLT5tb2R1bGVfc2Nob29sX3N1cGVydmlzb3JfNjExNFxuICAgIE1vZHVsZVNjaG9vbFRlYWNoZXJbXSArbW9kdWxlX3VzZXItPm1vZHVsZV9zY2hvb2xfdGVhY2hlcl81NzExXG4gICAgTW9kdWxlQXV0aFJvbGVbXSArbW9kdWxlX3VzZXIobW9kdWxlX3VzZXJfcGtleSktPm1vZHVsZV9hdXRoX3JvbGVzKG1vZHVsZV9hdXRoX3JvbGVzX3BrZXkpXzM1ODJcbiAgICBNb2R1bGVTY2hvb2xDbGFzc1tdICttb2R1bGVfdXNlcihtb2R1bGVfdXNlcl9wa2V5KS0-bW9kdWxlX3NjaG9vbF9jbGFzcyhfY29weV8yMylfNTY2XG4gICAgTW9kdWxlU2Nob29sU3VwZXJ2aXNvcltdICttb2R1bGVfdXNlcihtb2R1bGVfdXNlcl9wa2V5KS0-bW9kdWxlX3NjaG9vbF9zdXBlcnZpc29yKHBrX21vZHVsZV9zY2hvb2xfc3VwZXJ2aXNvcjYpXzMwODFcbiAgfVxuXG4gIE1vZHVsZUF1dGhSb2xlIC0tPiBNb2R1bGVVc2VyIDogbW9kdWxlX2F1dGhfcm9sZXMobW9kdWxlX2F1dGhfcm9sZXNfcGtleSktPm1vZHVsZV91c2VyKG1vZHVsZV91c2VyX3BrZXkpXzkyMTlcbiIsIm1lcm1haWQiOnsidGhlbWUiOiJkZWZhdWx0In19)
