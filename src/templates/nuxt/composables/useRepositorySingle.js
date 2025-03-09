export const useRepositorySingle = async (name, id, options={}) => {
	const nuxtApp = useNuxtApp()
	const {$repositories, $getLocale} = useNuxtApp()
	const cache_name = `${$getLocale()}.repository_${name}.${id}`
	
	const state = useState('currentSingleRepository')
	state.value = {
		name, id
	}
	
	const repository_data = ref([])
	
	const {data} = await useAsyncData(
		cache_name,
		() => $repositories[name].show(id, options.params, options.headers),
		{
			default: () => {},
			getCachedData(key) {
				return nuxtApp.payload.data[key] || nuxtApp.static.data[key];
			},
		}
	)

	repository_data.value = data.value?.data
	
	return { data: repository_data }
}