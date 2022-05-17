import { Component, OnInit } from '@angular/core';
import { data } from './reci';
// import * as html2pdf from 'http-parser-js';
// import * as fs from 'fs-extra';
// import * as puppeteer from 'puppeteer';
// const http = require('http');
// import { interval } from 'rxjs';
// var htmlToPdf = require('html-to-pdf');
// import * as htmlToPdf from 'html-to-pdf';

import { filter, first, mergeMap } from 'rxjs/operators';
interface WordModel {
  firstTwoCharacters: string;
  lastTwoCharacters: string;
  value: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'kaladont-app';
  listOfWords: Set<Record<string, string>[]> = new Set([]);
  listOfWordsWithoutLineBreak: Set<WordModel> = new Set([]);
  listOfWordsWithLineBreak: Set<WordModel> = new Set([]);
  storingValues: Array<string> = [];

  async ngOnInit(): Promise<void> {
    // await this.getData();
    // await this.parseWordsWithLineBreak();
    // await this.makeArrayOfWords();
    // htmlToPdf.convertHTMLFile('./app.component.html', './app.component.pdf',
    // function (error: any, success: any) {
    //    if (error) {
    //         console.log('Oh noes! Errorz!');
    //         console.log(error);
    //     } else {
    //         console.log('Woot! Success!');
    //         console.log(success);
    //     }
    // }
// );
  }

  async getData(): Promise<void> {
    this.listOfWords = JSON.parse(JSON.stringify(data));
    // console.log("🚀 ~ file: app.component.ts ~ line 21 ~ AppComponent ~ getData ~ this.listOfWords", Object.values(this.listOfWords))
  }

  async parseWordsWithLineBreak(): Promise<void> {
    Object.values(this.listOfWords).forEach((wordWithLineBreak: string) => {
      //Lista sa recima koje imaju karakter  -
      // if(wordWithLineBreak.includes('-')) {
      //   this.listOfWordsWithLineBreak.add({ firstTwoCharacters: wordWithLineBreak.substring(0, 2), lastTwoCharacters: wordWithLineBreak.slice(wordWithLineBreak.length - 2), value: wordWithLineBreak });
      // }

      //Lista sa recima koje nemaju karakter  -
      // if(!wordWithLineBreak.includes('-')) {
        this.listOfWordsWithoutLineBreak.add({ firstTwoCharacters: wordWithLineBreak.substring(0, 2), lastTwoCharacters: wordWithLineBreak.slice(wordWithLineBreak.length - 2), value: wordWithLineBreak });
      // }
    })
  }

