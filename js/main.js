$(function(){
	$('#sort-table').tablesorter({
		sortList:[[0,0],[1,0]]
	});
	
	
});

$(document).ready(function() {

	var $rows = $('tbody tr');
	$('.search-form').keyup(function(){
		var val = $.trim($(this).val()).replace(/ +/g, ' ').toLowerCase();
		$rows.show().filter(function(){
			var text = $(this).text().replace(/\s+/g, ' ').toLowerCase();
			return !~text.indexOf(val);
		}).hide();
	})

});