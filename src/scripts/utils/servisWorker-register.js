const ServisWorkerRegister = async () => {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js', { scope: '/' }).then(() => {
      console.log('service worker berhasil didaftarkan');
    });
  } else {
    console.log('Service worker tidak didukung browser ini.');
  }
};

export default ServisWorkerRegister;
