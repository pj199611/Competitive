
var numIslands = function(grid) {
    
    let cols=grid.length;
    let rows=grid[0].length;
    
    let counter=0;
    for(let i=0;i<cols;i++){
        for(let x=0;x<rows;x++){
            if(grid[i][x]==="1"){
                counter=counter+check(grid,i,x);
            }
        }
    }
    return counter;
    
};

function check(grid,i,j){
    if(i>=grid.length ||i< 0||j < 0 ||j>=grid[0].length){return;}
    if(grid[i][j]==='0'){return}
    if(grid[i][j]==='1'){
        grid[i][j]='0';
        check(grid,i-1,j);
        check(grid,i+1,j)
        check(grid,i,j+1)
        check(grid,i,j-1)
         }
    return 1
}