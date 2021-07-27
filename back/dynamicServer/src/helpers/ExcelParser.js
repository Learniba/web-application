/*
 *
 *  * Copyright (c) 2021. Learniba Project, Interactive Education Platform
 *  * Programmed By: YiiMan amintado@gmail.com 09353466620
 *  * Author: Learniba TM
 *  *
 *
 */

import XLSX from 'xlsx'

export default class {
  file;
  workbook;
  sheet;

  read_file() {
    this.workbook = XLSX.readFile(this.file);
  }

  constructor(filename) {
    this.file = filename;
    this.read_file();
  }

  /**
   *
   * @param index
   * @param {array< object> } headers
   */
  load_sheet(index, headers = []) {
    this.sheet = this.workbook.Sheets[this.workbook.SheetNames[index]];
    let sheet;
    sheet = XLSX.utils.sheet_to_json(this.sheet,{
      header: headers
    })
    return sheet;
  }


}
