const body = document.body;
const wadahSurah = document.getElementById('list-surah');

const list = document.createElement('ul');
wadahSurah.append(list);

fetch('https://equran.id/api/v2/surat')
    .then(res => res.json())
    .then(data => {
            const isiData = data.data;
            for (let i in isiData) {
                const li = document.createElement('li');
                const linkSurah = document.createElement('a');
                linkSurah.setAttribute('href', `surah.html?surah=${isiData[i].nomor}`);
                li.setAttribute('class', 'list-surah');
                linkSurah.setAttribute('class', 'nama-surah');
                linkSurah.innerText = isiData[i].nama;
                li.append(linkSurah);
                list.append(li);

            }
        }
    )
    .catch(err => console.error(err));
    