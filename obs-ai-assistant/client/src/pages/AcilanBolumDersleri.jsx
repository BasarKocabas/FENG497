import React from 'react';

const AcilanBolumDersleri = () => {
  const courses = [
    { code: "SE 320", name: "Bilgisayar Oyunlarına Giriş", class: 3, u: 0, l: 0, t: 3, z: 1, krd: 3, akts: 5 },
    { code: "SE 354", name: "Bilgisayar Oyunlarında Yapay Zeka", class: 3, u: 0, l: 0, t: 3, z: 2, krd: 3, akts: 5 },
    { code: "SE 431", name: "Bilgisayar Oyunlarında 3B Modelleme", class: 3, u: 0, l: 0, t: 3, z: 1, krd: 3, akts: 5 },
    { code: "SE 480", name: "İstemci-Taraflı Skript Dilleri", class: 4, u: 0, l: 0, t: 3, z: 2, krd: 3, akts: 5 },
    { code: "SE 380", name: "Mobil Uygulama Geliştirme", class: 3, u: 0, l: 0, t: 3, z: 1, krd: 3, akts: 5 },
    { code: "SEST 400", name: "Mühendislik Stajı (4 hafta)", class: 4, u: 0, l: 0, t: 0, z: 1, krd: 0, akts: 5 },
    { code: "SE 307", name: "Nesnel Tabanlı Programlamanın Kavramları", class: 3, u: 2, l: 0, t: 2, z: 1, krd: 3, akts: 7 },
    { code: "IUE 100", name: "Oryantasyon ve Kariyer Planlama", class: 1, u: 0, l: 0, t: 1, z: 1, krd: 1, akts: 2 },
    { code: "SE 350", name: "Oyun Tasarımı", class: 3, u: 0, l: 0, t: 3, z: 1, krd: 3, akts: 5 },
    { code: "SE 309", name: "Programlama Dilleri Kavramları", class: 3, u: 2, l: 0, t: 2, z: 1, krd: 3, akts: 8 },
    { code: "SE 309", name: "Programlama Dilleri Kavramları", class: 3, u: 2, l: 0, t: 2, z: 1, krd: 3, akts: 8 },
    { code: "SE 323", name: "Programlama Dilleri Kavramları", class: 3, u: 2, l: 0, t: 2, z: 1, krd: 3, akts: 6 },
    { code: "SE 323", name: "Programlama Dilleri Kavramları", class: 3, u: 2, l: 0, t: 2, z: 1, krd: 3, akts: 6 },
    { code: "SE 113", name: "Programlamaya Giriş", class: 1, u: 2, l: 0, t: 2, z: 1, krd: 3, akts: 6 },
    { code: "SE 113", name: "Programlamaya Giriş", class: 1, u: 2, l: 0, t: 2, z: 1, krd: 3, akts: 6 },
    { code: "SE 113", name: "Programlamaya Giriş", class: 1, u: 2, l: 0, t: 2, z: 1, krd: 3, akts: 6 },
    { code: "SE 113", name: "Programlamaya Giriş", class: 1, u: 2, l: 0, t: 2, z: 1, krd: 3, akts: 6 },
    { code: "SE 113", name: "Programlamaya Giriş", class: 1, u: 2, l: 0, t: 2, z: 1, krd: 3, akts: 6 },
    { code: "SE 113", name: "Programlamaya Giriş", class: 1, u: 2, l: 0, t: 2, z: 1, krd: 3, akts: 6 },
    { code: "SE 113", name: "Programlamaya Giriş", class: 1, u: 2, l: 0, t: 2, z: 1, krd: 3, akts: 6 },
  ];

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="border-b border-gray-200 pb-4 mb-4">
        <h2 className="text-xl font-bold text-gray-800">Aktif Dönemde Açılan Bölüm Dersleri</h2>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-gray-800 text-white font-medium">
            <tr>
              <th className="px-4 py-3 rounded-tl-lg">Şb.</th>
              <th className="px-4 py-3">Ders Kodu</th>
              <th className="px-4 py-3">Ders Adı</th>
              <th className="px-4 py-3 text-center">Sınıf</th>
              <th className="px-4 py-3 text-center">U</th>
              <th className="px-4 py-3 text-center">L</th>
              <th className="px-4 py-3 text-center">T</th>
              <th className="px-4 py-3 text-center">Z</th>
              <th className="px-4 py-3 text-center">KRD</th>
              <th className="px-4 py-3 text-center rounded-tr-lg">AKTS</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 border border-gray-200">
            {courses.map((course, index) => (
              <tr key={index} className="hover:bg-gray-50 transition-colors">
                <td className="px-4 py-2 border-r border-gray-100">{course.code === 'SE 113' ? Math.floor(Math.random() * 8) + 1 : 1}</td>
                <td className="px-4 py-2 font-medium border-r border-gray-100">{course.code}</td>
                <td className="px-4 py-2 border-r border-gray-100">{course.name}</td>
                <td className="px-4 py-2 text-center border-r border-gray-100">{course.class}</td>
                <td className="px-4 py-2 text-center border-r border-gray-100">{course.u}</td>
                <td className="px-4 py-2 text-center border-r border-gray-100">{course.l}</td>
                <td className="px-4 py-2 text-center border-r border-gray-100">{course.t}</td>
                <td className="px-4 py-2 text-center border-r border-gray-100">{course.z}</td>
                <td className="px-4 py-2 text-center border-r border-gray-100">{course.krd}</td>
                <td className="px-4 py-2 text-center">{course.akts}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="bg-gray-700 text-white text-xs py-2 px-4 mt-0 rounded-b-lg flex justify-between items-center">
         <span>43 - 1/3</span>
         <select className="bg-white text-gray-800 rounded px-1 text-xs outline-none">
            <option>1</option>
         </select>
      </div>
    </div>
  );
};

export default AcilanBolumDersleri;
