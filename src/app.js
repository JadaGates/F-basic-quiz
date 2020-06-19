import "./style/index.scss";

const apiTest = "http://localhost:8080/hello";

export const getTest = async function () {
  const result = fetch(apiTest, {
    method: "GET",
  })
    .then((response) => {
      return response.text();
    })
    .catch((err) => console.log(err));
  return result;
};

// $('#test').html(getTest());
