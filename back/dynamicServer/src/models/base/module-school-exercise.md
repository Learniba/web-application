# Table: development.module_school_exercise

## Database Structure

| PK  | FK  | Name          | Type                  | NN  | Index |
| :-: | :-: | ------------- | --------------------- | :-: | :---: |
| 🔑  |     | id            | integer               |  ●  |   1   |
|     | FK  | question_id   | integer               |  ●  |   1   |
|     | FK  | schedule_id   | integer               |  ●  |   1   |
|     |     | exercise_type | integer               |  ●  |       |
|     |     | name          | character varying(50) |  ●  |       |

### One to Many & Many to One Relations

![](https://mermaid.ink/svg/eyJjb2RlIjoiZXJEaWFncmFtXG4gIGRldmVsb3BtZW50X21vZHVsZV9zY2hvb2xfZXhlcmNpc2UgfHwtLW97IGRldmVsb3BtZW50X21vZHVsZV9leGFtX3N0dWRlbnRfYW5zd2VyIDogZmtfNDQ1MzQ2XG4gIGRldmVsb3BtZW50X21vZHVsZV9zY2hvb2xfZXhlcmNpc2VcbiAgZGV2ZWxvcG1lbnRfbW9kdWxlX3NjaG9vbF9leGVyY2lzZSB9by0tfHwgZGV2ZWxvcG1lbnRfbW9kdWxlX2xlYXJuaWJhX3F1ZXN0aW9uIDogZmtfMzQ4NTZcbiAgZGV2ZWxvcG1lbnRfbW9kdWxlX3NjaG9vbF9leGVyY2lzZSB9by0tfHwgZGV2ZWxvcG1lbnRfbW9kdWxlX3NjaG9vbF9zY2hlZHVsZSA6IGZrXzM1NDY3XG4iLCJtZXJtYWlkIjp7InRoZW1lIjoiZGVmYXVsdCJ9fQ)

### Many to Many Relations

![](https://mermaid.ink/svg/eyJjb2RlIjoiZXJEaWFncmFtXG4gIGRldmVsb3BtZW50X21vZHVsZV9zY2hvb2xfZXhlcmNpc2UgfW8tLW97IGRldmVsb3BtZW50X21vZHVsZV9xdWVzdGlvbl9jaG9pY2VzIDogbW9kdWxlX3NjaG9vbF9leGVyY2lzZShwa19tb2R1bGVfc2Nob29sX3Rlc3QzNCktPm1vZHVsZV9xdWVzdGlvbl9jaG9pY2VzKHBrX3RhYmxlXzI3Mjc2KV8xODE5XG4gIGRldmVsb3BtZW50X21vZHVsZV9zY2hvb2xfZXhlcmNpc2UgfW8tLW97IGRldmVsb3BtZW50X21vZHVsZV9zY2hvb2xfc3R1ZGVudCA6IG1vZHVsZV9zY2hvb2xfZXhlcmNpc2UocGtfbW9kdWxlX3NjaG9vbF90ZXN0MzQpLT5tb2R1bGVfc2Nob29sX3N0dWRlbnQobW9kdWxlX3NjaG9vbF9zdHVkZW50c19wa2V5KV80NTUwXG4iLCJtZXJtYWlkIjp7InRoZW1lIjoiZGVmYXVsdCJ9fQ)

### Class Diagram

![](https://mermaid.ink/svg/eyJjb2RlIjoiY2xhc3NEaWFncmFtXG4gIFxuICBjbGFzcyBNb2R1bGVTY2hvb2xFeGVyY2lzZSB7XG4gICAgTnVtYmVyICtpZFxuICAgIE51bWJlciArcXVlc3Rpb25faWRcbiAgICBOdW1iZXIgK3NjaGVkdWxlX2lkXG4gICAgTnVtYmVyICtleGVyY2lzZV90eXBlXG4gICAgU3RyaW5nICtuYW1lXG4gICAgTW9kdWxlRXhhbVN0dWRlbnRBbnN3ZXJbXSArbW9kdWxlX3NjaG9vbF9leGVyY2lzZS0-bW9kdWxlX2V4YW1fc3R1ZGVudF9hbnN3ZXJfMjA2M1xuICAgIE1vZHVsZUxlYXJuaWJhUXVlc3Rpb24gK21vZHVsZV9zY2hvb2xfZXhlcmNpc2UtPm1vZHVsZV9sZWFybmliYV9xdWVzdGlvbl80MDFcbiAgICBNb2R1bGVTY2hvb2xTY2hlZHVsZSArbW9kdWxlX3NjaG9vbF9leGVyY2lzZS0-bW9kdWxlX3NjaG9vbF9zY2hlZHVsZV83MzMyXG4gICAgTW9kdWxlUXVlc3Rpb25DaG9pY2VbXSArbW9kdWxlX3NjaG9vbF9leGVyY2lzZShwa19tb2R1bGVfc2Nob29sX3Rlc3QzNCktPm1vZHVsZV9xdWVzdGlvbl9jaG9pY2VzKHBrX3RhYmxlXzI3Mjc2KV8xODE5XG4gICAgTW9kdWxlU2Nob29sU3R1ZGVudFtdICttb2R1bGVfc2Nob29sX2V4ZXJjaXNlKHBrX21vZHVsZV9zY2hvb2xfdGVzdDM0KS0-bW9kdWxlX3NjaG9vbF9zdHVkZW50KG1vZHVsZV9zY2hvb2xfc3R1ZGVudHNfcGtleSlfNDU1MFxuICB9XG5cbiAgXG4gIGNsYXNzIE1vZHVsZUV4YW1TdHVkZW50QW5zd2VyIHtcbiAgICBOdW1iZXIgK2lkXG4gICAgTnVtYmVyICtxdWVzdGlvbl9jaG9pY2VcbiAgICBOdW1iZXIgK3N0dWRlbnRfaWRcbiAgICBEYXRlICthc2tfdGltZVxuICAgIE51bWJlciArYW5zd2VyX3RpbWVfc2VjXG4gICAgTnVtYmVyICtxdWVzdGlvbl9jaG9pY2VzX2lkXG4gICAgTnVtYmVyICtleGVyY2lzZV9pZFxuICAgIE51bWJlciArYW5zd2VyX3Njb3JlXG4gICAgTnVtYmVyICtkb3duX3RpbWVfc2VjXG4gICAgTW9kdWxlUXVlc3Rpb25DaG9pY2UgK21vZHVsZV9leGFtX3N0dWRlbnRfYW5zd2VyLT5tb2R1bGVfcXVlc3Rpb25fY2hvaWNlc180NTE2XG4gICAgTW9kdWxlU2Nob29sRXhlcmNpc2UgK21vZHVsZV9leGFtX3N0dWRlbnRfYW5zd2VyLT5tb2R1bGVfc2Nob29sX2V4ZXJjaXNlXzIyMzBcbiAgICBNb2R1bGVTY2hvb2xTdHVkZW50ICttb2R1bGVfZXhhbV9zdHVkZW50X2Fuc3dlci0-bW9kdWxlX3NjaG9vbF9zdHVkZW50XzY1NTZcbiAgfVxuXG4gIE1vZHVsZVNjaG9vbEV4ZXJjaXNlIC0tPiBNb2R1bGVFeGFtU3R1ZGVudEFuc3dlciA6IG1vZHVsZV9zY2hvb2xfZXhlcmNpc2UtPm1vZHVsZV9leGFtX3N0dWRlbnRfYW5zd2VyXzIwNjNcbiAgXG4gIGNsYXNzIE1vZHVsZUxlYXJuaWJhUXVlc3Rpb24ge1xuICAgIE51bWJlciAraWRcbiAgICBTdHJpbmcgK3F1ZXN0aW9uX3RleHRcbiAgICBOdW1iZXIgK21lZGlhX2lkXG4gICAgTnVtYmVyICttZWRpYV90aXBfaWRcbiAgICBOdW1iZXIgK3JlZmVyZW5jZV9pbmRleF9pZFxuICAgIE51bWJlciArcXVlc3Rpb25fdGltZV9saW1pdF9zZWNcbiAgICBOdW1iZXIgK2RpZmZpY3VsdHlfc2NvcmVcbiAgICBOdW1iZXIgK2Jvb2tfcGFnZV9ub1xuICAgIE1vZHVsZVF1ZXN0aW9uQ2hvaWNlW10gK21vZHVsZV9sZWFybmliYV9xdWVzdGlvbi0-bW9kdWxlX3F1ZXN0aW9uX2Nob2ljZXNfMzg3NFxuICAgIE1vZHVsZVNjaG9vbEV4ZXJjaXNlW10gK21vZHVsZV9sZWFybmliYV9xdWVzdGlvbi0-bW9kdWxlX3NjaG9vbF9leGVyY2lzZV8xNzcxXG4gICAgTW9kdWxlTGVhcm5pYmFSZWZlcmVuY2VJbmRleCArbW9kdWxlX2xlYXJuaWJhX3F1ZXN0aW9uLT5tb2R1bGVfbGVhcm5pYmFfcmVmZXJlbmNlX2luZGV4XzU5NTNcbiAgICBNb2R1bGVRdWVzdGlvbk1lZGl1bSArbW9kdWxlX2xlYXJuaWJhX3F1ZXN0aW9uLT5tb2R1bGVfcXVlc3Rpb25fbWVkaWFfNDAxOFxuICAgIE1vZHVsZVF1ZXN0aW9uTWVkaXVtICttb2R1bGVfbGVhcm5pYmFfcXVlc3Rpb24tPm1vZHVsZV9xdWVzdGlvbl9tZWRpYV82OTE5XG4gICAgTW9kdWxlUXVlc3Rpb25NZWRpdW1bXSArbW9kdWxlX2xlYXJuaWJhX3F1ZXN0aW9uKHBrX3RhYmxlXzI4MDQpLT5tb2R1bGVfcXVlc3Rpb25fbWVkaWEocGtfdGFibGVfMjg4KV82NDU1XG4gICAgTW9kdWxlU2Nob29sU2NoZWR1bGVbXSArbW9kdWxlX2xlYXJuaWJhX3F1ZXN0aW9uKHBrX3RhYmxlXzI4MDQpLT5tb2R1bGVfc2Nob29sX3NjaGVkdWxlKHBrX21vZHVsZV9zY2hvb2xfc2NoZWR1bGUpXzIxNTlcbiAgfVxuXG4gIE1vZHVsZVNjaG9vbEV4ZXJjaXNlIC0tPiBNb2R1bGVMZWFybmliYVF1ZXN0aW9uIDogbW9kdWxlX3NjaG9vbF9leGVyY2lzZS0-bW9kdWxlX2xlYXJuaWJhX3F1ZXN0aW9uXzQwMVxuICBcbiAgY2xhc3MgTW9kdWxlU2Nob29sU2NoZWR1bGUge1xuICAgIE51bWJlciAraWRcbiAgICBEYXRlICtjcmVhdGVkX2F0XG4gICAgU3RyaW5nICtjcmVhdGVkX2J5XG4gICAgRGF0ZSArdXBkYXRlZF9hdFxuICAgIFN0cmluZyArdXBkYXRlZF9ieVxuICAgIERhdGUgK3N0YXJ0dGltZVxuICAgIERhdGUgK2VuZHRpbWVcbiAgICBOdW1iZXIgK3RlYWNoZXJfaWRcbiAgICBOdW1iZXIgK2Fzc2lzdGFudF9pZFxuICAgIE51bWJlciArc3ViamVjdF9pZFxuICAgIE51bWJlciArY2xhc3NfaWRcbiAgICBOdW1iZXIgK3JlZmVyZW5jZV9pbmRleF9pZFxuICAgIE1vZHVsZVNjaG9vbEFiY2VuY2VTdHVkZW50W10gK21vZHVsZV9zY2hvb2xfc2NoZWR1bGUtPm1vZHVsZV9zY2hvb2xfYWJjZW5jZV9zdHVkZW50XzcyNThcbiAgICBNb2R1bGVTY2hvb2xFeGVyY2lzZVtdICttb2R1bGVfc2Nob29sX3NjaGVkdWxlLT5tb2R1bGVfc2Nob29sX2V4ZXJjaXNlXzIyNzFcbiAgICBNb2R1bGVMZWFybmliYVJlZmVyZW5jZUluZGV4ICttb2R1bGVfc2Nob29sX3NjaGVkdWxlLT5tb2R1bGVfbGVhcm5pYmFfcmVmZXJlbmNlX2luZGV4XzkwOTlcbiAgICBNb2R1bGVTY2hvb2xDbGFzcyArbW9kdWxlX3NjaG9vbF9zY2hlZHVsZS0-bW9kdWxlX3NjaG9vbF9jbGFzc185MzkyXG4gICAgTW9kdWxlU2Nob29sU3ViamVjdCArbW9kdWxlX3NjaG9vbF9zY2hlZHVsZS0-bW9kdWxlX3NjaG9vbF9zdWJqZWN0Xzg0NTVcbiAgICBNb2R1bGVTY2hvb2xUZWFjaGVyICttb2R1bGVfc2Nob29sX3NjaGVkdWxlLT5tb2R1bGVfc2Nob29sX3RlYWNoZXJfMTI0OFxuICAgIE1vZHVsZVNjaG9vbFRlYWNoZXIgK21vZHVsZV9zY2hvb2xfc2NoZWR1bGUtPm1vZHVsZV9zY2hvb2xfdGVhY2hlcl83MjgzXG4gICAgTW9kdWxlTGVhcm5pYmFRdWVzdGlvbltdICttb2R1bGVfc2Nob29sX3NjaGVkdWxlKHBrX21vZHVsZV9zY2hvb2xfc2NoZWR1bGUpLT5tb2R1bGVfbGVhcm5pYmFfcXVlc3Rpb24ocGtfdGFibGVfMjgwNClfNDI0OFxuICAgIE1vZHVsZVNjaG9vbFN0dWRlbnRbXSArbW9kdWxlX3NjaG9vbF9zY2hlZHVsZShwa19tb2R1bGVfc2Nob29sX3NjaGVkdWxlKS0-bW9kdWxlX3NjaG9vbF9zdHVkZW50KG1vZHVsZV9zY2hvb2xfc3R1ZGVudHNfcGtleSlfMzQzOFxuICB9XG5cbiAgTW9kdWxlU2Nob29sRXhlcmNpc2UgLS0-IE1vZHVsZVNjaG9vbFNjaGVkdWxlIDogbW9kdWxlX3NjaG9vbF9leGVyY2lzZS0-bW9kdWxlX3NjaG9vbF9zY2hlZHVsZV83MzMyXG4gIFxuICBjbGFzcyBNb2R1bGVRdWVzdGlvbkNob2ljZSB7XG4gICAgTnVtYmVyICtpZFxuICAgIFN0cmluZyArY2hvaWNlX3RleHRcbiAgICBCb29sZWFuICtpc19jb3JyZWN0XG4gICAgTnVtYmVyICtxdWVzdGlvbl9pZFxuICAgIE51bWJlciArbWVkaWFfaWRcbiAgICBNb2R1bGVFeGFtU3R1ZGVudEFuc3dlcltdICttb2R1bGVfcXVlc3Rpb25fY2hvaWNlcy0-bW9kdWxlX2V4YW1fc3R1ZGVudF9hbnN3ZXJfNTU4MFxuICAgIE1vZHVsZUxlYXJuaWJhUXVlc3Rpb24gK21vZHVsZV9xdWVzdGlvbl9jaG9pY2VzLT5tb2R1bGVfbGVhcm5pYmFfcXVlc3Rpb25fODMwMlxuICAgIE1vZHVsZVF1ZXN0aW9uTWVkaXVtICttb2R1bGVfcXVlc3Rpb25fY2hvaWNlcy0-bW9kdWxlX3F1ZXN0aW9uX21lZGlhXzU5NjRcbiAgICBNb2R1bGVTY2hvb2xFeGVyY2lzZVtdICttb2R1bGVfcXVlc3Rpb25fY2hvaWNlcyhwa190YWJsZV8yNzI3NiktPm1vZHVsZV9zY2hvb2xfZXhlcmNpc2UocGtfbW9kdWxlX3NjaG9vbF90ZXN0MzQpXzYxMTdcbiAgICBNb2R1bGVTY2hvb2xTdHVkZW50W10gK21vZHVsZV9xdWVzdGlvbl9jaG9pY2VzKHBrX3RhYmxlXzI3Mjc2KS0-bW9kdWxlX3NjaG9vbF9zdHVkZW50KG1vZHVsZV9zY2hvb2xfc3R1ZGVudHNfcGtleSlfMjcxOVxuICB9XG5cbiAgTW9kdWxlU2Nob29sRXhlcmNpc2UgLS0-IE1vZHVsZVF1ZXN0aW9uQ2hvaWNlIDogbW9kdWxlX3NjaG9vbF9leGVyY2lzZShwa19tb2R1bGVfc2Nob29sX3Rlc3QzNCktPm1vZHVsZV9xdWVzdGlvbl9jaG9pY2VzKHBrX3RhYmxlXzI3Mjc2KV8xODE5XG4gIFxuICBjbGFzcyBNb2R1bGVTY2hvb2xTdHVkZW50IHtcbiAgICBOdW1iZXIgK3N0dWRlbnRfaWRcbiAgICBOdW1iZXIgK2NsYXNzX2lkXG4gICAgTnVtYmVyICtkaWZmaWN1bHR5X3Njb3JlXG4gICAgTW9kdWxlRXhhbVN0dWRlbnRBbnN3ZXJbXSArbW9kdWxlX3NjaG9vbF9zdHVkZW50LT5tb2R1bGVfZXhhbV9zdHVkZW50X2Fuc3dlcl8zMzMzXG4gICAgTW9kdWxlTGVhbmliYURpZmZpY3VsdHlIaXN0b3J5W10gK21vZHVsZV9zY2hvb2xfc3R1ZGVudC0-bW9kdWxlX2xlYW5pYmFfZGlmZmljdWx0eV9oaXN0b3J5Xzg3MTNcbiAgICBNb2R1bGVTY2hvb2xBYmNlbmNlU3R1ZGVudFtdICttb2R1bGVfc2Nob29sX3N0dWRlbnQtPm1vZHVsZV9zY2hvb2xfYWJjZW5jZV9zdHVkZW50XzYyMDFcbiAgICBNb2R1bGVTY2hvb2xDdXN0b2RpYW5bXSArbW9kdWxlX3NjaG9vbF9zdHVkZW50LT5tb2R1bGVfc2Nob29sX2N1c3RvZGlhbl83ODZcbiAgICBNb2R1bGVTY2hvb2xDbGFzcyArbW9kdWxlX3NjaG9vbF9zdHVkZW50LT5tb2R1bGVfc2Nob29sX2NsYXNzXzU0MjRcbiAgICBNb2R1bGVRdWVzdGlvbkNob2ljZVtdICttb2R1bGVfc2Nob29sX3N0dWRlbnQobW9kdWxlX3NjaG9vbF9zdHVkZW50c19wa2V5KS0-bW9kdWxlX3F1ZXN0aW9uX2Nob2ljZXMocGtfdGFibGVfMjcyNzYpXzI0NTBcbiAgICBNb2R1bGVTY2hvb2xFeGVyY2lzZVtdICttb2R1bGVfc2Nob29sX3N0dWRlbnQobW9kdWxlX3NjaG9vbF9zdHVkZW50c19wa2V5KS0-bW9kdWxlX3NjaG9vbF9leGVyY2lzZShwa19tb2R1bGVfc2Nob29sX3Rlc3QzNClfNzEyMlxuICAgIE1vZHVsZVNjaG9vbFBhcmVudFtdICttb2R1bGVfc2Nob29sX3N0dWRlbnQobW9kdWxlX3NjaG9vbF9zdHVkZW50c19wa2V5KS0-bW9kdWxlX3NjaG9vbF9wYXJlbnQocGtfdGFibGVfMjEyMSlfMjk0MFxuICAgIE1vZHVsZVNjaG9vbFNjaGVkdWxlW10gK21vZHVsZV9zY2hvb2xfc3R1ZGVudChtb2R1bGVfc2Nob29sX3N0dWRlbnRzX3BrZXkpLT5tb2R1bGVfc2Nob29sX3NjaGVkdWxlKHBrX21vZHVsZV9zY2hvb2xfc2NoZWR1bGUpXzEyNjhcbiAgfVxuXG4gIE1vZHVsZVNjaG9vbEV4ZXJjaXNlIC0tPiBNb2R1bGVTY2hvb2xTdHVkZW50IDogbW9kdWxlX3NjaG9vbF9leGVyY2lzZShwa19tb2R1bGVfc2Nob29sX3Rlc3QzNCktPm1vZHVsZV9zY2hvb2xfc3R1ZGVudChtb2R1bGVfc2Nob29sX3N0dWRlbnRzX3BrZXkpXzQ1NTBcbiIsIm1lcm1haWQiOnsidGhlbWUiOiJkZWZhdWx0In19)