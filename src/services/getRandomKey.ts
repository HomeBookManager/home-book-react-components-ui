const getRandomKey = (keys?: Array<string>) => {
    const result: Array<string> = [];
    const characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  
    do {
      result.splice(0, result.length);
      for (let i = 0; i < 9; i++) {
        result.push(
          characters.charAt(Math.floor(Math.random() * characters.length))
        );
      }
    } while (keys ? keys.find((key) => key === result.join('')) : false);
  
    return result.join('');
  };

  export default getRandomKey; 