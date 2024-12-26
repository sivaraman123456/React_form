import React from 'react'

const StateLogin = () => {
    const [enterValues, setEnterValues] = useState({
        email: "",
        password: "",
      });
      function handleValueChange(name, value) {
        setEnterValues((prevInput) => ({
          ...prevInput,
          [name]: value,
        }));
      }
  return (
    <div>
      
    </div>
  )
}

export default StateLogin
