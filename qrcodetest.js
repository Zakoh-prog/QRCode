$('#download').click(function() {
    var options = {
      allowTaint: true,
      logging: true
    };
    var pdf = new jsPDF('p', 'pt', 'a4');
    var base64 = getBase64Image($("#qrcode").get(0));
    $("#qrcode").attr('src', base64);
    pdf.addHTML($("#qrcode"), 25, 25, options, function() {
      pdf.save('pageContent.pdf');
    });
});

function getBase64Image(img) {
    img.setAttribute('crossOrigin', 'anonymous');
    var canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;
    var ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);
    var dataURL = canvas.toDataURL("image/png");
    return dataURL;
}