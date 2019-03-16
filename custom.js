window.onload = function (){ let  arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
function compareRandom(a, b) {
    return Math.random() - 0.5;
}
initGame(arr.sort(compareRandom));
    function  initGame(data){
        data.push('');
        let count=1, game='';
    for (let i=0;i<4;i++){
        game+= '<div class="row justify-content-center">'
            for(let j=0;j<4;j++){
               game+= '<div class="col-1 cell" data-cell=" ' +count+ ' " onclick="moveCell();"><div class="cell__content" data_id="' + data[count-1] + '">' + data[count-1] + '</div></div>'
                count++;
            }
        game+='</div>'
        }
        document.getElementById("game").innerHTML= game;
        $('[data-cell]')[15].setAttribute('data-empty','true');
}};
function moveCell(){
    let count=0;
    let currentCell = event.target.closest(".cell");
    let prevEmpty= $('[data-empty]');
    let CurPosition = Number(currentCell.attributes['data-cell'].value);
    let EmptyPosition= Number(prevEmpty.attr('data-cell'));
    if (EmptyPosition == CurPosition+1 || EmptyPosition == CurPosition-1 || EmptyPosition == CurPosition-4 || EmptyPosition == CurPosition+4 ) {
        prevEmpty.html(currentCell.firstChild);
        prevEmpty.removeAttr('data-empty');
        currentCell.setAttribute('data-empty', 'true');
    }
    if (CurPosition == 16){
        for (let i=0;i<$('[data-cell]').length-1; i++){
            if (Number($('[data-cell]')[i].attributes['data-cell'].value) == Number($('[data_id]')[i].attributes['data_id'].value)){
                count++;
            }
        }
    }
    if (count==15){
        $(".popup").toggle();
    }
}
