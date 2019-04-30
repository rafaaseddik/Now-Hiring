import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';


export const routes = {
	login: 'Users/signin',
};

@Injectable({
	providedIn: 'root'
})
export class ApiService {

	public headers = new HttpHeaders({
		'Content-Type': 'application/json'
	});

	public extra = {
		headers: this.headers
	};

	//serverUrl = 'http://37c1642a.ngrok.io/';
	serverUrl = 'http://51.83.76.212:3000/';
	ml_serverUrl = 'http://127.0.0.1:5000/';

	constructor(private httpClient: HttpClient) {
	}

	public getListClients(page: number, limit: number): Promise<any> {
		return this.httpClient
			.get(this.serverUrl + 'personne/findAll?limit=' + limit + '&page=' + page, this.extra)
			.toPromise()
			.catch(this.handleError);
	}

	public getResumeByCandidateId(candidateId: string): Promise<any> {
		return this.httpClient
			.get(this.serverUrl + 'resume/' + candidateId, this.extra)
			.toPromise()
			.catch(this.handleError);
	}

	public getCompanyById(companyId: string): Promise<any> {
		return this.httpClient
			.get(this.serverUrl + 'userProfile/company/' + companyId, this.extra)
			.toPromise()
			.catch(this.handleError);
	}

	public getCandidateById(candidateId: string): Promise<any> {
		return this.httpClient
			.get(this.serverUrl + 'userProfile/candidate/' + candidateId, this.extra)
			.toPromise()
			.catch(this.handleError);
	}

	public getKnowledgeTestByJobId(jobId: string): Promise<any> {
		return this.httpClient
			.get(this.serverUrl + 'knowledge-test/' + jobId, this.extra)
			.toPromise()
			.catch(this.handleError);
	}

	public getDevTestByJobId(jobId: string): Promise<any> {
		return this.httpClient
			.get(this.serverUrl + 'dev-test/' + jobId, this.extra)
			.toPromise()
			.catch(this.handleError);
	}

	public getKnowledgeTestsByCandidateAndJobId(candidateId: string, jobId: string): Promise<any> {
		return this.httpClient
			.get(this.serverUrl + 'knowledge-test-submission/byJobOfferId/' + jobId + '/' + candidateId, this.extra)
			.toPromise()
			.catch(this.handleError);
	}

	public getDevTestsByCandidateAndJobId(candidateId: string, jobId: string): Promise<any> {
		return this.httpClient
			.get(this.serverUrl + 'dev-test-submission/byJobOfferId/' + jobId + '/' + candidateId, this.extra)
			.toPromise()
			.catch(this.handleError);
	}

	public getJobsByCompanyId(companyId: string): Promise<any> {
		return this.httpClient
			.get(this.serverUrl + 'jobOffer/company/' + companyId, this.extra)
			.toPromise()
			.catch(this.handleError);
	}

	public getSubmissionsByJobId(jobId: string): Promise<any> {
		return this.httpClient
			.get(this.serverUrl + 'Submissions/byJobOfferId/' + jobId, this.extra)
			.toPromise()
			.catch(this.handleError);
	}


	public removeKnowledgeTestById(id: string): Promise<any> {
		return this.httpClient
			.delete(this.serverUrl + 'knowledge-test/' + id, this.extra)
			.toPromise()
			.catch(this.handleError);
	}

	public removeDevTestById(id: string): Promise<any> {
		return this.httpClient
			.delete(this.serverUrl + 'dev-test/' + id, this.extra)
			.toPromise()
			.catch(this.handleError);
	}

	public getOfferById(id: string): Promise<any> {
		return this.httpClient
			.get(this.serverUrl + 'jobOffer/' + id, this.extra)
			.toPromise()
			.catch(this.handleError);
	}

	public getListCompanies(): Promise<any> {
		return this.httpClient
			.get(this.serverUrl + 'userProfile/company?limit=50&page=1', this.extra)
			.toPromise()
			.catch(this.handleError);
	}

	public signUpCompany(body: any): Promise<any> {
		return this.httpClient
			.post(this.serverUrl + 'auth/company-signup', body, this.extra)
			.toPromise()
			.catch(this.handleError);
	}

