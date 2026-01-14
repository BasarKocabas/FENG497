import React from 'react';

const Transkript = () => {
  const terms = [
    {
      title: "2022 - 2023 Akademik Yılı Güz Dönemi",
      courses: [
        { code: "ENG 101", name: "İngilizce de Akademik Beceriler I", yk: "", akts: 3, grade: "AA", credit: 3, point: 12 },
        { code: "FENG 101", name: "Mühendislik Kültürünün Temelleri", yk: "", akts: 4, grade: "BB", credit: 2, point: 12 },
        { code: "GER 101", name: "Almanca I", yk: "", akts: 3, grade: "AA", credit: 3, point: 12 },
        { code: "IUE 100", name: "Oryantasyon ve Kariyer Planlama", yk: "", akts: 2, grade: "AA", credit: 1, point: 8 },
        { code: "MATH 153", name: "Genel Matematik I", yk: "", akts: 6, grade: "CB", credit: 3, point: 15 },
        { code: "PHYS 100", name: "Genel Fizik I", yk: "", akts: 6, grade: "CC", credit: 3, point: 12 },
        { code: "SE 115", name: "Programlamaya Giriş I", yk: "", akts: 6, grade: "AA", credit: 3, point: 24 },
      ],
      dno: 3.17,
      gno: 3.17,
      totalCredit: 18,
      totalPoint: 95,
      genelCredit: 18,
      genelPoint: 95
    },
    {
      title: "2022 - 2023 Akademik Yılı Bahar Dönemi",
      courses: [
        { code: "ENG 102", name: "İngilizce de Akademik Beceriler II", yk: "", akts: 4, grade: "DC", credit: 3, point: 6 },
        { code: "FENG 102", name: "Mühendisliğe Giriş", yk: "", akts: 4, grade: "AA", credit: 2, point: 16 },
        { code: "GER 102", name: "Almanca II", yk: "", akts: 4, grade: "AA", credit: 3, point: 16 },
        { code: "MATH 154", name: "Genel Matematik II", yk: "", akts: 6, grade: "CC", credit: 3, point: 12 },
        { code: "PHYS 102", name: "Genel Fizik II", yk: "", akts: 6, grade: "BB", credit: 3, point: 18 },
        { code: "SE 116", name: "Programlamaya Giriş II", yk: "", akts: 6, grade: "AA", credit: 3, point: 24 },
      ],
      dno: 3.07,
      gno: 3.12,
      totalCredit: 17,
      totalPoint: 92,
      genelCredit: 35,
      genelPoint: 187
    },
    {
      title: "2023 - 2024 Akademik Yılı Güz Dönemi",
      courses: [
        { code: "CE 215", name: "Bilgisayar Bilimleri için Ayrık Matematik", yk: "", akts: 6, grade: "CC", credit: 3, point: 12 },
        { code: "CE 221", name: "Veri Yapıları ve Algoritmalar I", yk: "", akts: 7, grade: "BB", credit: 4, point: 21 },
        { code: "GBE 251", name: "Alan Dışı Disiplinler için Biyolojiye Giriş", yk: "", akts: 6, grade: "CB", credit: 3, point: 15 },
        { code: "GER 201", name: "Almanca III", yk: "", akts: 4, grade: "CB", credit: 3, point: 10 },
        { code: "HIST 100", name: "Atatürk İlkeleri ve İnkılap Tarihi", yk: "", akts: 4, grade: "AA", credit: 4, point: 16 },
        { code: "SE 209", name: "Yazılım Mühendisliği Kavramları", yk: "", akts: 3, grade: "BB", credit: 3, point: 9 },
        { code: "TURK 100", name: "Türk Dili", yk: "", akts: 4, grade: "BA", credit: 4, point: 14 },
      ],
      dno: 2.85,
      gno: 3.02,
      totalCredit: 24,
      totalPoint: 97,
      genelCredit: 59,
      genelPoint: 284
    },
    {
      title: "2023 - 2024 Akademik Yılı Bahar Dönemi",
      courses: [
        { code: "CE 223", name: "Veri Tabanı Sistemleri", yk: "", akts: 7, grade: "DC", credit: 4, point: 10.5 },
        { code: "ENG 210", name: "Mühendisler İçin Teknik İngilizce", yk: "", akts: 4, grade: "AA", credit: 3, point: 16 },
        { code: "GER 202", name: "Almanca IV", yk: "", akts: 4, grade: "CB", credit: 3, point: 10 },
        { code: "MATH 240", name: "Mühendisler için Olasılık", yk: "", akts: 6, grade: "DC", credit: 3, point: 9 },
        { code: "SE 216", name: "Yazılım Proje Yönetimi", yk: "", akts: 5, grade: "CB", credit: 3, point: 12.5 },
        { code: "SE 226", name: "İleri Programlama", yk: "", akts: 4, grade: "CB", credit: 3, point: 10 },
      ],
      dno: 2.27,
      gno: 2.84,
      totalCredit: 19,
      totalPoint: 68,
      genelCredit: 78,
      genelPoint: 352
    },
    {
      title: "2024 - 2025 Akademik Yılı Güz Dönemi",
      courses: [
        { code: "FENG 345", name: "Mühendisler için Sayısal Yöntemler I", yk: "", akts: 7, grade: "CB", credit: 3, point: 17.5 },
        { code: "GEEC 204", name: "Modern Dünya Ekonomisi", yk: "", akts: 6, grade: "BA", credit: 3, point: 21 },
        { code: "MATH 250", name: "Mühendisler İçin Doğrusal Cebir", yk: "", akts: 6, grade: "DD", credit: 3, point: 6 },
        { code: "SE 321", name: "Yazılım Belirtim ve Tasarım", yk: "", akts: 6, grade: "DD", credit: 3, point: 6 },
        { code: "SE 323", name: "Programlama Dilleri Kavramları", yk: "", akts: 6, grade: "CB", credit: 3, point: 15 },
        { code: "SE 350", name: "Oyun Tasarımı", yk: "", akts: 5, grade: "CB", credit: 3, point: 12.5 },
        { code: "SE 380", name: "Mobil Uygulama Geliştirme", yk: "", akts: 5, grade: "BA", credit: 3, point: 17.5 },
      ],
      dno: 2.33,
      gno: 2.71,
      totalCredit: 21,
      totalPoint: 95.5,
      genelCredit: 99,
      genelPoint: 447.5
    },
    {
      title: "2024 - 2025 Akademik Yılı Bahar Dönemi",
      courses: [
        { code: "GEHU 205", name: "Toplumsal Sorunlar", yk: "", akts: 6, grade: "BA", credit: 3, point: 21 },
        { code: "MATH 236", name: "Mühendislik İstatistiği I", yk: "", akts: 6, grade: "DD", credit: 3, point: 6 },
        { code: "SE 311", name: "Yazılım Mimarisi", yk: "", akts: 7, grade: "DD", credit: 3, point: 7 },
        { code: "SE 322", name: "Yazılım Sınama ve Doğrulama", yk: "", akts: 6, grade: "DC", credit: 3, point: 9 },
        { code: "SE 375", name: "Sistem Programlama", yk: "", akts: 7, grade: "CC", credit: 3, point: 14 },
        { code: "SE 432", name: "Bilgisayar Oyunlarında 3B Animasyon", yk: "", akts: 5, grade: "BB", credit: 3, point: 15 },
      ],
      dno: 1.95,
      gno: 2.57,
      totalCredit: 18,
      totalPoint: 72,
      genelCredit: 117,
      genelPoint: 519.5
    },
    {
      title: "2025 - 2026 Akademik Yılı Güz Dönemi",
      courses: [
        { code: "FENG 497", name: "Çok Disiplinli Mühendislik Projesi", yk: "", akts: 6, grade: "--", credit: 3, point: "--" },
        { code: "GEET 304", name: "Etik Karar Verme", yk: "", akts: 4, grade: "--", credit: 3, point: "--" },
        { code: "SE 410", name: "Yazılım Çerçevesi Uygulamaları", yk: "", akts: 5, grade: "--", credit: 3, point: "--" },
        { code: "SE 420", name: "Yapay Zeka ve Uzman Sistemler", yk: "", akts: 5, grade: "W", credit: 3, point: 0 },
        { code: "SE 480", name: "İstemci-Taraflı Skript Dilleri", yk: "", akts: 5, grade: "--", credit: 3, point: "--" },
        { code: "SEST 400", name: "Mühendislik Stajı (4 hafta)", yk: "", akts: 5, grade: "--", credit: 0, point: "--" },
      ],
      dno: null,
      gno: null,
      totalCredit: 12,
      totalPoint: null,
      genelCredit: 129,
      genelPoint: null
    }
  ];

  return (
    <div className="bg-white rounded-lg shadow p-8">
      <div className="text-center mb-8 border-b pb-4">
        <h1 className="text-2xl font-bold text-gray-800">İZMİR EKONOMİ ÜNİVERSİTESİ</h1>
        <h2 className="text-xl font-medium text-gray-600 mt-2">TRANSKRİPT</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 text-sm">
        <div>
          <div className="flex mb-2"><span className="w-32 font-bold">Adı</span>: BAŞAR</div>
          <div className="flex mb-2"><span className="w-32 font-bold">Soyadı</span>: KOCABAŞ</div>
          <div className="flex mb-2"><span className="w-32 font-bold">Öğrenci No</span>: 20220601048</div>
          <div className="flex mb-2"><span className="w-32 font-bold">T.C. Kimlik No</span>: 30391733874</div>
          <div className="flex mb-2"><span className="w-32 font-bold">Kayıt Tarihi</span>: 23.08.2022</div>
          <div className="flex mb-2"><span className="w-32 font-bold">Eğitim Dili</span>: İngilizce</div>
          <div className="flex mb-2"><span className="w-32 font-bold">Sınıfı</span>: 4</div>
        </div>
        <div>
          <div className="flex mb-2"><span className="w-40 font-bold">Fakülte/Yüksekokul</span>: Mühendislik Fakültesi</div>
          <div className="flex mb-2"><span className="w-40 font-bold">Program</span>: Yazılım Mühendisliği</div>
          <div className="flex mb-2"><span className="w-40 font-bold">Basım Tarihi - Sayı</span>: - -</div>
        </div>
      </div>

      <div className="space-y-8">
        {terms.map((term, index) => (
          <div key={index} className="border border-gray-300 rounded overflow-hidden">
            <div className="bg-gray-50 px-4 py-2 border-b border-gray-300 font-bold text-center text-gray-700">
              {term.title}
            </div>
            <table className="w-full text-sm">
              <thead className="bg-gray-50 border-b border-gray-300">
                <tr>
                  <th className="text-left px-4 py-2 font-semibold text-gray-600">Kodu</th>
                  <th className="text-left px-4 py-2 font-semibold text-gray-600">Dersin Adı</th>
                  <th className="text-center px-2 py-2 font-semibold text-gray-600">Y. Ders Kod</th>
                  <th className="text-center px-2 py-2 font-semibold text-gray-600">AKTS</th>
                  <th className="text-center px-2 py-2 font-semibold text-gray-600">Başarı Notu</th>
                  <th className="text-center px-2 py-2 font-semibold text-gray-600">Kredisi</th>
                  <th className="text-center px-2 py-2 font-semibold text-gray-600">Puan</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {term.courses.map((course, idx) => (
                  <tr key={idx} className="hover:bg-gray-50">
                    <td className="px-4 py-2">{course.code}</td>
                    <td className="px-4 py-2">{course.name}</td>
                    <td className="px-2 py-2 text-center">{course.yk}</td>
                    <td className="px-2 py-2 text-center">{course.akts}</td>
                    <td className="px-2 py-2 text-center font-medium">{course.grade}</td>
                    <td className="px-2 py-2 text-center">{course.credit}</td>
                    <td className="px-2 py-2 text-center">{course.point}</td>
                  </tr>
                ))}
                <tr className="bg-gray-50 font-medium">
                  <td colSpan="2" className="px-4 py-2">DNO: {term.dno !== null ? term.dno.toFixed(2).replace('.', ',') : ''}</td>
                  <td colSpan="3" className="px-4 py-2 text-right">Toplam</td>
                  <td className="px-2 py-2 text-center">{term.totalCredit}</td>
                  <td className="px-2 py-2 text-center">{term.totalPoint}</td>
                </tr>
                <tr className="bg-gray-100 font-bold">
                  <td colSpan="2" className="px-4 py-2">GNO: {term.gno !== null ? term.gno.toFixed(2).replace('.', ',') : ''}</td>
                  <td colSpan="3" className="px-4 py-2 text-right">Genel Toplam</td>
                  <td className="px-2 py-2 text-center">{term.genelCredit}</td>
                  <td className="px-2 py-2 text-center">{term.genelPoint}</td>
                </tr>
              </tbody>
            </table>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Transkript;
