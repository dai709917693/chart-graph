import request from '@/modules/request';
export const GETHISTORY_AJAX = (params) => {
	return request({"name":"GETHISTORY","url":"getHistory.dox","method":"get","vuex":"history",params })
};
export const GETHISTORYTREE_AJAX = (params) => {
	return request({"name":"GETHISTORYTREE","url":"getHistoryTree.dox","method":"get","vuex":"history",params })
};
export const EDITHISTORY_AJAX = (params) => {
	return request({"name":"EDITHISTORY","url":"editHistory.dox","method":"post","vuex":"history","data": params})
};
export const EDITHISTORYTREE_AJAX = (params) => {
	return request({"name":"EDITHISTORYTREE","url":"editHistoryTree.dox","method":"post","vuex":"history","data": params})
};
