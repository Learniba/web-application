# Table: development.module_school_abcence_student

## Database Structure

| PK  | FK  | Name        | Type                   | NN  | Index |
| :-: | :-: | ----------- | ---------------------- | :-: | :---: |
| 🔑  |     | id          | integer                |  ●  |   1   |
|     | FK  | schedule_id | integer                |  ●  |   1   |
|     | FK  | student_id  | integer                |  ●  |   1   |
|     |     | description | character varying(255) |  ●  |       |

### One to Many & Many to One Relations

![](https://mermaid.ink/svg/eyJjb2RlIjoiZXJEaWFncmFtXG4gIGRldmVsb3BtZW50X21vZHVsZV9zY2hvb2xfYWJjZW5jZV9zdHVkZW50IH1vLS18fCBkZXZlbG9wbWVudF9tb2R1bGVfc2Nob29sX3NjaGVkdWxlIDogZmtfMzMxNjVcbiAgZGV2ZWxvcG1lbnRfbW9kdWxlX3NjaG9vbF9hYmNlbmNlX3N0dWRlbnQgfW8tLXx8IGRldmVsb3BtZW50X21vZHVsZV9zY2hvb2xfc3R1ZGVudCA6IGZrXzMzOTg5XG4iLCJtZXJtYWlkIjp7InRoZW1lIjoiZGVmYXVsdCJ9fQ)

### Many to Many Relations

### Class Diagram

![](https://mermaid.ink/svg/eyJjb2RlIjoiY2xhc3NEaWFncmFtXG4gIFxuICBjbGFzcyBNb2R1bGVTY2hvb2xBYmNlbmNlU3R1ZGVudCB7XG4gICAgTnVtYmVyICtpZFxuICAgIE51bWJlciArc2NoZWR1bGVfaWRcbiAgICBOdW1iZXIgK3N0dWRlbnRfaWRcbiAgICBTdHJpbmcgK2Rlc2NyaXB0aW9uXG4gICAgTW9kdWxlU2Nob29sU2NoZWR1bGUgK21vZHVsZV9zY2hvb2xfYWJjZW5jZV9zdHVkZW50LT5tb2R1bGVfc2Nob29sX3NjaGVkdWxlXzMwNzBcbiAgICBNb2R1bGVTY2hvb2xTdHVkZW50ICttb2R1bGVfc2Nob29sX2FiY2VuY2Vfc3R1ZGVudC0-bW9kdWxlX3NjaG9vbF9zdHVkZW50Xzg2MzNcbiAgfVxuXG4gIFxuICBjbGFzcyBNb2R1bGVTY2hvb2xTY2hlZHVsZSB7XG4gICAgTnVtYmVyICtpZFxuICAgIERhdGUgK2NyZWF0ZWRfYXRcbiAgICBTdHJpbmcgK2NyZWF0ZWRfYnlcbiAgICBEYXRlICt1cGRhdGVkX2F0XG4gICAgU3RyaW5nICt1cGRhdGVkX2J5XG4gICAgRGF0ZSArc3RhcnR0aW1lXG4gICAgRGF0ZSArZW5kdGltZVxuICAgIE51bWJlciArdGVhY2hlcl9pZFxuICAgIE51bWJlciArYXNzaXN0YW50X2lkXG4gICAgTnVtYmVyICtzdWJqZWN0X2lkXG4gICAgTnVtYmVyICtjbGFzc19pZFxuICAgIE51bWJlciArcmVmZXJlbmNlX2luZGV4X2lkXG4gICAgTW9kdWxlU2Nob29sQWJjZW5jZVN0dWRlbnRbXSArbW9kdWxlX3NjaG9vbF9zY2hlZHVsZS0-bW9kdWxlX3NjaG9vbF9hYmNlbmNlX3N0dWRlbnRfNzI1OFxuICAgIE1vZHVsZVNjaG9vbEV4ZXJjaXNlW10gK21vZHVsZV9zY2hvb2xfc2NoZWR1bGUtPm1vZHVsZV9zY2hvb2xfZXhlcmNpc2VfMjI3MVxuICAgIE1vZHVsZUxlYXJuaWJhUmVmZXJlbmNlSW5kZXggK21vZHVsZV9zY2hvb2xfc2NoZWR1bGUtPm1vZHVsZV9sZWFybmliYV9yZWZlcmVuY2VfaW5kZXhfOTA5OVxuICAgIE1vZHVsZVNjaG9vbENsYXNzICttb2R1bGVfc2Nob29sX3NjaGVkdWxlLT5tb2R1bGVfc2Nob29sX2NsYXNzXzkzOTJcbiAgICBNb2R1bGVTY2hvb2xTdWJqZWN0ICttb2R1bGVfc2Nob29sX3NjaGVkdWxlLT5tb2R1bGVfc2Nob29sX3N1YmplY3RfODQ1NVxuICAgIE1vZHVsZVNjaG9vbFRlYWNoZXIgK21vZHVsZV9zY2hvb2xfc2NoZWR1bGUtPm1vZHVsZV9zY2hvb2xfdGVhY2hlcl8xMjQ4XG4gICAgTW9kdWxlU2Nob29sVGVhY2hlciArbW9kdWxlX3NjaG9vbF9zY2hlZHVsZS0-bW9kdWxlX3NjaG9vbF90ZWFjaGVyXzcyODNcbiAgICBNb2R1bGVMZWFybmliYVF1ZXN0aW9uW10gK21vZHVsZV9zY2hvb2xfc2NoZWR1bGUocGtfbW9kdWxlX3NjaG9vbF9zY2hlZHVsZSktPm1vZHVsZV9sZWFybmliYV9xdWVzdGlvbihwa190YWJsZV8yODA0KV80MjQ4XG4gICAgTW9kdWxlU2Nob29sU3R1ZGVudFtdICttb2R1bGVfc2Nob29sX3NjaGVkdWxlKHBrX21vZHVsZV9zY2hvb2xfc2NoZWR1bGUpLT5tb2R1bGVfc2Nob29sX3N0dWRlbnQobW9kdWxlX3NjaG9vbF9zdHVkZW50c19wa2V5KV8zNDM4XG4gIH1cblxuICBNb2R1bGVTY2hvb2xBYmNlbmNlU3R1ZGVudCAtLT4gTW9kdWxlU2Nob29sU2NoZWR1bGUgOiBtb2R1bGVfc2Nob29sX2FiY2VuY2Vfc3R1ZGVudC0-bW9kdWxlX3NjaG9vbF9zY2hlZHVsZV8zMDcwXG4gIFxuICBjbGFzcyBNb2R1bGVTY2hvb2xTdHVkZW50IHtcbiAgICBOdW1iZXIgK3N0dWRlbnRfaWRcbiAgICBOdW1iZXIgK2NsYXNzX2lkXG4gICAgTnVtYmVyICtkaWZmaWN1bHR5X3Njb3JlXG4gICAgTW9kdWxlRXhhbVN0dWRlbnRBbnN3ZXJbXSArbW9kdWxlX3NjaG9vbF9zdHVkZW50LT5tb2R1bGVfZXhhbV9zdHVkZW50X2Fuc3dlcl8zMzMzXG4gICAgTW9kdWxlTGVhbmliYURpZmZpY3VsdHlIaXN0b3J5W10gK21vZHVsZV9zY2hvb2xfc3R1ZGVudC0-bW9kdWxlX2xlYW5pYmFfZGlmZmljdWx0eV9oaXN0b3J5Xzg3MTNcbiAgICBNb2R1bGVTY2hvb2xBYmNlbmNlU3R1ZGVudFtdICttb2R1bGVfc2Nob29sX3N0dWRlbnQtPm1vZHVsZV9zY2hvb2xfYWJjZW5jZV9zdHVkZW50XzYyMDFcbiAgICBNb2R1bGVTY2hvb2xDdXN0b2RpYW5bXSArbW9kdWxlX3NjaG9vbF9zdHVkZW50LT5tb2R1bGVfc2Nob29sX2N1c3RvZGlhbl83ODZcbiAgICBNb2R1bGVTY2hvb2xDbGFzcyArbW9kdWxlX3NjaG9vbF9zdHVkZW50LT5tb2R1bGVfc2Nob29sX2NsYXNzXzU0MjRcbiAgICBNb2R1bGVRdWVzdGlvbkNob2ljZVtdICttb2R1bGVfc2Nob29sX3N0dWRlbnQobW9kdWxlX3NjaG9vbF9zdHVkZW50c19wa2V5KS0-bW9kdWxlX3F1ZXN0aW9uX2Nob2ljZXMocGtfdGFibGVfMjcyNzYpXzI0NTBcbiAgICBNb2R1bGVTY2hvb2xFeGVyY2lzZVtdICttb2R1bGVfc2Nob29sX3N0dWRlbnQobW9kdWxlX3NjaG9vbF9zdHVkZW50c19wa2V5KS0-bW9kdWxlX3NjaG9vbF9leGVyY2lzZShwa19tb2R1bGVfc2Nob29sX3Rlc3QzNClfNzEyMlxuICAgIE1vZHVsZVNjaG9vbFBhcmVudFtdICttb2R1bGVfc2Nob29sX3N0dWRlbnQobW9kdWxlX3NjaG9vbF9zdHVkZW50c19wa2V5KS0-bW9kdWxlX3NjaG9vbF9wYXJlbnQocGtfdGFibGVfMjEyMSlfMjk0MFxuICAgIE1vZHVsZVNjaG9vbFNjaGVkdWxlW10gK21vZHVsZV9zY2hvb2xfc3R1ZGVudChtb2R1bGVfc2Nob29sX3N0dWRlbnRzX3BrZXkpLT5tb2R1bGVfc2Nob29sX3NjaGVkdWxlKHBrX21vZHVsZV9zY2hvb2xfc2NoZWR1bGUpXzEyNjhcbiAgfVxuXG4gIE1vZHVsZVNjaG9vbEFiY2VuY2VTdHVkZW50IC0tPiBNb2R1bGVTY2hvb2xTdHVkZW50IDogbW9kdWxlX3NjaG9vbF9hYmNlbmNlX3N0dWRlbnQtPm1vZHVsZV9zY2hvb2xfc3R1ZGVudF84NjMzXG4iLCJtZXJtYWlkIjp7InRoZW1lIjoiZGVmYXVsdCJ9fQ)