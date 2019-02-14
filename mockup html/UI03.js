$('#month_prev').click(function() {
  var month_val = $('#month_select').val();
  if (month_val != undefined){
  		var month_prev = parseInt(month_val) - 1;
  		if (month_prev === 0){
  			$('#month_select').val(12);
  			var year_val = $('#year_select').val();
  			if (year_val != undefined){
  				var year_prev = parseInt(year_val) - 1;
  				$('#year_select').val(year_prev);
  			}
  		}else{
  			if(month_prev < 10){
  				month_prev = '0' + month_prev;
  			}
  			$('#month_select').val(month_prev);
  		}
  }
});

$('#month_next').click(function() {
  var month_val = $('#month_select').val();
  if (month_val != undefined){
  		var month_prev = parseInt(month_val) + 1;
  		if (month_prev === 13){
  			$('#month_select').val('01');
  			var year_val = $('#year_select').val();
  			if (year_val != undefined){
  				var year_prev = parseInt(year_val) + 1;
  				$('#year_select').val(year_prev);
  			}
  		}else{
  			if(month_prev < 10){
  				month_prev = '0' + month_prev;
  			}
  			$('#month_select').val(month_prev);
  		}
  }
});

$('#btn_lock').click(function() {
	if ($(this).children('i').hasClass('fa-lock')){
		$(this).children('i').removeClass('fa-lock');
		$(this).children('i').addClass('fa-unlock');
		$('#cost_input').prop('disabled', true);
		$('#transfer_input').prop('disabled', true);
		$('#detail_table').find("tbody tr, thead tr").children(":nth-child(8)").addClass('hide-col');
		$('#detail_table').find("tbody tr, thead tr").children(":nth-child(9)").addClass('hide-col');
		$('#detail_table').find("tbody tr, thead tr").children(":nth-child(10)").removeClass('hide-col');
	}else{
		$(this).children('i').removeClass('fa-unlock');
		$(this).children('i').addClass('fa-lock');
		$('#cost_input').prop('disabled', false);
		$('#transfer_input').prop('disabled', false);
		$('#detail_table').find("th, td").removeClass('hide-col');
		$('#detail_table').find("tbody tr, thead tr").children(":nth-child(10)").addClass('hide-col');
	}
});

$('#cost_input').click(function() {