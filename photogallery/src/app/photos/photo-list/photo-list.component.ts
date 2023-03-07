import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { Photo } from '../photo/photo';
import { debounceTime } from 'rxjs/operators';
import { PhotoService } from '../photo/photo.service';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {
  photos: Photo[] = []
  title = 'My Photo Gallery'
  filter: string = '';
  hasMore: boolean = true;
  currentPage: number = 1
  userName: string = '';

  constructor(private activatedRoute: ActivatedRoute,
              private photoService: PhotoService) {}
  
  ngOnInit(): void {
    this.userName = this.activatedRoute.snapshot.params.userName;
    this.photos = this.activatedRoute.snapshot.data.photos
  }

  load() {
    this.photoService.listFromUserPaginated(this.userName, ++this.currentPage).subscribe(photos => {
      this.filter = '';
      this.photos = this.photos.concat(photos);
    if(!photos.length) {
      this.hasMore = false;
    }
  });
  }
  

}
