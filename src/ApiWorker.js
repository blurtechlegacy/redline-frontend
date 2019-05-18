import React from 'react';
import axios from 'axios';

let foo = "hey";
// GET pop routes
async function getPopRoutes() {
    try {
//const response = await axios.get('РОУТ НА ГЕТ');
//console.log(response);
        return foo
    } catch (error) {
        console.error(error);
    }
};

// POST auth LOG/PASS
async function authPost() {
    try {
        const response = await axios.post('/user?ID=12345');
        console.log(response);
    } catch (error) {
        console.error(error);
    }
}

export {authPost, getPopRoutes}
