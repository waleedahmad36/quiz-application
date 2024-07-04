import React, { useState } from 'react'

const SubmitName = ({handleNameSubmit,userName,setUserName,selectedOption,setSelectedOption,customImageUrl,setCustomImageUrl}) => {
    const handleRadioChange = (option) => {
        setSelectedOption(option);
        if (option !== 'Custom') {
          setCustomImageUrl(''); // Reset custom image URL if not 'Custom'
        }
      };
  return (
    <div className="w-full h-screen flex justify-center items-center">
          <div className="form-container  ">
            <form className="form" onSubmit={handleNameSubmit}>
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  required=""
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                />
              </div>
              <RadioButton  handleRadioChange={handleRadioChange} selectedOption={selectedOption} 
                 customImageUrl={customImageUrl}  setCustomImageUrl={setCustomImageUrl} />
              <button type="submit" className="form-submit-btn">
                Start Quiz
              </button>
            </form>
          </div>{" "}
        </div>
  )
}

export default SubmitName



const RadioButton = ({handleRadioChange,selectedOption,customImageUrl,setCustomImageUrl})=>{
    return (
        <div className="flex flex-col space-y-4  ">
            <div className='p-5 flex flex-col space-y-4' >        <label className="relative flex items-center cursor-pointer">
          <input
            type="radio"
            className="sr-only peer"
            name="userOption"
            value="Boy"
            checked={selectedOption === 'Boy'}
            onChange={() => handleRadioChange('Boy')}
          />
          <div className="w-6 h-6 bg-transparent border-2 border-red-500 rounded-full peer-checked:bg-red-500 peer-checked:border-red-500 peer-hover:shadow-lg peer-hover:shadow-red-500/50 peer-checked:shadow-lg peer-checked:shadow-red-500/50 transition duration-300 ease-in-out" />
          <span className="ml-2 text-white">Boy</span>
        </label>

        <label className="relative flex items-center cursor-pointer">
          <input
            type="radio"
            className="sr-only peer"
            name="userOption"
            value="Girl"
            checked={selectedOption === 'Girl'}
            onChange={() => handleRadioChange('Girl')}
          />
          <div className="w-6 h-6 bg-transparent border-2 border-yellow-500 rounded-full peer-checked:bg-yellow-500 peer-checked:border-yellow-500 peer-hover:shadow-lg peer-hover:shadow-yellow-500/50 peer-checked:shadow-lg peer-checked:shadow-yellow-500/50 transition duration-300 ease-in-out" />
          <span className="ml-2 text-white">Girl</span>
        </label>

        <label className="relative flex items-center cursor-pointer">
          <input
            type="radio"
            className="sr-only peer"
            name="userOption"
            value="Custom"
            checked={selectedOption === 'Custom'}
            onChange={() => handleRadioChange('Custom')}
          />
          <div className="w-6 h-6 bg-transparent border-2 border-green-500 rounded-full peer-checked:bg-green-500 peer-checked:border-green-500 peer-hover:shadow-lg peer-hover:shadow-green-500/50 peer-checked:shadow-lg peer-checked:shadow-green-500/50 transition duration-300 ease-in-out" />
          <span className="ml-2 text-white">Custom image Link</span>
        </label>
        </div>


        {/* Custom image input (optional) */}
        {selectedOption === 'Custom' && (
          <div className="form-group">
            <label htmlFor="customImageLink">Custom Image Link</label>
            <input
              type="text"
              id="customImageLink"
              name="customImageLink"
              placeholder="Enter image URL"
              value={customImageUrl}
              onChange={(e) => setCustomImageUrl(e.target.value)}
            />
          </div>
        )}
      </div>

    )
}



