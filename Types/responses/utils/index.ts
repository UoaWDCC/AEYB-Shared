import { SuccessfulResponse } from './SuccessfulResponse';
import { UnsuccessfulResponse } from './UnsuccessfulResponse';

type AEYBResponse<T> = SuccessfulResponse<T> | UnsuccessfulResponse;
export default AEYBResponse;
