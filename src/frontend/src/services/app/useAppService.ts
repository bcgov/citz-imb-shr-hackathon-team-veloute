/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */
import { useContext, useMemo } from 'react';
import { AppContext } from '../../providers/AppProvider';
import AppActionType from './AppActions';

const {
  SET_LOADING,
} = AppActionType;

const useAppService = () => {
  const { state, dispatch } = useContext<any>(AppContext);

  return useMemo(() => {
    /**
     * @summary Used to set loading to true or false within the app
     * @param   value is a boolean value which determines if the app is loading or not
     * @type    {( value: boolean )}
     * @author  Dallas Richmond
     */
    const setLoading = (value: boolean) => {
      console.log('In useAppService: ', value);
      dispatch({ type: SET_LOADING, payload: value });
    };

    return {
      setLoading,
      state
    };
  }, [state, dispatch]);
};

export default useAppService;
