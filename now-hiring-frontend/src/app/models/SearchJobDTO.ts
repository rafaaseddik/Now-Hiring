export class SearchJobDTO {
	query: string = "";
	timePlans: string[] = [];
	minSalary: number = 0;
	maxSalary: number = 500;
	skill: Skill = new Skill();

	copy() {
		return JSON.parse(JSON.stringify(this));
	}
}

class Skill {
	name: string = "";
	minimumLevel: number = 1;
}