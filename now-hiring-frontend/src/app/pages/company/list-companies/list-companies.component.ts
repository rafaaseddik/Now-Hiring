import {Component, OnInit} from '@angular/core';
import {RxFormBuilder} from "@rxweb/reactive-form-validators";
import {User} from "../../../models/User";
import {ApiService} from "../../../core/api-service.service";

@Component({
	selector: 'app-list-companies',
	templateUrl: './list-companies.component.html',
	styleUrls: ['./list-companies.component.scss']
})
export class ListCompaniesComponent implements OnInit {

	filterForm = this.formuilder.group({
		"keyword": "",
		"address": "",
		"speciality": "",
	});

	list: User[] = [];
	displayList: User[] = [];

	constructor(private formuilder: RxFormBuilder, private apiService: ApiService) {
		this.apiService.getListCompanies().then(d => {
			this.list = d;
			this.filter();
		});
		this.filterForm.valueChanges.subscribe(d => {
			this.filter();
		});
	}

	ngOnInit() {
	}

	filter() {
		let keyword = this.filterForm.get('keyword').value + '';
		let address = this.filterForm.get('address').value + '';
		let speciality = this.filterForm.get('speciality').value + '';
		console.log(keyword, address, speciality);
		this.displayList = this.list.filter(v => {
			let adr = "";
			if (v.address) {
				adr = v.address.fullAddress + v.address.country + v.address.city;
			}
			return (!keyword || v.companyName.toUpperCase().indexOf(keyword.toUpperCase()) != -1)
				&& (!address || adr.toUpperCase().indexOf(address.toUpperCase()) != -1)
				&& (!speciality || v.speciality.toUpperCase().indexOf(speciality.toUpperCase()) != -1)
		});
		console.log(this.displayList);
	}

}
