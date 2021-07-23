# Table: development.module_leaniba_difficulty_history

## Database Structure

| PK  | FK  | Name             | Type                           | NN  | Index |
| :-: | :-: | ---------------- | ------------------------------ | :-: | :---: |
| 🔑  |     | id               | integer                        |  ●  |   1   |
|     | FK  | student_id       | integer                        |  ●  |   1   |
|     |     | difficulty_score | integer                        |  ●  |       |
|     |     | calculated_at    | timestamp without time zone(6) |  ●  |       |
|     |     | createdAt        | timestamp with time zone(6)    |  ●  |       |
|     |     | updatedAt        | timestamp with time zone(6)    |  ●  |       |
|     |     | deletedAt        | timestamp with time zone(6)    |  ○  |       |

### One to Many & Many to One Relations

![](https://mermaid.ink/svg/eyJjb2RlIjoiZXJEaWFncmFtXG4gIGRldmVsb3BtZW50X21vZHVsZV9sZWFuaWJhX2RpZmZpY3VsdHlfaGlzdG9yeSB9by0tfHwgZGV2ZWxvcG1lbnRfbW9kdWxlX3NjaG9vbF9zdHVkZW50IDogZmtfMzgxNjhcbiIsIm1lcm1haWQiOnsidGhlbWUiOiJkZWZhdWx0In19)

### Many to Many Relations

### Class Diagram

![](https://mermaid.ink/svg/eyJjb2RlIjoiY2xhc3NEaWFncmFtXG4gIFxuICBjbGFzcyBNb2R1bGVMZWFuaWJhRGlmZmljdWx0eUhpc3Rvcnkge1xuICAgIE51bWJlciAraWRcbiAgICBOdW1iZXIgK3N0dWRlbnRfaWRcbiAgICBOdW1iZXIgK2RpZmZpY3VsdHlfc2NvcmVcbiAgICBEYXRlICtjYWxjdWxhdGVkX2F0XG4gICAgRGF0ZSArY3JlYXRlZEF0XG4gICAgRGF0ZSArdXBkYXRlZEF0XG4gICAgRGF0ZSArZGVsZXRlZEF0XG4gICAgTW9kdWxlU2Nob29sU3R1ZGVudCArbW9kdWxlX2xlYW5pYmFfZGlmZmljdWx0eV9oaXN0b3J5LT5tb2R1bGVfc2Nob29sX3N0dWRlbnRfNTEwMVxuICB9XG5cbiAgXG4gIGNsYXNzIE1vZHVsZVNjaG9vbFN0dWRlbnQge1xuICAgIE51bWJlciArc3R1ZGVudF9pZFxuICAgIE51bWJlciArY2xhc3NfaWRcbiAgICBOdW1iZXIgK2RpZmZpY3VsdHlfc2NvcmVcbiAgICBEYXRlICtjcmVhdGVkQXRcbiAgICBEYXRlICt1cGRhdGVkQXRcbiAgICBEYXRlICtkZWxldGVkQXRcbiAgICBNb2R1bGVFeGFtU3R1ZGVudEFuc3dlcltdICttb2R1bGVfc2Nob29sX3N0dWRlbnQtPm1vZHVsZV9leGFtX3N0dWRlbnRfYW5zd2VyXzQ5NDZcbiAgICBNb2R1bGVMZWFuaWJhRGlmZmljdWx0eUhpc3RvcnlbXSArbW9kdWxlX3NjaG9vbF9zdHVkZW50LT5tb2R1bGVfbGVhbmliYV9kaWZmaWN1bHR5X2hpc3RvcnlfNjUzOVxuICAgIE1vZHVsZVNjaG9vbEFiY2VuY2VTdHVkZW50W10gK21vZHVsZV9zY2hvb2xfc3R1ZGVudC0-bW9kdWxlX3NjaG9vbF9hYmNlbmNlX3N0dWRlbnRfNTA2M1xuICAgIE1vZHVsZVNjaG9vbEN1c3RvZGlhbltdICttb2R1bGVfc2Nob29sX3N0dWRlbnQtPm1vZHVsZV9zY2hvb2xfY3VzdG9kaWFuXzY4MVxuICAgIE1vZHVsZVNjaG9vbENsYXNzICttb2R1bGVfc2Nob29sX3N0dWRlbnQtPm1vZHVsZV9zY2hvb2xfY2xhc3NfMjQxNFxuICAgIE1vZHVsZVVzZXIgK21vZHVsZV9zY2hvb2xfc3R1ZGVudC0-bW9kdWxlX3VzZXJfMzQ3MlxuICAgIE1vZHVsZVF1ZXN0aW9uQ2hvaWNlW10gK21vZHVsZV9zY2hvb2xfc3R1ZGVudChtb2R1bGVfc2Nob29sX3N0dWRlbnRzX3BrZXkpLT5tb2R1bGVfcXVlc3Rpb25fY2hvaWNlcyhwa190YWJsZV8yNzI3NilfMjY2MFxuICAgIE1vZHVsZVNjaG9vbEV4ZXJjaXNlW10gK21vZHVsZV9zY2hvb2xfc3R1ZGVudChtb2R1bGVfc2Nob29sX3N0dWRlbnRzX3BrZXkpLT5tb2R1bGVfc2Nob29sX2V4ZXJjaXNlKHBrX21vZHVsZV9zY2hvb2xfdGVzdDM0KV83NDAxXG4gICAgTW9kdWxlU2Nob29sUGFyZW50W10gK21vZHVsZV9zY2hvb2xfc3R1ZGVudChtb2R1bGVfc2Nob29sX3N0dWRlbnRzX3BrZXkpLT5tb2R1bGVfc2Nob29sX3BhcmVudChwa190YWJsZV8yMTIxKV84ODY3XG4gICAgTW9kdWxlU2Nob29sU2NoZWR1bGVbXSArbW9kdWxlX3NjaG9vbF9zdHVkZW50KG1vZHVsZV9zY2hvb2xfc3R1ZGVudHNfcGtleSktPm1vZHVsZV9zY2hvb2xfc2NoZWR1bGUocGtfbW9kdWxlX3NjaG9vbF9zY2hlZHVsZSlfNDQxMlxuICB9XG5cbiAgTW9kdWxlTGVhbmliYURpZmZpY3VsdHlIaXN0b3J5IC0tPiBNb2R1bGVTY2hvb2xTdHVkZW50IDogbW9kdWxlX2xlYW5pYmFfZGlmZmljdWx0eV9oaXN0b3J5LT5tb2R1bGVfc2Nob29sX3N0dWRlbnRfNTEwMVxuIiwibWVybWFpZCI6eyJ0aGVtZSI6ImRlZmF1bHQifX0)
