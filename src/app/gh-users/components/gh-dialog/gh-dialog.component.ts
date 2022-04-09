import { Ghgit } from './../../models/ghGit';
import { GhUser } from './../../models/ghUser';
import { GhApiService } from './../../services/gh-api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gh-dialog',
  templateUrl: './gh-dialog.component.html',
  styleUrls: ['./gh-dialog.component.css']
})
export class GhDialogComponent implements OnInit {

  username: string = ''
  user: GhUser | null = null
  Git:Ghgit[] | any

  constructor(
    private ghService: GhApiService
  ) { }

  ngOnInit(): void {
    this.ghService.findUser(this.username).subscribe(
    (gUser) => {
      this.user = gUser
    }
   )

    this.ghService.findGit(this.username).subscribe(
    (ghGit) => {
      this.Git = ghGit
    }
   )
  }

}


