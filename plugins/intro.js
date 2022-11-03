
import fetch from 'node-fetch'
let handler = async(m, { conn, text, usedPrefix, command }) => {
let pp = await conn.profilePictureUrl(m.chat).catch(_ => null)

let krtu = `☰⃟⟣⟔ Yᴏᴜʀ Cᴀʀᴅ Iɴᴛʀᴏ ⟓⟢⃟
┇⃟⟣⟜ *Nama lengkap:
Nama panggilan:
Hobi:
Umur:
Gender:
Kelas:
Tinggi badan:
Beratbadan :
Agama:
Golongan darah:
Status:
Nama pacar:
Jumlah mantan:
Nama mantan:
Nama bapak :
Nama ibu : 
Nama kakak:
Kakak online:
Kakak kandung :
Jumlah kakak:
Nama adek:
Adek online:
Adek kandung :
Jumlah adek:
Nama kakek:
Kakek dari ayah :
Kakek dari ibu :
Nama nenek:
Nenek dari ayah :
Nenek dari ibu :
Nama bibi:
Bibi dari ayah :
Bibi dari ibu :
Nama paman:
Paman dari ayah :
Paman dari ibu :
KTP:
SIM:
STNK:
BPKB:
KK:
Alamat rumah:
RT:
RW:
KELURAHAN:
KECAMATAN:
KABUPATEN:
KOTA:
PROVINSI:
PLANET:
GALAXY:
UNIVERSE:
LANGIT:
DARATAN:
LAUTAN:
KEPULAUAN:
SAMUDRA:
UKURAN SEPATU:
UKURAN BAJU:
UKURAN CELANA:
LEBAR PINGGANG:
PANJANG TANGAN:
PANJANG KAKI:
MAKANAN FAVORIT:
MINUMAN FAVORIT:
FILM FAVORIT:
SINETRON FAVORIT:
GAME FAVORIT:
ANIME FAVORIT:
MANGA FAVORIT:
MANHUA FAVORIT:
MANHWA FAVORIT:
CHANNEL YOUTUBE:
INSTAGRAM:
TWITTEER:
FACEBOOK:
MUSIC FAVORIT:
SIFAT:
SIKAP:
ZODIAK:
TANGGAL LAHIR:
MERK HP:
MERK MOTOR:
MERK MOBIL:
TINGKAT RUMAH:
ALAMAT SEKOLAH:
Ukuran daleman:
Ukuran atasan :
Diameter kepala :
Statistik tubuh:
Diameter perut :
Diameter lengan :
Diameter paha :
Diameter lutut :
Diameter betis:
Panjang tangan :
Panjang kaki :
Panjang kepala :
Lebar hidung :
Cita cita :
Hobi :
Jenis hewanpeliharaan :
Nama hewan:
Diameter rumah:
Waifu:
Husbu:
Loli kesukaan :
Shota kesukaan :
Punya brp teman :
Teman online :
Teman offline :
Teman main game:
Teman sekolah:
Temen rumah:
Nama musuh saat ini:
Asal sekolah:
BPJS:
Panjang penis:
Lebar kontol:
Perawan:
Warna meme•:
Ukuran tt:
Lebar tt:
jumlah motor:
Jumlah mobil:
warna baju yang sering di pakai:
nama cwe/cwo incaran:

SEMOGA BETAH!! 

*
┖┈┈┈╼╸╸╸╴╴╴ ╳
`
let wibu = `https://api-reysekha.herokuapp.com/api/random/cosplay?apikey=apirey` 
let thumb = await(await fetch(wibu)).buffer()
conn.sendButtonDoc(m.chat, krtu, wm,'MENU','.menu', m, { contextInfo: { externalAdReply: { showAdAttribution: true,
    mediaUrl: "https://facebook.com/sadtime098",
    mediaType: "VIDEO",
    description: "https://www.instagram.com/p/CevoCg5hG-p/?utm_source=ig_web_copy_link", 
    title: 'Iɴᴛʀᴏᴄᴀᴅᴜᴛɪᴏɴ',
    body: wm,
    thumbnail: thumb,
    sourceUrl: sgc
  }
  } }) // Tambah sendiri kalo mau
}
handler.command = /^(intro)$/i

export default handler

