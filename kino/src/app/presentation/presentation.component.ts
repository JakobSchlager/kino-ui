import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RoomService } from '../core/services/room.service';
import { IPresentation } from '../model/presentation';
import { IRoom } from '../model/room';

@Component({
  selector: 'presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.scss'],
})
export class PresentationComponent implements OnInit {
  @Input() presentation!: IPresentation;
  @Output() pickedPresentation = new EventEmitter<IPresentation>();

  room: IRoom = {
    id: 0,
    description: '',
  };

  constructor(private roomService: RoomService) {}

  ngOnInit(): void {
    this.roomService
      .getOneRoom(this.presentation.roomId)
      .subscribe((x) => (this.room = x));
  }

  selected() {
    this.pickedPresentation.emit(this.presentation);
  }
}
