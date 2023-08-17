import axios from 'axios';
import constants from '../../../constants/Constants';

export default function FileUpload() {
  const uid = Math.random().toString();

  // Converts file to base64 for easy storage
  const toBase64 = (file: File) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = reject;
    });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleFilesChange = async (e: any) => {
    const base64File = (await toBase64(e.target.files[0])) as string;
    axios.post(`${constants.BACKEND_URL}/api/upload`, base64File)
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <button
      onClick={() => {
        document.getElementById(uid)!.click();
      }}
    >
      Upload File
      <input 
        type="file"
        accept=".csv"
        style={{ width: 0 }}
        onChange={handleFilesChange}
        id={uid}
      />
    </button>
  );
}
