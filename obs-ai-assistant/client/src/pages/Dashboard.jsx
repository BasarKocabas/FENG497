import React from 'react';
import { Book, Users, FileText, Database } from 'lucide-react';

const Dashboard = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
      {/* Academic Year Card */}
      <div className="bg-blue-600 text-white rounded-lg shadow-lg p-6 h-40 flex items-center">
        <div className="flex items-center gap-4 w-full">
          <div className="text-4xl opacity-75 flex-shrink-0">
            <Book size={48} />
          </div>
          <div className="min-w-0">
            <h3 className="font-semibold mb-2">Aktif Akademik Dönem Bilgileri</h3>
            <p className="text-sm">2025 - 2026 Akademik Yıl Güz Dönemi</p>
          </div>
        </div>
      </div>

      {/* Advisor Card */}
      <div className="bg-green-600 text-white rounded-lg shadow-lg p-6 h-40 flex items-center">
        <div className="flex items-center gap-4 w-full">
          <div className="text-4xl opacity-75 flex-shrink-0">
            <Users size={48} />
          </div>
          <div className="min-w-0">
            <h3 className="font-semibold mb-2">Danışman Bilgileri</h3>
            <p className="text-sm font-medium">Prof. Dr. Sersin KUMOVA METİN</p>
            <p className="text-xs mt-1">sersin.kumova@ieu.edu.tr</p>
            <button className="mt-2 text-xs underline hover:no-underline">
              Detay
            </button>
          </div>
        </div>
      </div>

      {/* Learning Card */}
      <div className="bg-sky-500 text-white rounded-lg shadow-lg p-6 h-40 flex items-center">
        <div className="flex items-center gap-4 w-full">
          <div className="text-4xl opacity-75 flex-shrink-0">
            <FileText size={48} />
          </div>
          <div className="min-w-0">
            <h3 className="font-semibold mb-2">Öğrenim Bilgileri</h3>
            <p className="text-sm">Mühendislik Fakültesi/Yazılım Mühendisliği (İÖ/İ)</p>
            <p className="text-xs mt-1">4. Sınıf</p>
          </div>
        </div>
      </div>

      {/* Registration Date Card */}
      <div className="bg-gray-600 text-white rounded-lg shadow-lg p-6 h-40 flex items-center">
        <div className="flex items-center gap-4 w-full">
          <div className="text-4xl opacity-75 flex-shrink-0">
            <Database size={48} />
          </div>
          <div className="min-w-0">
            <h3 className="font-semibold mb-2">Kayıt Tarihi: 23.08.2022</h3>
            <p className="text-sm">AKNO —</p>
            <p className="text-xs mt-1">Detay</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
