import React, { useState } from 'react';
import { useContext } from 'react';
import './Home.css';
import Header from './Header';
import Form from './Form';
import SelectTab from './SelectTab';
import Response from './Response';
import ErrorScreen from './ErrorScreen';
import { DataContext } from '../context/DataProvider';
import { checkParams } from '../utils/common-utils';
import SnackBar from './SnackBar';
import { getData, postData, deleteData, patchData, optionsData,putData,headData} from '../service/api'; // Import new methods

const Home = () => {
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [errorResponse, setErrorResponse] = useState(false);
  const [apiResponse, setApiResponse] = useState({});
  const { formData, jsonText, paramData, headerData } = useContext(DataContext);

  const onSendClick = async () => {
    if (!checkParams(formData, jsonText, paramData, headerData, setErrorMsg)) {
      setError(true);
      return false;
    }

    let response;

    switch (formData.type.toLowerCase()) {
      case 'get':
        response = await getData(formData, jsonText, paramData, headerData);
        break;
      case 'post':
        response = await postData(formData, jsonText, paramData, headerData);
        break;
      case 'put':
        response = await putData(formData, jsonText, paramData, headerData);
        break;
      case 'delete':
        response = await deleteData(formData, paramData, headerData);
        break;
      case 'patch':
        response = await patchData(formData, jsonText, paramData, headerData);
        break;
      case 'options':
        response = await optionsData(formData, paramData, headerData);
        break;
        case 'head':
        response = await headData(formData, paramData, headerData);
        break;
      default:
        console.log('Unsupported HTTP method');
        return;
    }

    console.log(response);

    if (response === 'error') {
      setErrorResponse(true);
      return;
    }

    setErrorResponse(false);
    setApiResponse(response.data);
  };

  return (
    <div>
      <Header />
      <div className='container'>
        <Form onSendClick={onSendClick} />
        <SelectTab />
        {errorResponse ? <ErrorScreen /> : <Response data={apiResponse} />}
        {error && <SnackBar error={error} setError={setError} errorMsg={errorMsg} />}
      </div>
    </div>
  );
};

export default Home;
