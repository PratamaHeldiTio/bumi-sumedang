const TemplateComponent = {
  templateStoreList(store) {
    return `
      <section class="market">
        <img src="${store.pictureId}" tabindex="0" alt="Gambar store ${store.name} di ${store.city}">
        <h2 tabindex="0" class="store-place">${store.city}</h2>
        <article class="store-list">
            <h3 tabindex="0" class="store-title">${store.name}</h3>
            <p tabindex="0" class="store-desc">${store.description}</p>
        </article>
        <div class="action">
          <a href="https://wa.me/6282320743292" class="contact-seller"> Hubungi penjual</a>
        </div>
    </section>`;
  },

  templateStoreRegister() {
    return `
      <div class="main-block">
        <form>
          <fieldset>
            <legend>
              <h3>Informasi Hasil panen</h3>
            </legend>
            <div  class="store-details">
              <div class="form-input">
                <div><label>Nama toko</label><input type="text" name="name" required></div>
                <div><label>Jenis panen</label><input type="text" name="type" required></div>
                <div><label>deskripsi panen</label><input type="textarea" name="desc" required></div>
                <div><label>Alamat</label><input type="text" name="address"></div>
                <div><label>No yang bisa dihubungi</label><input type="text" name="noTel"></div>
                <div><label>Gambar panen</label><input type="file" name="file"></div>
              </div>
            </div>
          </fieldset>
          <fieldset>
            <legend>
              <h3>Ketentuan</h3>
            </legend>
            <div  class="terms-mailing">
              <div class="checkbox">
                <input type="checkbox" name="checkbox"><span>Data tersebut benar milik saya pribadi</span>
              </div>
          </fieldset>
          <button type="reset">Daftarkan</button>
        </form>
      </div> `;
  },

  templateAllAvaialable() {
    return `
      <h2 class="header-available">Apa yang anda butuhkan ?</h2>
      <ul>
        <li>
          <img src="./images/rice.svg" alt="Bahan Pokok">
          <h3>Bahan Pokok</h3>
        </li>
        <li>
          <img src="./images/vegetable.svg" alt="Sayuran">
          <h3>Sayuran</h3>
        </li>
        <li>
          <img src="./images/fruits.svg" alt="Buah-buahan">
          <h3>Buah-buahan</h3>
        </li>
        <li>
          <img src="./images/nuts.svg" alt="Kacang-Kacangan">
          <h3>Kacang-Kacangan</h3>
        </li>
        <li>
          <img src="./images/coffee.svg" alt="Biji Kopi">
          <h3>Biji Kopi</h3>
        </li>
        <li>
          <img src="./images/tobacco.svg" alt="Tembakau">
          <h3>Tembakau</h3>
        </li>
      </ul>

      <h4>Tunggu apalagi ?</h4>
      <h4> Yok langsung saja disikat....</h4>`;
  },
};

export default TemplateComponent;
