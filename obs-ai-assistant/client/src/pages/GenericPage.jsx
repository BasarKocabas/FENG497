import React from 'react';

const GenericPage = ({ title }) => {
  return (
    <div className="bg-white rounded-lg shadow p-6 min-h-[400px]">
      <div className="border-b border-gray-200 pb-4 mb-4">
        <h2 className="text-xl font-bold text-gray-800">{title}</h2>
      </div>
      <div className="flex flex-col items-center justify-center h-64 text-gray-400">
        <div className="text-6xl mb-4">🚧</div>
        <p className="text-lg">Bu sayfa yapım aşamasındadır.</p>
        <p className="text-sm">{title} içeriği buraya gelecek.</p>
      </div>
    </div>
  );
};

export default GenericPage;
