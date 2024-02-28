$(document).ready(function() {
    $('td.priority').each(function() {
        var text = $(this).text().trim().split(" ")[0].toLowerCase();
        $(this).addClass(text);
        
     

        // Add icons based on the generated classes
        switch(text) {
            case 'high':
                $(this).prepend('<i class="fas fa-exclamation-circle"></i>'); // Font Awesome icon for high priority
                
                break;
            case 'medium':
                $(this).prepend('<i class="fas fa-info-circle"></i>'); // Font Awesome icon for medium priority
                
                break;
            case 'low':
                $(this).prepend('<i class="fas fa-check-circle"></i>'); // Font Awesome icon for low priority
                
                break;
            default:
                break;
        }
    });
    $(".hascontextmenu").each(function(){
        var text=$(this).find("td:eq(5)").text().split(" ")[0].toLowerCase()
        console.log(text)
        if(text=='high'){
          $(this).find('.id').addClass('id_high')
        }
        else if(text=='low'){
          $(this).find('.id').addClass('id_low')
        }else if(text=='medium'){
          $(this).find('.id').addClass('id_medium')
        }
      })
});
