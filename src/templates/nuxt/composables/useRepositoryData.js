export const useRepositoryData = async (name, options = {}) => {
	const nuxtApp = useNuxtApp()
	const { $repositories, $getLocale } = useNuxtApp()
	
	const cache_name = [
		options.locale ?? $getLocale(),
		`repository_${name}`,
		new URLSearchParams(sortObjectAb(options.params ?? {}))
	].join('.')
	const repository_data = ref([])
	
	const {data} = await useAsyncData(
		cache_name,
		() => $repositories[options.repository ?? name].all(options.params, options.headers),
		{
			default: () => [],
			getCachedData(key) {
				return nuxtApp.payload.data[key] || nuxtApp.static.data[key];
			},
			...options.fetchOptions
		}
	)
	
	repository_data.value = data.value?.data ?? []
	
	return { data: repository_data }
}