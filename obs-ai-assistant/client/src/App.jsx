import React, { useState } from 'react';
import { ChevronRight, Home, Calendar, FileText, ClipboardCheck, Users, Book, FileSignature, BarChart3, Database, Square } from 'lucide-react';
import ChatWidget from './ChatWidget';

export default function IEUDashboard() {
  const [expandedMenu, setExpandedMenu] = useState(null);
  const [showAlert, setShowAlert] = useState(true);

  const menuItems = [
    { 
      icon: Home, 
      label: 'Genel İşlemler', 
      id: 'genel',
      submenu: [
        'Kullanım Kılavuzu',
        'Özlük Bilgileri',
        'Genel Bilgiler',
        'Akademik Takvim',
        'Danışman Bilgileri',
        'Alınan Dersler',
        'Açılan Bölüm Dersleri',
        'Sınav Takvimi',
        'Ders Programı',
        'Bölüm Ders Programı',
        'Genel Duyurular',
        'Mezuniyet Onay Bilgileri'
      ]
    },
    { 
      icon: Calendar, 
      label: 'Ders ve Dönem İşlemleri', 
      id: 'ders',
      submenu: [
        'Ders Kayıt',
        'Ders Ekle/Bırak',
        'Dönem Ortalamaları',
        'Not Listesi',
        'Transkript',
        'Transkript Senaryosu',
        'Diğer Belgeler',
        'Müfredat Durum',
        'Müfredat Bilgi Paketi',
        'Devamsızlık Durumu'
      ]
    },
    { 
      icon: FileText, 
      label: 'Form İşlemleri', 
      id: 'form',
      submenu: [
        'Anketler',
        'Değerlendirme Formları',
        'Hazırlık Değer. Formları',
        'Öğrenci Bilgi Formu'
      ]
    },
    { 
      icon: ClipboardCheck, 
      label: 'İlişik Kesme Talebi', 
      id: 'ilisik',
      submenu: ['İlişik Kesme Talebi']
    },
    { 
      icon: FileSignature, 
      label: 'İntibak Başvuru', 
      id: 'intibak',
      submenu: ['İntibak Başvuru']
    },
    { 
      icon: Users, 
      label: 'YÖKSİS İşlemleri', 
      id: 'yoksis',
      submenu: ['YÖKSİS Bilgileri']
    },
    { 
      icon: Book, 
      label: 'Hazırlık İşlemleri', 
      id: 'hazirlik',
      submenu: [
        'Haz. Sınav Takvimi',
        'Haz. Not Listesi',
        'Haz. Devamsızlık Durumu',
        'Hazırlık Ders Programı'
      ]
    },
    { 
      icon: BarChart3, 
      label: 'Başvuru İşlemleri', 
      id: 'basvuru',
      submenu: [
        'Ek Sınav Başvuru',
        'ÇAP Başvuru',
        'Yandal Başvuru',
        'Kayıt Dondurma Başvuru',
        'Mazeret Sınavı Başvuru',
        'Ek Sınav Başvuru V2',
        'Ek Sınav Başvuru İşlemleri',
        'Tek Ders Başvuru İşlemleri',
        'Muafiyet Başvuru',
        'Burs Başvuru',
        'Dersten Çekilme Başvuru'
      ]
    },
    { 
      icon: Database, 
      label: 'Kullanıcı İşlemleri', 
      id: 'kullanici',
      submenu: [
        'Yapılacaklar Listesi',
        'Gelen Mesajlar',
        'Gönderilen Mesajlar',
        'Belge Talebi',
        'Şifre Değiştir',
        'Fotoğraf Güncelle'
      ]
    },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-slate-900 text-white flex flex-col">
        {/* Logo */}
        <div className="p-6 border-b border-slate-700">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-xs font-bold">
              İEÜ
            </div>
            <div className="text-sm">İzmir Ekonomi Üniversitesi</div>
          </div>
        </div>

        {/* Menu Items */}
        <nav className="flex-1 overflow-y-auto py-4">
          {menuItems.map((item) => (
            <div key={item.id}>
              <button
                onClick={() => setExpandedMenu(expandedMenu === item.id ? null : item.id)}
                className="w-full flex items-center justify-between px-6 py-3 hover:bg-slate-800 transition-colors text-left text-sm"
              >
                <div className="flex items-center gap-3">
                  <item.icon size={18} />
                  <span>{item.label}</span>
                </div>
                <ChevronRight 
                  size={16} 
                  className={`text-gray-400 transition-transform ${expandedMenu === item.id ? 'rotate-90' : ''}`} 
                />
              </button>
              
              {/* Submenu */}
              {expandedMenu === item.id && (
                <div>
                  {item.submenu.map((subitem, index) => (
                    <button
                      key={index}
                      className="w-full text-left px-12 py-2 text-sm text-gray-300 hover:bg-slate-800 hover:text-white transition-colors flex items-center gap-2"
                    >
                      <Square size={14} className="flex-shrink-0" />
                      <span>{subitem}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Student Info */}
        <div className="p-6 border-t border-slate-700 text-xs text-gray-400">
          Öğrenci Bilgi Sistemi
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-slate-800 text-white px-6 py-3 flex items-center justify-between">
          <div className="text-sm">© 2025 - 2026 Akademik Yılı Güz Dönemi</div>
          <div className="flex items-center gap-4">
            <button className="hover:text-gray-300">
              <Home size={20} />
            </button>
            <button className="hover:text-gray-300 relative">
              <Calendar size={20} />
              <span className="absolute -top-1 -right-1 bg-red-500 text-xs rounded-full w-4 h-4 flex items-center justify-center">1</span>
            </button>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-orange-500 rounded-full"></div>
              <span className="text-sm">20220601048 - BAŞAR KOCABAŞ</span>
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="flex-1 p-6 overflow-y-auto relative">
          {/* Floating Alert Banner */}
          {showAlert && (
            <div className="mb-6">
              <div className="bg-green-500 text-white px-6 py-4 rounded-lg shadow-lg flex items-center justify-between">
                <div className="text-sm">
                  <strong>Bilgilendirme:</strong> 2025 - 2026 Akademik Yıl Güz Dönemi Döneminde 5 Adet Onaylanmış ders kaydınız mevcut.
                </div>
                <button 
                  onClick={() => setShowAlert(false)}
                  className="text-white hover:text-gray-200 text-xl font-bold ml-4"
                >
                  ×
                </button>
              </div>
            </div>
          )}

          {/* Dashboard Cards */}
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
        </main>
        <ChatWidget />
      </div>
    </div>
  );
}
