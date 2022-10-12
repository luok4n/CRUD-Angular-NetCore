import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { Student } from '../models/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {


    private baseUrl = "https://localhost:44385/api/";

    constructor(private http: HttpClient) { }

    getStudents() {
        return this.http.get(this.baseUrl + "students");
    }

    deleteStudent(id: number) {
        return this.http.delete(this.baseUrl + "students/" + id);
    }

    updateStudent(student: any) {
        const head = new HttpHeaders({ 'Content-Type': 'application/json' });
        return this.http.put(this.baseUrl + "students/" + student.Id, JSON.stringify(student), {headers: head});
    }

    createStudent(student: any) {
        const head = new HttpHeaders({ 'Content-Type': 'application/json' });
        return this.http.post(this.baseUrl + "students", JSON.stringify(student), {headers: head});
    }
    

}