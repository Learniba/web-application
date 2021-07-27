/*
 *
 *  * Copyright (c) 2021. Learniba Project, Interactive Education Platform
 *  * Programmed By: YiiMan amintado@gmail.com 09353466620
 *  * Author: Learniba TM
 *  *
 *
 */

import fs from "fs";

export default {
  excludeDb:['createdAt','deletedAt','updatedAt'],
  excludeAnd(array=[]){
    return this.excludeDb.concat(array);
  },
  merge(array1=[],array2=[]){
    return  [...new Set([...array1 ,...array2])];
  },

  isValidIranianNationalCode(input) {
    if (!/^\d{10}$/.test(input)) return false;
    const check = +input[9];
    const sum = input.split('').slice(0, 9).map((x, i) => +x * (10 - i)).reduce((x, y) => x + y) % 11;
    return sum < 2 ? check == sum : check + sum == 11;
  },

  /**
   * save a temp file in system temp folder
   *
   * this file can be expire after s1 hour automatically if you don set any expire time
   * @param {string} name temp file name
   * @param {object} json your json data for save in file
   * @param {number} expire expire time in hour unit, for exam (1 = one hour)
   * @return {void}
   */
  create_temp_json(name,json,expire=1){
      let data={
        expire:expire,
        savedAt:new Date(),
        data:json
      }
      fs.writeFileSync('./temp/'+name,JSON.stringify(data));
  },

  /**
   * read content of a temp file
   * @param name
   * @return {Promise<{hasError:{boolean},error:{object}|{null},data:{object}|{null}}>}
   */
  async get_temp_json(name){
    let result;
    await fs.readFile('./temp/'+name,(err,data)=>{
      if (err){
        result= {hasError:true,error:err};
      }else{
        result= {hasError: false,data:data};
      }
    });
    return result;
  }
}
