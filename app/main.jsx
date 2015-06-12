/*global require*/
require(['../vendor/react/react.min',
    './maze',
    '../vendor/lodash.min',
    './grid-component'], function(React, Maze, _, Grid) {
        
        var maze = new Maze(window);

        React.render(<Grid/>, document.getElementById('react-mount-point'))

        var g = new Grid();
        window.g = g;

        window.debug = {
            tieFighter: function tieFighter() {//21x21
                var shape = [
                    [0,11],
                    [1,10],
                    [1,9],
                    [1,8],
                    [1,7],
                    [1,6],
                    [1,5],
                    [2,4],
                    [3,3],
                    [4,2],
                    [5,1],
                    [6,1],
                    [7,1],
                    [8,1],
                    [9,1],
                    [10,1],

                    [20,9],
                    [19,10],
                    [19,11],
                    [19,12],
                    [19,13],
                    [19,14],
                    [19,15],
                    [18,16],
                    [17,17],
                    [16,18],
                    [15,19],
                    [14,19],
                    [13,19],
                    [12,19],
                    [11,19],
                    [10,19],

                    [8,9],
                    [8,10],
                    [8,11],
                    [12,9],
                    [12,10],
                    [12,11],
                    [9,8],
                    [10,8],
                    [11,8],
                    [10,12],
                    [11,12],
                    [9,12],

                    [8,8],
                    [7,7],
                    [6,6],
                    [5,5],
                    [12,12],
                    [13,13],
                    [14,14],
                    [15,15]

                ];
                _.map(shape, function (val, i) {
                    this.grid.grid[val[0]][val[1]].setWall();
                }.bind(maze));
            }

        };

        window.debug.tieFighter();

        maze.findAllPaths();

    });
