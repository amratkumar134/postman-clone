import axios from 'axios';
import { getHeaderAndParams } from '../utils/common-utils';

export const getData = async (formData, jsonText, paramData, headerData) => {
    const apiType = formData.type.toLowerCase();
    const apiURL = formData.url;
    const apiHeaders = getHeaderAndParams(headerData);
    const apiParams = getHeaderAndParams(paramData);

    try {
        return await axios({
            method: apiType,
            url: apiURL,
            data: jsonText, 
            headers: apiHeaders,
            params: apiParams
        });
    } catch (error) {
        console.log('Error while calling getData API', error);
        return 'error';
    }
}

export const postData = async (formData, jsonText, paramData, headerData) => {
    const apiURL = formData.url;
    const apiHeaders = getHeaderAndParams(headerData);
    const apiParams = getHeaderAndParams(paramData);

    try {
        return await axios({
            method: 'post',
            url: apiURL,
            data: jsonText,
            headers: apiHeaders,
            params: apiParams
        });
    } catch (error) {
        console.log('Error while calling postData API', error);
        return 'error';
    }
}

export const deleteData = async (formData, paramData, headerData) => {
    const apiURL = formData.url;
    const apiHeaders = getHeaderAndParams(headerData);
    const apiParams = getHeaderAndParams(paramData);

    try {
        return await axios({
            method: 'delete',
            url: apiURL,
            headers: apiHeaders,
            params: apiParams
        });
    } catch (error) {
        console.log('Error while calling deleteData API', error);
        return 'error';
    }
}

export const patchData = async (formData, jsonText, paramData, headerData) => {
    const apiURL = formData.url;
    const apiHeaders = getHeaderAndParams(headerData);
    const apiParams = getHeaderAndParams(paramData);

    try {
        return await axios({
            method: 'patch',
            url: apiURL,
            data: jsonText,
            headers: apiHeaders,
            params: apiParams
        });
    } catch (error) {
        console.log('Error while calling patchData API', error);
        return 'error';
    }
}

export const optionsData = async (formData, paramData, headerData) => {
    const apiURL = formData.url;
    const apiHeaders = getHeaderAndParams(headerData);
    const apiParams = getHeaderAndParams(paramData);

    try {
        return await axios({
            method: 'options',
            url: apiURL,
            headers: apiHeaders,
            params: apiParams
        });
    } catch (error) {
        console.log('Error while calling optionsData API', error);
        return 'error';
    }
}

export const putData = async (formData, jsonText, paramData, headerData) => {
    const apiURL = formData.url;
    const apiHeaders = getHeaderAndParams(headerData);
    const apiParams = getHeaderAndParams(paramData);

    try {
        return await axios({
            method: 'put',
            url: apiURL,
            data: jsonText,
            headers: apiHeaders,
            params: apiParams
        });
    } catch (error) {
        console.log('Error while calling putData API', error);
        return 'error';
    }
}

export const headData = async (formData, paramData, headerData) => {
    const apiURL = formData.url;
    const apiHeaders = getHeaderAndParams(headerData);
    const apiParams = getHeaderAndParams(paramData);

    try {
        return await axios({
            method: 'head',
            url: apiURL,
            headers: apiHeaders,
            params: apiParams
        });
    } catch (error) {
        console.log('Error while calling headData API', error);
        return 'error';
    }
}
