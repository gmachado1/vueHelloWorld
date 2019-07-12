$(document).ready(function() {
    /** 
     * Add evento de click
     */
    function onAdd() {
          var $ul, li, $li, $label, $div, book, author; 
          book = $('.js-new-book').val(); 
          author = $('.js-new-author').val(); 
          
          // valida se “livro” está vazio
          if (book === '') { 
                 return; 
          }
          
          $ul = $('ul'); 
          $li = $('<li>').appendTo($ul); 
          $div = $('<div>') 
                 .addClass('checkbox') 
                 .appendTo($li);
                 
          $label = $('<label>').appendTo($div); 
          $('<input>') 
                 .attr('type', 'checkbox') 
                 .addClass('js-book') 
                 .attr('name', 'list') 
                 .click(toggleRemoved) 
                 .appendTo($label);
        
        $('<big>')
            .appendTo($label)
            .append(book);

          $label.append(" - "); 
        
          $('<small>')
               .appendTo($label)
                .append(author);

        $('.js-new-book, .js-new-author').val('');
    }
    
    /** 
     * Evento de click do checkbox
     */
    function toggleRemoved(ev) {
          var $el; 
          $el = $(ev.currentTarget); 
          $el.closest('li').toggleClass('removed'); 
    }
    $('.js-add').click(onAdd); 
    $('.js-livro').click(toggleRemoved); 
});