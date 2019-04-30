import {Component, OnInit} from '@angular/core';

@Component({
	selector: 'app-faq',
	templateUrl: './faq.component.html',
	styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {

	faq = [
		{
			question: "Now Hiring Homepage",
			response: "The Now Hiring experience was designed so you can easily surface ideas, drive conversations, and discover topics you care about. Your homepage is the landing page you reach when you first sign in to your Now Hiring account"
		},
		{
			question: "Now Hiring Public Profile Visibility",
			response: "Start IPH Your public profile displays a simplified version of your Now Hiring profile. You can customize your public profile settings to set limits on how much of your profile information can be displayed."
		},
		{
			question: "Editing Your Profile",
			response: "You can edit sections of your Now Hiring profile to best reflect your own, personal brand. Use the introduction card on your profile to display details of your current personal and professional status, just like a business card. "
		},
		{
			question: "Editing Your Job Posting",
			response: "After a job is posted, you can edit it from the Jobs Management page or the Job Overview page. While you can edit the company name, skills required, title of the job, and additional fields, you can’t edit the Location of the job after it’s posted "
		},
		{
			question: "Posting a Job on Now Hiring",
			response: "Now Hiring offers the ability to create online job postings to advertise open positions at your company. Job seekers can search for these opportunities throughout the Now Hiring network. In addition, job postings will be recommended to potential"
		},
		{
			question: "Setting the Location for Your Job Posting",
			response: "You can enter an exact address in the Location field while posting a job on Now Hiring. You can type the address in the field and select the appropriate option from the dropdown. Now Hiring uses this address to calculate and display the commute time"
		},
		{
			question: "Best Practices for Posting Jobs",
			response: "Now Hiring helps you find the best candidates for open job roles faster and easier with effective use of features such as listing specific skills, job functions, and industries while posting a job. "
		},
	];

	constructor() {
		console.log(this.faq);
	}

	ngOnInit() {
	}

}
