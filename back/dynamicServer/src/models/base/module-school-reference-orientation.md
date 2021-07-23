# Table: development.module_school_reference_orientation

## Database Structure

| PK  | FK  | Name           | Type                        | NN  | Index |
| :-: | :-: | -------------- | --------------------------- | :-: | :---: |
| 🔑  | FK  | reference_id   | integer                     |  ●  |   2   |
| 🔑  | FK  | orientation_id | integer                     |  ●  |   2   |
|     |     | createdAt      | timestamp with time zone(6) |  ●  |       |
|     |     | updatedAt      | timestamp with time zone(6) |  ●  |       |
|     |     | deletedAt      | timestamp with time zone(6) |  ○  |       |

### One to Many & Many to One Relations

![](https://mermaid.ink/svg/eyJjb2RlIjoiZXJEaWFncmFtXG4gIGRldmVsb3BtZW50X21vZHVsZV9zY2hvb2xfcmVmZXJlbmNlX29yaWVudGF0aW9uIH1vLS18fCBkZXZlbG9wbWVudF9tb2R1bGVfbGVhcm5pYmFfcmVmZXJlbmNlIDogZmtfNDI5NzZcbiAgZGV2ZWxvcG1lbnRfbW9kdWxlX3NjaG9vbF9yZWZlcmVuY2Vfb3JpZW50YXRpb24gfW8tLXx8IGRldmVsb3BtZW50X21vZHVsZV9zY2hvb2xfb3JpZW50YXRpb24gOiBma180MzcwXG4iLCJtZXJtYWlkIjp7InRoZW1lIjoiZGVmYXVsdCJ9fQ)

### Many to Many Relations

### Class Diagram

![](https://mermaid.ink/svg/eyJjb2RlIjoiY2xhc3NEaWFncmFtXG4gIFxuICBjbGFzcyBNb2R1bGVTY2hvb2xSZWZlcmVuY2VPcmllbnRhdGlvbiB7XG4gICAgTnVtYmVyICtyZWZlcmVuY2VfaWRcbiAgICBOdW1iZXIgK29yaWVudGF0aW9uX2lkXG4gICAgRGF0ZSArY3JlYXRlZEF0XG4gICAgRGF0ZSArdXBkYXRlZEF0XG4gICAgRGF0ZSArZGVsZXRlZEF0XG4gICAgTW9kdWxlTGVhcm5pYmFSZWZlcmVuY2UgK21vZHVsZV9zY2hvb2xfcmVmZXJlbmNlX29yaWVudGF0aW9uLT5tb2R1bGVfbGVhcm5pYmFfcmVmZXJlbmNlXzc1NzdcbiAgICBNb2R1bGVTY2hvb2xPcmllbnRhdGlvbiArbW9kdWxlX3NjaG9vbF9yZWZlcmVuY2Vfb3JpZW50YXRpb24tPm1vZHVsZV9zY2hvb2xfb3JpZW50YXRpb25fNjI5XG4gIH1cblxuICBcbiAgY2xhc3MgTW9kdWxlTGVhcm5pYmFSZWZlcmVuY2Uge1xuICAgIE51bWJlciAraWRcbiAgICBTdHJpbmcgK25hbWVcbiAgICBTdHJpbmcgK2Rlc2NyaXB0aW9uXG4gICAgRGF0ZSArcHVibGlzaF9kYXRlXG4gICAgU3RyaW5nICtwdWJsaXNoZXJcbiAgICBOdW1iZXIgK2xldmVsXG4gICAgTnVtYmVyICtzdWJqZWN0X2lkXG4gICAgRGF0ZSArY3JlYXRlZEF0XG4gICAgRGF0ZSArdXBkYXRlZEF0XG4gICAgRGF0ZSArZGVsZXRlZEF0XG4gICAgTW9kdWxlTGVhcm5pYmFSZWZlcmVuY2VJbmRleFtdICttb2R1bGVfbGVhcm5pYmFfcmVmZXJlbmNlLT5tb2R1bGVfbGVhcm5pYmFfcmVmZXJlbmNlX2luZGV4XzEwNzJcbiAgICBNb2R1bGVTY2hvb2xSZWZlcmVuY2VPcmllbnRhdGlvbltdICttb2R1bGVfbGVhcm5pYmFfcmVmZXJlbmNlLT5tb2R1bGVfc2Nob29sX3JlZmVyZW5jZV9vcmllbnRhdGlvbl85MTcxXG4gICAgTW9kdWxlU2Nob29sU3ViamVjdCArbW9kdWxlX2xlYXJuaWJhX3JlZmVyZW5jZS0-bW9kdWxlX3NjaG9vbF9zdWJqZWN0Xzc2MzZcbiAgICBNb2R1bGVMZWFybmliYVJlZmVyZW5jZUluZGV4W10gK21vZHVsZV9sZWFybmliYV9yZWZlcmVuY2UocGtfbW9kdWxlX2xlYXJuaWJhX3JlZmVyZW5jZTEyKS0-bW9kdWxlX2xlYXJuaWJhX3JlZmVyZW5jZV9pbmRleChwa190YWJsZV8yOTUwOSlfMjU5M1xuICAgIE1vZHVsZVNjaG9vbE9yaWVudGF0aW9uW10gK21vZHVsZV9sZWFybmliYV9yZWZlcmVuY2UocGtfbW9kdWxlX2xlYXJuaWJhX3JlZmVyZW5jZTEyKS0-bW9kdWxlX3NjaG9vbF9vcmllbnRhdGlvbihwa19tb2R1bGVfc2Nob29sX29yaWVudGF0aW9uKV84MDIzXG4gIH1cblxuICBNb2R1bGVTY2hvb2xSZWZlcmVuY2VPcmllbnRhdGlvbiAtLT4gTW9kdWxlTGVhcm5pYmFSZWZlcmVuY2UgOiBtb2R1bGVfc2Nob29sX3JlZmVyZW5jZV9vcmllbnRhdGlvbi0-bW9kdWxlX2xlYXJuaWJhX3JlZmVyZW5jZV83NTc3XG4gIFxuICBjbGFzcyBNb2R1bGVTY2hvb2xPcmllbnRhdGlvbiB7XG4gICAgTnVtYmVyICtpZFxuICAgIFN0cmluZyArY29kZVxuICAgIFN0cmluZyArbmFtZVxuICAgIFN0cmluZyArZGVzY3JpcHRpb25cbiAgICBEYXRlICtjcmVhdGVkX2F0XG4gICAgU3RyaW5nICtjcmVhdGVkX2J5XG4gICAgRGF0ZSArdXBkYXRlZF9hdFxuICAgIFN0cmluZyArdXBkYXRlZF9ieVxuICAgIERhdGUgK2NyZWF0ZWRBdFxuICAgIERhdGUgK3VwZGF0ZWRBdFxuICAgIERhdGUgK2RlbGV0ZWRBdFxuICAgIE1vZHVsZVNjaG9vbENsYXNzW10gK21vZHVsZV9zY2hvb2xfb3JpZW50YXRpb24tPm1vZHVsZV9zY2hvb2xfY2xhc3NfMTgyNVxuICAgIE1vZHVsZVNjaG9vbFJlZmVyZW5jZU9yaWVudGF0aW9uW10gK21vZHVsZV9zY2hvb2xfb3JpZW50YXRpb24tPm1vZHVsZV9zY2hvb2xfcmVmZXJlbmNlX29yaWVudGF0aW9uXzg4MjlcbiAgICBNb2R1bGVMZWFybmliYVJlZmVyZW5jZVtdICttb2R1bGVfc2Nob29sX29yaWVudGF0aW9uKHBrX21vZHVsZV9zY2hvb2xfb3JpZW50YXRpb24pLT5tb2R1bGVfbGVhcm5pYmFfcmVmZXJlbmNlKHBrX21vZHVsZV9sZWFybmliYV9yZWZlcmVuY2UxMilfMjg5XG4gIH1cblxuICBNb2R1bGVTY2hvb2xSZWZlcmVuY2VPcmllbnRhdGlvbiAtLT4gTW9kdWxlU2Nob29sT3JpZW50YXRpb24gOiBtb2R1bGVfc2Nob29sX3JlZmVyZW5jZV9vcmllbnRhdGlvbi0-bW9kdWxlX3NjaG9vbF9vcmllbnRhdGlvbl82MjlcbiIsIm1lcm1haWQiOnsidGhlbWUiOiJkZWZhdWx0In19)
