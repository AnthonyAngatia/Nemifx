import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { UploadService } from '../upload.service';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {
  displayedColumns: string[] = ['content', 'ReadTime', 'Title', 'Time', 'Update', 'Delete'];
  uploads: any[];
  dataSource = new MatTableDataSource(this.uploads);

  @ViewChild(MatSort, { static: true }) sort: MatSort;


  constructor(private uploadService: UploadService) { }

  ngOnInit(): void {
    this.dataSource.sort = this.sort;
    let uploads = this.uploadService.getData();
    uploads.snapshotChanges().subscribe(item => {
      this.uploads = [];

      item.forEach(element => {
        let x = element.payload.toJSON()
        // console.log(x);//For debugging
        x["$key"] = element.key;
        // x["position"] = position + 1;
        this.uploads.push(x);
      })
      this.dataSource = new MatTableDataSource(this.uploads);
    })
  }
  onDelete(key: string) {
    if (confirm('Are you sure you want to delete this item?') == true) {
      this.uploadService.deleteData(key);
    }

  }

}
