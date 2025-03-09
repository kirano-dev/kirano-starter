import repositories from '~/repositories'

export default defineNuxtPlugin((nuxtApp) => {
    return {
        provide: { repositories: repositories(nuxtApp) }
    };
})