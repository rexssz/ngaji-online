const nav = document.querySelector('nav')
const div = document.createElement('div')
const a = document.createElement('a')
const span = document.createElement('span')

div.setAttribute('class', 'container-fluid')
span.setAttribute('class', 'navbar-brand fs-5 h1')
a.setAttribute('class', 'text-decoration-none')
a.setAttribute('href', 'index.html')
span.textContent = 'SOROGAN KUY'
span.style.fontFamily = 'Inter'
span.style.color = '#fff'
a.append(span)
div.append(a)
nav.append(div)



