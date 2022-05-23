import {bindActionCreators} from 'redux';
import {counterSlice} from '../counterSlice';
import {useAppDispatch} from './hooks';

export const useAction = () => {
  const dispatch = useAppDispatch();
  return bindActionCreators(counterSlice.actions, dispatch);
};