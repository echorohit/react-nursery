import * as types from './actionTypes';
import axios from 'axios';


function requestData(actionType) {
	return {type: actionType + types.REQ_DATA}
};

function receiveData(actionType, json) {
	return{
		type: actionType + types.RECV_DATA,
		data: json
	}
};

function receiveError(actionType, json) {
	return {
		type: actionType + types.RECV_ERROR,
		data: json
	}
};


export function fetchData(url, actionType, method, params ) {
	return function(dispatch) {
		dispatch(requestData(actionType));

		let config = {
			url: url,
			method: method || 'get',
			timeout: 20000,
			responseType: 'json',
			data: params
		}


		return axios(config)
			.then(function(response) {
				dispatch(receiveData(actionType, response.data));
			})
			.catch(function(response){
				dispatch(receiveError(actionType, response.data));
			})
	}
};


