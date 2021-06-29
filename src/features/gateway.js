const baseUrl = "https://randomuser.me/api/?results=20";

export const fetchUsers = () => {
  return fetch(baseUrl)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
    }).then(data => {
      console.log(data.results)
      return data.results
    })
    .catch((error) => console.log(error));
};
