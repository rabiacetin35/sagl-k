Tesseract.recognize(
    file,
    'eng',
    {
        logger: info => console.log(info)
    }
).then(({ data: { text } }) => {
    console.log("Çıkarılan metin:", text); // Çıkarılan metni kontrol edin
    const result = highlightHarmfulIngredients(text);
    document.getElementById('output').innerHTML = result;
}).catch(err => {
    console.error("Hata:", err); // Hatayı detaylı görün
    alert('Fotoğraf işlenirken bir hata oluştu.');
});
