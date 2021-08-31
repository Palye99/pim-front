import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DockerService {

  constructor(private http: HttpClient) { }

  dockerChoice(idChoice) {
    return this.http.get(`${environment.env_api_url}/docker/${idChoice}`);
  }
}
