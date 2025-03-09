export default class Repository {
	constructor(nuxtApp) {
		this.nuxtApp = nuxtApp;
		this.resource = ''
		
		this.fetch = $fetch.create({
			baseURL: '/api/',
			credentials: 'include'
		})
		
		this.routes = {
			all: params => `${this.resource}?${new URLSearchParams(params).toString()}`,
			show: (id, params) => `${this.resource}/${id}?${new URLSearchParams(params).toString()}`,
			create: this.resource,
			update: id => `${this.resource}/${id}`,
			delete: id => `${this.resource}/${id}`,
		}
		
		this.api = {
			get: (url, headers) => this.getClient()('v1/'+url, {
				headers: {
					'X-Accept-Language': this.nuxtApp.$getLocale(),
					...headers
				}
			}),
			post: (url, payload, headers) => this.getClient()('v1/'+url, {
				method: 'POST',
				body: payload,
				headers
			}),
			patch: (url, payload, headers = {}) => this.getClient()('v1/'+url, {
				method: 'PATCH',
				body: payload,
				headers
			}),
			delete: (url) => this.getClient()('v1/'+url, {
				method: 'DELETE',
			}),
		}
	}
	
	getClient() {
		return this.fetch
	}
	
	all(params, headers = {}) {
		return this.api.get(this.routes.all(params), headers)
	}
	
	show(id, params, headers) {
		return this.api.get(this.routes.show(id, params), headers)
	}
	
	create(payload) {
		return this.api.post(this.routes.create, payload)
	}
	
	update(id, payload) {
		return this.api.patch(this.routes.update(id), payload)
	}
	
	delete(id) {
		return this.api.delete(this.routes.delete(id))
	}
}