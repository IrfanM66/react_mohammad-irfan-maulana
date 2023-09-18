### Section `Introduction React` 

---
1. `React` : Reactjs adalah sebuah library javascript yang ditujukan untuk membuat UI. Library ini diciptakan oleh facebook. Salah satu permasalahan yang diselesaikan oleh library ini adalah separation of concern, dimana sebuah komponen dapat ditujukan untuk sebuah fungsi tertentu. Tiga keunggulan yang ditawarkan oleh Reactjs adalah declarative, component based, dan learn once, write everywhere

1. `VDOM (Virtual DOM)` : sebuah representasi dari UI berbentuk javascript object yang disimpan pada memory. VDOM tersebut digunakan untuk menanggulangi permasalahan yang ada pada DOM manipulation biasa. Beberapa masalah yang dihadapi oleh DOM Manipulation biasa antara lain:
- Dapat membuat kode kita berantakan
- Sulit untuk mengingat state yang ada pada kode kita
- Performanya lambat jika dibandingkan dengan javascript vanilla

`Set up Development Environment` : Kita dapat membuat Development Environment untuk React dengan dua cara. Namun sebelum itu kita harus menginstall Node js terlebih dahulu.
---

Cara pertama kita dapat menggunakan react adalah dengan cara create-react-app kita dapat melakukannya dengan memasukkan command berikut pada cli npx create-react-app [nama_project]. Cara kedua adalah dengan menggunakan Vite. Kita dapat melakukannya dengan memasukkan command npm create vite Setelah itu beri nama project name nya, pilih react, dan pilih javascript.