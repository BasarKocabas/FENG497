import React, { useState } from 'react';
import { ChevronRight, Home, Calendar, FileText, ClipboardCheck, Users, Book, FileSignature, BarChart3, Database, Square } from 'lucide-react';
import ChatWidget from './ChatWidget';

// Import Pages
import Dashboard from './pages/Dashboard';
import OzlukBilgileri from './pages/OzlukBilgileri';
import GenelBilgiler from './pages/GenelBilgiler';
import AcilanBolumDersleri from './pages/AcilanBolumDersleri';
import DersProgrami from './pages/DersProgrami';
import Transkript from './pages/Transkript';
import GenericPage from './pages/GenericPage';

export default function IEUDashboard() {
  const [expandedMenu, setExpandedMenu] = useState(null);
  const [showAlert, setShowAlert] = useState(true);
  const [activePage, setActivePage] = useState('Dashboard');

  const handleMenuClick = (subitem) => {
    setActivePage(subitem);
  };

  const handleHomeClick = () => {
    setActivePage('Dashboard');
    setExpandedMenu(null);
  };

  const renderContent = () => {
    switch (activePage) {
      case 'Dashboard':
        return <Dashboard />;
      case 'Özlük Bilgileri':
        return <OzlukBilgileri />;
      case 'Genel Bilgiler':
        return <GenelBilgiler />;
      case 'Açılan Bölüm Dersleri':
        return <AcilanBolumDersleri />;
      case 'Ders Programı':
        return <DersProgrami />;
      case 'Transkript':
        return <Transkript />;
      default:
        return <GenericPage title={activePage} />;
    }
  };

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
          <div 
            className="flex items-center gap-3 cursor-pointer" 
            onClick={handleHomeClick}
          >
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
                      onClick={() => handleMenuClick(subitem)}
                      className={`w-full text-left px-12 py-2 text-sm transition-colors flex items-center gap-2 ${
                        activePage === subitem 
                          ? 'bg-slate-800 text-white font-medium' 
                          : 'text-gray-300 hover:bg-slate-800 hover:text-white'
                      }`}
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
            <button className="hover:text-gray-300" onClick={handleHomeClick}>
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
          {showAlert && activePage === 'Dashboard' && (
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

          {renderContent()}
        </main>
        <ChatWidget />
      </div>
    </div>
  );
}
