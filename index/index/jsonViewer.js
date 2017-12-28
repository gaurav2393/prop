var input = [
    {
        key: 'Fruits',
        children: [
            {
                key: 'Orange',
                children: [
                    {
                        key: 'Variety',
                        children: [
                            {
                                key: 'Nagpur'
                            },
                            {
                                key: 'Exported'
                            }
                        ]
                    },
                    {
                        key: 'Size',
                        children: [
                            {
                                key: 'Large'
                            },
                            {
                                key: 'Medium'
                            },
                            {
                                key: 'Small'
                            }
                        ]
                    }
                ]
            },
            {
                key: 'Apple'
            }
        ]
    },
    {
        key: 'Vegis',
        children: [
            {
                key: 'Potato'
            },
            {
                key: 'Cabbage'
            },
            {
                key: 'Beans'
            }
        ]
    }
];

var initialParent = document.getElementById('container');

function createNode(key) {
    var newDiv = document.createElement('div');
    var newKey = document.createTextNode(key);
    newDiv.appendChild(newKey);
    newDiv.addEventListener('click', clickHandler);
    return newDiv;
}

function iterateNodes(nodeSet, attachTo, cssClass) {
    for(var index=0; index < nodeSet.length; index++) {
        var parentNode = createNode(nodeSet[index].key);
        parentNode.classList.add(cssClass);
        if (typeof nodeSet[index].children !== 'undefined' && nodeSet[index].children.length !== 0) {
            parentNode.classList.add('expand');
            iterateNodes(nodeSet[index].children, parentNode, 'hide');
        }
        attachTo.appendChild(parentNode);
    }
}

function operateChildren(element, operation) {
    var childNodes = element.childNodes;
    for(var index=1; index < childNodes.length; index++) {
        if (operation === 'remove') {
            childNodes[index].classList.remove('hide');
            childNodes[index].style.paddingLeft = element.style.left + 25 + 'px' ;
        } else {
            childNodes[index].classList.add('hide');
            childNodes[index].style.paddingLeft = '0';
        }
    }
}

function clickHandler(ev) {
    ev.stopPropagation();
    if (ev.target.classList.contains('expand')) {
        operateChildren(ev.target, 'remove');
        ev.target.classList.replace('expand', 'expanded');
    } else if (ev.target.classList.contains('expanded')) {
        operateChildren(ev.target, 'add');
        ev.target.classList.replace('expanded', 'expand');
    }
}

iterateNodes(input, initialParent, 'show');
