import resourceStore from "@/stores/ResourceStore.js";

export default (repository, id) => {
	const cache_key = `repository.${repository.resource}.${id}`
	
	const isLoading = ref(false)
	const data = ref()
	
	const refetch = () => {
		isLoading.value = true
		
		return repository.getById(id).then(({ data: rs }) => {
			resourceStore.cachedData.value[cache_key] = rs
			isLoading.value = false
			data.value = rs
			
			return rs
		})
	}
	
	if(resourceStore.cachedData.value.hasOwnProperty(cache_key)) {
		data.value = resourceStore.cachedData.value[cache_key]
	} else refetch().then(rs => {
		data.value = rs
	})
	
	return {
		data,
		isLoading,
		refetch
	}
}