const sendRes = (res) => {
  return new Promise((resolve, reject) => {
    resolve(res)
  })
};
import GETHISTORY_DATA from './DataLocal/GETHISTORY_DATA';
export const GETHISTORY_AJAX = () => {
	return sendRes(GETHISTORY_DATA)
};
import GETHISTORYTREE_DATA from './DataLocal/GETHISTORYTREE_DATA';
export const GETHISTORYTREE_AJAX = () => {
	return sendRes(GETHISTORYTREE_DATA)
};
import EDITHISTORY_DATA from './DataLocal/EDITHISTORY_DATA';
export const EDITHISTORY_AJAX = () => {
	return sendRes(EDITHISTORY_DATA)
};
import EDITHISTORYTREE_DATA from './DataLocal/EDITHISTORYTREE_DATA';
export const EDITHISTORYTREE_AJAX = () => {
	return sendRes(EDITHISTORYTREE_DATA)
};
