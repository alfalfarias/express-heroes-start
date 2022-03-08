const axios = require('axios').default;
const API_URL = `https://jsonplaceholder.typicode.com`;

const getAll = async function (req, res) {
    const { data } = await axios.get(`${API_URL}/todos/1`);
    res.send(data);
}
const setColor = async function (req, res) {
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
    res.send(data);
}

module.exports = {
    getAll,
    setColor,
};