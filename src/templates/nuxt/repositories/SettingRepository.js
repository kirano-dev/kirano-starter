import Repository from "~/repositories/Repository.js";

class SettingRepository extends Repository {
	constructor(nuxtApp) {
		super(nuxtApp);
		
		this.resource = 'settings'
	}
}

export default SettingRepository