axios get

     /  async function getUser() {
  try {
    const response = await axios.get('/user?ID=12345');
    console.log(response);
  } catch (error) {
    console.error(error);
  }
} 
/

axios post

    / axios.post('/user', {
    firstName: 'Fred',
    lastName: 'Flintstone'
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
  /

  /херь

  // Async функция без блока try/catch

    async function doSomethingAsync(){

    // Этот асинхронный запрос может вызвать ошибку

    let result = await someAsyncCall();

    return result;

    }

    // Перехватываем ошибку при вызове функции

    doSomethingAsync().

    .then(successHandler)

    .catch(errorHandler);

    /