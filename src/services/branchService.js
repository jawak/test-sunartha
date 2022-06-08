import { get } from './baseService';

const getList = async () => get({ url: 'BranchReps' })
  .then((resp) => resp)
  .catch((error) => error);

export default { getList };
