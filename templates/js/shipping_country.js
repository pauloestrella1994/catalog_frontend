// ============ Load data Json File
function load_data_json(){
    $.ajax({
        url :'../data/shipping_country.json'
        ,dataType : 'json'
        ,type : 'get'
        ,success: (data)=>{
            load_data(data);
        }
    });
}
// ============ END Load data Json File
// ============ Load Json result in HTML
function load_data(data){
    data.forEach(e => {
        data += `<tr>
            <td>${e['id']}</td>
            <td>${e['name']}</td>"
            <td>${e['imported']}</td>"
            <td>
                <a class='btn-edit' href='shipping-country/form.html?id=${e['id']}'>Editar</a> |
                <a class='btn-delete' href='#'>Deletar</a>
            </td>
        </tr>`;
    });

        $('table tbody').html(data).promise().done(()=>{
            $('.btn-edit').click( (event)=>btnClick(event) );
        });
}
// ============ END Load Json result in HTML
// ============ Find id in Json File and Load html
function findById(id){
    $.ajax({
        url :'../data/shipping_country.json'
        ,dataType : 'json'
        ,type : 'get'
        ,success: (data)=>{
            data.forEach(e => {
                if(e['id']==id){
                    $("[name='id']").val(e['id']);
                    $("[name='name']").val(e['name']);
                    $("[name='imported']").val(e['imported']);
                }
            });
        }
    });
}
// ============ END Find id in Json File and Load html
$(document).ready(()=>load_data_json());