const args = process.argv.slice(2);

const spinner = (array) => {
  {
    array.forEach(item => {
      setTimeout(() => {
        console.log('\007');
      }, (item * 1000));
    });
    
  }
};

spinner(args);
