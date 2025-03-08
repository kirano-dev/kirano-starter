import {$api} from "@/http/index.js";

export class Repository {
	constructor() {
		this.resource = ''
	}
	
	async get(params) {
		return await $api.get(`${this.resource}?${new URLSearchParams(params).toString()}`)
	}
	
	async getById(id, params) {
		return await $api.get(`${this.resource}/${id}?${new URLSearchParams(params).toString()}`)
	}
	
	async update(id, data) {
		return await $api.patch(`${this.resource}/${id}`, data)
	}
	
	async create(data) {
		return await $api.post(this.resource, data)
	}
	
	async delete(id) {
		return await $api.delete(`${this.resource}/${id}`)
	}
}