	public submitDevTest(body: any): Promise<any> {
		return this.httpClient
			.post(this.serverUrl + 'dev-test-submission', body, this.extra)
			.toPromise()
			.catch(this.handleError);
	}

	public submitQcmTest(body: any): Promise<any> {
		return this.httpClient
			.post(this.serverUrl + 'knowledge-test-submission', body, this.extra)
			.toPromise()
			.catch(this.handleError);
	}

	public runTest(body: any): Promise<any> {
		return this.httpClient
			.post(this.serverUrl + 'code-runner', body, this.extra)
			.toPromise()
			.catch(this.handleError);
	}

	public filterJobs(body: any): Promise<any> {
		return this.httpClient
			.post(this.serverUrl + 'jobOffer/search', body, this.extra)
			.toPromise()
			.catch(this.handleError);
	}

	public addJob(body: any): Promise<any> {
		return this.httpClient
			.post(this.serverUrl + 'jobOffer', body, this.extra)
			.toPromise()
			.catch(this.handleError);
	}

	public signUpCandidate(body: any): Promise<any> {
		return this.httpClient
			.post(this.serverUrl + 'auth/candidate-signup', body, this.extra)
			.toPromise()
			.catch(this.handleError);
	}

	public addKnowledgeTest(body: any): Promise<any> {
		return this.httpClient
			.post(this.serverUrl + 'knowledge-test', body, this.extra)
			.toPromise()
			.catch(this.handleError);
	}

	public addDevTest(body: any): Promise<any> {
		return this.httpClient
			.post(this.serverUrl + 'dev-test', body, this.extra)
			.toPromise()
			.catch(this.handleError);
	}

	public signIn(body: any): Promise<any> {
		return this.httpClient
			.post(this.serverUrl + 'auth/signin', body, this.extra)
			.toPromise()
			.catch(this.handleError);
	}

	public addResume(body: any): Promise<any> {
		return this.httpClient
			.post(this.serverUrl + 'resume', body, this.extra)
			.toPromise()
			.catch(this.handleError);
	}

	public editResume(body: any): Promise<any> {
		return this.httpClient
			.put(this.serverUrl + 'resume', body, this.extra)
			.toPromise()
			.catch(this.handleError);
	}

	public updateCandidate(body: any): Promise<any> {
		return this.httpClient
			.put(this.serverUrl + 'userProfile/candidate', body, this.extra)
			.toPromise()
			.catch(this.handleError);
	}

	public updateCompany(body: any): Promise<any> {
		return this.httpClient
			.put(this.serverUrl + 'userProfile/company', body, this.extra)
			.toPromise()
			.catch(this.handleError);
	}

	public uploadCV(image: File): Promise<any> {
		const formData = new FormData();

		formData.append('file', image);

		return this.httpClient.post(this.ml_serverUrl + 'parse', formData)
			.toPromise()
			.catch(this.handleError);
	}

	public uploadAvatar(image: File): Promise<any> {
		const formData = new FormData();

		formData.append('avatarFile', image);

		return this.httpClient.post(this.serverUrl + 'upload-file/upload-avatar', formData)
			.toPromise()
			.catch(this.handleError);
	}

	public uploadTestCaseFiles(inputFile: File, outputFile: File, isFirstTestcase: number, folderHash = ''): Promise<any> {
		const formData = new FormData();

		formData.append('inputFile', inputFile);
		formData.append('outputFile', outputFile);

		return this.httpClient.post(this.serverUrl + 'upload-file/upload-testcase/' + folderHash + '/' + isFirstTestcase, formData)
			.toPromise()
			.catch(this.handleError);
	}

	private handleError(error: Response | any) {
		// In a real world app, we might use a remote logging infrastructure
		let errMsg: any;
		if (error instanceof Response) {
			console.log(1);
			const body = error.json() || '';
			const err = JSON.stringify(body);
			errMsg = body;
		} else {
			if (error.error && error.error.error) {
				errMsg = error.error.error.message;
			} else {
				errMsg = error.message ? error.message : error.toString();
			}
		}
		console.error(errMsg);
		return Promise.reject(errMsg);
	}
}
