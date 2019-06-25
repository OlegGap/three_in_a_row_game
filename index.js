const mainMap = [
    [{type: "spades", checked: false}, {type: "spades", checked: false},
        {type: "diamond", checked: false}, {type: "diamond", checked: false},
        {type: "diamond", checked: false}, {
        type: "diamond", checked: false
    }],
    [{type: "spades", checked: false}, {type: "spades", checked: false},
        {type: "diamond", checked: false}, {type: "diamond", checked: false},
        {type: "diamond", checked: false}, {
        type: "diamond", checked: false
    }],
    [{type: "diamond", checked: false}, {type: "diamond", checked: false},
        {type: "diamond", checked: false}, {type: "diamond", checked: false},
        {type: "diamond", checked: false}, {
        type: "diamond", checked: false
    }],
    [{type: "spades", checked: false}, {type: "spades", checked: false},
        {type: "diamond", checked: false}, {type: "clubs", checked: false},
        {type: "diamond", checked: false}, {
        type: "diamond", checked: false
    }],
    [{type: "spades", checked: false}, {type: "spades", checked: false},
        {type: "diamond", checked: false}, {type: "diamond", checked: false},
        {type: "diamond", checked: false}, {
        type: "spades", checked: false
    }],
    [{type: "spades", checked: false}, {type: "spades", checked: false},
        {type: "diamond", checked: false}, {type: "diamond", checked: false},
        {type: "hearts", checked: false}, {
        type: "diamond", checked: false
    }],
    [{type: "spades", checked: false}, {type: "spades", checked: false},
        {type: "diamond", checked: false}, {type: "diamond", checked: false},
        {type: "diamond", checked: false}, {
        type: "diamond", checked: false
    }]];


// console.log(mainMap);

// function filter() {
//
// }
//
// const cord = {};
// mainMap.find((row, indexY) => {
//     if (row.find((element, indexX) => {
//         if (element.checked === true) {
//             cord.X = indexX;
//             return true;
//         }
//     })) {cord.Y = indexY; return true;}
// });

// console.log(mainMap[1][1]);

checkAround(5, 1);

function checkAround(x, y) {
    if (mainMap[x][y] === undefined) {
        return true;
    }
    let currentElement = mainMap[x][y];
    currentElement.checked = true;

    const coordinates = [
        {
            x: x - 1,
            y: y,
        },
        {
            x: x - 1,
            y: y - 1,
        },
        {
            x: x,
            y: y - 1,
        },
        {
            x: x + 1,
            y: y - 1,
        },
        {
            x: x + 1,
            y: y,
        },
        {
            x: x + 1,
            y: y + 1,
        },
        {
            x: x,
            y: y + 1,
        },
        {
            x: x - 1,
            y: y + 1,
        },
    ];

    coordinates.forEach(element=>{
        if (mainMap[element.x] !== undefined &&
            mainMap[element.x][element.y] !== undefined &&
            !mainMap[element.x][element.y].checked &&
            mainMap[element.x][element.y].type === currentElement.type) {
            checkAround(element.x, element.y);
        }
    });
}

console.log(mainMap);