import React from 'react';
import { User, BookOpen, AlertCircle, FileText, Award, Layers } from 'lucide-react';

const GenelBilgiler = () => {
  const infoItems = [
    { label: "Program Normal/Azami Süre", value: "4 / 7", icon: null },
    { label: "ÇAP Kaydı", value: "Yok", icon: null },
    { label: "Kayıt Tarihi/Öğrenci Sınıf", value: "23.08.2022 / 4", icon: null },
    { label: "Yan Dal Kaydı", value: "Yok", icon: null },
    { label: "Okuduğu Yıl", value: "4", icon: null },
    { label: "Ceza Durumu", value: "0", icon: null },
    { label: "Yeni Kanuna Göre", value: "4", icon: null },
    { label: "Kayıt Dondurma", value: "0", icon: null },
    { label: "Ak.Dön. Ders Kayıt Sayısı", value: "5", icon: null },
    { label: "Katkı/Öğrenim Ücreti", value: "0", icon: null },
    { label: "Tez/Seminer Sayısı", value: "0/0", icon: null },
    { label: "Değişim Prog./Yatay/DGS K.S.", value: "0", icon: null },
  ];

  const sidebarItems = [
    { label: "Genel Bilgiler", active: true, icon: User },
    { label: "Eğitim Bilgileri", active: false, icon: BookOpen },
    { label: "Ceza Bilgileri", active: false, icon: AlertCircle },
    { label: "Hazırlık Durumu", active: false, icon: Layers },
    { label: "Burslar ve Belgeler", active: false, icon: FileText },
    { label: "Kulüp/Topluluk/Etk.", active: false, icon: User },
    { label: "Diğer Bilgiler/Etk.", active: false, icon: FileText },
    { label: "Kayıt Dondurma", active: false, icon: FileText },
    { label: "Onur/Yüksek Onur", active: false, icon: Award },
    { label: "Yönetim Kurulu Karar.", active: false, icon: FileText },
    { label: "Seminer Bilgileri", active: false, icon: FileText },
    { label: "Yeterlilik Bilgileri", active: false, icon: FileText },
    { label: "Proje Bilgileri", active: false, icon: FileText },
    { label: "Tez Bilgileri", active: false, icon: FileText },
    { label: "Araştırma Raporları", active: false, icon: FileText },
    { label: "Tez İzleme Sınavları", active: false, icon: FileText },
    { label: "Tez Savunma Sınavları", active: false, icon: FileText },
  ];

  return (
    <div className="bg-white rounded-lg shadow min-h-[600px] flex">
      {/* Left Sidebar */}
      <div className="w-64 border-r border-gray-200 p-4">
        <h3 className="font-semibold text-gray-700 mb-4 px-2">Öğrenci Genel Bilgiler</h3>
        <div className="text-xs text-gray-500 mb-4 px-2">20220601048 BAŞAR KOCABAŞ</div>
        <nav className="space-y-1">
          {sidebarItems.map((item, index) => (
            <button
              key={index}
              className={`w-full flex items-center gap-2 px-3 py-2 text-sm rounded transition-colors ${
                item.active 
                  ? 'bg-gray-100 text-gray-900 font-medium' 
                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
              }`}
            >
              {item.icon && <item.icon size={16} />}
              <span>{item.label}</span>
            </button>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        <div className="border-b border-gray-200 pb-4 mb-6">
          <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
            <User size={24} className="text-gray-600" />
            Genel Bilgiler
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
          {infoItems.map((item, index) => (
            <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 hover:bg-gray-50 px-2 rounded">
              <span className="text-sm text-gray-600 font-medium">{item.label}</span>
              <div className="flex-1 border-b border-dotted border-gray-300 mx-2 h-4"></div>
              <span className="text-sm font-semibold text-gray-800 bg-gray-100 px-2 py-0.5 rounded border border-gray-200 min-w-[30px] text-center">
                {item.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GenelBilgiler;
