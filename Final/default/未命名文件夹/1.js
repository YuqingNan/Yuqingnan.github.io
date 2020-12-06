$(document).ready(function(){

  $("button#get_data").click(function() {
      var dataSet = [];
      var items = [];
      var i = 0;
      $('.table-responsive').show();
      var airtable_read_endpoint = "https://api.airtable.com/v0/appKIU0zkdHt3AVTL/Product?api_key=keycj6dRwXwYLEjiv";
      $.getJSON(airtable_read_endpoint, function(result) {
             $.each(result.records, function(key,value) {
                items = [];
                items.push(value.fields['company']);
                items.push(value.fields['product_code']);
                items.push(value.fields['product_no']);
                items.push(value.fields['geocode2']);
                items.push(value.fields['json']);
                items.push(value.fields['gender']);
                items.push(value.fields['name']);
                dataSet.push(items);
                console.log(items);
              }); // end .each
              console.log(dataSet);

           $('#table1').DataTable( {
               data: dataSet,
               retrieve: true,
               columns: [
                   { title: "Company",
                     defaultContent:""},
                   { title: "Product",
                       defaultContent:"" },
                   { title: "Number",
                     defaultContent:"" },
                   { title: "Geo Code",
                     defaultContent:""},
                   { title: "JSON",
                       defaultContent:""},
                   { title: "Gender",
                     defaultContent:""},
                   { title: "Name",
                     defaultContent:""},
               ]
           } );

      }); // end .getJSON
   }); // end button


 $("button#clear_tables").click(function() {
          // $('.table-responsive').toggle();
          if ( $.fn.dataTable.isDataTable('#table1') ) {
              $('#table1').DataTable().destroy();
              $('#table1').empty();
          }
          if ( $.fn.dataTable.isDataTable('#table2') ) {
              $('#table2').DataTable().destroy();
              $('#table2').empty();
          }
          $('#chart').empty();
          $('#chart1').empty();
          $('#chart2').empty();
          $('#map').hide();
          map.remove();
 }); // end clear tables

}); // document ready