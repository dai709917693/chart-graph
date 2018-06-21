import request from '@/modules/request';
export const GETHISTORY_AJAX = (params) => {
	return request({
    	url:'getHistory.dox',
    	method:'get',
    	params
    })
};
