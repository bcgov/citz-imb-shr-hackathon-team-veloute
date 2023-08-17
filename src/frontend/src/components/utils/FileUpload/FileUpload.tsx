/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';
import constants from '../../../constants/Constants';
import {
  ButtonCont,
  TextCont,
} from './fileUpload.styles';

export default function FileUpload() {
  const uid = Math.random().toString();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleFilesChange = async (e: any) => {
    const file = e.target.files[0];
    const result = await file.text();
    const list = result.split('\n').map((row: any) => row.split('|'));
  
    axios.post(`${constants.BACKEND_URL}/api/upload`, list)
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <ButtonCont
      onClick={() => {
        document.getElementById(uid)!.click();
      }}
      hex="#FDE7C6"
    >
      <TextCont>
        Upload New Salary Data
      </TextCont>
      <input 
        type="file"
        accept=".csv"
        style={{ width: 0 }}
        onChange={handleFilesChange}
        id={uid}
      />
    </ButtonCont>
  );
}
