// src/App.js

import React from 'react';

function App() {
  return (
    <div style={{ textAlign: 'center', padding: '2rem', fontFamily: 'Arial' }}>
      <h1>Сошиал Медиа Үйлчилгээ</h1>
      <p>Манай хуудаснаас Facebook, Instagram зэрэг платформд зориулсан дараах үйлчилгээг аваарай:</p>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        <li>✅ Хуудас хөгжүүлэлт</li>
        <li>✅ Лайк болон дагагч нэмэгдүүлэх</li>
        <li>✅ Зар сурталчилгаа boost хийх</li>
        <li>✅ Facebook Live / Шууд дамжуулалт</li>
      </ul>
      <a 
        href="https://facebook.com" 
        target="_blank" 
        rel="noopener noreferrer"
        style={{ display: 'inline-block', marginTop: '2rem', color: 'white', backgroundColor: '#1877f2', padding: '10px 20px', borderRadius: '8px', textDecoration: 'none' }}
      >
        Манай Facebook хуудсанд зочлоорой
      </a>
    </div>
  );
}

export default App;

