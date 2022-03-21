import axios from 'axios';

export default class TaskController {

    private API_URL = "https://alansiq-projectify-backend.herokuapp.com";

    public async getTasks() {
        const response = await axios.get(`${this.API_URL}/tasks`);
        return response;
    }

}
