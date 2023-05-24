import { Injectable } from '@angular/core';
import { WebRequestsService } from './web-requests.service';

@Injectable({
  providedIn: 'root'
})
export class SentenceService {

  constructor(private webReqService: WebRequestsService) { }

  createSentence(text: String){
    //send web request to create a new sentence
    return this.webReqService.post('sentences', {text});
  }

  getSentences(){
    //send web request to get all sentences
    return this.webReqService.get('sentences');
  }
}
