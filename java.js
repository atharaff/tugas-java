function validasi2()
{
    var cek = document.forms["amb"]["nama"].value;
    if (!/^[a-zA-Z]+$/.test(cek))
    {
        alert("Data ini harus diisi dengan huruf...!!!");
        document.getElementById("nama").focus();
        document.amb.nama.value="";
        return false;
    }
}
function validasi1() 
{

    var konfirmasi = confirm('Apakah akan dilanjutkan untuk mengirim pesan?');

    if (konfirmasi == true) {
        var nama = document.forms["amb"]["nama"].value;
        var buku = document.forms["amb"]["buku"].value;
        var Pekerjaan = document.forms["amb"]["Pekerjaan"].value;
        var jenis_kelamin = document.forms["amb"]["jenis_kelamin"].value;
        console.log(nama);
        console.log(buku);
        console.log(Pekerjaan);
        console.log(jenis_kelamin);

        if (nama == '') {
            alert('Isi nama anda...!!');
        }
        if (buku == '') {
            alert('Pilih ekstra ...!!');
        }
        if (Pekerjaan == '') {
            alert('Pilih kelas...!!');
        }
        if (jenis_kelamin == '') {
            alert('Isi jenis kelaminmu...!!');
        }
    } else {
        alert('kirim pesan dibatalkan...!!');
    }
}