  async makeArrayOfWords(): Promise<void> {
    let items = Array.from(this.listOfWordsWithoutLineBreak);
    let startComparingWord = items[Math.floor(Math.random() * items.length)];
    this.storingValues.push(startComparingWord.value);
    var isIncreasing = (arr: Array<number>) => {
      return (
        arr.every((v, i) => i === 0 || v >= arr[i - 1])
      );
    };
    var array: Array<number> = [];
    for (var i = 0; i < 205000; i++) {
      const lastWordForCompare = Array.from(this.listOfWordsWithoutLineBreak).filter(e => e?.firstTwoCharacters === startComparingWord?.lastTwoCharacters && startComparingWord?.lastTwoCharacters !== 'ka')
      if (lastWordForCompare === undefined) {
        if (startComparingWord) {
          this.listOfWordsWithoutLineBreak.delete(startComparingWord);
        }
        startComparingWord = { firstTwoCharacters: this.storingValues[this.storingValues.length - 1].substring(0, 2), lastTwoCharacters: this.storingValues[this.storingValues.length - 1].slice(this.storingValues[this.storingValues.length - 1].length - 2), value: this.storingValues[this.storingValues.length - 1] };
        this.storingValues.splice(-1,1);
      }
      if(!isIncreasing(array) && i > 121000  && i < 121050) {
        this.listOfWordsWithLineBreak.forEach((data) => {
          this.listOfWordsWithoutLineBreak.add(data)
        });
        console.log('Nova lista: ', this.listOfWordsWithLineBreak.size);
      }
      if (!isIncreasing(array) && i > 200000) {
        console.log('izasao')
        break
      }
      if (lastWordForCompare.length) {
        console.log('usao')
        let randomValue = lastWordForCompare[0];
        // let randomValue = lastWordForCompare[Math.floor(Math.random() * lastWordForCompare.length)];
        // if (i > 90000) {
          // let biggestCombination: number = 0;
          // lastWordForCompare.forEach((pickBestCombination) => {
          //   let lengthOfCombination = Array.from(this.listOfWordsWithoutLineBreak).filter((e) => e.lastTwoCharacters === pickBestCombination.firstTwoCharacters)
          //   if (lengthOfCombination.length > biggestCombination) {
          //     biggestCombination = lengthOfCombination.length;
          //     randomValue = pickBestCombination;
          //   }
          // })
        // }
        this.storingValues.push(randomValue?.value);
        startComparingWord = randomValue;
        this.listOfWordsWithoutLineBreak.delete(randomValue);
        array.push(this.storingValues.length);
      }

      if(!lastWordForCompare.length && this.storingValues.length) {
        if (i > 200000 && i < 200050) {
          console.log('PREKINUO: ' + 200000 + 'koliko je u niz: ', this.storingValues.length + " koliko je ostalo: ", this.listOfWordsWithoutLineBreak.size);
          break
        }
        if (i > 180000 && i < 180050) {
          console.log('PREKINUO: ' + 180000 + 'koliko je u niz: ', this.storingValues.length + " koliko je ostalo: ", this.listOfWordsWithoutLineBreak.size);
        }
        if (i > 160000 && i < 160050) {
          console.log('PREKINUO: ' + 160000 + 'koliko je u niz: ', this.storingValues.length + " koliko je ostalo: ", this.listOfWordsWithoutLineBreak.size);
        }
        if (i > 150000 && i < 150050) {
          console.log('PREKINUO: ' + 150000 + 'koliko je u niz: ', this.storingValues.length + " koliko je ostalo: ", this.listOfWordsWithoutLineBreak.size);
          break
        }
        if (i > 140000 && i < 140050) {
          console.log('PREKINUO: ' + 140000 + 'koliko je u niz: ', this.storingValues.length + " koliko je ostalo: ", this.listOfWordsWithoutLineBreak.size);
        }
        if (i > 130000 && i < 130050) {
          console.log('PREKINUO: ' + 130000 + 'koliko je u niz: ', this.storingValues.length + " koliko je ostalo: ", this.listOfWordsWithoutLineBreak.size);
          break
        }
        if (i > 120000 && i < 120050) {
          console.log('PREKINUO: ' + 120000 + 'koliko je u niz: ', this.storingValues.length + " koliko je ostalo: ", this.listOfWordsWithoutLineBreak.size);
        }
        if (i > 110000 && i < 110050) {
          console.log('PREKINUO: ' + 110000 + 'koliko je u niz: ', this.storingValues.length + " koliko je ostalo: ", this.listOfWordsWithoutLineBreak.size);
        }
        if (i > 100000 && i < 100050) {
          console.log('PREKINUO: ' + 100000 + 'koliko je u niz: ', this.storingValues.length + " koliko je ostalo: ", this.listOfWordsWithoutLineBreak.size);
        }
        if (i > 80000 && i < 80050) {
          console.log('PREKINUO: ' + 80000 + 'koliko je u niz: ', this.storingValues.length + " koliko je ostalo: ", this.listOfWordsWithoutLineBreak.size);
        }
        if (i > 60000 && i < 60050) {
          console.log('PREKINUO: ' + 60000 + 'koliko je u niz: ', this.storingValues.length + " koliko je ostalo: ", this.listOfWordsWithoutLineBreak.size);
        }
        if (i > 40000 && i < 40050) {
          console.log('PREKINUO: ' + 40000 + 'koliko je u niz: ', this.storingValues.length + " koliko je ostalo: ", this.listOfWordsWithoutLineBreak.size);
        }
        if (i > 20000 && i < 20050) {
          console.log('PREKINUO: ' + 20000 + 'koliko je u niz: ', this.storingValues.length + " koliko je ostalo: ", this.listOfWordsWithoutLineBreak.size);
        }
        if (i > 5000 && i < 5050) {
          console.log('PREKINUO: ' + 5000 + 'koliko je u niz: ', this.storingValues.length + " koliko je ostalo: ", this.listOfWordsWithoutLineBreak.size);
        }
        if (i > 1000 && i < 1050) {
          console.log('PREKINUO: ' + 1000 + 'koliko je u niz: ', this.storingValues.length + " koliko je ostalo: ", this.listOfWordsWithoutLineBreak.size);
        }
        let newValue =  Array.from(this.listOfWordsWithoutLineBreak).filter(e => e !== undefined && e.firstTwoCharacters === this.storingValues[this.storingValues.length - 1].substring(0, 2))

        if (newValue.length) {
          this.storingValues.splice(-1,1);
          this.listOfWordsWithoutLineBreak.delete(startComparingWord);
          if(i < 121000) {
            this.listOfWordsWithLineBreak.add(startComparingWord);
          }
          this.storingValues.push(newValue[0]?.value);
          startComparingWord = newValue[0];
          this.listOfWordsWithoutLineBreak.delete(newValue[0]);
        } else {
          if (startComparingWord) {
            this.listOfWordsWithoutLineBreak.delete(startComparingWord);
            if(i < 121000) {
              this.listOfWordsWithLineBreak.add(startComparingWord);
            }
          }
          startComparingWord = { firstTwoCharacters: this.storingValues[this.storingValues.length - 1].substring(0, 2), lastTwoCharacters: this.storingValues[this.storingValues.length - 1].slice(this.storingValues[this.storingValues.length - 1].length - 2), value: this.storingValues[this.storingValues.length - 1] };
          this.storingValues.splice(-1,1);
        }
      }
    }
  console.log("🚀 ~ file: app.component.ts ~ line 65 ~ AppComponent ~ makeArrayOfWords ~ this.listOfWordsWithoutLineBreak.size", this.listOfWordsWithoutLineBreak.size)
  console.log("🚀 ~ file: app.component.ts ~ line 65 ~ AppComponent ~ makeArrayOfWords ~ this.listOfWordsWithoutLineBreak.size", this.listOfWordsWithoutLineBreak)
  console.log("size: ", this.storingValues.length + "🚀 ~ file: app.component.ts ~ line 59 ~ AppComponent ~ makeArrayOfWords ~ this.storingValues", this.storingValues.toString().replace(',', ' '))
  console.log("***********______________ZAVRSIO____________************")
  }

