import axios from 'axios';

import {BASE_URL} from './conf/conf';

axios.interceptors.response.use(null, function(error) {
    console.log(error);
    return Promise.reject(error);
});

class Requests {
    static updateDatabase(callback) {
        axios.get(BASE_URL+"pictures/s3/").then(callback);
    }

    static getFormattedPictures(callback) {
        axios.get(BASE_URL+"pictures/formatted/").then(callback);
    }

    static getFormattedServices(callback) {
        axios.get(BASE_URL+"services/formatted/").then(callback);
    }

    static createMessage(data, callback) {
        axios.post(BASE_URL+"messages", data).then(callback);
    }

    static getAllMessages(callback) {
        axios.get(BASE_URL+"messages").then(callback);
    }

    static deleteMessage(message, callback) {
        axios.delete(BASE_URL+"messages/"+message.id).then(callback);
    }

    static getAllPictures(callback) {
        axios.get(BASE_URL+"pictures").then(callback);
    };

    static updatePictureDescription(picture, callback) {
        var data = {
            description: picture.description
        };
        axios.put(BASE_URL+"pictures/"+picture.id, data).then(callback);
    }

    static addSection(name, callback) {
        var data = {
            name: name
        };
        axios.post(BASE_URL+"services", data).then(callback);
    }

    static addPrice(data, callback) {
        axios.post(BASE_URL+"prices", data).then(callback);
    }

    static deletePrice(price, callback) {
        axios.delete(BASE_URL+"prices/"+price.id).then(callback);
    }

    static deleteSectionAndPrices(section, callback) {
        axios.delete(BASE_URL+"services/"+section.id+"/prices").then(callback);
    }

    static verifyAdmin(password, callback) {
        var data = {
            password: password
        };
        axios.post(BASE_URL+"admin/verify", data).then(callback);
    }
}


export default Requests;