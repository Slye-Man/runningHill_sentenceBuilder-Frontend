import { Injectable } from '@angular/core';
import { WebRequestsService } from './web-requests.service';

@Injectable({
  providedIn: 'root'
})
export class WordService {

  constructor(private webReqService: WebRequestsService) { }

  getWordsByType(type: String){
    //send web request to get all words
    return this.webReqService.get('words/'+type);
  }

  getWords(){
    //send web request to get all words by type
    return this.webReqService.get('words');
  }
}