  public exportPDF() {
    var element = document.getElementById('rocket');
    // html2pdf(element);
  }
  // public runTest() {
  //   const fetchResponse = () => {
  //     return new Promise((res, rej) => {
  //       try {
  //         const req = http.request(
  //           `https://www.youtube.com/watch?v=7LoWmGMB7e4`,
  //           (response: any) => res(response.statusCode)
  //         );
  //         req.on('error', (err: any) => rej(err));
  //         req.end();
  //       } catch (err) {
  //         rej(err);
  //       }
  //     });
  //   };

  //   const waitForServerReachable = () => {
  //     return interval(1000).pipe(
  //       mergeMap(async () => {
  //         try {
  //           const statusCode = await fetchResponse();
  //           if (statusCode === 200) return true;
  //         } catch (err) {}
  //         return false;
  //       }),
  //       filter((ok) => !!ok)
  //     );
  //   };

  //   const convert = async () => {
  //     await waitForServerReachable().pipe(first()).toPromise();

  //     console.log('Connected to server ...');
  //     console.log('Exporting ...');
  //     try {
  //       const browser = await puppeteer.launch({
  //         args: ['--no-sandbox'],
  //       });
  //       const page = await browser.newPage();
  //       await page.goto(`https://www.youtube.com/watch?v=7LoWmGMB7e4`, {
  //         waitUntil: 'networkidle2',
  //       });
  //       await page.pdf({
  //         path: 'Test.pdf',
  //         format: 'a4',
  //       });
  //       await browser.close();
  //     } catch (err) {
  //       throw new Error(err);
  //     }
  //     console.log('Finished exports.');
  //   };

  //   convert();
  // }
}
