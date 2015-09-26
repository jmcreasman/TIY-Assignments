// Adds and removes the needed classes to make the Grid view display
$('#grid').click(function() {
  $('#cbp-vm').addClass('cbp-vm-view-grid')
  $('#cbp-vm').removeClass('cbp-vm-view-list')
  $("#grid").addClass("cbp-vm-selected")
  $("#list").removeClass("cbp-vm-selected")
});
// Adds and removes the needed classes to make the List view display
$('#list').click(function() {
  $('#cbp-vm').addClass('cbp-vm-view-list')
  $('#cbp-vm').removeClass('cbp-vm-view-grid')
  $("#list").addClass("cbp-vm-selected")
  $("#grid").removeClass("cbp-vm-selected")
});
