const wadahAyat = document.getElementById('ayat-surah');
const navContent = document.querySelector('.container-navbar-surah')

const ul = document.createElement('ul');
const basmallah = document.createElement('h2')
wadahAyat.append(ul);

const params = new URLSearchParams(window.location.search);
let nomorSurah = params.get('surah');

function toArabicNum(num) {
    const map = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
    return num.toString().replace(/\d/g, d => map[d])
}

fetch(`https://equran.id/api/v2/surat/${nomorSurah}`)
    .then(res => res.json())
    .then(data => {
        const ayat = data.data.ayat;
        const namaSurah = data.data.namaLatin;

        document.title = `SOROGAN KUY | ${namaSurah}`;

        const judulSurah = document.querySelector('.judul-surah')
        judulSurah.innerHTML = `${namaSurah}`

        for (const i in ayat) {
            const li = document.createElement('li');
            const p = document.createElement('p');
            p.setAttribute('class', 'text');
            p.innerHTML = `${ayat[i].teksArab} ۝${toArabicNum(ayat[i].nomorAyat)}`;
            wadahAyat.style.paddingRight = '20px'

            li.append(p)
            ul.append(li);
        }
    })
    .catch(err => console.error(err));

