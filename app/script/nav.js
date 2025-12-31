const nav = document.querySelector('nav')
const div = document.createElement('div')
const span = document.createElement('span')

div.setAttribute('class', 'container-fluid')
span.setAttribute('class', 'navbar-brand pt-xxl-3 fs-5 h1')
span.textContent = 'SOROGAN KUY'
span.style.fontFamily = 'Inter'
span.style.color = '#fff'
div.append(span)
nav.append(div)



