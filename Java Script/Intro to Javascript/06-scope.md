---
/// Soal - 01
/// Kita sudah belajar mengenai variable scope yang dimiliki oleh Javascript
/// dan kamu diminta untuk merangkum tentang:
/// - ada berapa banyak jumlah variable scope pada Javascript?
Terdapat 2 Variabel pada scope javascript yaitu Global dan Lokal

/// - jelaskan secara singkat setiap variable scope yang dimiliki oleh Javascript
Global adalah ketika sebuah variabel bisa diakses dari mana saja, baik di dalam maupun di luar dari suatu fungsi atau blok (grup) kode, sedangkan Lokal adalah ketika sebuah variabel hanya bisa diakses di dalam sebuah fungsi atau blok kode. Semua variabel yang dideklarasikan di dalam sebuah fungsi/blok hanya bisa di dalam fungsi/blok tersebut saja.

/// - buatlah implementasi sederhana dari tiap-tiap variable scope yang dimiliki oleh Javascript
Global
const olahraga = 'bulutangkis';

function namaAtlet() {
  let atlet = 'minions';
  const noMinions = 07;
  console.log(olahraga); // Output: bulutangkis
  if (olahraga === 'basketball') {
     atlet = 'Jojo';
     const noKobe = 22;
     console.log(olahraga); // Output: bulutangkis
  }
  return atlet;
}

console.log(namaAtlet()); // Output: Jojo
console.log(olahraga); // Output: bulutangkis

Lokal
const olahraga = 'bulutangkis';

function namaAtlet() {
  let atlet = 'minions'; // lingkup fungsi
  const noMinions = 07; // lingkup fungsi
  if (olahraga === 'bulutangkis') { 
     atlet = 'Jojo';
     const noKobe = 22; // lingkup blok
     console.log(noMinions); // Output: 22  
  }
  console.log(noJojo); // Output: Uncaught ReferenceError: noKobe is not defined
  return atlet;
}

namaAtlet();

/// WRITE YOUR ANALYSIS HERE

/// Soal - 02
/// Kamu diminta untuk melakukan analisa terhadap baris kode dibawah ini
/// - apa yang akan tampil didalam comsole.log ?
Mariah
/// - apa alasan yang menyebabkan hasil dari console itu bukan nilai dari variable name?
karena terdapat name.split(" ")[0]; sehingga hasil yang muncul bukan dari variabel name

/// WRITE YOUR ANALYSIS HERE
///
const name = "John Watson";

function printFirstName(name) {
  return name.split(" ")[0];
}

console.log(printFirstName("Mariah Carey"));

---
