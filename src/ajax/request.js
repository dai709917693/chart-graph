import request from '@/modules/request';
export const GETHISTORY_AJAX = (params) => {
	return request({
    	url:'getHistory.dox',
    	method:'get',
    	params
    })
};
export const EDITHISTORY_AJAX = (params) => {
	return request({
    	url:'editHistory.dox',
    	method:'post',
    	data:params
    })
};
