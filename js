{

    alert("Selamat Datang di Perpustakaan Digital ! ")
}


function valideform() {
    id = document.getElementById("idagt");
    nama = document.getElementById("txtnama");
    tgllahir = document.getElementById("tgllahir")
    alamat = document.getElementById("alamat");
    jenis_kelamin = document.getElementById("jk");
     if (id.value == "") {
        alert("Mohon isi ID Anggota Anda");
        id.focus();
        return false;
    } else if (nama.value == "") {
        alert("nama tidak boleh kosong");
        nama.focus();
        return false;
    } else if (alamat.value == "") {
        alert("mohon isi alamat anda");
        alamat.focus();
        return false;
    } else if (jenis_kelamin.value == "") {
        alert("jenis kelamin belum dpilih");
        jenis_kelamin.focus();
        return false;
    } else {
        alert("Terima Kasih telah mengisi Data Anggota")
        return true;
    }
}