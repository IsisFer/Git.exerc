import { Ghgit } from './../models/ghGit';
import { GhUser } from './../models/ghUser';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class GhApiService {
//readonly não pode alterar e tudo que esta dentro é pra ser lido por isso é string
  private readonly baseUrl: string = 'https://api.github.com/users'

  constructor(
    private http: HttpClient
  ) { }

    findUser(username: string): Observable<GhUser> {
      return this.http.get<GhUser>(`${this.baseUrl}/${username} `)
    }

    findGit(username: string): Observable<Ghgit[]> {
      return this.http.get<Ghgit[]>(`${this.baseUrl}/${username}/repos`)
    }

}
