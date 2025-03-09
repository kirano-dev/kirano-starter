export const useSettings = async (fetchOptions) => {
	const nuxtApp = useNuxtApp()
	const {$repositories} = useNuxtApp()
	const cache_name = 'settings'
	
	const settings = ref({})
	
	const {data} = await useAsyncData(
		cache_name,
		() => $repositories.settings.all(),
		{
			default: () => ({}),
			...fetchOptions,
			getCachedData(key) {
				return nuxtApp.payload.data[key] || nuxtApp.static.data[key];
			},
		}
	)
	
	settings.value = data.value?.data ?? []
	
	return {data: settings}
}
