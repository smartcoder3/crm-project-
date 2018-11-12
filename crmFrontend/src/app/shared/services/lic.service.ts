import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LicService {

 baseUrl = 'http://localhost:4300';

  constructor(private http: HttpClient) { }

  // List

  getLicHfl() {
    return this.http.get(`${this.baseUrl}/listLicHfl`);
  }
  getLifeInsurance() {
    return this.http.get(`${this.baseUrl}/listLifeInsurance`);
  }
  getNationInsurance() {
    return this.http.get(`${this.baseUrl}/listNationalInsurance`);
  }
  getServices() {
    return this.http.get(`${this.baseUrl}/listService`);
  }
  getTodo() {
    return this.http.get(`${this.baseUrl}/listToDo`);
  }
  getLaughterThreapy() {
    return this.http.get(`${this.baseUrl}/listLaughterTherpy`);
  }
  // Post

  addLicHfl(addingValues) {
    return this.http.post(`${this.baseUrl}/addLicHfl`, addingValues);
  }
  addLifeInsurance(addingValues) {
    return this.http.post(`${this.baseUrl}/addLifeInsurance`, addingValues);
  }
  addNationalInsurance(addingValues) {
    return this.http.post(`${this.baseUrl}/addNationalInsurance`, addingValues);
  }
  addServices(addingValues) {
    return this.http.post(`${this.baseUrl}/addService`, addingValues);
  }
  addTodo(addingValues) {
    return this.http.post(`${this.baseUrl}/addTodo`, addingValues);
  }
  addLaughterThreapy(addingValues) {
    return this.http.post(`${this.baseUrl}/addLaughterTherapy`, addingValues);
  }
  // Update

  updateLicHfl(id, updatingValues) {
    return this.http.post(`${this.baseUrl}/editLicHfl/${id}`, updatingValues);
  }
  updateLifeInsurance(id, updatingValues) {
    return this.http.post(`${this.baseUrl}/editLifeInsurance/${id}`, updatingValues);
  }
  updateNationalInsurance(id, updatingValues) {
    return this.http.post(`${this.baseUrl}/editNationalInsurance/${id}`, updatingValues);
  }
  updateServices(id, updatingValues) {
    return this.http.post(`${this.baseUrl}/editService/${id}`, updatingValues);
  }
  updateTodo(id, updatingValues) {
    return this.http.post(`${this.baseUrl}/editToDo/${id}`, updatingValues);
  }
  updateLaughterThreaphy(id, updatingValues) {
    return this.http.post(`${this.baseUrl}/editLaughterTherapy/${id}`, updatingValues);
  }
  // getById

  getLicHflById(id) {
    return this.http.get(`${this.baseUrl}/getoneLicHfl/${id}`);
  }
  getLifeInsuranceById(id) {
    return this.http.get(`${this.baseUrl}/getoneLifeInsurance/${id}`);
  }
  getNationalInsuranceById(id) {
    return this.http.get(`${this.baseUrl}/getoneNationalInsurance/${id}`);
  }
  getServicesById(id) {
    return this.http.get(`${this.baseUrl}/getoneService/${id}`);
  }
  getTodoById(id) {
  return this.http.get(`${this.baseUrl}/getoneToDO/${id}`);
  }
  getLaughterThreaphyById(id) {
    return this.http.get(`${this.baseUrl}/getoneLaughterTherapy/${id}`);
    }

  // Delete

  deleteLicHfl(id) {
    return this.http.get(`${this.baseUrl}/deleteLicHfl/${id}`);
  }
  deleteLifeInsurance(id) {
    return this.http.get(`${this.baseUrl}/deleteLifeInsurance/${id}`);
  }
  deleteNationalInsurance(id) {
    return this.http.get(`${this.baseUrl}/deleteNationalInsurance/${id}`);
  }
  deleteServices(id) {
    return this.http.get(`${this.baseUrl}/deleteService/${id}`);
  }
  deleteTodo(id) {
    return this.http.get(`${this.baseUrl}/deleteToDo/${id}`);
  }
  deleteLaughterThreapy(id) {
    return this.http.get(`${this.baseUrl}/deleteLaughterTherapy/${id}`);
  }
  // warnings
  getNationlInsuranceWarnings() {
    return this.http.get(`${this.baseUrl}/nationalInsurance/warning`);
  }
  findCustomer(contactNo) {
    return this.http.get(`${this.baseUrl}/getCustomers/${contactNo}`);
  }
  getBirthDays() {
    return this.http.get(`${this.baseUrl}/getCustomersBirthdays`);
  }
}

