import React from 'react';
import { Printer } from 'lucide-react';

const DersProgrami = () => {
  const schedule = {
    pazartesi: [
      { start: "16:45", end: "17:30", code: "GEET 304(1)", name: "Etik Karar Verme", room: "C 603[55]", instructor: "Doç. Dr. Mete Ulaş AKSOY" },
      { start: "17:40", end: "18:25", code: "GEET 304(1)", name: "Etik Karar Verme", room: "C 603[55]", instructor: "Doç. Dr. Mete Ulaş AKSOY" },
      { start: "18:35", end: "19:20", code: "GEET 304(1)", name: "Etik Karar Verme", room: "C 603[55]", instructor: "Doç. Dr. Mete Ulaş AKSOY" },
    ],
    sali: [
      { start: "10:20", end: "11:05", code: "SE 410(1)", name: "Yazılım Çerçevesi Uygulamaları", room: "D 312[50]", instructor: "Dr.Öğretim Üyesi SERHAT UZUNBAYIR" },
      { start: "11:15", end: "12:00", code: "SE 410(1)", name: "Yazılım Çerçevesi Uygulamaları", room: "D 312[50]", instructor: "Dr.Öğretim Üyesi SERHAT UZUNBAYIR" },
      { start: "12:10", end: "12:55", code: "SE 410(1)", name: "Yazılım Çerçevesi Uygulamaları", room: "D 312[50]", instructor: "Dr.Öğretim Üyesi SERHAT UZUNBAYIR" },
      { start: "14:55", end: "15:40", code: "SE 480(1)", name: "İstemci-Taraflı Skript Dilleri", room: "M 201[45]", instructor: "Dr.Öğretim Üyesi İbrahim ZİNCİR" },
      { start: "15:50", end: "16:35", code: "SE 480(1)", name: "İstemci-Taraflı Skript Dilleri", room: "M 201[45]", instructor: "Dr.Öğretim Üyesi İbrahim ZİNCİR" },
      { start: "16:45", end: "17:30", code: "SE 480(1)", name: "İstemci-Taraflı Skript Dilleri", room: "M 201[45]", instructor: "Dr.Öğretim Üyesi İbrahim ZİNCİR" },
    ],
    carsamba: [],
    persembe: [],
    cuma: []
  };

  const renderDaySchedule = (dayName, lessons) => {
    return (
      <div className="mb-4 bg-white rounded shadow-sm border border-gray-200">
        <div className="bg-gray-600 text-white px-4 py-2 text-sm font-semibold capitalize">
          {dayName}
        </div>
        {lessons.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="w-full text-xs">
              <thead className="bg-gray-50 border-b border-gray-200 text-gray-500">
                <tr>
                  <th className="px-4 py-2 text-left font-medium">Saat</th>
                  <th className="px-4 py-2 text-left font-medium">Ders Kodu</th>
                  <th className="px-4 py-2 text-left font-medium">Ders Adı</th>
                  <th className="px-4 py-2 text-left font-medium">Derslik</th>
                  <th className="px-4 py-2 text-left font-medium">Öğretim Elemanı</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {lessons.map((lesson, idx) => (
                  <tr key={idx} className="hover:bg-blue-50">
                    <td className="px-4 py-2 text-gray-600 font-medium">{lesson.start}-{lesson.end}</td>
                    <td className="px-4 py-2">{lesson.code}</td>
                    <td className="px-4 py-2">{lesson.name}</td>
                    <td className="px-4 py-2 text-gray-600">{lesson.room}</td>
                    <td className="px-4 py-2 text-gray-600">{lesson.instructor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="px-4 py-3 text-xs text-gray-500 italic border-t border-gray-200">
            Tanımlı Ders Programı Bulunamadı!
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="border-b border-gray-200 pb-4 mb-4">
        <h2 className="text-xl font-bold text-gray-800">Öğrenci Ders Programı</h2>
        <div className="text-sm text-gray-600 mt-1">BAŞAR KOCABAŞ</div>
      </div>

      <div className="flex justify-between items-center mb-6 bg-gray-50 p-3 rounded border border-gray-200">
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-gray-700">Dönem:</span>
          <select className="border border-gray-300 rounded px-3 py-1 text-sm bg-white focus:outline-none focus:border-blue-500">
            <option>2025 - 2026 Akademik Yılı Güz Dönemi</option>
          </select>
        </div>
        <button className="flex items-center gap-2 text-gray-600 hover:text-gray-900 border border-gray-300 rounded px-3 py-1 text-sm bg-white hover:bg-gray-50 transition-colors">
          <Printer size={16} />
          <span>Yazdır</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          {renderDaySchedule("Pazartesi", schedule.pazartesi)}
          {renderDaySchedule("Çarşamba", schedule.carsamba)}
          {renderDaySchedule("Cuma", schedule.cuma)}
        </div>
        <div>
          {renderDaySchedule("Salı", schedule.sali)}
          {renderDaySchedule("Perşembe", schedule.persembe)}
        </div>
      </div>

      <div className="mt-4 text-xs text-gray-500 italic">
        Not: Uygulama saatleri yeşil renkle gösterilir
      </div>
    </div>
  );
};

export default DersProgrami;
