import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { v4 as uuidv4 } from 'uuid';

const MyForm = () => {
  const { register, handleSubmit, getValues } = useForm();
  const [selectedDataArray, setSelectedDataArray] = useState([]);

  const handleAddClick = () => {
    const name = getValues('name');
    const age = getValues('age');

    if (name && age) {
      // Create a new object and add it to the array
      setSelectedDataArray((prevData) => [...prevData, { id: uuidv4(), name: name, age: age }]);

      // Optional: Clear the name and age fields
      // document.getElementById('name').value = '';
      // document.getElementById('age').value = '';
    }
  };

  console.log(selectedDataArray);

  return (
    <form onSubmit={handleSubmit(() => { })}>
      <div>
        <label htmlFor="name">Name:</label>
        <input {...register('name', { required: true })} type="text" id="name" />
      </div>

      <div>
        <label htmlFor="age">Age:</label>
        <input {...register('age', { required: true })} type="number" id="age" />
      </div>

      <div>
        <label htmlFor="address">Address:</label>
        <input {...register('address', { required: true })} type="number" id="age" />
      </div>

      <button type="button" onClick={handleAddClick}>
        Add
      </button>

      <div>
        <h2>Selected Data Array:</h2>
        <pre>{JSON.stringify(selectedDataArray, null, 2)}</pre>
      </div>
    </form>
  );
};

export default MyForm;