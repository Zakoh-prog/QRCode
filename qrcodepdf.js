var element = $("#aff"); // global variable
var getCanvas; // global variable
    
    //  
    jQuery(document).ready(function($){
        html2canvas(element, {
            onrendered: function (canvas) {
                   getCanvas = canvas;
                }
            });
    });

    $("#btn-Convert-Html2Image").on('click', function () {
        
        var imgageData = getCanvas.toDataURL("image/png");
        // Now browser starts downloading it instead of just showing it
        var newData = imgageData.replace(/^data:image\/png/, "data:application/octet-stream");
        $("#btn-Convert-Html2Image").attr("download", "qrcode.png").attr("href", newData);
    });