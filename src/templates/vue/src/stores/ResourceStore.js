import {$repositories} from "@/repositories/index.js";
import {passedTime} from "@/utils/passedTime.js";

const TTL = 60 // seconds

class ResourceStore {
	constructor() {
		this.cachedData = ref({})
		
		this.lastFetch = reactive(Object.fromEntries(
			Object.entries($repositories)
				.map(([resource]) => [resource, {
					time: null,
				}])
		))
	}
	
	async fetch(repository, params, force = false) {
		const last = this.lastFetch[repository.resource]
		
		if (
			force ||
			!last.time ||
			passedTime(last.time, TTL) ||
			JSON.stringify(last.params) !== JSON.stringify(params)
		) {
			this.lastFetch[repository.resource] = {
				params, time: new Date()
			}
			
			return await repository.get(params).then(({ data }) => data)
		}
	}
}

const resourceStore = new ResourceStore();

export default resourceStore;