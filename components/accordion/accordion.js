Object.prototype.accordion = function(obj){
  var SUPER = this;
  this.many = obj.many;
  this.hover = obj.onHover;

  console.log($(this));

  this.changeClass = function(e){
    if(this.many){
      if(!$(e.target).hasClass("active")){
        $(e.target).addClass("active");
      }
    }
  }

  if(this.hover){
    $(SUPER).hover(function(e){ SUPER.changeClass(e) });
  } else {
    $(SUPER).click(function(e){ SUPER.changeClass(e) })
  }
};
