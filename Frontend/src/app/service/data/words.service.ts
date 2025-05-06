import { Injectable } from '@angular/core';
import { HttpClient } from'@angular/common/http'
import { lastValueFrom, Observable, of } from 'rxjs';
import { word } from 'src/app/word/word.component';


@Injectable({
  providedIn: 'root'
})
export class WordsService {

  constructor(private http:HttpClient) { }

  words:string[][]=[];

  async getwords(): Promise<void>{
    // this.words = await lastValueFrom(this.http.get<string[][]>(`http://localhost:8080/getwords`))
    this.words = [["am", "as", "at", "be", "by", "do", "go", "he", "if", "in", "is", "it",
                    "me", "my", "no", "of", "on", "or", "so", "to", "up", "us", "we", "an",
                    "ax", "ex", "id", "ox", "ad", "eh"],
                  ["ant", "bat", "cat", "dog", "egg", "fan", "gap", "hot", "ice", "jam",
                    "kid", "log", "man", "net", "owl", "pen", "quit", "rat", "sun", "top",
                    "use", "van", "win", "wax", "yes"],
                  ["ally", "bump", "crop", "dash", "envy", "flap", "grip", "home", "item",
                    "jolt", "king", "luck", "mile", "name", "oval", "pike", "quirk", "roam",
                    "skip", "tune", "unit", "vibe", "wish"],
                  ["apple", "bloom", "charm", "dizzy", "elbow", "fable", "grasp", "happy",
                    "icily", "joker", "kneel", "latch", "mirth", "noble", "orbit", "peace",
                    "quilt", "risky", "slope", "trick", "unity", "vivid", "waltz", "wound",
                    "yield",

                    "angel", "broad", "climb", "drown", "every", "flute", "globe", "hatch",
                    "image", "joint"],
                  ["abacus", "breeze", "candle", "damage", "effort", "fabric", "guitar",
                    "hazard", "ignite", "jigsaw", "kernel", "legend", "muffin", "noodle",
                    "outlet", "puzzle", "quench", "rocket", "sunset", "tundra", "unique",
                    "vacuum", "whisky", "yellow", "zipper"],
                  ["abundant", "backbone", "campaign", "daughter", "eclipse", "fabulous", "gardener", "habitats",
                    "identity", "jubilant", "keyboard", "laughter", "magnetic", "navigate", "observer", "pandemic",
                    "quantity", "radiance", "sapphire", "tangible", "umbrella", "vacation", "wanderer", "xylophone",
                    "yearning", "zeppelin", "adaptive", "boundary", "cylinder", "diligent", "evolving", "fortunate",
                    "gracious", "horizon", "inspired", "javelins", "knitting", "luminous", "momentum", "nectarine",
                    "ordinary", "powerful", "question", "resource", "symphony", "treasure", "ultimate", "valuable",
                    "warriors", "xenolith", "yielding", "zealous", "advisory", "blessing", "creative", "dedicate",
                    "elegance", "fidelity", "gigantic"]]
  }

  async theNextwords():Promise<string[]>{

    if (this.words.length==0){
      console.log("the api called")
      await this.getwords()
    }

    let next_words=[]

    for(let i=0;i<50;i++){
      let rand=Math.floor(Math.random() * 100)
      if (rand<20){
        let index= Math.floor(Math.random() * this.words[0].length)
        next_words.push(this.words[0][index])
      }
      else if(rand<40){
        let index= Math.floor(Math.random() * this.words[1].length)
        next_words.push(this.words[1][index])
      }
      else if(rand<60){
        let index= Math.floor(Math.random() * this.words[2].length)
        next_words.push(this.words[2][index])
      }
      else if(rand<80){
        let index= Math.floor(Math.random() * this.words[3].length)
        next_words.push(this.words[3][index])
      }
      else if(rand<90){
        let index = Math.floor(Math.random() * this.words[4].length)
        next_words.push(this.words[4][index])
      }
      else{
        
        let index = Math.floor(Math.random() * this.words[5].length)
        next_words.push(this.words[5][index])
      }
    }

    return (next_words)

  }

}
