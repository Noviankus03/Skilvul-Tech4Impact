/// Soal - 01
/// Kamu diminta untuk menjelaskan apa perbedaan antara
/// - Type Error
Terjadi ketika nilai memiliki jenis yang berbeda dari yang diharapkan

/// - Reference Error
Menunjukkan bahwa nilai referensi yang tidak valid telah terdeteksi: program JavaScript sedang mencoba membaca variabel yang tidak ada

/// - Range Error
Terjadi ketika nilai numerik tidak berada dalam kisaran nilai yang diizinkan

/// - Syntax Error
Terjadi ketika kesalahan sintaks ditemukan dalam suatu program

/// WRITE YOUR ANALYSIS HERE


/// Soal - 02
/// Kamu diminta untuk melakukan analisa terhadap baris kode dibawah dengan instruksi detail sebagai berikut:
/// - apabila kita menjalankan baris kode dibawah apa yang akan terjadi?
Tidak dapat berjalan dan muncul ReferenceError: Cannot access 'salaryWithConst' before initialization at /script.js:2:13 undefined

/// - apabila terjadi error, termasuk dalam kategori manakah error tersebut?
Termasuk kedalam referenceerror

/// - apabila terjadi error, jelaskan mengapa hal tersebut bisa terjadi
Kesalahan ini terjadi karena variabel diisialisasi pada baris 1, tetapi menggunakannya pada baris 2 untuk mengatur nilai awal variabel keadaan.

/// WRITE YOUR ANALYSIS HERE
console.log(salaryWithVar)
console.log(salaryWithConst)

var salaryWithVar = 15000000;
const salaryWithConst = 15000000;
