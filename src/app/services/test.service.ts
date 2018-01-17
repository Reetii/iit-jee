import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";

@Injectable()

export class TestService {

    baseUrl: string = "http://13.126.50.31:3003";

    constructor(private http: Http) { }

    getQuestions(testId = 385, clientId = 1): Observable<any> {
        return this.http.get(`${this.baseUrl}/getQuestionsInATestUser?test_id=${testId}&client_id=${clientId}`)
            .map(res => res.json());
    }

}