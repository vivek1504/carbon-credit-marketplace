import { useState } from 'react';
import ethereum from '../assets/ethereum.png';
import { AvailableCredits, Country, Price, Vintage } from '../atom';
import { useRecoilValue } from 'recoil';

function RetirementForm() {
  const [tokens, setTokens] = useState('');
  const [country, setCountry] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [message, setMessage] = useState('');
  const location = useRecoilValue(Country)
  const amount = useRecoilValue(Price)
 
  const availableCredits = useRecoilValue(AvailableCredits)
  const vintage = useRecoilValue(Vintage);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here, e.g., sending data to a server
    window.location.href = '/payment';
  }

  return (
    <div className='relative h-[600px] w-[900px] rounded-3xl bg-white mt-10 shadow'>
      <div className="mt-12 pt-8 px-4">
        <div className="flex gap-8">
          <div>
            <p className="text-gray-800 text-xl font-bold">Available Token</p>
            <p className="text-gray-600 text-lg">{availableCredits}</p>
          </div>
          <div>
            <p className="text-gray-800 text-xl font-bold">Vintage</p>
            <p className="text-gray-600 text-lg">{vintage}</p>
          </div>
          <div>
            <p className="text-gray-800 text-xl font-bold">Country</p>
            <p className="text-gray-600 text-lg">{location}</p>
          </div>
          <div>
            <p className="text-gray-800 text-xl font-bold">Environmental Effect</p>
            <p className="text-gray-600 text-lg">{amount}</p>
          </div>
        </div>
      </div>

      <div className="flex absolute right-[50px] top-8 ">
        <div className="bg-gray-100 border rounded-full flex items-center justify-center w-12 h-12">
          <span><img src={ethereum} alt="" className="h-10 w-9 " /></span>
        </div>
        <span className="text-bold text-black text-xl pt-[10px] pl-2">120</span>
        <p className='text-black absolute top-12 ml-9'>Price</p>
      </div>

      <div className="bg-white rounded-lg shadow-md w-[500px] p-6 ml-[200px] mt-10">
        <h2 className="text-xl font-semibold mb-4">
          How many carbon tokens want to retire?
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="tokens" className="block text-gray-700 font-bold mb-2">
              Tokens
            </label>
            <input
              type="number"
              id="tokens"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={tokens}
              onChange={(e) => setTokens(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="country"
              className="block text-gray-700 font-bold mb-2"
            >
              Consumed in Country
            </label>
            <select
              id="country"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            >
              <option value="">Select one</option>
              {/* Add country options here */}
              <option value="USA">USA</option>
              <option value="Canada">Canada</option>
              {/* Add more country options */}
            </select>
          </div>
          <div className="mb-4">
            <label
              htmlFor="consumption-period"
              className="block text-gray-700 font-bold mb-2"
            >
              Consumption Period
            </label>
            <div className="flex">
              <div className="flex-1 mr-4">
                <input
                  type="date"
                  id="start-date"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                />
              </div>
              <div className="flex-1">
                <input
                  type="date"
                  id="end-date"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-gray-700 font-bold mb-2"
            >
              Redirect Message
            </label>
            <textarea
              id="message"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Continue
          </button>
        </form>
      </div>
    </div>
  );
}

export default RetirementForm;