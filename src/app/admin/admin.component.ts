import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { UploadService } from '../upload.service';
import { CKEditor4 } from 'ckeditor4-angular';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { FormUploadComponent } from '../form-upload/form-upload.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit, OnDestroy {
  uploads: any[];
  displayedColumns: string[] = ['content', 'Title', 'Time', 'Update', 'Delete'];
  dataSource = new MatTableDataSource(this.uploads);
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  uploadsSubscription: Subscription;

  constructor(private uploadService: UploadService, private dialog: MatDialog) { }


  ngOnInit() {
    let uploads = this.uploadService.getData();
    this.uploadsSubscription = uploads.snapshotChanges().subscribe(item => {
      this.uploads = [];
      item.forEach(element => {
        let x = element.payload.toJSON()
        x["$key"] = element.key;
        this.uploads.unshift(x)
      })
      this.dataSource = new MatTableDataSource(this.uploads);
      this.dataSource.sort = this.sort;
    })
  }
  ngOnDestroy(): void {
    this.uploadsSubscription.unsubscribe();

  }

  onAdd() {
    this.uploadService.initializeForm();
    this.dialog.open(FormUploadComponent);
  }

  onUpdate(row) {
    this.uploadService.populateForm(row);
    this.dialog.open(FormUploadComponent);
  }

  onDelete(key: string) {
    if (confirm('Are you sure you want to delete this item?') == true) {
      this.uploadService.deleteData(key);
    }

  }

}
