const scriptURL = 'https://script.google.com/macros/s/AKfycbxF8ky3o0-AHIawi9yau4HTXMshX840Omg_Z2tLc-40R-F1-bM0msoXrzbvXlwNt-VV/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
 e.preventDefault()
 fetch(scriptURL, { method: 'POST', body: new FormData(form)})
 .then(response => alert("Mahadsanid! Fariintaada Waxaa kuugu soo jawaabi doonaa sida uugu dhaqsigaha badan." ))
 .then(() => { window.location.reload(); })
 .catch(error => console.error('Error!', error.message))
})
