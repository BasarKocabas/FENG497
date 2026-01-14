import React from 'react';

const OzlukBilgileri = () => {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="border-b border-gray-200 pb-4 mb-6">
        <h2 className="text-xl font-bold text-gray-800">Özlük Bilgileri</h2>
      </div>

      <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded relative mb-6 text-sm">
        E-Posta ve Cep Telefonu bilgileriniz, YÖK 'ün 26.03.2021 tarih E-19924119-710.99-23170 sayılı ve 22.02.2023 tarih E-19924119-702.99-13673 sayılı yazısı gereğince YÖKSİS bilgi sistemine aktarılacaktır.
      </div>

      <form className="space-y-8">
        {/* Aile İletişim Bilgileri */}
        <div className="bg-gray-50 p-4 rounded border border-gray-200">
          <h3 className="text-md font-semibold text-gray-700 mb-4 border-b pb-2">Aile İletişim Bilgileri</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">Adres</label>
              <textarea 
                className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-blue-500" 
                rows="2"
                defaultValue="MANSUROĞLU MAH. 286/8 SK. BAŞARI28 SİTESİ NO: 3/1 C1 BLOK KAT:4 İÇ KAPI NO: 7 35 BAYRAKLI"
              ></textarea>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">İl</label>
              <select className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-blue-500">
                <option>Seçiniz</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">İlçe</label>
              <select className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-blue-500">
                <option>Seçiniz</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Posta Kodu</label>
              <input type="text" className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-blue-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Telefon</label>
              <input type="text" defaultValue="5327023048" className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-blue-500" />
            </div>
          </div>
        </div>

        {/* İkamet İletişim Bilgileri */}
        <div className="bg-gray-50 p-4 rounded border border-gray-200">
          <h3 className="text-md font-semibold text-gray-700 mb-4 border-b pb-2">İkamet İletişim Bilgileri</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">Adres</label>
              <textarea 
                className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-blue-500" 
                rows="2"
                defaultValue="MANSUROĞLU MAH. 286 8 SK. BAŞARI SİTESİ NO: 3 1 İÇ KAPI NO: 7"
              ></textarea>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">İl</label>
              <select className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-blue-500" defaultValue="İZMİR">
                <option>İZMİR</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">İlçe</label>
              <select className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-blue-500" defaultValue="BAYRAKLI">
                <option>BAYRAKLI</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Posta Kodu</label>
              <input type="text" className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-blue-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Telefon</label>
              <input type="text" defaultValue="9053334372" className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-blue-500" />
            </div>
          </div>
        </div>

        {/* Diğer İletişim Bilgileri */}
        <div className="bg-gray-50 p-4 rounded border border-gray-200">
          <h3 className="text-md font-semibold text-gray-700 mb-4 border-b pb-2">Diğer İletişim Bilgileri</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">1.Cep Telefonu</label>
              <input type="text" defaultValue="(533) 343-7275" className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-blue-500" />
              <p className="text-xs text-gray-500 mt-1">*(SMS için kullanılır) Telefon numarası, 0 ile başlamamalıdır ve toplam 10 hane olmalıdır</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">3.Cep Telefonu</label>
              <input type="text" className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-blue-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">2.Cep Telefonu</label>
              <input type="text" defaultValue="(533) 166-3639" className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-blue-500" />
            </div>
            <div></div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">1.E-Posta</label>
              <input type="text" defaultValue="berserkerbruh1@gmail.com" className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-blue-500" />
              <p className="text-xs text-gray-500 mt-1">(1. E-Posta ve 2. E-Posta adresleri şifre hatırlatma için kullanılır)</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Sosyal Medya</label>
              <input type="text" className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-blue-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">2.E-Posta</label>
              <input type="text" defaultValue="basar.kocabas@std.izmirekonomi.edu.tr" className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-blue-500" />
            </div>
             <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">ORCİD</label>
              <input type="text" className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-blue-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Web Sayfası</label>
              <input type="text" className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-blue-500" />
            </div>
          </div>
        </div>

        {/* Üniversite Tarafından Yapılacak Para İadelerinde Kullanılacak Banka Bilgileri */}
        <div className="bg-gray-50 p-4 rounded border border-gray-200">
          <h3 className="text-md font-semibold text-gray-700 mb-4 border-b pb-2">Üniversite Tarafından Yapılacak Para İadelerinde Kullanılacak Banka Bilgileri</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Banka Adı</label>
              <input type="text" className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-blue-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Şube Adı</label>
              <input type="text" className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-blue-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Şube Kodu</label>
              <input type="text" className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-blue-500" />
            </div>
             <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Hesap Numarası</label>
              <input type="text" className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-blue-500" />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">IBAN</label>
              <div className="flex items-center gap-2">
                <span className="text-red-500 font-bold">TR</span>
                <input type="text" className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-blue-500" />
              </div>
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">H. Sah. Adı Soyadı</label>
              <input type="text" className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-blue-500" />
            </div>
          </div>
        </div>

        <div className="flex justify-start">
          <button type="button" className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded shadow transition-colors flex items-center gap-2">
            <span>Kaydet</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default OzlukBilgileri;
