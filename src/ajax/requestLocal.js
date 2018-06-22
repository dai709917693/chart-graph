const sendRes = (res) => {
  return new Promise((resolve, reject) => {
    resolve(res)
  })
};
import GETHISTORY_DATA from './DataLocal/GETHISTORY_DATA';
export const GETHISTORY_AJAX = () => {
	return sendRes(GETHISTORY_DATA)
};
import EDITHISTORY_DATA from './DataLocal/EDITHISTORY_DATA';
export const EDITHISTORY_AJAX = () => {
	return sendRes(EDITHISTORY_DATA)
};
