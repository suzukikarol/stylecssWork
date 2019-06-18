{/* <script>
    function mudarNome()
{
 if(document.getElementById("button").value == "Ativo")
 {
        document.getElementById("button").value = "Inativo";
    }
    else
 {
        document.getElementById("button").value = "Ativo";
    }
   } */}
// </script>
// <body>
// <input type="button" id="button" onclick="mudarNome();" value="Ativo" />
// </body>

feather.replace();

$('input:empty, textarea:empty').closest('label').addClass('empty');

$('input').keyup(function () {
    if ($(this).val().trim() !== '') {
        $(this).closest('label').removeClass('empty');
    } else {
        $(this).closest('label').addClass('empty');
    }
});