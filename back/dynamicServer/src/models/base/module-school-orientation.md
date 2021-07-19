# Table: development.module_school_orientation

## Database Structure

| PK  | FK  | Name        | Type                        | NN  | Index |
| :-: | :-: | ----------- | --------------------------- | :-: | :---: |
| 🔑  |     | id          | integer                     |  ●  |   1   |
|     |     | code        | character varying(255)      |  ○  |       |
|     |     | name        | character varying(255)      |  ○  |       |
|     |     | description | character varying(255)      |  ○  |       |
|     |     | created_at  | timestamp without time zone |  ○  |       |
|     |     | created_by  | character varying(255)      |  ○  |       |
|     |     | updated_at  | timestamp without time zone |  ○  |       |
|     |     | updated_by  | character varying(255)      |  ○  |       |

### One to Many & Many to One Relations

![](https://mermaid.ink/svg/eyJjb2RlIjoiZXJEaWFncmFtXG4gIGRldmVsb3BtZW50X21vZHVsZV9zY2hvb2xfb3JpZW50YXRpb24gfHwtLW97IGRldmVsb3BtZW50X21vZHVsZV9zY2hvb2xfY2xhc3MgOiBma19zY2hvb2xfY2xhc3MxX3NjaG9vbF9vcmllbnRhdGlvbl8xNFxuICBkZXZlbG9wbWVudF9tb2R1bGVfc2Nob29sX29yaWVudGF0aW9uXG4gIGRldmVsb3BtZW50X21vZHVsZV9zY2hvb2xfb3JpZW50YXRpb24gfHwtLW97IGRldmVsb3BtZW50X21vZHVsZV9zY2hvb2xfcmVmZXJlbmNlX29yaWVudGF0aW9uIDogZmtfNDM3MFxuICBkZXZlbG9wbWVudF9tb2R1bGVfc2Nob29sX29yaWVudGF0aW9uXG4iLCJtZXJtYWlkIjp7InRoZW1lIjoiZGVmYXVsdCJ9fQ)

### Many to Many Relations

![](https://mermaid.ink/svg/eyJjb2RlIjoiZXJEaWFncmFtXG4gIGRldmVsb3BtZW50X21vZHVsZV9zY2hvb2xfb3JpZW50YXRpb24gfW8tLW97IGRldmVsb3BtZW50X21vZHVsZV9sZWFybmliYV9yZWZlcmVuY2UgOiBtb2R1bGVfc2Nob29sX29yaWVudGF0aW9uKHBrX21vZHVsZV9zY2hvb2xfb3JpZW50YXRpb24pLT5tb2R1bGVfbGVhcm5pYmFfcmVmZXJlbmNlKHBrX21vZHVsZV9sZWFybmliYV9yZWZlcmVuY2UxMilfODI1NFxuIiwibWVybWFpZCI6eyJ0aGVtZSI6ImRlZmF1bHQifX0)

### Class Diagram

![](https://mermaid.ink/svg/eyJjb2RlIjoiY2xhc3NEaWFncmFtXG4gIFxuICBjbGFzcyBNb2R1bGVTY2hvb2xPcmllbnRhdGlvbiB7XG4gICAgTnVtYmVyICtpZFxuICAgIFN0cmluZyArY29kZVxuICAgIFN0cmluZyArbmFtZVxuICAgIFN0cmluZyArZGVzY3JpcHRpb25cbiAgICBEYXRlICtjcmVhdGVkX2F0XG4gICAgU3RyaW5nICtjcmVhdGVkX2J5XG4gICAgRGF0ZSArdXBkYXRlZF9hdFxuICAgIFN0cmluZyArdXBkYXRlZF9ieVxuICAgIE1vZHVsZVNjaG9vbENsYXNzW10gK21vZHVsZV9zY2hvb2xfb3JpZW50YXRpb24tPm1vZHVsZV9zY2hvb2xfY2xhc3NfNTkwM1xuICAgIE1vZHVsZVNjaG9vbFJlZmVyZW5jZU9yaWVudGF0aW9uW10gK21vZHVsZV9zY2hvb2xfb3JpZW50YXRpb24tPm1vZHVsZV9zY2hvb2xfcmVmZXJlbmNlX29yaWVudGF0aW9uXzk0MTJcbiAgICBNb2R1bGVMZWFybmliYVJlZmVyZW5jZVtdICttb2R1bGVfc2Nob29sX29yaWVudGF0aW9uKHBrX21vZHVsZV9zY2hvb2xfb3JpZW50YXRpb24pLT5tb2R1bGVfbGVhcm5pYmFfcmVmZXJlbmNlKHBrX21vZHVsZV9sZWFybmliYV9yZWZlcmVuY2UxMilfODI1NFxuICB9XG5cbiAgXG4gIGNsYXNzIE1vZHVsZVNjaG9vbENsYXNzIHtcbiAgICBOdW1iZXIgK2lkXG4gICAgU3RyaW5nICtjb2RlXG4gICAgU3RyaW5nICtuYW1lXG4gICAgU3RyaW5nICtkZXNjcmlwdGlvblxuICAgIERhdGUgK2NyZWF0ZWRfYXRcbiAgICBTdHJpbmcgK2NyZWF0ZWRfYnlcbiAgICBEYXRlICt1cGRhdGVkX2F0XG4gICAgU3RyaW5nICt1cGRhdGVkX2J5XG4gICAgTnVtYmVyICtvcmllbnRhdGlvbl9pZFxuICAgIE51bWJlciAreWVhclxuICAgIE51bWJlciArbGV2ZWxcbiAgICBNb2R1bGVTY2hvb2xTY2hlZHVsZVtdICttb2R1bGVfc2Nob29sX2NsYXNzLT5tb2R1bGVfc2Nob29sX3NjaGVkdWxlXzY2NThcbiAgICBNb2R1bGVTY2hvb2xTdHVkZW50W10gK21vZHVsZV9zY2hvb2xfY2xhc3MtPm1vZHVsZV9zY2hvb2xfc3R1ZGVudF8zNzYxXG4gICAgTW9kdWxlU2Nob29sT3JpZW50YXRpb24gK21vZHVsZV9zY2hvb2xfY2xhc3MtPm1vZHVsZV9zY2hvb2xfb3JpZW50YXRpb25fNjAzMlxuICAgIE1vZHVsZUxlYXJuaWJhUmVmZXJlbmNlSW5kZXhbXSArbW9kdWxlX3NjaG9vbF9jbGFzcyhfY29weV8yMyktPm1vZHVsZV9sZWFybmliYV9yZWZlcmVuY2VfaW5kZXgocGtfdGFibGVfMjk1MDkpXzMwMzlcbiAgICBNb2R1bGVTY2hvb2xTdWJqZWN0W10gK21vZHVsZV9zY2hvb2xfY2xhc3MoX2NvcHlfMjMpLT5tb2R1bGVfc2Nob29sX3N1YmplY3QocGtfbW9kdWxlX3NjaG9vbF9zdWJqZWN0KV8xOTI3XG4gICAgTW9kdWxlU2Nob29sVGVhY2hlcltdICttb2R1bGVfc2Nob29sX2NsYXNzKF9jb3B5XzIzKS0-bW9kdWxlX3NjaG9vbF90ZWFjaGVyKHBrX21vZHVsZV9zY2hvb2xfdGVhY2hlcjEzKV8yNDYzXG4gICAgTW9kdWxlU2Nob29sVGVhY2hlcltdICttb2R1bGVfc2Nob29sX2NsYXNzKF9jb3B5XzIzKS0-bW9kdWxlX3NjaG9vbF90ZWFjaGVyKHBrX21vZHVsZV9zY2hvb2xfdGVhY2hlcjEzKV84MDNcbiAgfVxuXG4gIE1vZHVsZVNjaG9vbE9yaWVudGF0aW9uIC0tPiBNb2R1bGVTY2hvb2xDbGFzcyA6IG1vZHVsZV9zY2hvb2xfb3JpZW50YXRpb24tPm1vZHVsZV9zY2hvb2xfY2xhc3NfNTkwM1xuICBcbiAgY2xhc3MgTW9kdWxlU2Nob29sUmVmZXJlbmNlT3JpZW50YXRpb24ge1xuICAgIE51bWJlciArcmVmZXJlbmNlX2lkXG4gICAgTnVtYmVyICtvcmllbnRhdGlvbl9pZFxuICAgIE1vZHVsZUxlYXJuaWJhUmVmZXJlbmNlICttb2R1bGVfc2Nob29sX3JlZmVyZW5jZV9vcmllbnRhdGlvbi0-bW9kdWxlX2xlYXJuaWJhX3JlZmVyZW5jZV8yNDI5XG4gICAgTW9kdWxlU2Nob29sT3JpZW50YXRpb24gK21vZHVsZV9zY2hvb2xfcmVmZXJlbmNlX29yaWVudGF0aW9uLT5tb2R1bGVfc2Nob29sX29yaWVudGF0aW9uXzUyNjBcbiAgfVxuXG4gIE1vZHVsZVNjaG9vbE9yaWVudGF0aW9uIC0tPiBNb2R1bGVTY2hvb2xSZWZlcmVuY2VPcmllbnRhdGlvbiA6IG1vZHVsZV9zY2hvb2xfb3JpZW50YXRpb24tPm1vZHVsZV9zY2hvb2xfcmVmZXJlbmNlX29yaWVudGF0aW9uXzk0MTJcbiAgXG4gIGNsYXNzIE1vZHVsZUxlYXJuaWJhUmVmZXJlbmNlIHtcbiAgICBOdW1iZXIgK2lkXG4gICAgU3RyaW5nICtuYW1lXG4gICAgU3RyaW5nICtkZXNjcmlwdGlvblxuICAgIERhdGUgK3B1Ymxpc2hfZGF0ZVxuICAgIFN0cmluZyArcHVibGlzaGVyXG4gICAgTnVtYmVyICtsZXZlbFxuICAgIE51bWJlciArc3ViamVjdF9pZFxuICAgIE1vZHVsZUxlYXJuaWJhUmVmZXJlbmNlSW5kZXhbXSArbW9kdWxlX2xlYXJuaWJhX3JlZmVyZW5jZS0-bW9kdWxlX2xlYXJuaWJhX3JlZmVyZW5jZV9pbmRleF85NjMxXG4gICAgTW9kdWxlU2Nob29sUmVmZXJlbmNlT3JpZW50YXRpb25bXSArbW9kdWxlX2xlYXJuaWJhX3JlZmVyZW5jZS0-bW9kdWxlX3NjaG9vbF9yZWZlcmVuY2Vfb3JpZW50YXRpb25fNTcxMlxuICAgIE1vZHVsZVNjaG9vbFN1YmplY3QgK21vZHVsZV9sZWFybmliYV9yZWZlcmVuY2UtPm1vZHVsZV9zY2hvb2xfc3ViamVjdF84Nzk5XG4gICAgTW9kdWxlTGVhcm5pYmFSZWZlcmVuY2VJbmRleFtdICttb2R1bGVfbGVhcm5pYmFfcmVmZXJlbmNlKHBrX21vZHVsZV9sZWFybmliYV9yZWZlcmVuY2UxMiktPm1vZHVsZV9sZWFybmliYV9yZWZlcmVuY2VfaW5kZXgocGtfdGFibGVfMjk1MDkpXzM0NjJcbiAgICBNb2R1bGVTY2hvb2xPcmllbnRhdGlvbltdICttb2R1bGVfbGVhcm5pYmFfcmVmZXJlbmNlKHBrX21vZHVsZV9sZWFybmliYV9yZWZlcmVuY2UxMiktPm1vZHVsZV9zY2hvb2xfb3JpZW50YXRpb24ocGtfbW9kdWxlX3NjaG9vbF9vcmllbnRhdGlvbilfOTgxXG4gIH1cblxuICBNb2R1bGVTY2hvb2xPcmllbnRhdGlvbiAtLT4gTW9kdWxlTGVhcm5pYmFSZWZlcmVuY2UgOiBtb2R1bGVfc2Nob29sX29yaWVudGF0aW9uKHBrX21vZHVsZV9zY2hvb2xfb3JpZW50YXRpb24pLT5tb2R1bGVfbGVhcm5pYmFfcmVmZXJlbmNlKHBrX21vZHVsZV9sZWFybmliYV9yZWZlcmVuY2UxMilfODI1NFxuIiwibWVybWFpZCI6eyJ0aGVtZSI6ImRlZmF1bHQifX0)