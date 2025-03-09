

export default function (nuxtApp) {
	return {
		settings: new SettingRepository(nuxtApp),
	}
}