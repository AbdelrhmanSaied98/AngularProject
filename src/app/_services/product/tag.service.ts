import { Injectable } from '@angular/core';
import { Tag } from 'src/app/_models/product/tags.model';

@Injectable({
  providedIn: 'root'
})
export class TagService {
  tagArray:Tag [] = []
  constructor() { }
  getAllTags():Tag[]{
    return this.tagArray;

 }
 getById(){}
 add(){}
 edit(){}
 delete(){}
}
