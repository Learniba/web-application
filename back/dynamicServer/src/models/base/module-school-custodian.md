# Table: development.module_school_custodian

## Database Structure

| PK  | FK  | Name       | Type                        | NN  | Index |
| :-: | :-: | ---------- | --------------------------- | :-: | :---: |
| 🔑  | FK  | parent_id  | integer                     |  ●  |   2   |
| 🔑  | FK  | student_id | integer                     |  ●  |   2   |
|     |     | createdAt  | timestamp with time zone(6) |  ●  |       |
|     |     | updatedAt  | timestamp with time zone(6) |  ●  |       |
|     |     | deletedAt  | timestamp with time zone(6) |  ○  |       |

### One to Many & Many to One Relations

![](https://mermaid.ink/svg/eyJjb2RlIjoiZXJEaWFncmFtXG4gIGRldmVsb3BtZW50X21vZHVsZV9zY2hvb2xfY3VzdG9kaWFuIH1vLS18fCBkZXZlbG9wbWVudF9tb2R1bGVfc2Nob29sX3BhcmVudCA6IGZrXzIxODZcbiAgZGV2ZWxvcG1lbnRfbW9kdWxlX3NjaG9vbF9jdXN0b2RpYW4gfW8tLXx8IGRldmVsb3BtZW50X21vZHVsZV9zY2hvb2xfc3R1ZGVudCA6IGZrXzIyMjVcbiIsIm1lcm1haWQiOnsidGhlbWUiOiJkZWZhdWx0In19)

### Many to Many Relations

### Class Diagram

![](https://mermaid.ink/svg/eyJjb2RlIjoiY2xhc3NEaWFncmFtXG4gIFxuICBjbGFzcyBNb2R1bGVTY2hvb2xDdXN0b2RpYW4ge1xuICAgIE51bWJlciArcGFyZW50X2lkXG4gICAgTnVtYmVyICtzdHVkZW50X2lkXG4gICAgRGF0ZSArY3JlYXRlZEF0XG4gICAgRGF0ZSArdXBkYXRlZEF0XG4gICAgRGF0ZSArZGVsZXRlZEF0XG4gICAgTW9kdWxlU2Nob29sUGFyZW50ICttb2R1bGVfc2Nob29sX2N1c3RvZGlhbi0-bW9kdWxlX3NjaG9vbF9wYXJlbnRfOTA4NlxuICAgIE1vZHVsZVNjaG9vbFN0dWRlbnQgK21vZHVsZV9zY2hvb2xfY3VzdG9kaWFuLT5tb2R1bGVfc2Nob29sX3N0dWRlbnRfODE4OVxuICB9XG5cbiAgXG4gIGNsYXNzIE1vZHVsZVNjaG9vbFBhcmVudCB7XG4gICAgTnVtYmVyICtwYXJlbnRfaWRcbiAgICBEYXRlICtjcmVhdGVkQXRcbiAgICBEYXRlICt1cGRhdGVkQXRcbiAgICBEYXRlICtkZWxldGVkQXRcbiAgICBNb2R1bGVTY2hvb2xDdXN0b2RpYW5bXSArbW9kdWxlX3NjaG9vbF9wYXJlbnQtPm1vZHVsZV9zY2hvb2xfY3VzdG9kaWFuXzI5MzlcbiAgICBNb2R1bGVTY2hvb2xTdHVkZW50W10gK21vZHVsZV9zY2hvb2xfcGFyZW50KHBrX3RhYmxlXzIxMjEpLT5tb2R1bGVfc2Nob29sX3N0dWRlbnQobW9kdWxlX3NjaG9vbF9zdHVkZW50c19wa2V5KV81MDI5XG4gIH1cblxuICBNb2R1bGVTY2hvb2xDdXN0b2RpYW4gLS0-IE1vZHVsZVNjaG9vbFBhcmVudCA6IG1vZHVsZV9zY2hvb2xfY3VzdG9kaWFuLT5tb2R1bGVfc2Nob29sX3BhcmVudF85MDg2XG4gIFxuICBjbGFzcyBNb2R1bGVTY2hvb2xTdHVkZW50IHtcbiAgICBOdW1iZXIgK3N0dWRlbnRfaWRcbiAgICBOdW1iZXIgK2NsYXNzX2lkXG4gICAgTnVtYmVyICtkaWZmaWN1bHR5X3Njb3JlXG4gICAgRGF0ZSArY3JlYXRlZEF0XG4gICAgRGF0ZSArdXBkYXRlZEF0XG4gICAgRGF0ZSArZGVsZXRlZEF0XG4gICAgTW9kdWxlRXhhbVN0dWRlbnRBbnN3ZXJbXSArbW9kdWxlX3NjaG9vbF9zdHVkZW50LT5tb2R1bGVfZXhhbV9zdHVkZW50X2Fuc3dlcl80OTQ2XG4gICAgTW9kdWxlTGVhbmliYURpZmZpY3VsdHlIaXN0b3J5W10gK21vZHVsZV9zY2hvb2xfc3R1ZGVudC0-bW9kdWxlX2xlYW5pYmFfZGlmZmljdWx0eV9oaXN0b3J5XzY1MzlcbiAgICBNb2R1bGVTY2hvb2xBYmNlbmNlU3R1ZGVudFtdICttb2R1bGVfc2Nob29sX3N0dWRlbnQtPm1vZHVsZV9zY2hvb2xfYWJjZW5jZV9zdHVkZW50XzUwNjNcbiAgICBNb2R1bGVTY2hvb2xDdXN0b2RpYW5bXSArbW9kdWxlX3NjaG9vbF9zdHVkZW50LT5tb2R1bGVfc2Nob29sX2N1c3RvZGlhbl82ODFcbiAgICBNb2R1bGVTY2hvb2xDbGFzcyArbW9kdWxlX3NjaG9vbF9zdHVkZW50LT5tb2R1bGVfc2Nob29sX2NsYXNzXzI0MTRcbiAgICBNb2R1bGVVc2VyICttb2R1bGVfc2Nob29sX3N0dWRlbnQtPm1vZHVsZV91c2VyXzM0NzJcbiAgICBNb2R1bGVRdWVzdGlvbkNob2ljZVtdICttb2R1bGVfc2Nob29sX3N0dWRlbnQobW9kdWxlX3NjaG9vbF9zdHVkZW50c19wa2V5KS0-bW9kdWxlX3F1ZXN0aW9uX2Nob2ljZXMocGtfdGFibGVfMjcyNzYpXzI2NjBcbiAgICBNb2R1bGVTY2hvb2xFeGVyY2lzZVtdICttb2R1bGVfc2Nob29sX3N0dWRlbnQobW9kdWxlX3NjaG9vbF9zdHVkZW50c19wa2V5KS0-bW9kdWxlX3NjaG9vbF9leGVyY2lzZShwa19tb2R1bGVfc2Nob29sX3Rlc3QzNClfNzQwMVxuICAgIE1vZHVsZVNjaG9vbFBhcmVudFtdICttb2R1bGVfc2Nob29sX3N0dWRlbnQobW9kdWxlX3NjaG9vbF9zdHVkZW50c19wa2V5KS0-bW9kdWxlX3NjaG9vbF9wYXJlbnQocGtfdGFibGVfMjEyMSlfODg2N1xuICAgIE1vZHVsZVNjaG9vbFNjaGVkdWxlW10gK21vZHVsZV9zY2hvb2xfc3R1ZGVudChtb2R1bGVfc2Nob29sX3N0dWRlbnRzX3BrZXkpLT5tb2R1bGVfc2Nob29sX3NjaGVkdWxlKHBrX21vZHVsZV9zY2hvb2xfc2NoZWR1bGUpXzQ0MTJcbiAgfVxuXG4gIE1vZHVsZVNjaG9vbEN1c3RvZGlhbiAtLT4gTW9kdWxlU2Nob29sU3R1ZGVudCA6IG1vZHVsZV9zY2hvb2xfY3VzdG9kaWFuLT5tb2R1bGVfc2Nob29sX3N0dWRlbnRfODE4OVxuIiwibWVybWFpZCI6eyJ0aGVtZSI6ImRlZmF1bHQifX0)
