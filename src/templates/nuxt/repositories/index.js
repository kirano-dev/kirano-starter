import SettingRepository from '~/repositories/SettingRepository.js'

export default function (nuxtApp) {
	return {
		settings: new SettingRepository(nuxtApp),
	}
}