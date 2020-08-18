const API_URL = 'http://localhost:8000/api/todos/'

export async function getTodos() {
	return fetch(API_URL)
	.then(response =>{
		if(!response.ok){
			if(response.status >=400 && response.status < 500){
				return response.json().then( data =>{
					let err = { errMessage : data.message}
					throw err;
				})
			}else{
				let err = { errMessage : 'Server Failed to respond, please try later.'}
				throw err;
			}
		}
		return response.json()
	})
}

export async function createTodos(val){
	return fetch(API_URL, {
	    method: 'post',
	    headers: new Headers({
	       'Content-Type': 'application/json',
	    }),
	    body: JSON.stringify({name: val})
   })
	.then(response =>{
		if(!response.ok){
			if(response.status >=400 && response.status < 500){
				return response.json().then( data =>{
					let err = { errMessage : data.message}
					throw err;
				})
			}else{
				let err = { errMessage : 'Server Failed to respond, please try later.'}
				throw err;
			}
		}

		return response.json()
	})
}

export async function removeTodo(id){
	const delteUrl = API_URL + id;

	return fetch(delteUrl, {
		    method: 'delete'
	   })
		.then(response =>{
			if(!response.ok){
				if(response.status >=400 && response.status < 500){
					return response.json().then( data =>{
						let err = { errMessage : data.message}
						throw err;
					})
				}else{
					let err = { errMessage : 'Server Failed to respond, please try later.'}
					throw err;
				}
			}
		return response.json()
	})
}

export async function updateTodo(todo){
	const updateUrl = API_URL + todo._id;
	return fetch(updateUrl, {
		    method: 'put',
		    headers: new Headers({
		       'Content-Type': 'application/json',
		    }),
		    body: JSON.stringify({completed: !todo.completed})
	   })
		.then(response =>{
			//error checking 
			if(!response.ok){
				if(response.status >=400 && response.status < 500){
					return response.json().then( data =>{
						let err = { errMessage : data.message}
						throw err;
					})
				}else{
					let err = { errMessage : 'Server Failed to respond, please try later.'}
					throw err;
				}
			}
			//if success return result
			return response.json()
		})
}


