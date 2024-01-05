import axios from "axios";

const baseUrl = "https://fullstack-task-app-backend.onrender.com";

const getAllToDo = (setToDo) => {
  axios.get(baseUrl).then(({ data }) => {
    console.log("Data---> ", data);
    setToDo(data);
  });
};





const addToDo = (text, setText, setToDo) => {
  axios
    .post(`${baseUrl}/save`, { text })
    .then((data) => {
      console.log(data);
      setText("");
      getAllToDo(setToDo);
    })

    .catch((err) => console.log(err));
};





const updateToDo = (toDoId, text, setText, setToDo, setIsUpdating) => {
    
  axios
    .put(`${baseUrl}/update`, { _id: toDoId, text })
    .then(() => {
      setText("");
      setIsUpdating(false)
      getAllToDo(setToDo)
    })
    .catch((err) => console.log(err));
};







const deleteToDo = (_id , setToDo) => {
    
    axios
      .post(`${baseUrl}/delete`, { _id})
      .then((data) => {
        console.log(data);
        getAllToDo(setToDo)
      })
      .catch((err) => console.log(err))
  };


export { getAllToDo, addToDo, updateToDo ,deleteToDo};
