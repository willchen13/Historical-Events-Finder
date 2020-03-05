import React, {useState} from 'react';

const Form = ({searchEvents}) => {
  const [text, setText] = useState('');

  const handleChange = e => {
    setText(e.target.value);
  }

  const handleSubmit = e => {
    e.preventDefault();
    searchEvents(text);
  }

  return (
  <form>
    <label> Keyword:
      <input placeholder='ex: Civil Word' type="text" name="text" value={text} onChange={(e) => {handleChange(e)}}/>
    </label>
    <button onClick={handleSubmit}> Search </button>
  </form>
  );
}

export default Form;
