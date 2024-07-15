const numberDisplay = document.getElementById('numberDisplay');
  function display(){
    console.log(numberDisplay.textContent="HAPPY INDEPENDENCE DAY")
  }
  function displayNumber(number, callback) {
    setTimeout(() => {
      numberDisplay.textContent = number;
      callback();
    }, 1000);
  }

  displayNumber(10, () => {
    displayNumber(9, () => {
      displayNumber(8, () => {
        displayNumber(7, () => {
          displayNumber(6, () => {
            displayNumber(5, () => {
              displayNumber(4, () => {
                displayNumber(3, () => {
                  displayNumber(2, () => {
                    displayNumber(1, () => {
                      displayNumber("",display)
                    });
                  });
                });
              });
            });
          });
        });
      });
    });
  });

