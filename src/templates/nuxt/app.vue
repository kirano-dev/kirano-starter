<script setup>
useHead({
	title: 'Nuxt Project | KIRANO',
	link: [
		{ rel: 'icon', type: 'image/png', href: '/favicon-96x96.png', sizes: '96x96' },
		{ rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
		{ rel: 'shortcut icon', href: '/favicon.ico' },
		{ rel: 'apple-touch-icon', href: '/apple-touch-icon.png', sizes: '180x180' },
		{ rel: 'manifest', href: '/site.webmanifest' },
	]
})
</script>

<template>
	<nuxt-layout>
		<nuxt-page></nuxt-page>
	</nuxt-layout>
</template>