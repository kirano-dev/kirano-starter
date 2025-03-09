export default function __(value) {
    const { $getLocale } = useNuxtApp()
    
    return value ? value[$getLocale()] : ''
}