import React, { useState } from 'react';
import axios from 'axios';

function FoodForm() {
  const initialFormData = {
    name: '',
    refuse: '',
    water: '',
    energy: '',
    protein: '',
    fat: '',
    ash: '',
    fiber: '',
    carbohydrate: '',
    sodium: '',
    potassium: '',
    calcium: '',
    phosphorus: '',
    magnisum: '',
    iron: '',
    zinc: '',
    copper: '',
    vitaminA: '',
    vitaminC: '',
    thiamin: '',
    riboflavin: '',
  };

  const [data, setData] = useState(initialFormData);

  const handleSubmit = e => {
    e.preventDefault();
    let formData = new FormData();

    formData.append('name', data.name);
    formData.append('refuse', data.refuse);
    formData.append('water', data.water);
    formData.append('energy', data.energy);
    formData.append('protein', data.protein);
    formData.append('fat', data.fat);
    formData.append('ash', data.ash);
    formData.append('fiber', data.fiber);
    formData.append('carbohydrate', data.carbohydrate);
    formData.append('sodium', data.sodium);
    formData.append('potassium', data.potassium);
    formData.append('calcium', data.calcium);
    formData.append('phosphorus', data.phosphorus);
    formData.append('magnisum', data.magnisum);
    formData.append('iron', data.iron);
    formData.append('zinc', data.zinc);
    formData.append('copper', data.copper);
    formData.append('vitaminA', data.vitaminA);
    formData.append('vitaminC', data.vitaminC);
    formData.append('thiamin', data.thiamin);
    formData.append('riboflavin', data.riboflavin);

    axios
      .post('http://localhost:8000/food', formData, {
        'Content-Type': 'multipart/form-data',
        Accept: 'application/json',
      })
      .then(res => {
        console.log(res.data.result);
      })
      .catch(err => {
        console.error(err);
      });
  };
  const handleChange = e => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  return (
    <>
      <form onSubmit={handleSubmit} className="container mt-2">
        <div className='row'>
          <div className='form-outline mb-2 col'>
            <label className='form-label fs-4 fs-4' htmlFor='name'>
              Name
            </label>
            <input
              name='name'
              type='text'
              className='form-control w-75 mx-auto'
              onChange={handleChange}
            />
          </div>

          <div className='form-outline mb-2 col'>
            <label className='form-label fs-4 fs-4' htmlFor='refuse'>
              Refuse
            </label>
            <input
              name='refuse'
              type='number'
              step='0.01'
              className='form-control w-75 mx-auto'
              onChange={handleChange}
            />
          </div>
          <div className='form-outline mb-2 col'>
            <label className='form-label fs-4 fs-4' htmlFor='water'>
              Water
            </label>
            <input
              name='water'
              type='number'
              step='0.01'
              className='form-control w-75 mx-auto'
              onChange={handleChange}
            />
          </div>
        </div>

        <div className='row'>
          <div className='form-outline mb-2 col'>
            <label className='form-label fs-4 fs-4' htmlFor='energy'>
              Energy
            </label>
            <input
              name='energy'
              type='number'
              step='0.01'
              className='form-control w-75 mx-auto'
              onChange={handleChange}
            />
          </div>
          <div className='form-outline mb-2 col'>
            <label className='form-label fs-4 fs-4' htmlFor='protein'>
              Protein
            </label>
            <input
              name='protein'
              type='number'
              step='0.01'
              className='form-control w-75 mx-auto'
              onChange={handleChange}
            />
          </div>
          <div className='form-outline mb-2 col'>
            <label className='form-label fs-4 fs-4' htmlFor='fat'>
              Fat
            </label>
            <input
              name='fat'
              type='number'
              step='0.01'
              className='form-control w-75 mx-auto'
              onChange={handleChange}
            />
          </div>
        </div>

        <div className='row'>
          <div className='form-outline mb-2 col'>
            <label className='form-label fs-4 fs-4' htmlFor='ash'>
              Ash
            </label>
            <input
              name='ash'
              type='number'
              step='0.01'
              className='form-control w-75 mx-auto'
              onChange={handleChange}
            />
          </div>
          <div className='form-outline mb-2 col'>
            <label className='form-label fs-4 fs-4' htmlFor='fiber'>
              Fiber
            </label>
            <input
              name='fiber'
              type='number'
              step='0.01'
              className='form-control w-75 mx-auto'
              onChange={handleChange}
            />
          </div>
          <div className='form-outline mb-2 col'>
            <label className='form-label fs-4 fs-4' htmlFor='carbohydrate'>
              Carbohydrate
            </label>
            <input
              name='carbohydrate'
              type='number'
              step='0.01'
              className='form-control w-75 mx-auto'
              onChange={handleChange}
            />
          </div>
        </div>

        <div className='row'>
          <div className='form-outline mb-2 col'>
            <label className='form-label fs-4 fs-4' htmlFor='sodium'>
              sodium
            </label>
            <input
              name='sodium'
              type='number'
              step='0.01'
              className='form-control w-75 mx-auto'
              onChange={handleChange}
            />
          </div>
          <div className='form-outline mb-2 col'>
            <label className='form-label fs-4 fs-4' htmlFor='potassium'>
              potassium
            </label>
            <input
              name='potassium'
              type='number'
              step='0.01'
              className='form-control w-75 mx-auto'
              onChange={handleChange}
            />
          </div>
          <div className='form-outline mb-2 col'>
            <label className='form-label fs-4 fs-4' htmlFor='calcium'>
              calcium
            </label>
            <input
              name='calcium'
              type='number'
              step='0.01'
              className='form-control w-75 mx-auto'
              onChange={handleChange}
            />
          </div>
        </div>

        <div className='row'>
          <div className='form-outline mb-2 col'>
            <label className='form-label fs-4 fs-4' htmlFor='phosphorus'>
              phosphorus
            </label>
            <input
              name='phosphorus'
              type='number'
              step='0.01'
              className='form-control w-75 mx-auto'
              onChange={handleChange}
            />
          </div>
          <div className='form-outline mb-2 col'>
            <label className='form-label fs-4 fs-4' htmlFor='magnisum'>
              magnisum
            </label>
            <input
              name='magnisum'
              type='number'
              step='0.01'
              className='form-control w-75 mx-auto'
              onChange={handleChange}
            />
          </div>
          <div className='form-outline mb-2 col'>
            <label className='form-label fs-4' htmlFor='iron'>
              iron
            </label>
            <input
              name='iron'
              type='number'
              step='0.01'
              className='form-control w-75 mx-auto'
              onChange={handleChange}
            />
          </div>
        </div>

        <div className='row'>
          <div className='form-outline mb-2 col'>
            <label className='form-label fs-4' htmlFor='zinc'>
              zinc
            </label>
            <input
              name='zinc'
              type='number'
              step='0.01'
              className='form-control w-75 mx-auto'
              onChange={handleChange}
            />
          </div>
          <div className='form-outline mb-2 col'>
            <label className='form-label fs-4' htmlFor='copper'>
              copper
            </label>
            <input
              name='copper'
              type='number'
              step='0.01'
              className='form-control w-75 mx-auto'
              onChange={handleChange}
            />
          </div>
          <div className='form-outline mb-2 col'>
            <label className='form-label fs-4' htmlFor='vitaminA'>
              vitaminA
            </label>
            <input
              name='vitaminA'
              type='text'
              className='form-control w-75 mx-auto'
              onChange={handleChange}
            />
          </div>
        </div>

        <div className='row'>
          <div className='form-outline mb-3 col'>
            <label className='form-label fs-4' htmlFor='vitaminC'>
              vitaminC
            </label>
            <input
              name='vitaminC'
              type='number'
              step='0.01'
              className='form-control w-75 mx-auto'
              onChange={handleChange}
            />
          </div>
          <div className='form-outline mb-3 col'>
            <label className='form-label fs-4' htmlFor='thiamin'>
              thiamin
            </label>
            <input
              name='thiamin'
              type='number'
              step='0.01'
              className='form-control w-75 mx-auto'
              onChange={handleChange}
            />
          </div>
          <div className='form-outline mb-3 col'>
            <label className='form-label fs-4' htmlFor='riboflavin'>
              riboflavin
            </label>
            <input
              name='riboflavin'
              type='number'
              step='0.01'
              className='form-control w-75 mx-auto'
              onChange={handleChange}
            />
          </div>
        </div>
        <div className='row'>
          <button type='submit' className='btn btn-dark btn-block mb-4 col-2 mx-auto'>
            Create Food Item
          </button>
        </div>
      </form>
    </>
  );
}

export default FoodForm;