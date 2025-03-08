import resourceStore from "@/stores/ResourceStore.js";
import sortObjectAb from "@/utils/sortObjectAb.js";

export default (repository, extra, initialRequest=true) => {
	const cache_key = `repository.${repository.resource}${extra ? ':' + new URLSearchParams(sortObjectAb(extra)) : ''}`
	
	const isLoading = ref(false)
	const data = ref([])
	
	const refetch = () => {
		isLoading.value = true
		
		return resourceStore.fetch(repository, extra, true).then(rs => {
			resourceStore.cachedData.value[cache_key] = rs
			isLoading.value = false
			data.value = rs
			
			return rs
		})
	}
	
	if(initialRequest) {
		if(resourceStore.cachedData.value.hasOwnProperty(cache_key)) {
			data.value = resourceStore.cachedData.value[cache_key]
		} else refetch().then(rs => {
			data.value = rs
		})
	}
	
	return {
		data,
		isLoading,
		refetch
	}
}