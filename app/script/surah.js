const wadahAyat = document.getElementById('ayat-surah');

const ul = document.createElement('ul');
wadahAyat.append(ul);

const params = new URLSearchParams(window.location.search);
const nomorSurah = params.get('surah');


fetch(`https://equran.id/api/v2/surat/${nomorSurah}`)
    .then(res => res.json())
    .then(data => {
        const ayat = data.data.ayat;
        for (const i in ayat) {
            const li = document.createElement('li');
            const p = document.createElement('p');
            p.setAttribute('class', 'text');
            p.innerHTML = `${ayat[i].teksArab}`;
            wadahAyat.style.paddingRight = '20px'
            
            li.append(p)
            ul.append(li);
        }
        const namaSurah = data.data.namaLatin;
        document.title = `NGAJI ONLINE | ${namaSurah}`;
    })
    .catch(err => console.error(err));
    