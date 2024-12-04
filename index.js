function saturdayFun(activity= 'roller-skate') {
    return `This Saturday, I want to ${activity}!`;
}

saturdayFun('bathe my dog')

const mondayWork = function(activity= 'go to the office') {
    return `This Monday, I will ${activity}.`;
}

mondayWork('work from home')

function wrapAdjective (start = "*") {
    return function(remark = "a hard worker") {
        return `You are ${start}${remark}${start}!`;
    }

}

