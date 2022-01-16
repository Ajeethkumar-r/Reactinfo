function MainContent() {
  return (
    <div
      className='p-4 flex-col bg-gray-900 bg-opacity-90 space-y-2'
      style={{ height: '91vh' }}
    >
      <h1 className='font-bold text-4xl text-white text-center px-1'>
        Facts of react.js
      </h1>
      <div className='flex-col  p-2 text-white  capitalize'>
        <div className='flex'>
          <li className='list-disc text-cyan-400'></li>
          Maintain by facebook
        </div>
        <div className='flex'>
          <li className='list-disc text-cyan-400'></li>
          Counting more than 100k stars on Github
        </div>
        <div className='flex'>
          <li className='list-disc text-cyan-400'></li>
          Most loved library
        </div>
      </div>
    </div>
  );
}

export default MainContent;
